import React from "react";
import { LocationType } from "src/types/data_interface";
import styles from "./RegionButton.module.css";

interface Props {
  country: Pick<LocationType, "Country">;
  onClick: (countryName: string) => void;
  isActive: boolean;
}

export const CountryButton: React.FC<Props> = ({
  country,
  onClick,
  isActive,
}) => {
  const { Country } = country;

  if (!Country) {
    return null;
  }

  const buttonClassName = isActive
    ? `${styles.styled_button} ${styles.active}`
    : styles.styled_button;

  return (
    <button className={buttonClassName} onClick={() => onClick(Country)}>
      {country.Country}
    </button>
  );
};
