import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { HeroBanner } from "src/components/banner/HeroBanner";
import { CardExotic } from "src/components/cardexotic/CardExotic";
import { Newsletter } from "src/components/newsletter/Newsletter";
import { SectionTitle } from "src/components/sectiontitle/SectionTitle";
import { ArrangementType } from "src/types/data_interface";
import { fetchCountries } from "src/utils/dataFetching";

interface ExoticCountryProps {
  allCountries: ArrangementType[];
  countryData: ArrangementType[];
}

const ExoticCountry: NextPage<ExoticCountryProps> = ({ countryData }) => {
  const router = useRouter();
  const { country } = router.query;
  return (
    <>
      <HeroBanner image={"/images/hero_banner/exotic_bg.png"} />
      <SectionTitle title={`${country}`} />
      <div className="container-fluid">
        <div className="row d-flex flex-wrap">
          {countryData.map((country) => {
            return (
              <div key={country.Id} className="col-lg-4">
                <CardExotic {...country} />
              </div>
            );
          })}
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default ExoticCountry;

export const getServerSideProps: GetServerSideProps<
  ExoticCountryProps
> = async (context) => {
  const { country } = context.query;

  const allCountries: ArrangementType[] = await fetchCountries();

  let apiUrl = `https://secretive-canary-variraptor.glitch.me/exotic_arrangement`;

  if (country) {
    apiUrl += `?Location.Country=${country}`;
  }
  const res = await fetch(apiUrl);
  const countryData: ArrangementType[] = await res.json();
  return {
    props: {
      allCountries,
      countryData,
    },
  };
};
