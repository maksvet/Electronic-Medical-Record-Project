import React, { useState } from "react";
import { Row, Form, FormControl, Button } from "react-bootstrap";
import { Col, Input, Container } from "reactstrap";
import Navigation from "../Shared/Navigation";

const UpdatePatientPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("253-263-4879");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [fax, setFax] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [healthCardNumber, setHealthCardNumber] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("");
  const [allergies, setAllergies] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [race, setRace] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [familySize, setFamilySize] = useState("");
  const [occupation, setOccupation] = useState("");
  const [incomeLevel, setIncomeLevel] = useState("");
  const [nationality, setNationality] = useState("");
  const [religion, setReligion] = useState("");
  const [insuranceDetails, setInsuranceDetails] = useState("");
  const [familyPhysician, setFamilyPhysician] = useState("");
  const [immunizationType, setImmunizationType] = useState("");
  const [immunizationDate, setImmunizationDate] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [patientNote, setPatientNote] = useState("");

  const handleSubmit1 = async (event) => {
    alert("Successful Submit!");
    event.preventDefault();
    console.log(
      phoneNumber,
      streetNumber,
      streetName,
      city,
      province,
      country,
      postalCode,
      email,
      fax
    );
    // const response = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     phoneNumber,
    //     streetNumber,
    //     streetName,
    //     city,
    //     province,
    //     country,
    //     postalCode,
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

    setPhoneNumber("");
    setStreetNumber("");
    setStreetName("");
    setCity("");
    setProvince("");
    setCountry("");
    setPostalCode("");
    setEmail("");
    setFax("");
  };

  const handleSubmit2 = async (event) => {
    alert("Successful Submit!");
    event.preventDefault();
    console.log(firstName, middleName, lastName, dob, gender);
    // const response = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     firstName,
    //     middleName,
    //     lastName,
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

    setFirstName("");
    setMiddleName("");
    setLastName("");
    setDob("");
    setGender("");
  };

  const handleSubmit3 = async (event) => {
    alert("Successful Submit!");
    event.preventDefault();
    console.log(
      healthCardNumber,
      maritalStatus,
      language,
      nationality,
      religion,
      race,
      emergencyContactNumber,
      emergencyContactName,
      occupation,
      incomeLevel,
      familySize
    );
    // const response = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     healthCardNumber,
    //     maritalStatus,
    //     language,
    //     nationality,
    //     religion,
    //     race,
    //     emergencyContactNumber,
    //     emergencyContactName,
    //     occupation,
    //     incomeLevel,
    //     familySize,
    //   }),
    // });

    // const payload = await response.json();
    // if (response.status >= 400) {
    //   alert(`Oops! Error ${response.status}:  ${payload.message}`);
    // } else {
    //   alert(`Congratulations! Submission submitted with id: ${payload.id}`);
    // }
    setHealthCardNumber("");
    setMaritalStatus("");
    setLanguage("");
    setNationality("");
    setReligion("");
    setRace("");
    setEmergencyContactNumber("");
    setEmergencyContactName("");
    setOccupation("");
    setIncomeLevel("");
    setFamilySize("");
  };

  const handleSubmit4 = async (event) => {
    alert("Successful Submit!");
    event.preventDefault();
    console.log(
      allergies,
      bloodType,
      insuranceDetails,
      familyPhysician,
      immunizationType,
      immunizationDate,
      employeeID
    );
    // const response = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     allergies,
    //     bloodType,
    //     insuranceDetails,
    //     familyPhysician,
    //     immunizationType,
    //     immunizationDate,
    //     employeeID,
    //   }),
    // });

    // const payload = await response.json();
    // if (response.status >= 400) {
    //   alert(`Oops! Error ${response.status}:  ${payload.message}`);
    // } else {
    //   alert(`Congratulations! Submission submitted with id: ${payload.id}`);
    // }
    setAllergies("");
    setBloodType("");
    setInsuranceDetails("");
    setFamilyPhysician("");
    setImmunizationType("");
    setImmunizationDate("");
    setEmployeeID("");
    setPatientNote("");
  };

  const handleSubmit5 = async (event) => {
    alert("Successful Submit!");
    console.log(patientNote);
    event.preventDefault();
    // const response = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     patientNote,
    //   }),
    // });

    // console.log(

    // );

    // const payload = await response.json();
    // if (response.status >= 400) {
    //   alert(`Oops! Error ${response.status}:  ${payload.message}`);
    // } else {
    //   alert(`Congratulations! Submission submitted with id: ${payload.id}`);
    // }
    setPatientNote("");
  };

  return (
    <Container className="p-3">
      <Navigation />
      <h1>Update Patient Form</h1>
      <h2>Contact Info</h2>
      <Form onSubmit={handleSubmit1} className="pb-3">
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
              type="tel"
              placeholder="Phone Number"
              required
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="Street Number"
              required
              id="streetNumber"
              value={streetNumber}
              onChange={(e) => setStreetNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="Street Name"
              required
              id="streetName"
              value={streetName}
              onChange={(e) => setStreetName(e.target.value)}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="City"
              required
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              as="select"
              required
              id="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
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
              required
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
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
              placeholder="Enter Postal Code"
              required
              id="postal code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="tel"
              placeholder="Enter Fax"
              required
              id="fax"
              value={fax}
              onChange={(e) => setFax(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>

      <h2>Personal Details</h2>
      <Form onSubmit={handleSubmit2} className="pb-3">
        <Row className="py-2">
          <Col sm={4}>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>

          <Col sm={4}>
            <Input
              type="text"
              name="middleName"
              id="middleName"
              placeholder="Enter Middle Name"
              required
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </Col>

          <Col sm={4}>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </Col>

          <Col sm={2}>
            <FormControl
              as="select"
              className="mr-sm-2"
              name="gender"
              id="gender"
              placeholder=""
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
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

      <h2>Patients Details</h2>
      <Form onSubmit={handleSubmit3} className="pb-3">
        <Form.Row>
          <Form.Group as={Col} sm={4}>
            <Form.Control
              type="text"
              placeholder="Enter Health Card Number"
              required
              readOnly
              id="healthCardNumber"
              value={healthCardNumber}
              onChange={(e) => setHealthCardNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} sm={3}>
            <Form.Control
              as="select"
              required
              id="maritalStatus"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
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
              required
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
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
              required
              id="nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
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
              required
              id="religion"
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
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
              required
              id="race"
              value={race}
              onChange={(e) => setRace(e.target.value)}
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
              placeholder="Enter Emergency Contact Number"
              required
              id="emergencyContactNumber"
              value={emergencyContactNumber}
              onChange={(e) => setEmergencyContactNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} sm={8}>
            <Form.Control
              type="text"
              placeholder="Enter Emergency Contact Name"
              required
              id="emergencyContactName"
              value={emergencyContactName}
              onChange={(e) => setEmergencyContactName(e.target.value)}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="Enter Occupation"
              required
              id="occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} sm={3}>
            <Form.Control
              as="select"
              required
              id="incomeLevel"
              value={incomeLevel}
              onChange={(e) => setIncomeLevel(e.target.value)}
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
              min="1"
              placeholder="Enter Family Size"
              required
              id="familySize"
              value={familySize}
              onChange={(e) => setFamilySize(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>

      <h2>Medical History</h2>
      <Form onSubmit={handleSubmit4} className="pb-3">
        <Row>
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="Enter Allergies"
              required
              id="allergies"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} sm={2}>
            <Form.Control
              as="select"
              required
              id="bloodType"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
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
              placeholder="Enter Insurance Details"
              required
              id="insuranceDetails"
              value={insuranceDetails}
              onChange={(e) => setInsuranceDetails(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} sm={4}>
            <Form.Control
              type="text"
              placeholder="Enter Family Physician"
              required
              id="familyPhysician"
              value={familyPhysician}
              onChange={(e) => setFamilyPhysician(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Row>
          <Form.Group as={Col} sm={6}>
            <Form.Control
              type="text"
              placeholder="Enter Immunization Type"
              required
              id="immunizationType"
              value={immunizationType}
              onChange={(e) => setImmunizationType(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} sm={2}>
            <Form.Control
              type="date"
              placeholder="Enter Immunization Date"
              required
              id="immunizationDate"
              value={immunizationDate}
              onChange={(e) => setImmunizationDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} sm={2}>
            <Form.Control
              type="number"
              placeholder="Enter Employee ID"
              required
              id="employeeID"
              value={employeeID}
              onChange={(e) => setEmployeeID(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>

      <h2>Patient Notes</h2>
      <Form onSubmit={handleSubmit5} className="pb-3">
        <Form.Group as={Col}>
          <Form.Control
            type="textarea"
            placeholder="Patient Note"
            required
            readOnly
            id="patientNote"
            value={patientNote}
            onChange={(e) => setPatientNote(e.target.value)}
          />
          <h4>Enter New Patient Note</h4>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control
            type="textarea"
            placeholder="Patient Note"
            required
            id="patientNote"
            value={patientNote}
            onChange={(e) => setPatientNote(e.target.value)}
          />
          <Button variant="primary" type="submit" className="m-3">
            Update
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default UpdatePatientPage;
