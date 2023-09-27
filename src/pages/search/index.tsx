import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { HeroBanner } from "src/components/banner/HeroBanner";
import { Card } from "src/components/card/Card";
import { Newsletter } from "src/components/newsletter/Newsletter";
import { SectionTitle } from "src/components/sectiontitle/SectionTitle";
import { ArrangementType } from "src/types/data_interface";
import { fetchCountries } from "src/utils/dataFetching";

interface SearchPageProps {
  allCountries?: ArrangementType[];
  data?: ArrangementType[];
  error?: string;
}

const SearchPage: NextPage<SearchPageProps> = ({ data, error }) => {
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <HeroBanner image={"/images/hero_banner/counties_bg.png"} />
      <SectionTitle title={`Пронајдени се ${data?.length} сместувања`} />
      <div className="container-fluid">
        <div className="row d-flex">
          {data?.map((country) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={country.Id}>
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

export default SearchPage;

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async ({
  query,
}) => {
  const q = Array.isArray(query.q) ? query.q[0] : query.q;

  const allCountries: ArrangementType[] = await fetchCountries();
  if (!q) {
    return {
      props: {
        error: "Search query is required",
        allCountries,
      },
    };
  }

  try {
    const res = await fetch(
      `https://infinity-travel-deploy.vercel.app/api/search?q=${encodeURIComponent(
        q
      )}`
    );
    const data: ArrangementType[] = await res.json();

    return {
      props: {
        data,
        allCountries,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "An error occurred while fetching data",
      },
    };
  }
};
