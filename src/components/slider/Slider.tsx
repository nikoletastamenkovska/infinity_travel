import React, { useRef } from "react";
import styles from "./Slider.module.css";

interface SliderProps {
  children: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.scrollButton} onClick={scrollLeft}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <div className={styles.slider} ref={sliderRef}>
        {children}
      </div>
      <button className={styles.scrollButton} onClick={scrollRight}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Slider;
