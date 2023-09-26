import Link from "next/link";
import React from "react";
import { ArrangementType } from "src/types/data_interface";
import { ContactAddressPhone } from "../contactadtessphone/ContactAddressPhone";
import styles from "./Footer.module.css";

interface Props {
  allCountries: ArrangementType[];
}

export const Footer: React.FC<Props> = ({ allCountries }) => {
  const uniqueCountries: string[] = Array.from(
    new Set(allCountries?.map((arrangement) => arrangement?.Location?.Country))
  );

  return (
    <>
      <div className="container pt-4 pt-md-5">
        <div className="row m-0">
          <div className="col-6 col-md-3 mb-4">
            <h5 className={styles.styled_h5}>Дестинации</h5>
            {uniqueCountries.map((country, index) => {
              return (
                <div key={`country-${index}`} className={styles.styled_link}>
                  <Link href={`/destinations/${country}`}>{country}</Link>
                </div>
              );
            })}
            <div className={styles.styled_link}>
              <Link href={`/exotic_destinations`}>Далечни патувања</Link>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <h5 className={styles.styled_h5}>Информации</h5>
            <div className={styles.styled_link}>
              <Link href={"/aeroplane_tickets"}>Авио билети</Link>
            </div>
            <div className={styles.styled_link}>
              <Link href={"/group_travel/#mice_tourism"}>MICE туризам</Link>
            </div>
            <div className={styles.styled_link}>
              <Link href={"/group_travel/#team_build"}>Team building</Link>
            </div>
            <div className={styles.styled_link}>
              <Link href={"/group_travel/#tailor_made"}>Tailor made</Link>
            </div>
            <div className={styles.styled_link}>
              <Link href={"/"}>Gift card</Link>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <h5 className={styles.styled_h5}>Останато</h5>
            <div className={styles.styled_link}>
              <Link href={"/about_us"}>За нас</Link>
            </div>
            <div className={styles.styled_link}>
              <Link href={"general_conditions/"}>Општи услови за патување</Link>
            </div>
            <div className={styles.styled_link}>
              <Link href={"/insurance"}>Патничко осигурување</Link>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <ContactAddressPhone />
          </div>
        </div>
      </div>
      <div className="container-fluid mx-0">
        <div className="row position-relative">
          <img
            className={styles.styled_live_chat}
            src={"/icons_img/Live_chat.png"}
            alt="live chat image"
          />
          <div className={`col ${styles.trademark}`}>
            &copy; 2019 Инфинити травел. Сите права се задржани.
          </div>
        </div>
      </div>
    </>
  );
};
