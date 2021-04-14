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
      <Container className="py-5">
        <h1 className="py-5 text-center">Welcome Admin</h1>
        <Form>
          <Button
            variant="primary"
            type="submit"
            href="/AdminLandingPage" /*onSubmit={submitForm}*/
          >
            Patient
          </Button>{" "}
          <Button
            variant="primary"
            type="submit"
            href="/AdminLandingPage2" /*onSubmit={submitForm}*/
          >
            Care Provider
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default AdminHome;
