import React, { useState } from "react";
import styles from "../styles/HomePage.module.css";

const images = ["Image1", "Image2", "Image3", "Image4"];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.slider}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>{images[currentIndex]}</div>
      </div>
      <div className={styles.dots}>
        <button onClick={handlePrev} className={styles.navButton}>
          &#x3c;
        </button>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
        <button onClick={handleNext} className={styles.navButton}>
          &#x3e;
        </button>
      </div>
    </div>
  );
};

export default Slider;
