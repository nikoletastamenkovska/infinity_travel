import React from "react";
import styles from "./ContactAddressPhone.module.css";
import Link from "next/link";

export const ContactAddressPhone = () => {
  return (
    <>
      <h5 className={styles.styled_h5}>Контакт</h5>
      <div className={styles.styled_link}>
        <Link href={"/contact"}>
          Адреса: Бул. Даме Груев бр.14 лок.24 1000 Скопје, Македонија
        </Link>
      </div>
      <div className={styles.styled_link}>
        <Link href={"/contact"}>E-маил: contact@infinitytravel.mk</Link>
      </div>
      <div className={styles.styled_link}>
        <Link href={"/contact"}>Телефон: 023100360/ 072254160</Link>
      </div>
      <div className={`d-flex ${styles.styled_link}`}>
        <Link href="https://www.instagram.com/" passHref target="_blank">
          <img
            className={styles.styled_icon}
            src="/icons_img/instagram-icon.png" // Relative path to your image
            alt="Instagram icon"
          />
        </Link>
        <Link href="https://www.facebook.com/" passHref target="_blank">
          <img
            className={styles.styled_icon}
            src="/icons_img/facebook-icon.png" // Relative path to your image
            alt="Facebook icon"
          />
        </Link>
      </div>
    </>
  );
};
