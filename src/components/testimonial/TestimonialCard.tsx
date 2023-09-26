import React from "react";
import { TestimonialType } from "src/types/data_interface";
import { RatingStars } from "../rating/RatingStars";
import styles from "./TestimonialCard.module.css";

interface Props {
  card: TestimonialType;
}

export const TestimonialCard: React.FC<Props> = ({ card }) => {
  return (
    <div className="col-6 col-md-4 p-2 px-lg-5">
      <div className={`${styles.bg_testimonial_card}`}>
        <img
          src={"/images/testimonials/yellow_tape.png"}
          alt="yellow tape"
          className={styles.yellow_tape}
        />
        <img className="card-img-top" src={card.Url} alt={card.Title} />
        <div className="card-body py-2 px-3">
          <h6>{card.Title}</h6>
          {<div>{card.Rating && <RatingStars rating={card.Rating} />}</div>}
          <p className="card-text">{card.Description}</p>
          <div className="pt-2 pb-4 position-relative">
            {card.Arrangement}{" "}
            <span className={styles.liner}>
              <img
                src={"/images/testimonials/yellow_liner.png"}
                alt="yellow liner"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
