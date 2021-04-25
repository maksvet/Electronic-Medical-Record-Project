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
  const [city_town, setCity] = useState("");
  const [province_state, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [fax, setFax] = useState("");

  const [login_id, setLoginID] = useState("");
  const [password, setPassword] = useState("");

  const [job_title, setJobTitle] = useState("");

  const [isadmin, setIsadmin] = useState("");

  // const [qualification, setQualification] = useState("");

  const [institution_id, setInstitution_id] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = sessionStorage.getItem("token");
    console.log(
      phone_number,
      street_number,
      street_name,
      city_town,
      province_state,
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
      institution_id,
      isadmin
      // qualification
    );
    try {
      var response = await fetch("http://localhost:9000/careprovider/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          phone_number,
          street_number,
          street_name,
          city_town,
          province_state,
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
          // qualification,
          institution_id,
          isadmin,
        }),
      });

      var payload = await response.json();
      console.log(payload);
    } catch (error) {
      console.log(error);
      alert(error);
    }

    if (response.status >= 400) {
      alert(Object.keys(response));
      alert(`Oops! Error ${response.status}:  ${payload}`);
    } else {
      alert(payload);
    }

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
    // setQualification("");
    setInstitution_id("");
  };

  return (
    <Container className="p-3">
      <Navigation />
      <h1>Create Care Provider</h1>
      <Form onSubmit={handleSubmit}>
        <h2>Personal Details</h2>
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
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Non-Binary</option>
            </FormControl>
          </Col>
        </Row>

        <h2>Contact Information</h2>
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
              id="city_town"
              value={city_town}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              as="select"
              required
              id="province_state"
              value={province_state}
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

        <h2>Credentials</h2>
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

          {/* <Col sm={4}>
            <Input
              type="text"
              name="qualification"
              id="qualification"
              placeholder="Enter Qualification"
              required
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
          </Col> */}

          <Col sm={4}>
            <Input
              type="text"
              name="institution_id"
              id="institution_id"
              placeholder="Enter Institution Name"
              required
              value={institution_id}
              onChange={(e) => setInstitution_id(e.target.value)}
            />
          </Col>
        </Row>
        <Form.Group id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Assign Admin Role"
            value="false"
            onChange={(e) => setIsadmin(e.target.checked)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AdminCreateCareProviderPage;
