import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import Navigation from "../Shared/Navigation";
import { Button } from "react-bootstrap";
import { Table } from "reactstrap";
import { Container } from "react-bootstrap";

var token = sessionStorage.getItem("token");

const RegisteredCareProviders = (props) => {
  const [careProviders, setCareProviders] = useState([]);
  // const [careProvider, setCareProvider] = useState("");
  // const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:9000/careprovider/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          Authorization: `Bearer ${token}`,
        },
      });
      res.json().then((res) => setCareProviders([...res]));
    }
    fetchData();
  }, [careProviders]);

  function handleDelete(event, employee_id) {
    event.preventDefault();
    const index = careProviders.findIndex(
      (props) => props.employee_id === employee_id
    );
    careProviders.splice(index, 1);
    setCareProviders([...careProviders]);
    console.log(careProviders);

    fetch(`http://localhost:9000/careprovider/${employee_id}`, {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
    // history.push("/patients");
  }

  const handleEdit = (event, employee_id) => {
    event.preventDefault();
    // window.location.href = `/AdminUpdatePatientPage/${patient.healthCardNumber}`;
    window.location.href = `/AdminUpdateCareProviderPage/${employee_id}`;
    // console.log("D is here again");
    // console.log(patient);
    // setForm({ display: "block" });
    // setPatient(patient);
  };

  return (
    <Container className="p-3">
      <Navigation />
      <h1>Registered Care Providers</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Admin</th>
          </tr>
        </thead>
        {careProviders.map((careProvider) => (
          <React.Fragment key={careProvider.employee_id}>
            <tbody>
              <tr>
                <td>{careProvider.employee_id}</td>
                <td>{careProvider.job_title}</td>
                <td>{careProvider.first_name}</td>
                <td>{careProvider.last_name}</td>
                <td>{careProvider.isadmin}</td>
                <td>
                  <Button
                    onClick={(event) => {
                      handleEdit(event, careProvider.employee_id);
                    }}
                    variant="outline-secondary"
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={(event) => {
                      handleDelete(event, careProvider.employee_id);
                    }}
                    variant="outline-danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </Table>
    </Container>
  );
};

export default RegisteredCareProviders;
