import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ArrangementType } from "src/types/data_interface";
import styles from "../header/Menu.module.css";
import { Dropdown } from "./Dropdown";
interface Props {
  allCountries: ArrangementType[];
}
export const Menu: React.FC<Props> = ({ allCountries }) => {
  const router = useRouter();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsNavOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.mobile_nav_toggle} ${
          isNavOpen ? styles.close : styles.open
        }`}
        onClick={toggleNav}
      >
        <div className={styles.btn_line}></div>
        <div className={styles.btn_line}></div>
        <div className={styles.btn_line}></div>
      </div>
      <nav className={`${styles.nav} ${isNavOpen ? styles.open : ""}`}>
        <ul
          id="primary_navigation"
          data-visible="false"
          className={styles.primary_navigation}
        >
          <li className={`${styles.link}`}>
            <Link className={styles.link_a} href={"/"}>
              <span
                className={` ${styles.link_text} ${
                  router.pathname === "/" ? styles.active : ""
                }`}
              >
                Дома
              </span>
            </Link>
          </li>
          <li className={`${styles.link} ${styles.dropdown} `}>
            <Dropdown allCountries={allCountries} />
          </li>
          <li className={styles.link}>
            <Link className={styles.link_a} href={"/group_travel"}>
              <span
                className={` ${styles.link_text} ${
                  router.pathname === "/group_travel" ? styles.active : ""
                }`}
              >
                Групни патувања
              </span>
            </Link>
          </li>
          <li className={styles.link}>
            <Link className={styles.link_a} href={"/aeroplane_tickets"}>
              <span
                className={` ${styles.link_text} ${
                  router.pathname === "/aeroplane_tickets" ? styles.active : ""
                }`}
              >
                Авио билети
              </span>
            </Link>
          </li>
          <li className={styles.link}>
            <Link className={styles.link_a} href={"/macedonia_tourism"}>
              <span
                className={` ${styles.link_text} ${
                  router.pathname === "/macedonia_tourism" ? styles.active : ""
                }`}
              >
                Истражи ја Македонија
              </span>
            </Link>
          </li>
          <li className={styles.link}>
            <Link className={styles.link_a} href={"/about_us"}>
              <span
                className={` ${styles.link_text} ${
                  router.pathname === "/about_us" ? styles.active : ""
                }`}
              >
                За нас
              </span>
            </Link>
          </li>
          <li className={styles.link}>
            <Link className={styles.link_a} href={"/contact"}>
              <span
                className={` ${styles.link_text} ${
                  router.pathname === "/contact" ? styles.active : ""
                }`}
              >
                <FontAwesomeIcon icon={faPhone} className={styles.phone_icon} />{" "}
                02/3100-360
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
