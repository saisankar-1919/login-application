import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import styles from "../styles/Login.module.css";

const SocialLogin: React.FC = () => {
  return (
    <>
      <div className="text-center">Or Sign In With</div>
      <Row className="justify-content-center mt-3">
        <Col xs="auto">
          <Button
            href="/signin/google"
            variant="outline-dark"
            className={`${styles.socialButton} rounded-pill`}
          >
            <i className="fab fa-google" style={{ color: "black" }} />
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            href="/signin/facebook"
            variant="outline-dark"
            className={`${styles.socialButton} rounded-pill`}
          >
            <i className="fab fa-facebook" style={{ color: "black" }} />
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            href="/signin/linkedin"
            variant="outline-dark"
            className={`${styles.socialButton} rounded-pill`}
          >
            <i className="fab fa-linkedin-in" style={{ color: "black" }} />
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            href="/signin/twitter"
            variant="outline-dark"
            className={`${styles.socialButton} rounded-pill`}
          >
            <i className="fab fa-twitter" style={{ color: "black" }} />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default SocialLogin;
