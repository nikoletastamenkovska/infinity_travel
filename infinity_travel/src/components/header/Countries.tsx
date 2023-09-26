import { useRouter } from "next/router";
import React from "react";
import styles from "./Dropdown.module.css";

interface Props {
  countries: string[];
}

export const Countries: React.FC<Props> = ({ countries }) => {
  const router = useRouter();

  return (
    <>
      {countries.map((country, index) => {
        return (
          <li
            key={`country-${index}`}
            className={`${styles.wrapper} ${
              index % 2 === 0 ? styles.wrapper_even : styles.wrapper_odd
            }`}
          >
            <div
              className={`${styles.styled_li} ${
                index % 2 === 0 ? styles.even : styles.odd
              }`}
            >
              <button
                className={styles.nav_country}
                onClick={() => {
                  router.push({
                    pathname: "/destinations/[country]",
                    query: {
                      country: country,
                    },
                  });
                }}
              >
                {country}
              </button>
              <span
                className={`${styles.signpost} ${
                  index % 2 === 0 ? styles.triangle_right : styles.triangle_left
                }`}
              ></span>
            </div>
          </li>
        );
      })}
      <li
        className={`${styles.wrapper} ${
          countries.length % 2 === 0 ? styles.wrapper_even : styles.wrapper_odd
        }`}
      >
        <div
          className={`${styles.styled_li} ${
            countries.length % 2 === 0 ? styles.even : styles.odd
          }`}
        >
          <button
            className={styles.nav_country}
            onClick={() => {
              router.push({
                pathname: "/exotic_destinations",
              });
            }}
          >
            Егзотични патувања
          </button>
          <span
            className={`${styles.signpost} ${
              countries.length % 2 === 0
                ? styles.triangle_right
                : styles.triangle_left
            }`}
          ></span>
        </div>
      </li>
    </>
  );
};
