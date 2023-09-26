import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { ArrangementType } from "src/types/data_interface";
import styles from "../header/Header.module.css";
import { Menu } from "./Menu";
import HeaderSearchForm from "./HeaderSearchForm";
interface Props {
  allCountries: ArrangementType[];
}
export const Header: React.FC<Props> = ({ allCountries }) => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const toggleSearch = (): void => {
    setIsSearchOpen(!isSearchOpen);
  };
  const closeSearch = () => {
    setIsSearchOpen(false);
  };
  return (
    <>
      <header className={styles.header}>
        <Link href={"/"}>
          <img
            className={styles.logo}
            src="/logo/Logo.png"
            alt="image of aeroplane flying on infinite path line"
          />
        </Link>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={styles.search_icon}
          onClick={toggleSearch}
        />
        <Menu allCountries={allCountries} />
      </header>
      <div className={`p-0 ${styles.search_input_header}`}>
        {isSearchOpen && (
          <HeaderSearchForm isOpen={isSearchOpen} onClose={closeSearch} />
        )}
      </div>
    </>
  );
};
