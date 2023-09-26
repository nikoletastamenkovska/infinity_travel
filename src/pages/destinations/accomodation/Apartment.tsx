import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { HeroBanner } from "src/components/banner/HeroBanner";
import { Card } from "src/components/card/Card";
import { Newsletter } from "src/components/newsletter/Newsletter";
import { SearchForm } from "src/components/searchform/SearchForm";
import { SectionTitle } from "src/components/sectiontitle/SectionTitle";
import { SelectedCoutnry } from "src/components/select/SelectedCoutnry";
import { ArrangementType } from "src/types/data_interface";
import { fetchCountries } from "src/utils/dataFetching";
import styles from "./Accomodation.module.css";

interface ApartmentProps {
  allCountries: ArrangementType[];
  filteredArrangements: ArrangementType[];
}

const Apartment: NextPage<ApartmentProps> = ({
  allCountries,
  filteredArrangements,
}) => {
  const uniqueCountries: string[] = Array.from(
    new Set(allCountries?.map((arrangement) => arrangement?.Location?.Country))
  );

  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    router.push({
      pathname: "/destinations/[country]",
      query: {
        country: selectedCountry,
      },
    });
  };

  const router = useRouter();
  const countryName = router.query.country;

  return (
    <>
      <HeroBanner image={"/images/hero_banner/counties_bg.png"} />
      <SectionTitle title={`${countryName} Апартмани`} />
      <div className="container">
        <div className="row">
          <div
            className={`col-12 col-lg-2 pt-3 px-0 ${styles.styled_container}`}
          >
            <SearchForm />
            <hr className={styles.hr} />
            <SelectedCoutnry
              selectedCountry={selectedCountry}
              handleSelectChange={handleSelectChange}
              data={uniqueCountries}
            />
            <hr className={styles.hr} />
          </div>
          <div className="col-12 col-lg-10 p-0">
            <div className="container">
              <div className="row">
                {filteredArrangements.length === 0 ? (
                  <p className="d-flex align-items-center ms-auto me-auto">
                    Во овој момент немаме слободни аранжмани за Вашето
                    пребарување.
                  </p>
                ) : (
                  filteredArrangements.map((arrangement) => {
                    return (
                      <div
                        className="col-12 col-lg-4 d-flex align-items-stretch p-2"
                        key={arrangement.Id}
                      >
                        <Card {...arrangement} />
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default Apartment;

export const getServerSideProps: GetServerSideProps<ApartmentProps> = async (
  context
) => {
  const { country } = context.query;
  const { type } = context.query;

  const allCountries: ArrangementType[] = await fetchCountries();

  const resCountry = await fetch(
    `https://secretive-canary-variraptor.glitch.me/arrangements?Location.Country=${country}&Type=${type}`
  );
  const filteredArrangements: ArrangementType[] = await resCountry.json();

  return {
    props: {
      allCountries,
      filteredArrangements,
    },
  };
};
