import React, { useState, useEffect } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Row, Col, Input } from "reactstrap";
import Navigation from "../Shared/Navigation";
import { Container } from "react-bootstrap";

const CareProviderUpdatePatientPage = (props) => {
  const [patient, setPatient] = useState("");

  console.log(props);
  let id = props.match.params.health_card_number;

  useEffect(() => {
    async function fetchData() {
      console.log("something");
      const res = await fetch(
        `https://run.mocky.io/v3/9169b99f-3d1b-43a8-8776-4e9587211b60`,
        {
          method: "GET",
        }
      );
      res.json().then((res) => setPatient(...res));
    }
    fetchData();
  }, [id]);

  const [personalInfo, setPersonalInfo] = useState({
    first_name: patient.first_name,
    middle_name: patient.middle_name,
    last_name: patient.last_name,
    dob: patient.dob,
    gender: patient.gender,
  });

  const [contactInfo, setContactInfo] = useState({
    phone_number: patient.phone_number,
    street_number: patient.street_number,
    street_name: patient.street_name,
    city_Town: patient.city,
    province_State: patient.province,
    country: patient.country,
    postal_code: patient.postal_code,
    email: patient.email,
    fax: patient.fax,
  });

  const [patientDetailsInfo, setPatientDetailsInfo] = useState({
    language: patient.language,
    emergency_contact_name: patient.emergency_contact_name,
    emergency_contact_number: patient.emergency_contact_number,
    allergies: patient.allergies,
    blood_type: patient.blood_type,
    race: patient.race,
    marital_status: patient.marital_status,
    family_size: patient.family_size,
    occupation: patient.occupation,
    income_level: patient.income_level,
    nationality: patient.nationality,
    religion: patient.religion,
  });

  const [patientMedicalInfo, setPatientMedicalInfo] = useState({
    health_card_number: patient.health_card_number,
    insurance_details: patient.insurance_details,
    family_physician: patient.family_physician,
    immunization_type: patient.immunization_type,
    immunization_date: patient.immunization_date,
    employee_id: patient.employee_id,
  });

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

  const handleChange1 = (event) => {
    setContactInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit1 = async (event) => {
    alert("Successful Submit!");
    event.preventDefault();

    console.log(contactInfo);
    // const response = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     phone_number,
    //     street_number,
    //     street_name,
    //     city_Town,
    //     province_State,
    //     country,
    //     postal_code,
    //     email,
    //     fax,
    //   }),
    // });

    // const payload = await response.json();
    // if (response.status >= 400) {
    //   alert(`Oops! Error ${response.status}:  ${payload.message}`);
    // } else {
    //   alert(`Congratulations! Submission submitted with id: ${payload.id}`);
    // }
  };

  const handleChange2 = (event) => {
    setPersonalInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit2 = async (event) => {
    alert("Successful Submit!");
    event.preventDefault();

    console.log(personalInfo);
    // const response = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     first_name,
    //     middle_name,
    //     last_name,
    //     dob,
    //     gender,
    //   }),
    // });

    // const payload = await response.json();
    // if (response.status >= 400) {
    //   alert(`Oops! Error ${response.status}:  ${payload.message}`);
    // } else {
    //   alert(`Congratulations! Submission submitted with id: ${payload.id}`);
    // }
  };

  const handleChange3 = (event) => {
    setPatientDetailsInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit3 = async (event) => {
    alert("Successful Submit!");
    event.preventDefault();

    console.log(patientDetailsInfo);
    // const response = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     language,
    //     health_card_number,
    //     emergency_contact_name,
    //     emergency_contact_number,
    //     allergies,
    //     blood_type,
    //     race,
    //     marital_status,
    //     family_size,
    //     occupation,
    //     income_level,
    //     nationality,
    //     religion,
    //   }),
    // });

    // const payload = await response.json();
    // if (response.status >= 400) {
    //   alert(`Oops! Error ${response.status}:  ${payload.message}`);
    // } else {
    //   alert(`Congratulations! Submission submitted with id: ${payload.id}`);
    // }
  };

  const handleChange4 = (event) => {
    setPatientMedicalInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit4 = async (event) => {
    alert("Successful Submit!");
    event.preventDefault();

    console.log(patientMedicalInfo);
    // const response = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     insurance_details,
    //     family_physician,
    //     immunization_type,
    //     immunization_date,
    //     employee_id,
    //   }),
    // });

    // const payload = await response.json();
    // if (response.status >= 400) {
    //   alert(`Oops! Error ${response.status}:  ${payload.message}`);
    // } else {
    //   alert(`Congratulations! Submission submitted with id: ${payload.id}`);
    // }
  };

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

      <h1>
        Care Provider Update Patient:{" "}
        <span className="userName">{patient.first_name}</span>
      </h1>
      <h2>Contact Info</h2>
      <Form onSubmit={handleSubmit1}>
        <Form.Row>
          <Form.Group as={Col}>
            <label>Phone Number</label>
            <Form.Control
              type="tel"
              name="phone_number"
              placeholder="Phone Number"
              id="phone_number"
              defaultValue={patient.phone_number}
              onChange={handleChange1}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <label>Street Number</label>
            <Form.Control
              type="text"
              name="street_number"
              placeholder="Street Number"
              id="street_number"
              defaultValue={patient.street_number}
              onChange={handleChange1}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <label>Street Name</label>
            <Form.Control
              type="text"
              name="street_name"
              placeholder="Street Name"
              id="street_name"
              defaultValue={patient.street_name}
              onChange={handleChange1}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <label>City</label>
            <Form.Control
              type="text"
              name="city_Town"
              placeholder="City"
              id="city_Town"
              defaultValue={patient.city_Town}
              onChange={handleChange1}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <label>Province</label>
            <Form.Control
              as="select"
              name="province_State"
              id="province_State"
              defaultValue={patient.province_State}
              onChange={handleChange1}
            >
              <option>{patient.province_State}</option>
              <option>Alberta</option>
              <option>British Columbia</option>
              <option>Manitoba</option>
              <option>New Brunswick</option>
              <option>Newfoundland and Labrador</option>
              <option>Northwest Territories</option>
              <option>Nova Scotia</option>
              <option>Nunavut</option>
              <option>Ontario</option>
              <option>Prince Edward Island</option>
              <option>Quebec</option>
              <option>Saskatchewan</option>
              <option>Yukon</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <label>Country</label>
            <Form.Control
              as="select"
              name="country"
              id="country"
              defaultValue={patient.country}
              onChange={handleChange1}
            >
              <option>{patient.country}</option>
              <option>Canada</option>
              <option>USA</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <label>Postal Code</label>
            <Form.Control
              type="text"
              name="postal_code"
              placeholder="Enter Postal Code"
              id="postal code"
              defaultValue={patient.postal_code}
              onChange={handleChange1}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <label>Email</label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              id="email"
              defaultValue={patient.email}
              onChange={handleChange1}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <label>Fax</label>
            <Form.Control
              type="tel"
              name="fax"
              placeholder="Enter Fax"
              id="fax"
              defaultValue={patient.fax}
              onChange={handleChange1}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>

      <h2>Personal Details</h2>
      <Form onSubmit={handleSubmit2}>
        <Row className="py-2">
          <Col sm={4}>
            <label>First Name</label>
            <Input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Enter First Name"
              defaultValue={patient.first_name}
              onChange={handleChange2}
            />
          </Col>

          <Col sm={4}>
            <label>Middle Name</label>
            <Input
              type="text"
              name="middle_name"
              id="middle_name"
              placeholder="Enter Middle Name"
              defaultValue={patient.middle_name}
              onChange={handleChange2}
            />
          </Col>

          <Col sm={4}>
            <label>Last Name</label>
            <Input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Enter Last Name"
              defaultValue={patient.last_name}
              onChange={handleChange2}
            />
          </Col>
        </Row>

        <Row className="py-2">
          <label>Date of Birth</label>
          <Col sm={2}>
            <Input
              type="date"
              name="dob"
              id="dob"
              placeholder="Enter Date Of Birth"
              defaultValue={patient.dob}
              onChange={handleChange2}
            />
          </Col>

          <Col sm={2}>
            <label>Gender</label>
            <FormControl
              as="select"
              className="mr-sm-2"
              name="gender"
              id="gender"
              defaultValue={patient.gender}
              onChange={handleChange2}
              custom
            >
              <option>{patient.gender}</option>
              <option>Male</option>
              <option>Female</option>
              <option>Non-Binary</option>
            </FormControl>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>

      <h2>Patient Details</h2>
      <Form onSubmit={handleSubmit3}>
        <Form.Row>
          <Form.Group as={Col} sm={4}>
            <label>Health Card Number</label>
            <Form.Control
              type="text"
              name="health_card_number"
              placeholder="Enter Health Card Number"
              id="health_card_number"
              defaultValue={patient.health_card_number}
              onChange={handleChange3}
            />
          </Form.Group>

          <Form.Group as={Col} sm={3}>
            <label>Marital Status</label>
            <Form.Control
              as="select"
              name="marital_status"
              id="marital_status"
              defaultValue={patient.marital_status}
              onChange={handleChange3}
            >
              <option>{patient.marital_status}</option>
              <option>Common Law</option>
              <option>Divorced</option>
              <option>Married</option>
              <option>Single</option>
              <option>Separated</option>
              <option>Widowed</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} sm={2}>
            <label>Language</label>
            <Form.Control
              as="select"
              name="language"
              id="language"
              defaultValue={patient.language}
              onChange={handleChange3}
            >
              <option>{patient.language}</option>
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} sm={2}>
            <label>Nationality</label>
            <Form.Control
              as="select"
              name="nationality"
              id="nationality"
              defaultValue={patient.nationality}
              onChange={handleChange3}
            >
              <option>{patient.nationality}</option>
              <option>Canadian</option>
              <option>American</option>
              <option>English</option>
              <option>Chinese</option>
              <option>Irish</option>
              <option>Italian</option>
              <option>Indian</option>
              <option>Scottish</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} sm={2}>
            <label>Religion</label>
            <Form.Control
              as="select"
              name="religion"
              id="religion"
              defaultValue={patient.religion}
              onChange={handleChange3}
            >
              <option>{patient.religion}</option>
              <option>Roman Catholicism</option>
              <option>Protestantism</option>
              <option>Islam</option>
              <option>Non-religious</option>
              <option>Hinduism</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} sm={2}>
            <label>Race</label>
            <Form.Control
              as="select"
              name="race"
              id="race"
              defaultValue={patient.race}
              onChange={handleChange3}
            >
              <option>{patient.race}</option>
              <option>Aboriginal</option>
              <option>Arab/West Asian</option>
              <option>Black</option>
              <option>Chinese</option>
              <option>Filipino</option>
              <option>Japanese</option>
              <option>Korean</option>
              <option>Latin American</option>
              <option>South Asian</option>
              <option>South East Asian</option>
              <option>White (Caucasian)</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} sm={3}>
            <label>Emergency Contact Number</label>
            <Form.Control
              type="text"
              name="emergency_contact_number"
              placeholder="Enter Emergency Contact Number"
              id="emergency_contact_number"
              defaultValue={patient.emergency_contact_number}
              onChange={handleChange3}
            />
          </Form.Group>

          <Form.Group as={Col} sm={8}>
            <label>Emergency Contact Name</label>
            <Form.Control
              type="text"
              name="emergency_contact_name"
              placeholder="Enter Emergency Contact Name"
              id="emergency_contact_name"
              defaultValue={patient.emergency_contact_name}
              onChange={handleChange3}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <label>Occupation</label>
            <Form.Control
              type="text"
              name="occupation"
              placeholder="Enter Occupation"
              id="occupation"
              defaultValue={patient.occupation}
              onChange={handleChange3}
            />
          </Form.Group>

          <Form.Group as={Col} sm={3}>
            <label>Income</label>
            <Form.Control
              as="select"
              name="income_level"
              id="income_level"
              defaultValue={patient.income_level}
              onChange={handleChange3}
            >
              <option>{patient.income_level}</option>
              <option> below 20000</option>
              <option>20000-30000</option>
              <option>30000-50000</option>
              <option>50000-70000</option>
              <option> over 70000</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} sm={2}>
            <label>Family Size</label>
            <Form.Control
              type="number"
              name="family_size"
              min="1"
              placeholder="Enter Family Size"
              id="family_size"
              defaultValue={patient.family_size}
              onChange={handleChange3}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>

      <h2>Medical History</h2>
      <Form onSubmit={handleSubmit4}>
        <Row>
          <Form.Group as={Col}>
            <label>Allergies</label>
            <Form.Control
              type="text"
              name="allergies"
              placeholder="Enter Allergies"
              id="allergies"
              defaultValue={patient.allergies}
              onChange={handleChange4}
            />
          </Form.Group>

          <Form.Group as={Col} sm={2}>
            <label>Blood Type</label>
            <Form.Control
              as="select"
              name="blood_type"
              id="blood_type"
              defaultValue={patient.blood_type}
              onChange={handleChange4}
            >
              <option>{patient.blood_type}</option>
              <option>A</option>
              <option>B</option>
              <option>AB</option>
              <option>O</option>
              <option>Unknown</option>
            </Form.Control>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <label>Insurance Details</label>
            <Form.Control
              type="text"
              name="insurance_details"
              placeholder="Enter Insurance Details"
              id="insurance_details"
              defaultValue={patient.insurance_details}
              onChange={handleChange4}
            />
          </Form.Group>

          <Form.Group as={Col} sm={4}>
            <label>Family Physician</label>
            <Form.Control
              type="text"
              name="family_physician"
              placeholder="Enter Family Physician"
              id="family_physician"
              defaultValue={patient.family_physician}
              onChange={handleChange4}
            />
          </Form.Group>
        </Row>

        <Form.Row>
          <Form.Group as={Col} sm={6}>
            <label>Immunization</label>
            <Form.Control
              type="text"
              name="immunization_type"
              placeholder="Enter Immunization Type"
              id="immunization_type"
              defaultValue={patient.immunization_type}
              onChange={handleChange4}
            />
          </Form.Group>

          <Form.Group as={Col} sm={2}>
            <label>Immunization Date</label>
            <Form.Control
              type="date"
              name="immunization_date"
              placeholder="Enter Immunization Date"
              id="immunization_date"
              defaultValue={patient.immunization_date}
              onChange={handleChange4}
            />
          </Form.Group>

          <Form.Group as={Col} sm={2}>
            <label>Employee ID</label>
            <Form.Control
              type="number"
              name="employee_id"
              placeholder="Enter Employee ID"
              id="employee_id"
              defaultValue={patient.employee_id}
              onChange={handleChange4}
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>

      <h2>Patient Notes</h2>
      <Form onSubmit={handleSubmit5}>
        <Form.Group as={Col} sm={2}>
          <label>Employee ID</label>
          <Form.Control
            type="text"
            name="employee_id"
            placeholder="Enter Employee ID"
            id="employee_id"
            onChange={handleChange5}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <label>Notes</label>
          <Form.Control
            type="textarea"
            name="patient_note"
            placeholder="Enter Patient Notes"
            id="patient_note"
            onChange={handleChange5}
          />
        </Form.Group>
        <Form.Group as={Col} sm={3}>
          <label>Patient Note Date</label>
          <Form.Control
            type="date"
            name="date_stamp"
            placeholder="Choose Date"
            id="date_stamp"
            onChange={handleChange5}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>

      <h2>Diagnostic Images</h2>
      <Form onSubmit={handleSubmit6}>
        <Form.Group as={Col} sm={2}>
          <label>Employee ID</label>
          <Form.Control
            type="text"
            name="employee_id"
            placeholder="Enter Employee ID"
            id="employee_id"
            onChange={handleChange6}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <label>Diagnostic Image</label>
          <Form.Control
            type="file"
            name="diagnostic_image"
            id="diagnostic_image"
            onChange={handleChange6}
          />
        </Form.Group>
        <Form.Group as={Col} sm={3}>
          <label>Date</label>
          <Form.Control
            type="date"
            name="date_stamp"
            placeholder="Enter Date"
            id="date_stamp"
            onChange={handleChange6}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>

      <h2>Lab Results</h2>
      <Form onSubmit={handleSubmit7}>
        <Form.Group as={Col}>
          <label>Lab Results</label>
          <Form.Control
            type="file"
            name="lab_result"
            placeholder="Attach Lab Result"
            id="lab_result"
            onChange={handleChange7}
          />
        </Form.Group>
        <Form.Group as={Col} sm={3}>
          <label>Results Date</label>
          <Form.Control
            type="date"
            name="date_stamp"
            placeholder="Enter Date"
            id="date_stamp"
            onChange={handleChange7}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>

      <h2>Medication</h2>
      <Form onSubmit={handleSubmit8}>
        <Form.Group as={Col}>
          <label>Medication</label>
          <Form.Control
            type="textarea"
            name="medication"
            placeholder="Enter Medication"
            id="medication"
            onChange={handleChange8}
          />
        </Form.Group>
        <Form.Group as={Col} sm={3}>
          <label>Date Prescribed</label>
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
            <label>Enter Prescription</label>
            <Form.Control
              type="text"
              name="prescription"
              placeholder="Enter Prescription"
              id="prescription"
              onChange={handleChange8}
            />
          </Form.Group>
          <Form.Group as={Col} sm={3}>
            <label>Date Last Filled</label>
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
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default CareProviderUpdatePatientPage;
