import { useRouter } from "next/router";
import React from "react";
import { ArrangementType } from "src/types/data_interface";
import { Card } from "../card/Card";
import { RegionButton } from "../regionbutton/RegionButton";
import regionStyles from "../regionbutton/RegionButton.module.css";
import Slider from "../slider/Slider";
import SliderCard from "../slider/SliderCard";
import styles from "./CurrentOffers.module.css";

interface Props {
  allCountries: ArrangementType[];
  allArrangements: ArrangementType[];
  filteredArrangements: ArrangementType[];
  seeMorePathname: string;
  regionPathname: string;
}

export const CurrentOffers: React.FC<Props> = ({
  allCountries,
  allArrangements,
  filteredArrangements,
  seeMorePathname,
  regionPathname,
}) => {
  const regions = allCountries.map((region) => region.Location.Region);
  const uniqueRegions = [...new Set(regions)];

  const router = useRouter();
  const hasQueryParams = Object.keys(router.query).length > 0;

  const handleRegionClick = (region: string) => {
    router.push({
      pathname: regionPathname,
      query: {
        region: region,
      },
    });
  };

  const handleLastMinuteClick = () => {
    router.push({
      pathname: regionPathname,
      query: {
        isLastMinute: "true",
      },
    });
  };

  const handleBackButtonClick = () => {
    router.push({
      pathname: regionPathname,
    });
  };

  const handleSeeMoreClick = () => {
    router.push({
      pathname: seeMorePathname,
    });
  };

  return (
    <>
      <div className="container-fluid pb-5">
        <Slider>
          {uniqueRegions.map((region) => (
            <div key={region} className={styles.button_wrapper}>
              <RegionButton
                region={{ Region: region }}
                onClick={() => region && handleRegionClick(region)}
                isActive={router.query.region === region}
              />
            </div>
          ))}

          <button
            className={`${regionStyles.styled_button} ${
              router.query.isLastMinute === "true" ? regionStyles.active : ""
            }`}
            onClick={handleLastMinuteClick}
          >
            Last minute
          </button>
        </Slider>
      </div>
      <div className="container-fluid d-flex justify-content-center">
        {hasQueryParams && (
          <button
            type="button"
            className={styles.back_button}
            onClick={handleBackButtonClick}
          >
            Назад
          </button>
        )}
      </div>
      <div className="container-fluid py-3">
        <SliderCard>
          {filteredArrangements.length === 0 ? (
            <p className="d-flex align-items-center ms-auto me-auto">
              Во овој момент немаме слободни аранжмани за Вашето пребарување.
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
        </SliderCard>
      </div>
      <div className="text-center pt-3 pb-5">
        <button
          type="button"
          className={styles.styled_button}
          onClick={handleSeeMoreClick}
        >
          See more <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </>
  );
};
