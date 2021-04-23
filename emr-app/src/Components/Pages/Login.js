import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Input } from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  const [login_id, setLoginID] = useState("");
  const [password, setPassword] = useState("");
  const [adminChecked, setAdminChecked] = useState(false);
  // const [auth, setAuth] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Successful!");
    console.log(login_id, password);
    console.log(adminChecked.toString());
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
    // // console.log(adminChecked.toString());
    // if (response.status >= 400) {
    //   setAuth(false);
    //   alert(`Oops! Error ${response.status}:  ${payload.message}`);
    // } else {
    //   sessionStorage.setItem("token", payload.token);

    if (adminChecked) {
      let { from } = location.state || { from: { pathname: "/AdminHome" } };
      history.replace(from);
    } else {
      let { from } = location.state || {
        from: { pathname: "/CareProviderHome" },
      };
      history.replace(from);
    }

    // let { from } = location.state || { from: { pathname: "/AdminHome" } };
    // history.replace(from);
    // }
    setLoginID("");
    setPassword("");
  };

  // const handleCheckBox = (checked) => {
  //   if (checked) {
  //     console.log("checked!");
  //   } else {
  //     console.log("not checked!");
  //   }
  // };

  return (
    <Container className="py-5">
      <h1 className="py-1 text-center">Group-D Clinic Group</h1>
      <h2 className="text-center">Electronic Medical Record System</h2>
      <div className="row h-100 justify-content-center align-items-center">
        {/* {!auth && <div>Invalid credentials, please try again</div>} */}
        <Form onSubmit={handleSubmit} className= "loginForm">
          <Form.Group>
            {/* <Form.Label>User ID</Form.Label> */}
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
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Admin"
              checked={adminChecked}
              onChange={(e) => setAdminChecked(e.target.checked)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" >
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
