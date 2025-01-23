import React from "react";
import styles from "../styles/Login.module.css";

const SocialLogin: React.FC = () => {
  return (
    <>
      <div className="text-center">Or Sign In With</div>
      <div
        className={`d-flex justify-content-center mt-3 ${styles.socialContainer}`}
      >
        <a href="/signin/google" className={styles.socialIcon}>
          <i className="fab fa-google" />
        </a>
        <a href="/signin/facebook" className={styles.socialIcon}>
          <i className="fab fa-facebook" />
        </a>
        <a href="/signin/linkedin" className={styles.socialIcon}>
          <i className="fab fa-linkedin-in" />
        </a>
        <a href="/signin/twitter" className={styles.socialIcon}>
          <i className="fab fa-twitter" />
        </a>
      </div>
    </>
  );
};

export default SocialLogin;
