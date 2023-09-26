import { GetServerSideProps, NextPage } from "next";
import { HeroBanner } from "src/components/banner/HeroBanner";
import { Card } from "src/components/card/Card";
import { Newsletter } from "src/components/newsletter/Newsletter";
import { SectionTitle } from "src/components/sectiontitle/SectionTitle";
import { ArrangementType } from "src/types/data_interface";
import { fetchCountries } from "src/utils/dataFetching";

interface AllDestinationsPageProps {
  allCountries: ArrangementType[];
}

const AllDestinations: NextPage<AllDestinationsPageProps> = ({
  allCountries,
}) => {
  const filteredApartments = allCountries.filter(
    (country) => country.Type === "Вила"
  );
  const filteredHotels = allCountries.filter(
    (country) => country.Type === "Хотел"
  );
  return (
    <div>
      <HeroBanner image={"/images/hero_banner/counties_bg.png"} />
      <SectionTitle title={"Апартмани"} />
      <div className="container">
        <div className="row d-flex ms-auto me-auto">
          {filteredApartments.map((country) => {
            return (
              <div className="col-4  ms-auto me-auto" key={country.Id}>
                <Card {...country} />
              </div>
            );
          })}
        </div>
      </div>
      <SectionTitle title={"Хотели"} />
      <div className="container-fluid">
        <div className="row d-flex">
          {filteredHotels.map((country) => {
            return (
              <div className="col-4" key={country.Id}>
                <Card {...country} />
              </div>
            );
          })}
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default AllDestinations;

export const getServerSideProps: GetServerSideProps<
  AllDestinationsPageProps
> = async () => {
  const allCountries: ArrangementType[] = await fetchCountries();

  return {
    props: {
      allCountries,
    },
  };
};
