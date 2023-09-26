import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { HeroBanner } from "src/components/banner/HeroBanner";
import { FiltersCountries } from "src/components/filterscountries/FiltersCountries";
import { Newsletter } from "src/components/newsletter/Newsletter";
import { SectionTitle } from "src/components/sectiontitle/SectionTitle";
import { ArrangementType } from "src/types/data_interface";
import { fetchCountries, fetchExotic } from "src/utils/dataFetching";
import styles from "./ExoticDest.module.css";

interface ExoticDestProps {
  allCountries: ArrangementType[];
  exoticDestinations: ArrangementType[];
  filteredRegionAndLastMinute: ArrangementType[];
}

const ExoticDestinations: NextPage<ExoticDestProps> = ({
  allCountries,
  exoticDestinations,
  filteredRegionAndLastMinute,
}) => {
  const router = useRouter();
  const { country } = router.query;
  return (
    <>
      <HeroBanner image={"/images/hero_banner/exotic_bg.png"} />
      <SectionTitle title={"Егзотични дестинации"} />
      <FiltersCountries
        allCountries={exoticDestinations}
        filteredRegionAndLastMinute={filteredRegionAndLastMinute}
      />
      {country && (
        <div className="text-center">
          <button
            type="button"
            className={`w-lg-25 ${styles.styled_button}`}
            onClick={() => {
              router.push({
                pathname: "/exotic_destinations/[country]",
                query: {
                  country: country,
                },
              });
            }}
          >
            See more <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      )}
      <Newsletter />
    </>
  );
};

export default ExoticDestinations;

export const getServerSideProps: GetServerSideProps<ExoticDestProps> = async (
  context
) => {
  const { country } = context.query;
  const { IsLastMinute } = context.query;

  const allCountries: ArrangementType[] = await fetchCountries();
  const exoticDestinations: ArrangementType[] = await fetchExotic();

  let apiUrl = `https://secretive-canary-variraptor.glitch.me/exotic_arrangement`;
  if (country) {
    apiUrl += `?Location.Country=${country}`;
  } else if (IsLastMinute === "true") {
    apiUrl += `?IsLastMinute=true`;
  } else {
    apiUrl;
  }

  const response = await fetch(apiUrl);
  const filteredRegionAndLastMinute: ArrangementType[] = await response.json();

  return {
    props: {
      allCountries,
      exoticDestinations,
      filteredRegionAndLastMinute,
    },
  };
};
