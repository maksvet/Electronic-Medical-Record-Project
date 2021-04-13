import React from 'react';
import { Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { BoxArrowRight } from 'react-bootstrap-icons';
import CreatePatient from './CreatePatient';
import CreateCareProvider from './CreateCareProvider';

const CareProviderLandingPage = () => {
  return (
    <div>
      <Nav className="p-2 mx-2">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
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

export default CareProviderLandingPage;
