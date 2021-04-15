import React from 'react';
import {
  Container,
  Form,
  Button,
} from 'react-bootstrap';
import Navigation from '../Shared/Navigation';

// const submitForm = () => {
  
// }

const AdminHome = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Container className="py-5 text-center">
        <h1 className="py-5 text-center">Welcome Admin</h1>
        <Form>
          <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/AdminLandingPage" /*onSubmit={submitForm}*/
          >
            Create Patient
            <br />
            CRUD
          </Button>{" "}
          <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/AdminLandingPage2" /*onSubmit={submitForm}*/
          >
            Create Care Provider <br /> CRUD
          </Button>
          <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/CareProviderLandingPage" /*onSubmit={submitForm}*/
          >
            Update Patient
            <br />
            CRUD
          </Button>{" "}
          <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/AdminLandingPage3" /*onSubmit={submitForm}*/
          >
            Update Care Provider <br /> CRUD
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default AdminHome;
