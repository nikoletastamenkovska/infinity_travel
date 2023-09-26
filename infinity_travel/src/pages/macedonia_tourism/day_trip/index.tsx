import { GetServerSideProps, NextPage } from "next";
import { HeroBanner } from "src/components/banner/HeroBanner";
import { CardM } from "src/components/cardmacedonia/CardM";
import { Newsletter } from "src/components/newsletter/Newsletter";
import { SectionTitle } from "src/components/sectiontitle/SectionTitle";
import { ArrangementType } from "src/types/data_interface";
import { fetchCountries, fetchMacedoniaTourism } from "src/utils/dataFetching";

interface MacedoniaDayTripProps {
  allCountries: ArrangementType[];
  MacedoniaTourism: ArrangementType[];
  filteredRegions: ArrangementType[];
}

const DayTrip: NextPage<MacedoniaDayTripProps> = ({
  allCountries,
  MacedoniaTourism,
  filteredRegions,
}) => {
  const dayTrips = MacedoniaTourism.filter(
    (product) => product.Type === "Излети"
  );

  return (
    <>
      <HeroBanner image={"/images/hero_banner/bg_day_trip.png"} />
      <SectionTitle title={"Излети"} />
      <>
        {dayTrips.length === 0 ? (
          <p className="d-flex align-items-center ms-auto me-auto">
            Во овој момент немаме слободни аранжмани за Вашето пребарување.
          </p>
        ) : (
          <div className="container">
            <div className="row d-flex flex-wrap">
              {dayTrips.map((arrangement) => {
                return (
                  <div
                    className="col-12 col-lg-4 d-flex align-items-stretch p-2"
                    key={arrangement.Id}
                  >
                    <CardM {...arrangement} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </>
      <Newsletter />
    </>
  );
};

export default DayTrip;

export const getServerSideProps: GetServerSideProps<
  MacedoniaDayTripProps
> = async (context) => {
  const { region } = context.query;

  const allCountries: ArrangementType[] = await fetchCountries();
  const MacedoniaTourism: ArrangementType[] = await fetchMacedoniaTourism();

  let apiUrl = `https://secretive-canary-variraptor.glitch.me/macedonia_arrangements`;
  if (region) {
    apiUrl += `?Location.Region=${region}`;
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
