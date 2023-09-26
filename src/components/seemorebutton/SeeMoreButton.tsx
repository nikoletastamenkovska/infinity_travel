import { useRouter } from "next/router";
import React from "react";
import styles from "./Seemore.module.css";

interface SeeMoreButtonProps {
  type: "Вила" | "Хотел";
}

export const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({ type }) => {
  const router = useRouter();

  const handleSeeMoreClick = () => {
    const { country } = router.query;
    if (type === "Вила") {
      router.push({
        pathname: `/destinations/accomodation/Apartment`,
        query: {
          country: country,
          type: "Вила",
        },
      });
    } else if (type === "Хотел") {
      router.push({
        pathname: `/destinations/accomodation/Hotel`,
        query: {
          country: country,
          type: "Хотел",
        },
      });
    }
  };

  return (
    <div className="text-center">
      <button
        type="button"
        className={`w-lg-25 ${styles.styled_button}`}
        onClick={handleSeeMoreClick}
      >
        See more <i className="fa-solid fa-angles-right"></i>
      </button>
    </div>
  );
};
