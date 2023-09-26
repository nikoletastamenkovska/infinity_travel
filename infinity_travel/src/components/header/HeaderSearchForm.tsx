import React, { useRef, useState } from "react";
import styles from "./HeaderSearchForm.module.css"; // Define your CSS classes
import { useRouter } from "next/router";

interface HeaderSearchFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const HeaderSearchForm: React.FC<HeaderSearchFormProps> = ({
  isOpen,
  onClose,
}) => {
  const inputValue = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [inputValueText, setInputValueText] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = inputValue?.current?.value;

    router.push({
      pathname: `/search`,
      query: {
        q: value,
      },
    });
    setInputValueText("");
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`d-flex justify-content-center align-items-center ${
        styles.hero_search_form
      } ${isOpen ? styles.visible : styles.hidden}`}
    >
      <label htmlFor="heroBannerSearch"></label>
      <input
        type="search"
        id="heroBannerSearch"
        required
        placeholder="Пронајди..."
        className={styles.hero_search_input}
        ref={inputValue}
      />
      <button type="submit" className={styles.submit_button}>
        &#10004;
      </button>
    </form>
  );
};

export default HeaderSearchForm;
