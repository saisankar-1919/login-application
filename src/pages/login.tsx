import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginHeader from "../components/Login/LoginHeader";
import LoginForm from "../components/Login/LoginForm";
import SocialLogin from "../components/Login/SocialLogin";
import Illustration from "../components/Login/Illustration";

const SignInPage: React.FC = () => {
  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center"
    >
      <Row className="w-100">
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <div style={{ maxWidth: "400px", width: "100%" }}>
            <LoginHeader />
            <LoginForm />
            <SocialLogin />
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center"
        >
          <Illustration />
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
