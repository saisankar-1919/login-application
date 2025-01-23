import React from "react";
import styles from "../styles/HomePage.module.css";

interface CountryCardProps {
  country: string;
  region: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, region }) => {
  return (
    <div className={styles.countryCard}>
      <div className={styles.imagePlaceholder} />
      <h3>{country}</h3>
      <p>{region}</p>
    </div>
  );
};

export default CountryCard;
