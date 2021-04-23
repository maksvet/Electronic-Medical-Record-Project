import React, { useState, useEffect } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Row, Col, Input } from "reactstrap";
import Navigation from "../Shared/Navigation";
import { Container } from "react-bootstrap";

const UpdatePatientPage = (props) => {
  const [patient, setPatient] = useState([]);

  console.log(props);
  let id = props.match.params.health_card_number;

  useEffect(() => {
    async function fetchData() {
      console.log("something");
      const res = await fetch(
        `https://run.mocky.io/v3/c94433df-7ccf-4884-9224-16ce97623f48`,
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

  return (
    <Container className="p-3">
      <Navigation />

      <h1>Admin Update Patient</h1>
      <h2>Contact Info</h2>
      <Form onSubmit={handleSubmit1}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
              type="tel"
              name="phone_number"
              placeholder="Phone Number"
              id="phone_number"
              defaultValue={patient.phone_number}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="text"
              name="street_number"
              placeholder="Street Number"
              id="street_number"
              defaultValue={patient.street_number}
            />
          </Form.Group>

          <Form.Group as={Col}>
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
            <Form.Control
              as="select"
              name="province_State"
              id="province_State"
              defaultValue={patient.province_State}
              onChange={handleChange1}
            >
              <option>Choose Province</option>
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
            <Form.Control
              as="select"
              name="country"
              id="country"
              defaultValue={patient.country}
              onChange={handleChange1}
            >
              <option>Choose Country</option>
              <option>Canada</option>
              <option>USA</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
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
            <FormControl
              as="select"
              className="mr-sm-2"
              name="gender"
              id="gender"
              defaultValue={patient.gender}
              onChange={handleChange2}
              custom
            >
              <option value="0">Select Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Non-Binary</option>
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
            <Form.Control
              as="select"
              name="marital_status"
              id="marital_status"
              defaultValue={patient.marital_status}
              onChange={handleChange3}
            >
              <option>Choose Marital status</option>
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
            <Form.Control
              as="select"
              name="language"
              id="language"
              defaultValue={patient.language}
              onChange={handleChange3}
            >
              <option>Choose Language</option>
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} sm={2}>
            <Form.Control
              as="select"
              name="nationality"
              id="nationality"
              defaultValue={patient.nationality}
              onChange={handleChange3}
            >
              <option>Choose nationality</option>
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
            <Form.Control
              as="select"
              name="religion"
              id="religion"
              defaultValue={patient.religion}
              onChange={handleChange3}
            >
              <option>Choose Religion</option>
              <option>Roman Catholicism</option>
              <option>Protestantism</option>
              <option>Islam</option>
              <option>Non-religious</option>
              <option>Hinduism</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} sm={2}>
            <Form.Control
              as="select"
              name="race"
              id="race"
              defaultValue={patient.race}
              onChange={handleChange3}
            >
              <option>Choose Race</option>
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
            <Form.Control
              as="select"
              name="income_level"
              id="income_level"
              defaultValue={patient.income_level}
              onChange={handleChange3}
            >
              <option>Choose Income Level</option>
              <option> below 20000</option>
              <option>20000-30000</option>
              <option>30000-50000</option>
              <option>50000-70000</option>
              <option> over 70000</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} sm={2}>
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
            <Form.Control
              as="select"
              name="blood_type"
              id="blood_type"
              defaultValue={patient.blood_type}
              onChange={handleChange4}
            >
              <option>Blood Type</option>
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
            <Form.Control
              type="number"
              name="employee_id"
              placeholder="Enter Employee ID"
              id="employee_id"
              min="1"
              defaultValue={patient.employee_id}
              onChange={handleChange4}
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default UpdatePatientPage;
