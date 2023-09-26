import React from "react";
import styles from "./AboutUsSection.module.css";

interface Props {
  image: string;
}

export const AboutUsSection: React.FC<Props> = ({ image }) => {
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
        <div className={`col offset-md-6 col-md-6 ${styles.banner_search}`}>
          <div className={`container px-0 position-relative`}>
            <div className="row m-0 position-relative">
              <div className={`col mx-auto ${styles.search_col}`}>
                <img
                  src={"/icons_img/white_wrapper.png"}
                  alt=""
                  className={styles.search_wrapper}
                ></img>
              </div>
              <div className={`col py-5 mx-auto ${styles.inner_search_desc}`}>
                <h3>Lorem ipsum</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  amet. Eius consectetur harum fugiat quasi qui quae, iste,
                  soluta quia sequi atque illo vitae voluptatem. Beatae soluta
                  quae repellat minus asperiores, tempora est voluptates, optio,
                  odio tempore voluptatibus esse omnis et sit? Similique eos cum
                  modi rerum? Vel rem atque, eligendi sapiente quam explicabo
                  aut quibusdam voluptatum aliquid animi at.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
