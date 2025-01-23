import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

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
                <Form.Label>Username or email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username or email"
                />
              </Form.Group>
              <Form.Group controlId="password" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
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
              <a href="/signin/google" className="mx-2">
                <img src="path/to/google-icon.svg" alt="Google" width="32" />
              </a>
              <a href="/signin/facebook" className="mx-2">
                <img
                  src="path/to/facebook-icon.svg"
                  alt="Facebook"
                  width="32"
                />
              </a>
              <a href="/signin/linkedin" className="mx-2">
                <img
                  src="path/to/linkedin-icon.svg"
                  alt="LinkedIn"
                  width="32"
                />
              </a>
              <a href="/signin/twitter" className="mx-2">
                <img src="path/to/twitter-icon.svg" alt="Twitter" width="32" />
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
