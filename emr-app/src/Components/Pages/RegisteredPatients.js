import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navigation from "../Shared/Navigation";
import { Table } from "reactstrap";
import { Button } from "react-bootstrap";

const RegisteredPatients = (props) => {
  console.log(props);
  let id = props.match.params.health_card_number;
  const [patients, setPatients] = useState([]);
  // const [patient, setPatient] = useState("");
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      console.log("something");
      const res = await fetch(
        `https://run.mocky.io/v3/9169b99f-3d1b-43a8-8776-4e9587211b60`,
        {
          method: "GET",
        }
      );
      res.json().then((res) => setPatients([...res]));
    }
    fetchData();
  }, [id]);

  const handleDelete = (event, id) => {
    event.preventDefault();
    console.log("Donald was here");
    console.log(id);

    fetch(`/api/patients/${id}`, {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    history.push("/patients");
  };

  const handleEdit = (event, patient) => {
    event.preventDefault();
    // window.location.href = `/AdminUpdatePatientPage/${patient.healthCardNumber}`;
    window.location.href = `/AdminUpdatePatientPage`;
    // console.log("D is here again");
    // console.log(patient);
    // setForm({ display: "block" });
    // setPatient(patient);
  };

  return (
    <React.Fragment>
      <Navigation />
      <Table responsive>
        <thead>
          <tr>
            <th>Health Card Number</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <div key={patient.health_card_number}>
              <tr>
                <td>{patient.health_card_number}</td>
                <td>{patient.first_name}</td>
                <td>{patient.last_name}</td>
                <td>{patient.last_name}</td>
                <td>{patient.last_name}</td>
                <td>{patient.last_name}</td>
                <td>{patient.last_name}</td>
                <td>{patient.last_name}</td>
                <td>
                  <Button
                    onClick={(event) => {
                      handleDelete(event, patient.health_card_number);
                    }}
                  >
                    Delete Me!
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={(event) => {
                      handleEdit(event, patient.health_card_number);
                    }}
                  >
                    Edit Me!
                  </Button>
                </td>
              </tr>
            </div>
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
    </React.Fragment>
  );
};

export default RegisteredPatients;
