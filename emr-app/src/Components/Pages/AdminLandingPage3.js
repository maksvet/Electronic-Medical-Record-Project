import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Form,
  FormControl,
  Button,
  Col
} from "react-bootstrap";

import CreateCareProvider from "./CreateCareProvider";
import CreatePersonalDetails from "./Forms/Person";
import Navigation from "../Shared/Navigation";

const AdminLandingPage3 = () => {
const [phoneNumber, setPhoneNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [fax, setFax] = useState("");

  const handleSubmit = async (event) => {
    alert("something");
    event.preventDefault();
    // const response = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: ,
    // });

    console.log(
      JSON.stringify({
        phoneNumber,
        streetNumber,
        streetName,
        city,
        province,
        country,
        postalCode,
        email,
        fax,
      })
    );
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
    <div>
      <Navigation />
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        {/* <Tab eventKey="home" title="Home"></Tab> */}
        <Tab
          eventKey="createPersonalDetails"
          title="Personal Details"
          className="container p-3 text-center"
        >
          <CreatePersonalDetails />
        </Tab>
        <Tab
          eventKey="createCareProvider"
          title="Create Care Provider"
          className="container p-3 text-center"
        >
          <CreateCareProvider />
        </Tab>
        <Tab
          eventKey="createContactInfo"
          title="Contact Info"
          className="container p-3 text-center"
        >
          <h1>Contact Info</h1>
          <Form onSubmit={handleSubmit}>
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
                  defaultValue="Choose Province"
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
                  defaultValue="Choose Country"
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
              Submit
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="maintainCareProvider" title="Maintain Care Provider">
          <Form className="p-5 mx-5" inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Tab>
      </Tabs>
    </div>
  );
};

export default AdminLandingPage3;
