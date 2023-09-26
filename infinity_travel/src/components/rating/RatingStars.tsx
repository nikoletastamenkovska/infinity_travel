import React from "react";
import styles from "./RatingStars.module.css";

interface RatingProps {
  rating: number;
}

export const RatingStars: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className={`text-end ${styles.styled_stars}`}>
      {Array(rating)
        .fill(null)
        .map((_, index) => {
          return <i key={index} className="fa-solid fa-star fa-2xs"></i>;
        })}
    </div>
  );
};
