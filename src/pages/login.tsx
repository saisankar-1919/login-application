import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";

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
            <h2 className="mb-4">Sign In</h2>
            <p>
              New user? <a href="/create-account">Create an account</a>
            </p>
            <Form>
              <Form.Group controlId="usernameOrEmail" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Username or email"
                  className="square-input"
                />
              </Form.Group>
              <Form.Group controlId="password" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  className="square-input"
                />
              </Form.Group>
              <Form.Group controlId="keepMeSignedIn" className="mb-3">
                <Form.Check type="checkbox" label="Keep me signed in" />
              </Form.Group>
              <Button variant="dark" type="submit" className="w-100 mb-3">
                Sign In
              </Button>
            </Form>

            <div className="text-center">Or Sign In With</div>
            <div className="d-flex justify-content-center mt-3">
              <a href="/signin/google" className="social-icon mx-2">
                <i className="fab fa-google" />
              </a>
              <a href="/signin/facebook" className="social-icon mx-2">
                <i className="fab fa-facebook" />
              </a>
              <a href="/signin/linkedin" className="social-icon mx-2">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="/signin/twitter" className="social-icon mx-2">
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center"
        >
          <div className="text-center">
            <img
              src="assets/login_asset.png"
              alt="Walking illustration"
              style={{ width: "400px" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
