import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ArrangementType } from "src/types/data_interface";
import keeps from "../header/Menu.module.css";
import { Countries } from "./Countries";
import styles from "./Dropdown.module.css";

interface Props {
  allCountries: ArrangementType[];
}

export const Dropdown: React.FC<Props> = ({ allCountries }) => {
  const uniqueCountries: string[] = Array.from(
    new Set(allCountries?.map((arrangement) => arrangement?.Location?.Country))
  );

  const router = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsActive(!isActive);
  };

  const handleBackButtonClick = (): void => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsActive(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <div
        className={`${keeps.link_a} ${styles.nav_item}`}
        role="button"
        onClick={handleClick}
      >
        <span className={`${keeps.link_text} `}>
          Дестинации{" "}
          <i
            className={`fa-solid fa-caret-down fa-beat ${keeps.styled_icon}`}
          ></i>
        </span>
      </div>

      <div
        className={`${styles.nav_content} ${isActive ? styles.active : ""} `}
      >
        <div className={styles.nav_sub}>
          <ul className={`${styles.dropdownMenu}`}>
            <Countries countries={uniqueCountries} />
            <button
              className={styles.styled_back_button}
              onClick={handleBackButtonClick}
            >
              Назад
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};
