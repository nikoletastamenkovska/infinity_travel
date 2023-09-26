import React from "react";
import styles from "./SelectedCountry.module.css";

interface Props {
  data: string[];
  selectedCountry: string;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectedCoutnry: React.FC<Props> = ({
  data,
  selectedCountry,
  handleSelectChange,
}) => {
  return (
    <div>
      <label htmlFor="countrySelect"></label>
      <select
        id="countrySelect"
        value={selectedCountry}
        onChange={handleSelectChange}
        className={styles.styled_options}
      >
        <option>Дестинација</option>
        {data.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};
