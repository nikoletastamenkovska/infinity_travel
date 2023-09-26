import React from "react";
import styles from "./HeroBanner.module.css";
import { SearchForm } from "../searchform/SearchForm";

interface Props {
  image: string;
}

export const HeroBanner: React.FC<Props> = ({ image }) => {
  const banner_style = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className={`container-fluid ${styles.hero_banner}`}
      style={banner_style}
    >
      <div className="row px-0 position-relative">
        <div className={`col col-md-6 ${styles.banner_search}`}>
          <div className={`container px-0 position-relative`}>
            <div className="row m-0 position-relative">
              <div className={`col mx-auto ${styles.search_col}`}>
                <img
                  src={"/images/hero_banner/hero_search_wrapper.png"}
                  alt=""
                  className={styles.search_wrapper}
                ></img>
              </div>
              <div className={`col mx-auto ${styles.inner_search_desc}`}>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
