import React from "react";
import { Container, Form, Button, FormControl } from "react-bootstrap";
import Navigation from "../Shared/Navigation";

// const submitForm = () => {

// }

const CareProviderHome = () => {
  return (
    <Container className="p-3">
      <Navigation />
      <h2 className="py-5 text-center">
        Welcome Care Provider: <span className="userName">John Doe</span>
      </h2>

      <Form className="p-5 mx-5" inline>
        <FormControl
          type="text"
          placeholder="Health Card Number"
          className="mr-sm-3"
        />
        <Button variant="outline-success" href="/IndividualPatientInfoPage">
          Search
        </Button>
      </Form>

      {/* <Form> */}
      {/* <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/UpdatePatientPage"
          >
            Update Patient
            <br />
            CRUD
          </Button>
        </Form> */}
    </Container>
  );
};

export default CareProviderHome;
