import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Input } from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  const [login_id, setLogin_id] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      var response = await fetch("http://localhost:9000/auth", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          login_id,
          password,
        }),
      });
      var payload = await response.json();
      alert("Successful!");
    } catch (error) {
      alert(error);
    }

    if (response.status >= 400) {
      setAuth(false);
      alert(`Oops! Error ${response.status}:  ${payload.message}`);
    } else {
      sessionStorage.setItem("token", payload.token);

      let { from } = location.state || { from: { pathname: "/AdminHome" } };
      history.replace(from);
    }
    setLogin_id("");
    setPassword("");
  };

  return (
    <Container className="py-5">
      <h1 className="py-1 text-center">Group-D Clinic Group</h1>
      <h2 className="text-center">Electronic Medical Record System</h2>
      <div className="row h-100 justify-content-center align-items-center">
        {!auth && <div>Invalid credentials, please try again</div>}
        <Form onSubmit={handleSubmit} className="loginForm">
          <Form.Group>
            {/* <Form.Label>User ID</Form.Label> */}
            <Input
              type="text"
              id="login_id"
              placeholder="Enter User ID"
              value={login_id}
              onChange={(e) => setLogin_id(e.target.value)}
            />
            <Form.Text style={{ color: "black" }}>
              * Only registered care providers can access this system.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            {/* <Form.Label>Password</Form.Label> */}
            <Input
              style={{}}
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>{" "}
          {/* <Button variant="primary" type="submit">
          Care Provider
        </Button> */}
        </Form>
      </div>
    </Container>
  );
};

export default Login;
