import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { HeroBanner } from "src/components/banner/HeroBanner";
import { Filters } from "src/components/filters/Filters";
import { Newsletter } from "src/components/newsletter/Newsletter";
import { SectionTitle } from "src/components/sectiontitle/SectionTitle";
import { SeeMoreButton } from "src/components/seemorebutton/SeeMoreButton";
import { ArrangementType } from "src/types/data_interface";
import { fetchCountries } from "src/utils/dataFetching";

interface DestinationPageProps {
  allCountries: ArrangementType[];
  filteredArrangements: ArrangementType[];
  filteredRegionAndLastMinute: ArrangementType[];
}

const DestinationPage: NextPage<DestinationPageProps> = ({
  filteredArrangements,
  filteredRegionAndLastMinute,
}) => {
  const router = useRouter();
  const countryName = router.query.country;
  const countryRegionName = router.query.region;
  const apartments = countryRegionName
    ? filteredRegionAndLastMinute.filter(
        (arrangement) => arrangement.Type === "Вила"
      )
    : filteredArrangements.filter((arrangement) => arrangement.Type === "Вила");
  const hotels = countryRegionName
    ? filteredRegionAndLastMinute.filter(
        (arrangement) => arrangement.Type === "Хотел"
      )
    : filteredArrangements.filter(
        (arrangement) => arrangement.Type === "Хотел"
      );

  return (
    <div>
      <HeroBanner image={"/images/hero_banner/counties_bg.png"} />
      <SectionTitle
        title={`${
          countryRegionName ? countryRegionName : countryName
        } Апартмани`}
      />
      <Filters
        filteredArrangements={filteredArrangements}
        buttonType={"Вила"}
        filteredRegionAndLastMinute={apartments}
      />
      <SeeMoreButton type={"Вила"} />
      <SectionTitle
        title={`${countryRegionName ? countryRegionName : countryName} Хотели`}
      />
      <Filters
        filteredArrangements={filteredArrangements}
        buttonType={"Хотел"}
        filteredRegionAndLastMinute={hotels}
      />
      <SeeMoreButton type={"Хотел"} />
      <Newsletter />
    </div>
  );
};

export default DestinationPage;

export const getServerSideProps: GetServerSideProps<
  DestinationPageProps
> = async (context) => {
  const { country } = context.query;
  const { region } = context.query;
  const { IsLastMinute } = context.query;

  const allCountries: ArrangementType[] = await fetchCountries();

  let resCountry: Response | undefined;
  if (country) {
    const apiUrl = `https://secretive-canary-variraptor.glitch.me/arrangements?Location.Country=${country}`;
    resCountry = await fetch(apiUrl);
  } else {
    resCountry = await fetch(
      "https://secretive-canary-variraptor.glitch.me/arrangements"
    );
  }
  const filteredArrangements: ArrangementType[] = await resCountry.json();

  let apiUrl = `https://secretive-canary-variraptor.glitch.me/arrangements`;

  if (region) {
    apiUrl += `?Location.Region=${region}`;
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
      filteredArrangements,
      filteredRegionAndLastMinute,
    },
  };
};
