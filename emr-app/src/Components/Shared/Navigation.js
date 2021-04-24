import React from "react";
import { Nav, NavDropdown, Button } from "react-bootstrap";
import { BoxArrowRight } from "react-bootstrap-icons";
import isAuthenticated from "../../Utilities/authHelper";

const goBack = () => {
  window.history.back();
};

const Navigation = () => {
  const login_id = isAuthenticated().login_id;
  const logout = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("token");
    window.location.replace("/");
  };
  return (
    <div style={{ borderBottom: "3px solid grey", marginBottom: "5px" }}>
      <Nav style={{ border: "2px black" }}>
        <div className="btn-group">
          <Button variant="link" style={{ fontSize: "2rem" }} onClick={goBack}>
            <i className="fas fa-arrow-left"></i>
          </Button>
        </div>
        <h1 style={{ fontSize: "2rem", padding: "1rem" }}>
          Group-D Clinic Group
        </h1>
        <div className="ml-auto">
          <NavDropdown title={login_id} id="basic-nav-dropdown">
            <NavDropdown.Item href="/">
              <BoxArrowRight onClick={logout} />
              {""} Sign Out
            </NavDropdown.Item>
            {/* <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
          </NavDropdown>
        </div>
      </Nav>
    </div>
  );
};

export default Navigation;
