import React, { useRef } from "react";
import styles from "./SearchForm.module.css";
import { useRouter } from "next/router";

export const SearchForm = () => {
  const inputValue = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = inputValue?.current?.value;

    router.push({
      pathname: `/search`,
      query: {
        q: value,
      },
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`d-flex justify-content-center align-items-center ${styles.hero_search_form}`}
    >
      <label htmlFor="heroBannerSearch"></label>
      <input
        type="search"
        id="heroBannerSearch"
        required
        className={styles.hero_search_input}
        ref={inputValue}
      />
      <button type="submit" className="p-0">
        <img
          src={"/images/hero_banner/hero_search_icon.png"}
          alt="search icon"
          className={styles.hero_search_icon}
        />
      </button>
    </form>
  );
};
