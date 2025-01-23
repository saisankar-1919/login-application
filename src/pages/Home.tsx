import React from "react";
import Header from "../components/Home/Header";
import Slider from "../components/Home/Slider";
import CountryCard from "../components/Home/CountryCard";
import Footer from "../components/Home/Footer";
import styles from "../components/styles/HomePage.module.css";

const countries = [
  { country: "Afghanistan", region: "Asia" },
  { country: "Albania", region: "Europe" },
  { country: "Afghanistan", region: "Asia" },
  // Add more countries as needed
];

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.welcomeTitle}>WELCOME</h2>
        <Slider />
        <section className={styles.countriesSection}>
          {countries.map((c, index) => (
            <CountryCard key={index} country={c.country} region={c.region} />
          ))}
          <button className={styles.loadMoreButton}>Load More</button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
