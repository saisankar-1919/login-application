import React from "react";
import styles from "../styles/HomePage.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="/">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="/">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <p>example@email.com</p>
      <p>Copyright © 2025 Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
