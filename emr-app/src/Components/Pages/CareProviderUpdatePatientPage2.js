import React, { useState, useEffect } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Row, Col, Input } from "reactstrap";
import Navigation from "../Shared/Navigation";
import { Container } from "react-bootstrap";

const CareProviderUpdatePatientPage2 = (props) => {
  const [patient, setPatient] = useState("");

  console.log(props);
  let id = props.match.params.health_card_number;

  useEffect(() => {
    async function fetchData() {
      console.log("something");
      const res = await fetch(
        `https://run.mocky.io/v3/26feedf3-4883-4db6-86e6-ac810d915797`,
        {
          method: "GET",
        }
      );
      res.json().then((res) => setPatient(...res));
    }
    fetchData();
  }, [id]);

  const [patientNotesInfo, setPatientNotesInfo] = useState({
    employee_id: patient.employee_id,
    employee_note: patient.note,
    date_stamp: patient.date_stamp,
  });

  const [patientDiagnosticInfo, setPatientDiagnosticInfo] = useState({
    employee_id: patient.employee_id,
    diagnostic_image: patient.diagnostic_image,
    date_stamp: patient.date_stamp,
  });

  const [patientLabResultsInfo, setPatientLabResultsInfo] = useState({
    lab_result: patient.lab_result,
    date_stamp: patient.date_stamp,
  });

  const [patientMedicationInfo, setPatientMedicationInfo] = useState({
    medication: patient.medication,
    date_stamp: patient.date_stamp,
    prescription: patient.prescription,
    last_filled_date: patient.last_filled_date,
  });

  const handleChange5 = (event) => {
    setPatientNotesInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit5 = async (event) => {
    alert("Successful Submit!");
    event.preventDefault();

    console.log(patientNotesInfo);
    // const response = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //       employee_id,
    //       note,
    //       date_stamp
    //   }),
    // });

    // const payload = await response.json();
    // if (response.status >= 400) {
    //   alert(`Oops! Error ${response.status}:  ${payload.message}`);
    // } else {
    //   alert(`Congratulations! Submission submitted with id: ${payload.id}`);
    // }
  };

  const handleChange6 = (event) => {
    setPatientDiagnosticInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit6 = async (event) => {
    alert("Successful Submit!");
    event.preventDefault();

    console.log(patientDiagnosticInfo);
    // const response = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     employee_id,
    //     diagnostic_image,
    //     date_stamp,
    //   }),
    // });

    // const payload = await response.json();
    // if (response.status >= 400) {
    //   alert(`Oops! Error ${response.status}:  ${payload.message}`);
    // } else {
    //   alert(`Congratulations! Submission submitted with id: ${payload.id}`);
    // }
  };

  const handleChange7 = (event) => {
    setPatientLabResultsInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit7 = async (event) => {
    alert("Successful Submit!");
    event.preventDefault();

    console.log(patientLabResultsInfo);
    // const response = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     lab_result,
    //     date_stamp,
    //   }),
    // });

    // const payload = await response.json();
    // if (response.status >= 400) {
    //   alert(`Oops! Error ${response.status}:  ${payload.message}`);
    // } else {
    //   alert(`Congratulations! Submission submitted with id: ${payload.id}`);
    // }
  };

  const handleChange8 = (event) => {
    setPatientMedicationInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit8 = async (event) => {
    alert("Successful Submit!");
    event.preventDefault();

    console.log(patientMedicationInfo);
    // const response = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     medication,
    //     date_stamp,
    //     prescription,
    //     last_filled_date
    //   }),
    // });

    // const payload = await response.json();
    // if (response.status >= 400) {
    //   alert(`Oops! Error ${response.status}:  ${payload.message}`);
    // } else {
    //   alert(`Congratulations! Submission submitted with id: ${payload.id}`);
    // }
  };

  return (
    <Container className="p-3">
      <Navigation />

      <h1>Add Patient Notes</h1>
      <h2>Patient Notes</h2>
      <Form onSubmit={handleSubmit5}>
        <Form.Group as={Col} sm={2}>
          <Form.Control
            type="text"
            name="employee_id"
            placeholder="Enter Employee ID"
            id="employee_id"
            onChange={handleChange5}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control
            type="textarea"
            name="patient_note"
            placeholder="Enter Patient Notes"
            id="patient_note"
            onChange={handleChange5}
          />
        </Form.Group>
        <Form.Group as={Col} sm={3}>
          <Form.Control
            type="date"
            name="date_stamp"
            placeholder="Choose Date"
            id="date_stamp"
            onChange={handleChange5}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>

      <h2>Diagnostic Images</h2>
      <Form onSubmit={handleSubmit6}>
        <Form.Group as={Col} sm={2}>
          <Form.Control
            type="text"
            name="employee_id"
            placeholder="Enter Employee ID"
            id="employee_id"
            onChange={handleChange6}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control
            type="file"
            name="diagnostic_image"
            id="diagnostic_image"
            onChange={handleChange6}
          />
        </Form.Group>
        <Form.Group as={Col} sm={3}>
          <Form.Control
            type="date"
            name="date_stamp"
            placeholder="Enter Date"
            id="date_stamp"
            onChange={handleChange6}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>

      <h2>Lab Results</h2>
      <Form onSubmit={handleSubmit7}>
        <Form.Group as={Col}>
          <Form.Control
            type="file"
            name="lab_result"
            placeholder="Attach Lab Result"
            id="lab_result"
            onChange={handleChange7}
          />
        </Form.Group>
        <Form.Group as={Col} sm={3}>
          <Form.Control
            type="date"
            name="date_stamp"
            placeholder="Enter Date"
            id="date_stamp"
            onChange={handleChange7}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>

      <h2>Medication</h2>
      <Form onSubmit={handleSubmit8}>
        <Form.Group as={Col}>
          <Form.Control
            type="textarea"
            name="medication"
            placeholder="Enter Medication"
            id="medication"
            onChange={handleChange8}
          />
        </Form.Group>
        <Form.Group as={Col} sm={3}>
          <Form.Control
            type="date"
            name="date_stamp"
            placeholder="Enter Date"
            id="date_stamp"
            onChange={handleChange8}
          />
        </Form.Group>
        <Row>
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              name="prescription"
              placeholder="Enter Prescription"
              id="prescription"
              onChange={handleChange8}
            />
          </Form.Group>
          <Form.Group as={Col} sm={3}>
            <Form.Control
              type="date"
              name="last_filled_date"
              placeholder="Enter Date"
              id="last_filled_date"
              onChange={handleChange8}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default CareProviderUpdatePatientPage2;
