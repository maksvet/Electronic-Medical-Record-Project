import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import Navigation from "../Shared/Navigation";
import isAuthenticated from "../../utilities/authHelper";

const AdminHome = () => {
  const isadmin = isAuthenticated().isadmin;
  return (
    <React.Fragment>
      <Container className="py-5 text-center">
        <Navigation />
        <h1 className="py-5 text-center">
          Welcome,{" "}
          <span className="userName">{isAuthenticated().login_id}</span>
        </h1>
        <Form>
          {!!isadmin && (
            <React.Fragment>
              <Button
                className="ahbtn"
                variant="primary"
                type="submit"
                href="/AdminCreatePatientPage"
              >
                Create Patient
                <br />
                CRUD
              </Button>
              <Button
                className="ahbtn"
                variant="primary"
                type="submit"
                href="/AdminCreateCareProviderPage"
              >
                Create Care Provider <br /> CRUD
              </Button>

              {/* <Button
                className="ahbtn"
                variant="primary"
                type="submit"
                href="/AdminUpdateCareProviderPage"
              >
                Update Care Provider <br /> CRUD
              </Button> */}
              <Button
                className="ahbtn"
                variant="primary"
                type="submit"
                href="/RegisteredCareProviders"
              >
                Care Provider List <br /> CRUD
              </Button>
            </React.Fragment>
          )}
          {/* <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/UpdatePatientPage"
          >
            Update Patient
            <br />
            CRUD
          </Button>{" "} */}
          <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/RegisteredPatients"
          >
            Patient List <br /> CRUD
          </Button>
          <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/CareProviderHome"
          >
            Search Patient
            <br />
            CRUD
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default AdminHome;
