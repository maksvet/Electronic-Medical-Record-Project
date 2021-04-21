import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
// import ContactInformation from './Forms/ContactInformation';
// import Person from './Forms/Person';

const CreatePatientForm = () => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const response = await fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: ,
    // });

    console.log("handleSubmit");

    console.log(
      JSON.stringify({
        language,
        healthCardNumber,
        emergencyContactName,
        emergencyContactNumber,
        allergies,
        bloodType,
        race,
        maritalStatus,
        familySize,
        occupation,
        incomeLevel,
        nationality,
        religion,
        insuranceDetails,
        familyPhysician,
        immunizationType,
        immunizationDate,
        employeeID,
      })
    );
    // const payload = await response.json();
    // if (response.status >= 400) {
    //   alert(`Oops! Error ${response.status}:  ${payload.message}`);
    // } else {
    //   alert(`Congratulations! Submission submitted with id: ${payload.id}`);
    // }
    setLanguage("");
    setHealthCardNumber("");
    setEmergencyContactName("");
    setEmergencyContactNumber("");
    setAllergies("");
    setBloodType("");
    setRace("");
    setMaritalStatus("");
    setFamilySize("");
    setOccupation("");
    setIncomeLevel("");
    setNationality("");
    setReligion("");
    setInsuranceDetails("");
    setFamilyPhysician("");
    setImmunizationType("");
    setImmunizationDate("");
    setEmployeeID("");
  };

  return (
    <div>
      <h1>Basic Info</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} sm={4}>
            <Form.Control
              type="text"
              placeholder="Enter Health Card Number"
              required
              id="healthCardNumber"
              value={healthCardNumber}
              onChange={(e) => setHealthCardNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} sm={3}>
            <Form.Control
              as="select"
              placeholder="Enter Marital Status"
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
              placeholder="Enter Language"
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
              placeholder="Enter Nationality"
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
              placeholder="Enter Religion"
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
              defaultValue="Enter Race"
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
              placeholder="Enter Income Level"
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
              placeholder="Enter Family Size"
              required
              id="familySize"
              value={familySize}
              onChange={(e) => setFamilySize(e.target.value)}
            />
          </Form.Group>
        </Form.Row>

        <h1>Medical History</h1>
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

        <Form.Group as={Col}>
          <Form.Control
            type="text"
            placeholder="Enter Blood Type"
            required
            id="bloodType"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
          />
        </Form.Group>

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

        <Form.Group as={Col}>
          <Form.Control
            type="text"
            placeholder="Enter Family Physician"
            required
            id="familyPhysician"
            value={familyPhysician}
            onChange={(e) => setFamilyPhysician(e.target.value)}
          />
        </Form.Group>

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

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      </Form>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
};

export default CreatePatientForm;
