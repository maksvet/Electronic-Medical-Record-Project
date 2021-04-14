import React from "react";
import {
  Tabs,
  Tab,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import CreateCareProvider from "./CreateCareProvider";
import CreatePersonalDetails from "../Pages/Forms/Person";
import Navigation from "../Shared/Navigation";

const AdminLandingPage2 = () => {
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
          <CreatePersonalDetails />
        </Tab>
        <Tab
          eventKey="createCareProvider"
          title="Create Care Provider"
          className="container p-3 text-center"
        >
          <CreateCareProvider />
        </Tab>
        <Tab eventKey="maintainCareProvider" title="Maintain Care Provider">
          <Form className="p-5 mx-5" inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Tab>
      </Tabs>
    </div>
  );
};

export default AdminLandingPage2;
