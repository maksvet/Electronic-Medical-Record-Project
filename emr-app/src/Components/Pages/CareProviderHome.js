import React from 'react';
import {
  Container,
  Form,
  Button,
  FormControl
} from 'react-bootstrap';
import Navigation from '../Shared/Navigation';

// const submitForm = () => {
  
// }

const CareProviderHome = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Container className="py-5 text-center">
        <h1 className="py-5 text-center">Welcome John Doe</h1>

        <Form className="p-5 mx-5" inline>
          <FormControl
            type="text"
            placeholder="Enter Health Card Number"
            className="mr-sm-2"
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
    </React.Fragment>
  );
};

export default CareProviderHome;
