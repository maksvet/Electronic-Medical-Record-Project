import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { Form, FormControl, Button } from "react-bootstrap";
import { Row, Col, Input } from "reactstrap";
import Navigation from "../Shared/Navigation";
import { Container } from "react-bootstrap";

var token = sessionStorage.getItem("token");

const AdminUpdateCareProviderPage = (props) => {
  const [careProvider, setCareProvider] = useState("");
  var employee_id = props.match.params.employee_id;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `http://localhost:9000/careprovider/${props.match.params.employee_id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            Authorization: `Bearer ${token}`,
          },
        }
      );
      res.json().then((res) => setCareProvider(...res));
    }
    fetchData();
  }, []);

  console.log(careProvider);

  const [personalInfo, setPersonalInfo] = useState({
    first_name: careProvider.first_name,
    middle_name: careProvider.middle_name,
    last_name: careProvider.last_name,
    dob: careProvider.dob,
    gender: careProvider.gender,
  });

  const [contactInfo, setContactInfo] = useState({
    phone_number: careProvider.phone_number,
    street_number: careProvider.street_number,
    street_name: careProvider.street_name,
    city_town: careProvider.city_town,
    province_state: careProvider.province_state,
    country: careProvider.country,
    postal_code: careProvider.postal_code,
    email: careProvider.email,
    fax: careProvider.fax,
  });

  const [credentialsInfo, setCredentialsInfo] = useState({
    login_id: careProvider.login_id,
    password: careProvider.password,
    job_title: careProvider.job_title,
    qualification: careProvider.qualification,
    institution_name: careProvider.institution_name,
  });

  const handleChange1 = (event) => {
    setPersonalInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit1 = async (event) => {
    alert("Successful Submit!");
    event.preventDefault();

    const token = sessionStorage.getItem("token");

    console.log(personalInfo);

    const response = await fetch(
      `http://localhost:9000/careprovider/update/${employee_id}/person`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(personalInfo),
      }
    );

    alert(JSON.stringify(personalInfo));

    const payload = await response.json();
    if (response.status >= 400) {
      alert(`Oops! Error ${response.status}:  ${payload.message}`);
    } else {
      alert(`Congratulations! Submission submitted with id: ${payload.id}`);
    }
  };

  const handleChange2 = (event) => {
    setCredentialsInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit2 = async (event) => {
    alert("Successful Submit!");
    event.preventDefault();

    const token = sessionStorage.getItem("token");

    console.log(credentialsInfo);

    const response = await fetch(
      `http://localhost:9000/careprovider/update/${employee_id}/employee`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(credentialsInfo),
      }
    );

    alert(JSON.stringify(credentialsInfo));

    const payload = await response.json();
    if (response.status >= 400) {
      alert(`Oops! Error ${response.status}:  ${payload.message}`);
    } else {
      alert(`Congratulations! Submission submitted with id: ${payload.id}`);
    }
  };

  const handleChange3 = (event) => {
    setContactInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit3 = async (event) => {
    alert("Successful Submit!");
    event.preventDefault();

    const token = sessionStorage.getItem("token");

    console.log(contactInfo);

    const response = await fetch(
      `http://localhost:9000/careprovider/update/${employee_id}/contact_info`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(contactInfo),
      }
    );

    alert(JSON.stringify(contactInfo));

    const payload = await response.json();
    if (response.status >= 400) {
      alert(`Oops! Error ${response.status}:  ${payload.message}`);
    } else {
      alert(`Congratulations! Submission submitted with id: ${payload.id}`);
    }
  };
  return (
    <div>
      <div>
        <Container className="pb-5">
          <Navigation />
          <h1>
            Update Care Provider:{" "}
            <span className="userName">{careProvider.first_name}</span>
          </h1>
          <h2>Personal Details</h2>
          <Form onSubmit={handleSubmit1} className="pb-3">
            <Row className="py-2">
              <Col sm={4}>
                <label>First Name</label>
                <Input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Enter First Name"
                  defaultValue={careProvider.first_name}
                  onChange={handleChange1}
                />
              </Col>

              <Col sm={4}>
                <label>Middle Name</label>
                <Input
                  type="text"
                  name="middle_name"
                  id="middle_name"
                  placeholder="Enter Middle Name"
                  defaultValue={careProvider.middle_name}
                  onChange={handleChange1}
                />
              </Col>

              <Col sm={4}>
                <label>Last Name</label>
                <Input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Enter Last Name"
                  defaultValue={careProvider.last_name}
                  onChange={handleChange1}
                />
              </Col>
            </Row>

            <Row className="py-2">
              <Col sm={3}>
                <label>Date of Birth</label>
                <Input
                  type="date"
                  name="dob"
                  id="dob"
                  placeholder="Enter Date Of Birth"
                  defaultValue={careProvider.dob}
                  onChange={handleChange1}
                />
              </Col>

              <Col sm={2}>
                <label>Gender</label>
                <FormControl
                  as="select"
                  className="mr-sm-2"
                  type="text"
                  name="gender"
                  id="gender"
                  defaultValue={careProvider.gender}
                  onChange={handleChange1}
                  custom
                >
                  <option>{careProvider.gender}</option>
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

          <h2>Contact Information</h2>
          <Form onSubmit={handleSubmit3} className="pb-3">
            <Form.Row>
              <Form.Group as={Col}>
                <label>Phone Number</label>
                <Form.Control
                  type="tel"
                  name="phone_number"
                  placeholder="Phone Number"
                  id="phone_number"
                  defaultValue={careProvider.phone_number}
                  onChange={handleChange3}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <label>Street Number</label>
                <Form.Control
                  type="text"
                  name="street_number"
                  placeholder="Street Number"
                  id="street_number"
                  defaultValue={careProvider.street_number}
                  onChange={handleChange3}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <label>Street Name</label>
                <Form.Control
                  type="text"
                  name="street_name"
                  placeholder="Street Name"
                  id="street_name"
                  defaultValue={careProvider.street_name}
                  onChange={handleChange3}
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
                  defaultValue={careProvider.city_town}
                  onChange={handleChange3}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <label>Province</label>
                <Form.Control
                  as="select"
                  name="province_State"
                  id="province_State"
                  defaultValue={careProvider.province_state}
                  onChange={handleChange3}
                >
                  <option>{careProvider.province_state}</option>
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
                  defaultValue={careProvider.country}
                  onChange={handleChange3}
                >
                  <option>{careProvider.country}</option>
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
                  defaultValue={careProvider.postal_code}
                  onChange={handleChange3}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <label>Email</label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  id="email"
                  defaultValue={careProvider.email}
                  onChange={handleChange3}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <label>Fax</label>
                <Form.Control
                  type="tel"
                  name="fax"
                  placeholder="Enter Fax"
                  id="fax"
                  defaultValue={careProvider.fax}
                  onChange={handleChange3}
                />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>

          <h2>Credentials</h2>
          <Form onSubmit={handleSubmit2} className="pb-3">
            <Row className="py-2">
              <Col sm={4}>
                <label>Login ID</label>
                <Input
                  type="text"
                  name="login_id"
                  id="login_id"
                  placeholder="Enter login ID"
                  defaultValue={careProvider.login_id}
                  onChange={handleChange2}
                />
              </Col>
              <Col sm={4}>
                <label>Password</label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter new password"
                  defaultValue={careProvider.password}
                  onChange={handleChange2}
                />
              </Col>
            </Row>
            <Row className="py-2">
              <Col sm={4}>
                <label>Job Title</label>
                <Input
                  type="text"
                  name="job_title"
                  id="job_title"
                  placeholder="Enter Job Title"
                  defaultValue={careProvider.job_title}
                  onChange={handleChange2}
                />
              </Col>

              <Col sm={4}>
                <label>Qualification</label>
                <Input
                  type="text"
                  name="qualification"
                  id="qualification"
                  placeholder="Enter Qualification"
                  defaultValue={careProvider.qualification}
                  onChange={handleChange2}
                />
              </Col>

              <Col sm={4}>
                <label>Institution Name</label>
                <Input
                  type="text"
                  name="institution_name"
                  id="institution_name"
                  placeholder="Enter Institution Name"
                  defaultValue={careProvider.institution_name}
                  onChange={handleChange2}
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
        </Container>
      </div>
    </div>
  );
};

export default AdminUpdateCareProviderPage;
