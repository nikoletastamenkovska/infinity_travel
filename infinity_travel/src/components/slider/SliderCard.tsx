import React, { useRef } from "react";
import styles from "./Slider.module.css";

interface SliderProps {
  children: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollStep = () => {
    if (window.innerWidth <= 425) {
      return 1;
    } else if (window.innerWidth <= 786) {
      return 2;
    } else {
      return 3;
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current && window.innerWidth >= 425) {
      sliderRef.current.scrollBy({
        left: -300 * scrollStep(),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current && window.innerWidth >= 425) {
      sliderRef.current.scrollBy({
        left: 300 * scrollStep(),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.scrollButton} onClick={scrollLeft}>
        <img src={"/icons_img/left_chevron.png"} alt="left_chevron" />
      </button>
      <div className={styles.slider} ref={sliderRef}>
        {children}
      </div>
      <button className={styles.scrollButton} onClick={scrollRight}>
        <img src={"/icons_img/right_chevron.png"} alt="right_chevron" />
      </button>
    </div>
  );
};

export default Slider;
