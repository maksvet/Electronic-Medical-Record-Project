import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormControl, Button } from "react-bootstrap";
import { Row, Col, Input } from "reactstrap";
import Navigation from "../Shared/Navigation";
import { Container } from "react-bootstrap";

const AdminUpdateCareProviderPage = (props) => {
  const [careProvider, setCareProvider] = useState("");

  const [personalInfo, setPersonalInfo] = useState({
    firstName: careProvider.firstName,
    middleName: careProvider.middleName,
    lastName: careProvider.lastName,
    dob: careProvider.dob,
    gender: careProvider.gender,
  });

  // setPersonalInfo({
  //   firstName: careProvider.firstName,
  //   middleName: careProvider.middleName,
  //   lastName: careProvider.lastName,
  //   dob: careProvider.dob,
  //   gender: careProvider.gender,
  // });

  // const [firstName, setFirstName] = useState(careProvider.firstName);
  // const [middleName, setMiddleName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [dob, setDob] = useState("");
  // const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city_Town, setCity] = useState("");
  const [province_State, setProvince] = useState("");
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

    console.log(personalInfo);
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

    // setFirstName("");
    // setMiddleName("");
    // setLastName("");
    // setDob("");
    // setGender("");
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
      city_Town,
      province_State,
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
    //     city_Town,
    //     province_State,
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

  //Fetching data from API
  console.log(props);
  let id = props.match.params.employeeID;
  // const [careProviders, setCareProviders] = useState([]);
  const [form ] = useState({ display: "none" });
  const history = useHistory();

  useEffect(
    (event) => {
      async function fetchData() {
        console.log("something");
        const res = await fetch(
          `https://run.mocky.io/v3/9169b99f-3d1b-43a8-8776-4e9587211b60`,
          {
            method: "GET",
          }
        );
        res.json().then((res) => setCareProvider(...res));
      }
      fetchData();
      console.log(careProvider);
    },
    [id]
  );

  // const handleDelete = (event, id) => {
  //   event.preventDefault();
  //   console.log("Donald was here");
  //   console.log(id);

  //   fetch(
  //     `https://run.mocky.io/v3/f71d3adc-073f-4e66-916d-710503f3baeb/${id}`,
  //     {
  //       method: "delete",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   ).then((response) => response.json());
  //   history.push("/careProviders");
  // };

  // const handleEdit = (event, careProvider) => {
  //   event.preventDefault();
  //   console.log("D is here again");
  //   console.log(careProvider);
  //   setForm({ display: "block" });
  //   setCareProvider(careProvider);
  // };

  const handleChange1 = (event) => {
    setPersonalInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChange = (event) => {
    // setPersonalInfo((prevState) => ({
    //   ...prevState,
    //   [event.target.name]: event.target.value,
    // }));
  };

  const handleSubmit = (event, id) => {
    event.preventDefault();
    console.log(id);
    fetch(
      `https://run.mocky.io/v3/e48bfa4e-d86c-48e5-a342-eaa15872929a/${id}`,
      {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        //make sure to serialize your JSON body
        body: JSON.stringify(careProvider),
      }
    ).then((response) => response.json());
    history.push("/careProviders");
  };

  return (
    <div>
      <div>
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
                  defaultValue={careProvider.firstName}
                  onChange={handleChange1}
                />
              </Col>

              <Col sm={4}>
                <Input
                  type="text"
                  name="middleName"
                  id="middleName"
                  placeholder="Enter Middle Name"
                  required
                  defaultValue={careProvider.middleName}
                  onChange={handleChange1}
                />
              </Col>

              <Col sm={4}>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Last Name"
                  required
                  defaultValue={careProvider.lastName}
                  onChange={handleChange1}
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
                  defaultValue={careProvider.dob}
                  onChange={handleChange1}
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
                  defaultValue={careProvider.gender}
                  onChange={handleChange1}
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
                  defaultValue={careProvider.loginID}
                  onChange={handleChange}
                />
              </Col>
              <Col sm={4}>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter new password"
                  required
                  defaultValue={careProvider.password}
                  onChange={handleChange}
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
                  defaultValue={careProvider.jobTitle}
                  onChange={handleChange}
                />
              </Col>

              <Col sm={4}>
                <Input
                  type="text"
                  name="qualification"
                  id="qualification"
                  placeholder="Enter Qualification"
                  required
                  defaultValue={careProvider.qualification}
                  onChange={handleChange}
                />
              </Col>

              <Col sm={4}>
                <Input
                  type="text"
                  name="institutionName"
                  id="institutionName"
                  placeholder="Enter Institution Name"
                  required
                  defaultValue={careProvider.institutionName}
                  onChange={handleChange}
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
                  defaultValue={careProvider.phoneNumber}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control
                  type="text"
                  placeholder="Street Number"
                  required
                  id="streetNumber"
                  defaultValue={careProvider.streetNumber}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control
                  type="text"
                  placeholder="Street Name"
                  required
                  id="streetName"
                  defaultValue={careProvider.streetName}
                  onChange={handleChange}
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
                  defaultValue={careProvider.city_Town}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control
                  as="select"
                  required
                  id="province_State"
                  defaultValue={careProvider.province_State}
                  onChange={handleChange}
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
                  defaultValue={careProvider.country}
                  onChange={handleChange}
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
                  defaultValue={careProvider.postalCode}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  id="email"
                  defaultValue={careProvider.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control
                  type="tel"
                  placeholder="Enter Fax"
                  required
                  id="fax"
                  defaultValue={careProvider.fax}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Container>
      </div>

      {/* This is the form that pops up when you press the Edit Me! button */}
      <form onSubmit={(e) => handleSubmit(e, careProvider.id)} style={form}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={careProvider.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Photo:
            <input
              type="text"
              name="image"
              value={careProvider.image}
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AdminUpdateCareProviderPage;
