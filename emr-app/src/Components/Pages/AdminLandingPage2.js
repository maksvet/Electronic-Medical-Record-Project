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
import CreatePersonalDetails from "../Pages/Forms/Person";
import Navigation from "../Shared/Navigation";
import CreateContactInfo from "../Pages/Forms/ContactInformation";

const AdminLandingPage2 = () => {
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
          <CreateContactInfo />
        </Tab>
      </Tabs>
    </div>
  );
};

export default AdminLandingPage2;
