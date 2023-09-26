import { GetServerSideProps, NextPage } from "next";
import router from "next/router";
import { HeroBanner } from "src/components/banner/HeroBanner";
import { CardM } from "src/components/cardmacedonia/CardM";
import { Newsletter } from "src/components/newsletter/Newsletter";
import { SectionTitle } from "src/components/sectiontitle/SectionTitle";
import Slider from "src/components/slider/Slider";
import SliderCard from "src/components/slider/SliderCard";
import { ArrangementType } from "src/types/data_interface";
import { fetchCountries, fetchMacedoniaTourism } from "src/utils/dataFetching";
import styles from "./MacedoniaTourism.module.css";

interface MacedoniaIdProps {
  allCountries: ArrangementType[];
  MacedoniaTourism: ArrangementType[];
  filteredRegion: ArrangementType[];
}

const ExploreMacedoniaId: NextPage<MacedoniaIdProps> = ({
  allCountries,
  MacedoniaTourism,
  filteredRegion,
}) => {
  const region: ArrangementType = filteredRegion[0];
  const exploreArr = MacedoniaTourism.filter(
    (region) => region.Type === "Истражи"
  );
  const dayTrip = MacedoniaTourism.filter((region) => region.Type === "Излети");
  return (
    <>
      <HeroBanner image={region.Image} />
      <SectionTitle title={region.Type} />
      <div className="container">
        <div className="row">
          <div className={`col-lg-4 d-flex px-4 ${styles.styled_color}`}>
            <button className={styles.macedonia_button}>Опис</button>
            <button className={styles.macedonia_button}>Галерија</button>
            <button className={styles.macedonia_button}>Цени</button>
          </div>
          <div className="row mx-0">
            <div className={`col py-2 ${styles.styled_h5}`}>{region.Name}</div>
          </div>
          <div className="row ms-auto me-auto">
            <div className={`col px-3 py-4 ${styles.styled_color}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, se d do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco la boris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Exceptent, sunt in culpa qui officia deserunt
              mollit anim id est laborum.Lorem ipsum doea commodo consequat.
              Duis aute irure dolor in reprehenderit in
            </div>
            <div className="container-fluid py-3 px-0">
              <Slider>
                {region.Gallery.map((image, index) => (
                  <img
                    key={index}
                    className="me-2"
                    src={image.Url}
                    alt="image of explored places"
                  />
                ))}
              </Slider>
            </div>
            <div className={`col px-4 py-3 ${styles.styled_color}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Exceptent, sunt in culpa qui officia deserunt
              mollit anim id est laborum.Lorem ipsum doea commodo consequat.
              Duis aute irure dolor in reprehenderit in Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Exceptent, sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum doea commodo consequat. Duis aute irure dolor
              in reprehenderit in
            </div>
          </div>
        </div>
      </div>
      <SectionTitle title={"Повеќе"} />
      <div className="container-fluid py-3">
        <SliderCard>
          {region.Type === "Истражи"
            ? exploreArr.map((arrangement) => {
                return (
                  <div
                    className="col-12 col-lg-4 d-flex align-items-stretch p-2"
                    key={arrangement.Id}
                  >
                    <CardM {...arrangement} />
                  </div>
                );
              })
            : dayTrip.map((arrangement) => {
                return (
                  <div
                    className="col-12 col-lg-4 d-flex align-items-stretch p-2"
                    key={arrangement.Id}
                  >
                    <CardM {...arrangement} />
                  </div>
                );
              })}
        </SliderCard>
      </div>
      <div className="text-center">
        <button
          type="button"
          className={`w-lg-25 ${styles.styled_button}`}
          onClick={() => {
            if (region.Type === "Излети") {
              router.push("/macedonia_tourism/day_trip");
            } else if (region.Type === "Истражи") {
              router.push("/macedonia_tourism/macedonia_arrangements");
            }
          }}
        >
          See more <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
      <Newsletter />
    </>
  );
};

export default ExploreMacedoniaId;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { Id } = context.query;

  const allCountries: ArrangementType[] = await fetchCountries();
  const MacedoniaTourism: ArrangementType[] = await fetchMacedoniaTourism();

  let apiUrl = `https://secretive-canary-variraptor.glitch.me/macedonia_arrangements`;

  if (Id) {
    apiUrl += `?Id=${Id}`;
  }

  const response = await fetch(apiUrl);
  const filteredRegion: ArrangementType[] = await response.json();

  return {
    props: {
      allCountries,
      MacedoniaTourism,
      filteredRegion,
    },
  };
};
