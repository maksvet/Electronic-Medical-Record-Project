import React, { useState } from "react";
import { Row, Form, FormControl, Button } from "react-bootstrap";
import { Col, Input, Container } from "reactstrap";
import Navigation from "../Shared/Navigation";

const AdminCreatePatientPage = () => {
  const [phone_number, setPhoneNumber] = useState("");
  const [street_number, setStreetNumber] = useState("");
  const [street_name, setStreetName] = useState("");
  const [city_town, setCity] = useState("");
  const [province_state, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [fax, setFax] = useState("");

  const [first_name, setFirstName] = useState("");
  const [middle_name, setMiddleName] = useState("");
  const [last_name, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const [language, setLanguage] = useState("");
  const [health_card_number, setHealthCardNumber] = useState("");
  const [emergency_contact_name, setEmergencyContactName] = useState("");
  const [emergency_contact_number, setEmergencyContactNumber] = useState("");
  const [allergies, setAllergies] = useState("");
  const [blood_type, setBloodType] = useState("");

  // const [race, setRace] = useState("");
  // const [marital_status, setMaritalStatus] = useState("");
  // const [family_size, setFamilySize] = useState("");
  // const [occupation, setOccupation] = useState("");
  // const [income_level, setIncomeLevel] = useState("");
  // const [nationality, setNationality] = useState("");
  // const [religion, setReligion] = useState("");
  // const [insurance_details, setInsuranceDetails] = useState("");
  // const [family_physician, setFamilyPhysician] = useState("");
  // const [immunization_type, setImmunizationType] = useState("");
  // const [immunization_date, setImmunizationDate] = useState("");
  // const [employee_id, setEmployeeID] = useState("");

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
      language,
      health_card_number,
      emergency_contact_name,
      emergency_contact_number,
      allergies,
      blood_type
      // race,
      // marital_status,
      // family_size,
      // occupation,
      // income_level,
      // nationality,
      // religion,
      // insurance_details,
      // family_physician,
      // immunization_type,
      // immunization_date,
      // employee_id
    );
    try {
      var response = await fetch("http://localhost:9000/patient/", {
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
          language,
          health_card_number,
          emergency_contact_name,
          emergency_contact_number,
          allergies,
          blood_type,
          // race,
          // marital_status,
          // family_size,
          // occupation,
          // income_level,
          // nationality,
          // religion,
          // insurance_details,
          // family_physician,
          // immunization_type,
          // immunization_date,
          // employee_id,
        }),
      });

      var payload = await response.json();
      console.log(payload);
    } catch (error) {
      console.log(error);
      alert(error);
    }

    if (response.status >= 400) {
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
    setLanguage("");
    setHealthCardNumber("");
    setEmergencyContactName("");
    setEmergencyContactNumber("");
    setAllergies("");
    setBloodType("");
    // setRace("");
    // setMaritalStatus("");
    // setFamilySize("");
    // setOccupation("");
    // setIncomeLevel("");
    // setNationality("");
    // setReligion("");
    // setInsuranceDetails("");
    // setFamilyPhysician("");
    // setImmunizationType("");
    // setImmunizationDate("");
    // setEmployeeID("");
  };

  return (
    <Container className="p-3">
      <Navigation />

      <h1>Create Patient</h1>
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
          <label className="ml-3">Date of Birth</label>
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

        <h2>Contact Info</h2>
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

        <h2>Patients Details</h2>
        <Form.Row>
          <Form.Group as={Col} sm={4}>
            <Form.Control
              type="text"
              placeholder="Enter Health Card Number"
              required
              id="health_card_number"
              value={health_card_number}
              onChange={(e) => setHealthCardNumber(e.target.value)}
            />
          </Form.Group>

          {/* <Form.Group as={Col} sm={3}>
            <Form.Control
              as="select"
              required
              id="marital_status"
              value={marital_status}
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
          </Form.Group> */}
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

          {/* <Form.Group as={Col} sm={2}>
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
          </Form.Group> */}

          {/* <Form.Group as={Col} sm={2}>
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
          </Form.Group> */}

          {/* <Form.Group as={Col} sm={2}>
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
          </Form.Group> */}
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} sm={3}>
            <Form.Control
              type="text"
              placeholder="Enter Emergency Contact Number"
              required
              id="emergency_contact_number"
              value={emergency_contact_number}
              onChange={(e) => setEmergencyContactNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} sm={8}>
            <Form.Control
              type="text"
              placeholder="Enter Emergency Contact Name"
              required
              id="emergency_contact_name"
              value={emergency_contact_name}
              onChange={(e) => setEmergencyContactName(e.target.value)}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          {/* <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="Enter Occupation"
              required
              id="occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </Form.Group> */}

          {/* <Form.Group as={Col} sm={3}>
            <Form.Control
              as="select"
              required
              id="income_level"
              value={income_level}
              onChange={(e) => setIncomeLevel(e.target.value)}
            >
              <option>Choose Income Level</option>
              <option> below 20000</option>
              <option>20000-30000</option>
              <option>30000-50000</option>
              <option>50000-70000</option>
              <option> over 70000</option>
            </Form.Control>
          </Form.Group> */}

          {/* <Form.Group as={Col} sm={2}>
            <Form.Control
              type="number"
              min="1"
              placeholder="Enter Family Size"
              required
              id="family_size"
              value={family_size}
              onChange={(e) => setFamilySize(e.target.value)}
            />
          </Form.Group> */}
        </Form.Row>

        <h2>Medical History</h2>
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
              id="blood_type"
              value={blood_type}
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
          {/* <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="Enter Insurance Details"
              required
              id="insurance_details"
              value={insurance_details}
              onChange={(e) => setInsuranceDetails(e.target.value)}
            />
          </Form.Group> */}

          {/* <Form.Group as={Col} sm={4}>
            <Form.Control
              type="text"
              placeholder="Enter Family Physician"
              required
              id="family_physician"
              value={family_physician}
              onChange={(e) => setFamilyPhysician(e.target.value)}
            />
          </Form.Group> */}
        </Row>

        <Form.Row>
          {/* <Form.Group as={Col} sm={6}>
            <Form.Control
              type="text"
              placeholder="Enter Immunization Type"
              required
              id="immunization_type"
              value={immunization_type}
              onChange={(e) => setImmunizationType(e.target.value)}
            />
          </Form.Group> */}

          {/* <Form.Group as={Col} sm={2}>
            <Form.Control
              type="date"
              placeholder="Enter Immunization Date"
              required
              id="immunization_date"
              value={immunization_date}
              onChange={(e) => setImmunizationDate(e.target.value)}
            />
          </Form.Group> */}

          {/* <Form.Group as={Col} sm={2}>
            <Form.Control
              type="number"
              placeholder="Enter Employee ID"
              required
              id="employee_id"
              value={employee_id}
              onChange={(e) => setEmployeeID(e.target.value)}
            />
          </Form.Group> */}
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AdminCreatePatientPage;
