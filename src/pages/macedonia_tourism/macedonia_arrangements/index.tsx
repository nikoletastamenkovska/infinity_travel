import { GetServerSideProps, NextPage } from "next";
import { HeroBanner } from "src/components/banner/HeroBanner";
import { CardM } from "src/components/cardmacedonia/CardM";
import { Newsletter } from "src/components/newsletter/Newsletter";
import { SectionTitle } from "src/components/sectiontitle/SectionTitle";
import { ArrangementType } from "src/types/data_interface";
import { fetchCountries, fetchMacedoniaTourism } from "src/utils/dataFetching";

interface MacedoniaRegionsProps {
  allCountries: ArrangementType[];
  MacedoniaTourism: ArrangementType[];
}

const ExploreRegions: NextPage<MacedoniaRegionsProps> = ({
  allCountries,
  MacedoniaTourism,
}) => {
  const exploreArr = MacedoniaTourism.filter(
    (region) => region.Type === "Истражи"
  );

  return (
    <>
      <HeroBanner image={"/images/hero_banner/bg_macedonia.png"} />
      <SectionTitle title={"Истражи ја Македонија"} />
      <>
        {exploreArr.length === 0 ? (
          <p className="d-flex align-items-center ms-auto me-auto">
            Во овој момент немаме слободни аранжмани за Вашето пребарување.
          </p>
        ) : (
          <div className="container">
            <div className="row d-flex flex-wrap">
              {exploreArr.map((arrangement) => {
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

export default ExploreRegions;
export const getServerSideProps: GetServerSideProps<
  MacedoniaRegionsProps
> = async (context) => {
  const { region } = context.query;

  const allCountries: ArrangementType[] = await fetchCountries();
  const MacedoniaTourism: ArrangementType[] = await fetchMacedoniaTourism();

  return {
    props: {
      allCountries,
      MacedoniaTourism,
    },
  };
};
