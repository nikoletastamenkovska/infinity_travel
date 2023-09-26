import { useRouter } from "next/router";
import React from "react";
import { ArrangementType } from "src/types/data_interface";
import { Card } from "../card/Card";
import { Button } from "../filterbuttons/Buttons";
import regionStyles from "../regionbutton/RegionButton.module.css";
import Slider from "../slider/Slider";
import SliderCard from "../slider/SliderCard";
import styles from "./Filters.module.css";

interface Props {
  filteredArrangements: ArrangementType[];
  filteredRegionAndLastMinute: ArrangementType[];
  buttonType: string;
}

export const Filters: React.FC<Props> = ({
  filteredArrangements,
  filteredRegionAndLastMinute,
}) => {
  const regions = filteredArrangements.map((region) => region.Location.Region);
  const uniqueRegions = [...new Set(regions)];

  const router = useRouter();
  const hasQueryParams = Object.keys(router.query).length > 0;

  const handleRegionClick = (region: string) => {
    const { country } = router.query;
    router.push({
      pathname: `/destinations/${country}`,
      query: {
        region: region,
      },
    });
  };

  const handleLastMinuteClick = () => {
    const { country } = router.query;

    router.push({
      pathname: `/destinations/${country}`,
      query: {
        IsLastMinute: "true",
      },
    });
  };

  const handleBackButtonClick = () => {
    const { country } = router.query;
    router.push({
      pathname: `/destinations/${country}`,
      query: {},
    });
  };

  return (
    <>
      <div className="container-fluid pb-5">
        <Slider>
          {uniqueRegions.map((region) => (
            <div key={region} className={styles.button_wrapper}>
              <Button
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
      <div className="container-fluid py-3"></div>
      <div className="container-fluid py-3">
        <SliderCard>
          {filteredRegionAndLastMinute.length === 0 ? (
            <p className="d-flex align-items-center ms-auto me-auto">
              Во овој момент немаме слободни аранжмани за Вашето пребарување.
            </p>
          ) : (
            filteredRegionAndLastMinute.map((arrangement) => {
              return <Card key={arrangement.Id} {...arrangement} />;
            })
          )}
        </SliderCard>
      </div>
    </>
  );
};
