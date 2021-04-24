import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import Navigation from "../Shared/Navigation";
import { Table } from "reactstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

var token = sessionStorage.getItem("token");

const RegisteredPatients = (props) => {
  const [patients, setPatients] = useState([]);
  // const [patient, setPatient] = useState("");
  // const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:9000/patient/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          Authorization: `Bearer ${token}`,
        },
      });
      res.json().then((res) => setPatients([...res]));
    }
    fetchData();
  }, [patients]);

  function handleDelete(event, health_card_number) {
    event.preventDefault();
    const index = patients.findIndex(
      (props) => props.health_card_number === health_card_number
    );
    patients.splice(index, 1);
    setPatients([...patients]);
    console.log(patients);

    fetch(`http://localhost:9000/patient/${health_card_number}`, {
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

  const handleEdit = (event, health_card_number) => {
    event.preventDefault();
    // window.location.href = `/AdminUpdatePatientPage/${patient.healthCardNumber}`;
    window.location.href = `/UpdatePatientPage/${health_card_number}`;
    // console.log("D is here again");
    // console.log(patient);
    // setForm({ display: "block" });
    // setPatient(patient);
  };

  return (
    <Container className="p-3">
      <Navigation />
      <h1>Registered Patients</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>Health Card Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <React.Fragment key={patient.health_card_number}>
              <tr>
                <td>{patient.health_card_number}</td>
                <td>{patient.first_name}</td>
                <td>{patient.last_name}</td>
                <td>{patient.dob}</td>
                <td>{patient.gender}</td>
                <td>
                  <Button
                    onClick={(event) => {
                      handleEdit(event, patient.health_card_number);
                    }}
                    variant="outline-secondary"
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={(event) => {
                      handleDelete(event, patient.health_card_number);
                    }}
                    variant="outline-danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
      {/* <Navigation />
      {patients.map((patient) => (
        <div key={patient.id}>
          <p>{patient.name}</p>
          <img
            src={patient.image}
            alt={patient.name}
            width="300"
            height="300"
          />
          <button
            onClick={(e) => {
              handleDelete(e, patient.id);
            }}
          >
            Delete Me!
          </button>
          <button
            onClick={(e) => {
              handleEdit(e, patient);
            }}
          >
            Edit Me!
          </button>
        </div>
      ))} */}
    </Container>
  );
};

export default RegisteredPatients;
