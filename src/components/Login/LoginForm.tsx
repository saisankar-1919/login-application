import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../styles/Login.module.css";

const LoginForm: React.FC = () => {
  return (
    <Form>
      <Form.Group controlId="usernameOrEmail" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Username or email"
          className={styles.squareInput}
        />
      </Form.Group>
      <Form.Group controlId="password" className="mb-3">
        <Form.Control
          type="password"
          placeholder="Enter password"
          className={styles.squareInput}
        />
      </Form.Group>
      <Form.Group controlId="keepMeSignedIn" className="mb-3">
        <Form.Check type="checkbox" label="Keep me signed in" />
      </Form.Group>
      <Button variant="dark" type="submit" className="w-100 mb-3">
        Sign In
      </Button>
    </Form>
  );
};

export default LoginForm;
