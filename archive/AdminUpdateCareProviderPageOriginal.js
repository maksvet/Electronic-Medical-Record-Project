import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Row, Col, Input } from "reactstrap";

import Navigation from "../Shared/Navigation";
import { Container } from "react-bootstrap";

const AdminUpdateCareProviderPage = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [fax, setFax] = useState("");
  const [loginID, setLoginID] = useState("");
  const [password, setPassword] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [qualification, setQualification] = useState("");
  const [institutionName, setInstitutionName] = useState("");

  const handleSubmit1 = async (event) => {
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

  const handleSubmit2 = async (event) => {
    alert("Successful Submit!");
    event.preventDefault();
    console.log(loginID, password, jobTitle, qualification, institutionName);
    // const response = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     loginID,
    //     password,
    //     jobTitle,
    //     qualification,
    //     institutionName,
    //   }),
    // });

    // const payload = await response.json();
    // if (response.status >= 400) {
    //   alert(`Oops! Error ${response.status}:  ${payload.message}`);
    // } else {
    //   alert(`Congratulations! Submission submitted with id: ${payload.id}`);
    // }
    setLoginID("");
    setPassword("");
    setJobTitle("");
    setQualification("");
    setInstitutionName("");
  };

  const handleSubmit3 = async (event) => {
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

  return (
    <Container className="pb-5">
      <Navigation />
      <h2>Update Care Provider Form</h2>
      <h3>Personal Details</h3>
      <Form onSubmit={handleSubmit1} className="pb-3">
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
          <label className="pl-3">Date of Birth</label>
          <Col sm={3}>
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
              type="text"
              name="gender"
              id="gender"
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

      <h3>Credentials</h3>
      <Form onSubmit={handleSubmit2} className="pb-3">
        <Row className="py-2">
          <Col sm={4}>
            <Input
              type="text"
              name="loginID"
              id="loginID"
              placeholder="Enter login ID"
              required
              value={loginID}
              onChange={(e) => setLoginID(e.target.value)}
            />
          </Col>
          <Col sm={4}>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter new password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="py-2">
          <Col sm={4}>
            <Input
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder="Enter Job Title"
              required
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </Col>

          <Col sm={4}>
            <Input
              type="text"
              name="qualification"
              id="qualification"
              placeholder="Enter Qualification"
              required
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
          </Col>

          <Col sm={4}>
            <Input
              type="text"
              name="institutionName"
              id="institutionName"
              placeholder="Enter Institution Name"
              required
              value={institutionName}
              onChange={(e) => setInstitutionName(e.target.value)}
            />
          </Col>
        </Row>
        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Assign Admin Role" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>

      <h3>Contact Information</h3>
      <Form onSubmit={handleSubmit3} className="pb-3">
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
    </Container>
  );
};

export default AdminUpdateCareProviderPage;
