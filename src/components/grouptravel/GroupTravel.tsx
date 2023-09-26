import { useRouter } from "next/router";
import styles from "./GroupTravel.module.css";

export const GroupTravel = () => {
  const router = useRouter();
  return (
    <>
      <div
        className={`container-fluid p-0 ${styles.background_styled_main} ${styles.background_styled}`}
      >
        <div className="info_wrapper">
          <img
            src={"/images/group_travel/group_travel_white_background.png"}
            alt="background for info group travel"
            className={styles.info_group_travel}
          />
          <div className={styles.info_group_travel}>
            <h3 className="pt-3">Групни патувања</h3>
            <p className="py-3 px-4  m-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis ullam illum?
            </p>
            <button
              className={`button_yelow p-3 ${styles.info_button}`}
              onClick={() => {
                router.push({
                  pathname: "/group_travel",
                });
              }}
            >
              Повеќе
            </button>
          </div>
        </div>
        <img
          src={"/images/group_travel/group_travel_london_sticker.png"}
          alt="sticker of London"
          className={styles.sticker_of_london}
        />
        <img
          src={"/images/group_travel/group_travel_instanbul_sticker.png"}
          alt="sticker of Istanbul"
          className={styles.sticker_of_istanbul}
        />
        <img
          src={"/images/group_travel/group_travel_decoration_top.png"}
          alt="sticker"
          className={styles.sticker}
        />
        <div className={`row m-0 ${styles.first_background_row}`}>
          <div
            className={`col-5 ${styles.backgroung_1} ${styles.background_styled}`}
          ></div>
          <div
            className={`offset-1 col-6 ${styles.backgroung_2} ${styles.background_styled}`}
          ></div>
        </div>
        <div className={`row m-0 ${styles.second_background_row}`}>
          <div
            className={`col-4 ${styles.backgroung_3} ${styles.background_styled}`}
          ></div>
          <div
            className={`offset-2 col-5 ${styles.backgroung_4} ${styles.background_styled}`}
          ></div>
        </div>
      </div>
      <div className={styles.wrapper_desc}>
        <div className={`container-fluid p-0 mb-3`}>
          <div className="info_wrapper">
            <img
              src={"/images/group_travel/group_travel_white_background.png"}
              alt="background for info group travel"
              className={styles.info_group_travel_desc}
            />
            <div className={styles.info_group_travel_desc}>
              <h3 className={`pt-3 ${styles.styled_h3}`}>Групни патувања</h3>
              <p className={`py-3 px-4 m-0 ${styles.styled_p}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ullam illum?
              </p>
              <button
                className={`button_yelow p-3 ${styles.info_button}`}
                onClick={() => {
                  router.push({
                    pathname: "/group_travel",
                  });
                }}
              >
                Повеќе
              </button>
            </div>
          </div>
          <img
            src={"/images/group_travel/group_travel_london_sticker.png"}
            alt="sticker of London"
            className={styles.sticker_of_london_desk}
          />
          <img
            src={"/images/group_travel/group_travel_instanbul_sticker.png"}
            alt="sticker of Istanbul"
            className={styles.sticker_of_istanbul_desk}
          />
          <img
            src={"/images/group_travel/group_travel_decoration_top.png"}
            alt="sticker"
            className={styles.sticker_desk}
          />
          <div className={`row mx-0  ${styles.background_styled_desc}`}>
            <div
              className={`col-4 ${styles.backgroung_1} ${styles.background_styled}`}
            ></div>
            <div className="col-4 text-center">
              <img
                src={"/images/group_travel/group_travel__to_top_img_top_1.png"}
                alt="img of a team"
                className={styles.image_desc}
              />
              <img
                src={"/images/group_travel/group_travel_img_top_2.png"}
                alt="img of a team"
                className={styles.image_desc}
              />
            </div>
            <div
              className={`col-4 ${styles.backgroung_2} ${styles.background_styled}`}
            ></div>
          </div>
        </div>
      </div>
      <div className={`container py-1 py-md-3 ${styles.bg_tapped}`}>
        <div className={`row py-2 m-0 ${styles.taped_row}`}>
          <img
            src={"/images/group_travel/violet_tape.png"}
            alt="violet tape"
            className={`${styles.violet_tape} ${styles.violet_tape_top}`}
          />
          <img
            src={"/images/group_travel/violet_tape.png"}
            alt="violet tape"
            className={`${styles.violet_tape} ${styles.violet_tape_bottom}`}
          />
          <div className={`col-4 d-flex flex-column`}>
            <img
              src={"/images/group_travel/suitcase_icon.png"}
              alt="suitcase icon"
              className={`${styles.icon_styled}`}
            />
            <p className={`mx-auto ${styles.p_styled}`}>1000+патувања</p>
          </div>
          <div className={`col-4 d-flex flex-column`}>
            <img
              src={"/images/group_travel/global_network_icon.png"}
              alt="suitcase icon"
              className={`${styles.icon_styled}`}
            />
            <p className={`mx-auto ${styles.p_styled}`}>
              15000+патници годишно
            </p>
          </div>
          <div className={`col-4 d-flex flex-column`}>
            <img
              src={"/images/group_travel/location_icon.png"}
              alt="suitcase icon"
              className={`${styles.icon_styled}`}
            />
            <p className={`mx-auto ${styles.p_styled}`}>
              Одберете ја Вашата дестинација
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
