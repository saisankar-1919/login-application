import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../styles/Login.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/authSlice";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setLocalError(
        "Password must be at least 8 characters long and include a capital letter, a number, and a symbol."
      );
      return;
    }

    setLocalError("");

    const user = { email, password };
    dispatch(login(user));

    navigate("/home");
  };

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group controlId="usernameOrEmail" className="mb-3">
        <Form.Control
          type="text"
          id="email"
          value={email}
          placeholder="Username or email"
          className={styles.squareInput}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="password" className="mb-3">
        <Form.Control
          type="password"
          placeholder="Enter password"
          className={styles.squareInput}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {localError && <div style={{ color: "red" }}>{localError}</div>}
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
