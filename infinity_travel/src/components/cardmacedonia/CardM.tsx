import React from "react";
import { ArrangementType } from "src/types/data_interface";
import { RatingStars } from "../rating/RatingStars";
import styles from "./Card.module.css";
import { useRouter } from "next/router";

export const CardM: React.FC<ArrangementType> = (arrangement) => {
  const router = useRouter();
  return (
    <div
      className={`col-12 col-md-6 col-lg-4 col-xl-3 p-2 ${styles.styled_card_wrapper}`}
    >
      <div className={`card flex-fill h-100 ${styles.styled_card}`}>
        <div className={styles.styled_img_wrapper}>
          <img
            className={`card-img-top ${styles.styled_img}`}
            src={arrangement.Image}
            alt={arrangement.Name}
          />
        </div>
        <div className="card-body container">
          <div className="row h-25">
            <div className="col-8">
              <h5 className={`card-title ${styles.styled_title}`}>
                {arrangement.Name}
              </h5>
            </div>
            <div className="col-4 pl-0">
              {arrangement.Rating && (
                <RatingStars rating={arrangement.Rating} />
              )}
            </div>
          </div>
          <div className={`py-2 ${styles.grey_text}`}>
            <i className="fa-solid fa-location-dot"></i>{" "}
            {arrangement.Location.Region}
          </div>
          <div className="card-text pb-5 container px-0">
            <div className="row mx-0">
              <div className={`col-7 py-2 px-0 ${styles.grey_text}`}>
                <div className={styles.small_font}>
                  {arrangement.AvailabilityDates[0].NumberOfDays}
                </div>
                <div className={styles.small_font}>
                  {arrangement.Location.From}
                </div>
              </div>
              <div className="col-5 py-2 text-end">
                од &euro; {arrangement.Prices[0].Prices}
              </div>
            </div>
          </div>
          <button
            className={`btn w-100 border-warning align-self-end align-self-end mt-auto ${styles.styled_card_button}`}
            onClick={() => {
              const Id = arrangement.Id;
              router.push({
                pathname: `/macedonia_tourism/${Id}`,
                query: {
                  id: Id,
                },
              });
            }}
          >
            Повеќе
          </button>
        </div>
      </div>
    </div>
  );
};
