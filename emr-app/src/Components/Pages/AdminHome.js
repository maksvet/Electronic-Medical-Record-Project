import React from 'react';
import {
  Container,
  Form,
  Button,
} from 'react-bootstrap';
import Navigation from '../Shared/Navigation';

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
            href="/AdminCreatePatientPage" 
          >
            Create Patient
            <br />
            CRUD
          </Button>{" "}
          <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/AdminCreateCareProviderPage" 
          >
            Create Care Provider <br /> CRUD
          </Button>
          <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/UpdatePatientPage" 
          >
            Update Patient
            <br />
            CRUD
          </Button>{" "}
          <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/AdminUpdateCareProviderPage" 
          >
            Update Care Provider <br /> CRUD
          </Button>
          <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/RegisteredCareProviders" 
          >
            Care Provider List <br /> CRUD
          </Button>
          <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/RegisteredPatients" 
          >
            Patient List <br /> CRUD
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default AdminHome;
