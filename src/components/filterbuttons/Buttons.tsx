import React from "react";
import { LocationType } from "src/types/data_interface";
import styles from "./Buttons.module.css";

interface Props {
  region: Pick<LocationType, "Region">;
  onClick: (regionName: string) => void;
  isActive: boolean;
}

export const Button: React.FC<Props> = ({ region, onClick, isActive }) => {
  const { Region } = region;

  if (!Region) {
    return null;
  }

  const buttonClassName = isActive
    ? `${styles.styled_button} ${styles.active}`
    : styles.styled_button;

  return (
    <button className={buttonClassName} onClick={() => onClick(Region)}>
      {region.Region}
    </button>
  );
};
