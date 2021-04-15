import React from 'react';
import { Tabs, Tab, Form, FormControl, Button } from 'react-bootstrap';
import CreatePatient from './CreatePatient';
import CreatePersonalDetails from '../Pages/Forms/Person';
import CreateContactInfo from '../Pages/Forms/ContactInformation';
import Navigation from "../Shared/Navigation";

const Admin_landing_page = () => {
  return (
    <div>
      <Navigation />
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        {/* <Tab eventKey="home" title="Home"></Tab> */}
        <Tab
          eventKey="createPersonalDetails"
          title="Personal Details"
          className="container p-3 text-center"
        >
          <h1>Personal Details</h1>
          <CreatePersonalDetails />
        </Tab>
        <Tab
          eventKey="createContactInfo"
          title="Contact Info"
          className="container p-3 text-center"
        >
          <h1>Contact Info</h1>
          <CreateContactInfo />
        </Tab>
        <Tab
          eventKey="createPatient"
          title="Patient Details"
          className="container p-3 text-center"
        >
          <CreatePatient />
        </Tab>
        <Tab eventKey="maintainPatient" title="Maintain Patient">
          <Form className="p-5 mx-5" inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Admin_landing_page;
