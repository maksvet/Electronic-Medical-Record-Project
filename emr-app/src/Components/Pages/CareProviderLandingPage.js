import React from 'react';
import { Nav, NavDropdown, Tabs, Tab } from 'react-bootstrap';
import { BoxArrowRight } from 'react-bootstrap-icons';
import CreatePatient from './CreatePatient';
import CreateCareProvider from './CreateCareProvider';

const CareProviderLandingPage = () => {
  return (
    <div>
      <Nav>
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
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home"></Tab>
        <Tab
          eventKey="createPatient"
          title="Create Patient"
          className="container p-3 text-center"
        >
          <CreatePatient />
        </Tab>
        <Tab
          eventKey="createCareProvider"
          title="Create Care Provider"
          className="container p-3 text-center"
        >
          <CreateCareProvider />
        </Tab>
        <Tab eventKey="maintainPatient" title="Maintain Patient"></Tab>
        <Tab
          eventKey="maintainCareProvider"
          title="Maintain Care Provider"
        ></Tab>
      </Tabs>
    </div>
  );
};

export default CareProviderLandingPage;
