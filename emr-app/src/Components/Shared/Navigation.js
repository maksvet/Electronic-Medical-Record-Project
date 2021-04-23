import React from "react";
import { Nav, NavDropdown, Button } from "react-bootstrap";
import { BoxArrowRight, ArrowLeftCircle } from "react-bootstrap-icons";

const goBack = () => {
  window.history.back();
};

const Navigation = () => {
  return (
    <div style={{ borderBottom: "3px solid grey", marginBottom: "5px" }}>
      <Nav style={{ border: "2px black" }}>
        <div className="btn-group">
          <Button
            className="btn btn-outline-primary"
            style={{ fontSize: "2rem" }}
            onClick={goBack}
          >
            <i class="fas fa-arrow-left"></i>
          </Button>
          {/* <ArrowLeftCircle /> */}
        </div>
        <h1 style={{ fontSize: "20px", padding: "1rem" }}>
          Group-D Clinic Group
        </h1>
        <div className="ml-auto">
          <NavDropdown title="John Doe" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">
              <BoxArrowRight />
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
