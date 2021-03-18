import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style/login.css";
import logo from "./../assets/logo-naripan-motor.jpg";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (username === "admin" && password === "admin") {
      alert("login berhasil");
      props.history.push("/dashboard");
    } else {
      alert("username/password salah");
    }
  }

  return (
    <div className="Login" style={{ margin: 10 }}>
      <div className="logo-area mb-5">
        <h3>ADMIN DASHBOARD</h3>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="" controlId="email">
          <Form.Control
            style={{ height: 50, borderRadius: 10 }}
            autoFocus
            placeholder="Username"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Control
            style={{ height: 50, borderRadius: 10 }}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          <b>Login</b>
        </Button>
      </Form>
      <Container className="mt-5">
        <h5>Copyright © Naripan Motor 2020</h5>
      </Container>
    </div>
  );
}
