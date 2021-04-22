import React, { useState } from 'react';
import {
  Container,
  Form,
  Button,
} from 'react-bootstrap';
import { Input } from 'reactstrap';
// import { useHistory, useLocation } from 'react-router-dom';

const Navigation = () => {
  // let history = useHistory();
  // let location = useLocation();
  const [login_id, setLoginID] = useState("");
  const [password, setPassword] = useState("");
  // const [auth, setAuth] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Successful!");
    console.log(login_id, password);
    // const response = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     login_id,
    //     password,
    //   }),
    // });

    // const payload = await response.json();
    // if (response.status >= 400) {
    //   setAuth(false);
    //   alert(`Oops! Error ${response.status}:  ${payload.message}`);
    // } else {
    //   sessionStorage.setItem("token", payload.token);

    //   let { from } = location.state || { from: { pathname: "/AdminHome" } };
    //   history.replace(from);
    // }
   setLoginID("");
    setPassword("");
  };

  return (
    <Container className="py-5">
      {/* {!auth && <div>Invalid credentials, please try again</div>} */}
      <h1 className="py-5 text-center">Electronic Medical Record System</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>User ID</Form.Label>
          <Input
            type="text"
            id="login_id"
            placeholder="Enter User ID"
            value={login_id}
            onChange={(e) => setLoginID(e.target.value)}
          />
          <Form.Text style={{ color: "black" }}>
            * Only registered care providers can access this system.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Input
            style={{  }}
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Admin" />
        </Form.Group>
        <Button variant="primary" type="submit" href="/AdminHome">
          Admin
        </Button>{" "}
        <Button variant="primary" type="submit" href="/CareProviderHome">
          Care Provider
        </Button>
      </Form>
    </Container>
  );
};

export default Navigation;
