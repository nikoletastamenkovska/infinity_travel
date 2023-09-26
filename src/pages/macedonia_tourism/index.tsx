import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { HeroBanner } from "src/components/banner/HeroBanner";
import { CardM } from "src/components/cardmacedonia/CardM";
import { CurrentOffersMacedonia } from "src/components/currentoffermacedonia/CurrentOffersM";
import { Newsletter } from "src/components/newsletter/Newsletter";
import { SectionTitle } from "src/components/sectiontitle/SectionTitle";
import SliderCard from "src/components/slider/SliderCard";
import { ArrangementType } from "src/types/data_interface";
import { fetchCountries, fetchMacedoniaTourism } from "src/utils/dataFetching";
import styles from "./MacedoniaTourism.module.css";

interface MacedoniaTourismProps {
  allCountries: ArrangementType[];
  MacedoniaTourism: ArrangementType[];
  filteredRegions: ArrangementType[];
}

const MacedoniaTourism: NextPage<MacedoniaTourismProps> = ({
  allCountries,
  MacedoniaTourism,
  filteredRegions,
}) => {
  const router = useRouter();
  const exploreArr = filteredRegions.filter(
    (region) => region.Type === "Истражи"
  );
  const dayTrip = filteredRegions.filter((region) => region.Type === "Излети");

  return (
    <>
      <HeroBanner image={"/images/hero_banner/bg_macedonia.png"} />
      <SectionTitle title={"Истражи ја Македонија"} />
      <CurrentOffersMacedonia
        allCountries={MacedoniaTourism}
        allArrangements={MacedoniaTourism}
        filteredArrangements={exploreArr}
        seeMorePathname={"/macedonia_tourism/macedonia_arrangements"}
        regionPathname={"/macedonia_tourism"}
      />
      <SectionTitle title={"Излети"} />
      <div className="container-fluid py-3">
        <SliderCard>
          {dayTrip.length === 0 ? (
            <p className="d-flex align-items-center ms-auto me-auto">
              Во овој момент немаме слободни аранжмани за Вашето пребарување.
            </p>
          ) : (
            dayTrip.map((arrangement) => {
              return (
                <div
                  className="col-12 col-lg-4 d-flex align-items-stretch p-2"
                  key={arrangement.Id}
                >
                  <CardM {...arrangement} />
                </div>
              );
            })
          )}
        </SliderCard>
      </div>
      <div className="text-center">
        <button
          type="button"
          className={`w-lg-25 ${styles.styled_button}`}
          onClick={() => {
            router.push({
              pathname: "macedonia_tourism/day_trip",
            });
          }}
        >
          See more <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
      <Newsletter />
    </>
  );
};

export default MacedoniaTourism;

export const getServerSideProps: GetServerSideProps<
  MacedoniaTourismProps
> = async (context) => {
  const { region } = context.query;
  const { IsLastMinute } = context.query;

  const allCountries: ArrangementType[] = await fetchCountries();
  const MacedoniaTourism: ArrangementType[] = await fetchMacedoniaTourism();

  let apiUrl = `https://secretive-canary-variraptor.glitch.me/macedonia_arrangements`;
  if (region) {
    apiUrl += `?Location.Region=${region}`;
  } else if (IsLastMinute === "true") {
    apiUrl += `?IsLastMinute=true`;
  } else {
    apiUrl;
  }

  const response = await fetch(apiUrl);
  const filteredRegions: ArrangementType[] = await response.json();

  return {
    props: {
      allCountries,
      MacedoniaTourism,
      filteredRegions,
    },
  };
};
