import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { BoxArrowRight } from "react-bootstrap-icons";

const Navigation = () => {
  return (
    <div>
      <Nav>
        <h1 style={{ fontSize: "20px", padding: "1rem" }}>
          Group-D Clinic Group
        </h1>
        <div className="ml-auto">
          <NavDropdown title="John Doe" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <BoxArrowRight />
              {""} Sign Out
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Nav>
    </div>
  );
};

export default Navigation;
