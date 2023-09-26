import { useRouter } from "next/router";
import React from "react";
import { ArrangementType } from "src/types/data_interface";
import { CardExotic } from "../cardexotic/CardExotic";
import styles from "../currentoffers/CurrentOffers.module.css";
import { CountryButton } from "../regionbutton/CountryButton";
import regionStyles from "../regionbutton/RegionButton.module.css";
import Slider from "../slider/Slider";
import SliderCard from "../slider/SliderCard";

interface Props {
  allCountries: ArrangementType[];
  filteredRegionAndLastMinute: ArrangementType[];
}

export const FiltersCountries: React.FC<Props> = ({
  allCountries,
  filteredRegionAndLastMinute,
}) => {
  const countries = allCountries.map((country) => country.Location.Country);
  const uniqueCountries = [...new Set(countries)];

  const router = useRouter();
  const hasQueryParams = Object.keys(router.query).length > 0;

  const handleRegionClick = (country: string) => {
    router.push({
      pathname: "/exotic_destinations",
      query: {
        country: country,
      },
    });
  };

  const handleLastMinuteClick = () => {
    router.push({
      pathname: "/exotic_destinations",
      query: {
        IsLastMinute: "true",
      },
    });
  };

  const handleBackButtonClick = () => {
    router.push({
      pathname: "/exotic_destinations",
    });
  };

  return (
    <>
      <div className="container-fluid pb-5">
        <Slider>
          {uniqueCountries.map((country) => (
            <div key={country} className={styles.button_wrapper}>
              <CountryButton
                country={{ Country: country }}
                onClick={() => country && handleRegionClick(country)}
                isActive={router.query.country === country}
              />
            </div>
          ))}

          <button
            className={`${regionStyles.styled_button} ${
              router.query.IsLastMinute === "true" ? regionStyles.active : ""
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
          {filteredRegionAndLastMinute.length === 0 ? (
            <p className="d-flex align-items-center ms-auto me-auto">
              Во овој момент немаме слободни аранжмани за Вашето пребарување.
            </p>
          ) : (
            filteredRegionAndLastMinute.map((arrangement) => {
              return (
                <div
                  className="col-12 col-lg-4 d-flex align-items-stretch p-2"
                  key={arrangement.Id}
                >
                  <CardExotic {...arrangement} />
                </div>
              );
            })
          )}
        </SliderCard>
      </div>
    </>
  );
};
