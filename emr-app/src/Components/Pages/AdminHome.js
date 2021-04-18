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
      <Container className="py-5 text-center">
      <Navigation />
        <h1 className="py-5 text-center">Welcome Admin</h1>
        <Form>
          <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/AdminCreatePatientPage" /*onSubmit={submitForm}*/
          >
            Create Patient
            <br />
            CRUD
          </Button>{" "}
          <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/AdminCreateCareProviderPage" /*onSubmit={submitForm}*/
          >
            Create Care Provider <br /> CRUD
          </Button>
          <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/UpdatePatientPage" /*onSubmit={submitForm}*/
          >
            Update Patient
            <br />
            CRUD
          </Button>{" "}
          <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/AdminUpdateCareProviderPage" /*onSubmit={submitForm}*/
          >
            Update Care Provider <br /> CRUD
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default AdminHome;
