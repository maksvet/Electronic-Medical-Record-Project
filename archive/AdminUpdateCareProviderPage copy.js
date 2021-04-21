import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { Form, FormControl, Button } from "react-bootstrap";
import { Row, Col, Input } from "reactstrap";
import Navigation from "../Shared/Navigation";
import { Container } from "react-bootstrap";

const AdminUpdateCareProviderPage = (props) => {
const [first_name, setFirstName] = useState("");
const [middle_name, setMiddleName] = useState("");
const [last_name, setLastName] = useState("");
const [dob, setDob] = useState("");
const [gender, setGender] = useState("");
const [phone_number, setPhoneNumber] = useState("");
const [street_number, setStreetNumber] = useState("");
const [street_name, setStreetName] = useState("");
const [city, setCity] = useState("");
const [province, setProvince] = useState("");
const [country, setCountry] = useState("");
const [postal_code, setPostalCode] = useState("");
const [email, setEmail] = useState("");
const [fax, setFax] = useState("");
const [login_id, setLoginID] = useState("");
const [password, setPassword] = useState("");
const [job_title, setJobTitle] = useState("");
const [qualification, setQualification] = useState("");
const [institution_name, setInstitutionName] = useState("");

const handleSubmit1 = async (event) => {
  alert("Successful Submit!");
  event.preventDefault();
  console.log(first_name, middle_name, last_name, dob, gender);
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
  setFirstName("");
  setMiddleName("");
  setLastName("");
  setDob("");
  setGender("");
};

const handleSubmit2 = async (event) => {
  alert("Successful Submit!");
  event.preventDefault();
  console.log(login_id, password, job_title, qualification, institution_name);
  // const response = await fetch("http://localhost:4000/", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     login_id,
  //     password,
  //     job_title,
  //     qualification,
  //     institution_name,
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
    phone_number,
    street_number,
    street_name,
    city,
    province,
    country,
    postal_code,
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
  //     phone_number,
  //     street_number,
  //     street_name,
  //     city,
  //     province,
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
  let id = props.match.params.employee_id;
  const [careProviders, setCareProviders] = useState([]);
  const [form, setForm] = useState({ display: "none" });
  const [careProvider, setCareProvider] = useState("");
  const history = useHistory();

  useEffect((event) => {

    async function fetchData() {
      console.log("something")
      const res = await fetch(
        `https://run.mocky.io/v3/f71d3adc-073f-4e66-916d-710503f3baeb/${id}`,
        {
          method: "GET",
        }
      );
      res.json().then((res) => setCareProviders([...res]));
    }
    fetchData();
  }, [id]);

  const handleDelete = (event, id) => {
    event.preventDefault();
    console.log("Donald was here");
    console.log(id);

    fetch(
      `https://run.mocky.io/v3/f71d3adc-073f-4e66-916d-710503f3baeb/${id}`,
      {
        method: "delete",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response.json());
    history.push("/careProviders");
  };

  const handleEdit = (event, careProvider) => {
    event.preventDefault();
    console.log("D is here again");
    console.log(careProvider);
    setForm({ display: "block" });
    setCareProvider(careProvider);
  };

  const handleChange = (event) => {
    setCareProvider((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event, id) => {
    event.preventDefault();
    console.log(id);
    fetch(`https://run.mocky.io/v3/e48bfa4e-d86c-48e5-a342-eaa15872929a`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(careProvider),
    }).then((response) => response.json());
    history.push("/careProviders");
  };

  return (
    <div>
      {careProviders.map((careProvider) => (
        <div key={careProvider.employee_id}>
          <Container className="pb-5">
            <Navigation />
            <h2>Update Care Provider Form</h2>
            <h3>Personal Details</h3>
            <Form onSubmit={handleSubmit1} className="pb-3">
              <Row className="py-2">
                <Col sm={4}>
                  <Input
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="Enter First Name"
                    required
                    defaultValue={careProvider.first_name}
                    onChange={(e) => setFirstName(e.target.defaultValue)}
                  />
                </Col>

                <Col sm={4}>
                  <Input
                    type="text"
                    name="middle_name"
                    id="middle_name"
                    placeholder="Enter Middle Name"
                    required
                    defaultValue={careProvider.middle_name}
                    onChange={(e) => setMiddleName(e.target.defaultValue)}
                  />
                </Col>

                <Col sm={4}>
                  <Input
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Enter Last Name"
                    required
                    defaultValue={careProvider.last_name}
                    onChange={(e) => setLastName(e.target.defaultValue)}
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
                    onChange={(e) => setDob(e.target.defaultValue)}
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
                    onChange={(e) => setGender(e.target.defaultValue)}
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
                    name="login_id"
                    id="login_id"
                    placeholder="Enter login ID"
                    required
                    defaultValue={careProvider.login_id}
                    onChange={(e) => setLoginID(e.target.defaultValue)}
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
                    onChange={(e) => setPassword(e.target.defaultValue)}
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
                    defaultValue={careProvider.job_title}
                    onChange={(e) => setJobTitle(e.target.defaultValue)}
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
                    onChange={(e) => setQualification(e.target.defaultValue)}
                  />
                </Col>

                <Col sm={4}>
                  <Input
                    type="text"
                    name="institution_name"
                    id="institution_name"
                    placeholder="Enter Institution Name"
                    required
                    defaultValue={careProvider.institution_name}
                    onChange={(e) => setInstitutionName(e.target.defaultValue)}
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
                    id="phone_number"
                    defaultValue={careProvider.phone_number}
                    onChange={(e) => setPhoneNumber(e.target.defaultValue)}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    placeholder="Street Number"
                    required
                    id="street_number"
                    defaultValue={careProvider.street_number}
                    onChange={(e) => setStreetNumber(e.target.defaultValue)}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    placeholder="Street Name"
                    required
                    id="street_name"
                    defaultValue={careProvider.street_name}
                    onChange={(e) => setStreetName(e.target.defaultValue)}
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
                    defaultValue={careProvider.city}
                    onChange={(e) => setCity(e.target.defaultValue)}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Control
                    as="select"
                    required
                    id="province"
                    defaultValue={careProvider.province}
                    onChange={(e) => setProvince(e.target.defaultValue)}
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
                    onChange={(e) => setCountry(e.target.defaultValue)}
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
                    defaultValue={careProvider.postal_code}
                    onChange={(e) => setPostalCode(e.target.defaultValue)}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    id="email"
                    defaultValue={careProvider.email}
                    onChange={(e) => setEmail(e.target.defaultValue)}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Control
                    type="tel"
                    placeholder="Enter Fax"
                    required
                    id="fax"
                    defaultValue={careProvider.fax}
                    onChange={(e) => setFax(e.target.defaultValue)}
                  />
                </Form.Group>
              </Form.Row>

              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Container>
        </div>
      ))}

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