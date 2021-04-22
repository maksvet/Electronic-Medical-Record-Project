import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Row, Col, Input } from "reactstrap";

import Navigation from "../Shared/Navigation";
import { Container } from "react-bootstrap";

const AdminCreateCareProviderPage = () => {
  const [first_name, setFirstName] = useState("");
  const [middle_name, setMiddleName] = useState("");
  const [last_name, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const [phone_number, setPhoneNumber] = useState("");
  const [street_number, setStreetNumber] = useState("");
  const [street_name, setStreetName] = useState("");
  const [city_Town, setCity] = useState("");
  const [province_State, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [fax, setFax] = useState("");

  const [login_id, setLoginID] = useState("");
  const [password, setPassword] = useState("");

  const [job_title, setJobTitle] = useState("");
  
  const [qualification, setQualification] = useState("");
  
  const [institution_name, setInstitutionName] = useState("");

  const handleSubmit = async (event) => {
    alert("Successful!");
    event.preventDefault();
    console.log(
      phone_number,
      street_number,
      street_name,
      city_Town,
      province_State,
      country,
      postal_code,
      email,
      fax,
      first_name,
      middle_name,
      last_name,
      dob,
      gender,
      login_id,
      password,
      job_title,
      qualification,
      institution_name
    );
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
    //     first_name,
    //     middle_name,
    //     last_name,
    //     dob,
    //     gender,
    //     login_id,
    //     password,
    //     job_title,
    //     qualification,
    //     institution_name,
    //   }),
    // });

    // // const payload = await response.json();
    // // if (response.status >= 400) {
    // //   alert(`Oops! Error ${response.status}:  ${payload.message}`);
    // // } else {
    // //   alert(`Congratulations! Submission submitted with id: ${payload.id}`);
    // // }
    setPhoneNumber("");
    setStreetNumber("");
    setStreetName("");
    setCity("");
    setProvince("");
    setCountry("");
    setPostalCode("");
    setEmail("");
    setFax("");
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setDob("");
    setGender("");
    setLoginID("");
    setPassword("");
    setJobTitle("");
    setQualification("");
    setInstitutionName("");
  };

  return (
    <Container className="p-3">
      <Navigation />
      <h2>Create Care Provider Form</h2>
      <h3>Personal Details</h3>
      <Form onSubmit={handleSubmit}>
        <Row className="py-2">
          <Col sm={4}>
            <Input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Enter First Name"
              required
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>

          <Col sm={4}>
            <Input
              type="text"
              name="middle_name"
              id="middle_name"
              placeholder="Enter Middle Name"
              required
              value={middle_name}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </Col>

          <Col sm={4}>
            <Input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Enter Last Name"
              required
              value={last_name}
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

        <h3>Credentials</h3>
        <Row className="py-2">
          <Col sm={4}>
            <Input
              type="text"
              name="login_id"
              id="login_id"
              placeholder="Enter login ID"
              required
              value={login_id}
              onChange={(e) => setLoginID(e.target.value)}
            />
          </Col>
          <Col sm={4}>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter login password"
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
              name="job_title"
              id="job_title"
              placeholder="Enter Job Title"
              required
              value={job_title}
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
              name="institution_name"
              id="institution_name"
              placeholder="Enter Institution Name"
              required
              value={institution_name}
              onChange={(e) => setInstitutionName(e.target.value)}
            />
          </Col>
        </Row>
        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Assign Admin Role" />
        </Form.Group>

        <h3>Contact Information</h3>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
              type="tel"
              placeholder="Phone Number"
              required
              id="phone_number"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="Street Number"
              required
              id="street_number"
              value={street_number}
              onChange={(e) => setStreetNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="Street Name"
              required
              id="street_name"
              value={street_name}
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
              id="city_Town"
              value={city_Town}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              as="select"
              required
              id="province_State"
              value={province_State}
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
              value={postal_code}
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
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AdminCreateCareProviderPage;
