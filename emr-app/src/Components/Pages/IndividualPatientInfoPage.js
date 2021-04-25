import React, { useState, useEffect } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Row, Col, Input, Label } from "reactstrap";
import Navigation from "../Shared/Navigation";
import { Container } from "react-bootstrap";
// import { CareProviderHome } from "../Pages/CareProviderHome"
var token = sessionStorage.getItem("token");

const IndividualPatientInfoPage = (props) => {
  const [patient, setPatient] = useState([]);

  var health_card_number = props.match.params.health_card_number;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `http://localhost:9000/patient/${props.match.params.health_card_number}`,
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
      res.json().then((res) => setPatient([...res]));
    }
    fetchData();
  }, []);

  console.log(patient);

  // useEffect(() => {
  //   async function fetchData1() {
  //     const res = await fetch(
  //       `https://run.mocky.io/v3/aabe6ccc-eec9-4f20-99b7-bdfe9f6adb1c8`,
  //       {
  //         method: "GET",
  //       },
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Credentials": true,
  //       }
  //       res.json().then((res) => setPatient(res));
  //     }
  //     fetchData1();
  //   }, []);

  // useEffect(() => {
  //     fetch(
  //       `https://run.mocky.io/v3/3a15c1fe-c6da-4f0e-93e4-c959ad68e28b`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  // },[]);

  return (
    <Container className="p-3">
      <Navigation />
      {patient.map((patient) => (
        <div key={patient.health_card_number}>
          <h1>
            Patient name: <span className="userName">{patient.name}</span>
          </h1>

          <h2>Personal Details</h2>
          <Form>
            <Row className="py-2">
              <Col sm={4}>
                <Label>First Name</Label>
                <Input
                  type="text"
                  name="first_name"
                  id="first_name"
                  readOnly
                  placeholder="First Name"
                  defaultValue={patient.first_name}
                />
              </Col>

              <Col sm={4}>
                <Label>Middle Name</Label>
                <Input
                  type="text"
                  name="middle_name"
                  id="middle_name"
                  readOnly
                  placeholder="Middle Name"
                  defaultValue={patient.middle_name}
                />
              </Col>

              <Col sm={4}>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  name="last_name"
                  id="last_name"
                  readOnly
                  placeholder="Last Name"
                  defaultValue={patient.last_name}
                />
              </Col>
            </Row>

            <Row className="py-2">
              <Col sm={5}>
                <label>Date of Birth</label>
                <Input
                  type="date"
                  name="dob"
                  id="dob"
                  placeholder="Date Of Birth"
                  readOnly
                  defaultValue={patient.dob}
                />
              </Col>

              <Col sm={2}>
                <Label>Gender</Label>
                <FormControl
                  type="text"
                  className="mr-sm-2"
                  name="gender"
                  placeholder="Gender"
                  id="gender"
                  readOnly
                  defaultValue={patient.gender}
                ></FormControl>
              </Col>
            </Row>
          </Form>

          <h2>Contact Info</h2>
          <Form className="contactInfo">
            <Form.Row className="contactInfo">
              <Form.Group as={Col}>
                <Label>Phone Number</Label>
                <Form.Control
                  type="tel"
                  name="phone_number"
                  placeholder="Phone Number"
                  id="phone_number"
                  readOnly
                  value={patient.phone_number}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Label>Street Number</Label>
                <Form.Control
                  type="text"
                  name="street_number"
                  placeholder="Street Number"
                  id="street_number"
                  readOnly
                  defaultValue={patient.street_number}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Label>Street Name</Label>
                <Form.Control
                  type="text"
                  name="street_name"
                  placeholder="Street Name"
                  id="street_name"
                  readOnly
                  defaultValue={patient.street_name}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Label>City</Label>
                <Form.Control
                  type="text"
                  name="city_Town"
                  placeholder="City"
                  id="city_Town"
                  readOnly
                  defaultValue={patient.city_Town}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Label>Province</Label>
                <Form.Control
                  type="text"
                  name="province_State"
                  placeholder="Province"
                  id="province_State"
                  readOnly
                  defaultValue={patient.province_State}
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Label>Country</Label>
                <Form.Control
                  type="text"
                  name="country"
                  placeholder="Country"
                  id="country"
                  readOnly
                  defaultValue={patient.country}
                ></Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Label>Postal Code</Label>
                <Form.Control
                  type="text"
                  name="postal_code"
                  placeholder="Postal Code"
                  id="postal code"
                  readOnly
                  defaultValue={patient.postal_code}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Label>Email</Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email"
                  readOnly
                  defaultValue={patient.email}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Label>Fax</Label>
                <Form.Control
                  type="tel"
                  name="fax"
                  placeholder="Fax"
                  id="fax"
                  readOnly
                  defaultValue={patient.fax}
                />
              </Form.Group>
            </Form.Row>
          </Form>

          <h2>Patient Details</h2>
          <Form>
            <Form.Row>
              <Form.Group as={Col} sm={4}>
                <Label>Health Card Number</Label>
                <Form.Control
                  type="text"
                  name="health_card_number"
                  placeholder="Health Card Number"
                  readOnly
                  id="health_card_number"
                  defaultValue={health_card_number}
                />
              </Form.Group>

              <Form.Group as={Col} sm={3}>
                <Label>Marital Status</Label>
                <Form.Control
                  type="text"
                  name="marital_status"
                  placeholder="Marital Status"
                  readOnly
                  id="marital_status"
                  defaultValue={patient.marital_status}
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} sm={2}>
                <Label>Language</Label>
                <Form.Control
                  type="text"
                  name="language"
                  placeholder="Language"
                  readOnly
                  id="language"
                  defaultValue={patient.language}
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} sm={2}>
                <Label>Nationality</Label>
                <Form.Control
                  type="text"
                  name="nationality"
                  placeholder="Nationality"
                  readOnly
                  id="nationality"
                  defaultValue={patient.nationality}
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} sm={2}>
                <Label>Religion</Label>
                <Form.Control
                  type="text"
                  name="religion"
                  placeholder="Religion"
                  readOnly
                  id="religion"
                  defaultValue={patient.religion}
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} sm={2}>
                <Label>Race</Label>
                <Form.Control
                  type="text"
                  name="race"
                  placeholder="Race"
                  readOnly
                  id="race"
                  defaultValue={patient.race}
                ></Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} sm={3}>
                <Label>Emergency Contact Number</Label>
                <Form.Control
                  type="number"
                  name="emergency_contact_number"
                  placeholder="Emergency Contact Number"
                  readOnly
                  id="emergency_contact_number"
                  defaultValue={patient.emergency_contact_number}
                />
              </Form.Group>

              <Form.Group as={Col} sm={8}>
                <Label>Emergency Contact Name</Label>
                <Form.Control
                  type="text"
                  name="emergency_contact_name"
                  placeholder="Emergency Contact Name"
                  readOnly
                  id="emergency_contact_name"
                  defaultValue={patient.emergency_contact_name}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Label>Occupation</Label>
                <Form.Control
                  type="text"
                  name="occupation"
                  placeholder="Occupation"
                  readOnly
                  id="occupation"
                  defaultValue={patient.occupation}
                />
              </Form.Group>

              <Form.Group as={Col} sm={3}>
                <Label>Income Level</Label>
                <Form.Control
                  type="text"
                  name="income_level"
                  id="income_level"
                  placeholder="Income Level"
                  readOnly
                  defaultValue={patient.income_level}
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} sm={2}>
                <Label>Family Size</Label>
                <Form.Control
                  type="number"
                  name="family_size"
                  min="1"
                  placeholder="Family Size"
                  readOnly
                  id="family_size"
                  defaultValue={patient.family_size}
                />
              </Form.Group>
            </Form.Row>
          </Form>

          <h2>Medical History</h2>
          <Form>
            <Row>
              <Form.Group as={Col}>
                <Label>Allergies</Label>
                <Form.Control
                  type="text"
                  name="allergies"
                  placeholder="Allergies"
                  readOnly
                  id="allergies"
                  defaultValue={patient.allergies}
                />
              </Form.Group>

              <Form.Group as={Col} sm={2}>
                <Label>Blood Type</Label>
                <Form.Control
                  type="text"
                  name="blood_type"
                  placeholder="Blood Type"
                  readOnly
                  id="blood_type"
                  defaultValue={patient.blood_type}
                ></Form.Control>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Label>Insurance Details</Label>
                <Form.Control
                  type="text"
                  name="insurance_details"
                  placeholder="Insurance Details"
                  readOnly
                  id="insurance_details"
                  defaultValue={patient.insurance_details}
                />
              </Form.Group>

              <Form.Group as={Col} sm={4}>
                <Label>Family Physician</Label>
                <Form.Control
                  type="text"
                  name="family_physician"
                  placeholder="Family Physician"
                  readOnly
                  id="family_physician"
                  defaultValue={patient.family_physician}
                />
              </Form.Group>
            </Row>

            {/* <Form.Row>
              <Form.Group as={Col} sm={6}>
                <Label>Immunization</Label>
                <Form.Control
                  type="text"
                  name="immunization_type"
                  placeholder="Immunization Type"
                  readOnly
                  id="immunization_type"
                  defaultValue={patient.immunization_type}
                />
              </Form.Group>

              <Form.Group as={Col} sm={2}>
                <Label>Immunization Date</Label>
                <Form.Control
                  type="date"
                  name="immunization_date"
                  placeholder="Immunization Date"
                  readOnly
                  id="immunization_date"
                  defaultValue={patient.immunization_date}
                />
              </Form.Group>

              <Form.Group as={Col} sm={2}>
                <Label>Administered by</Label>
                <Form.Control
                  type="number"
                  name="employee_id"
                  placeholder="Employee ID"
                  readOnly
                  id="employee_id"
                  defaultValue={patient.employee_id}
                />
              </Form.Group>
            </Form.Row> */}
          </Form>
        </div>
      ))}

      {/* <h2>Patients Notes</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>Note ID</th>
            <th>Date Note Entered</th>
            <th>Physician ID Number</th>
            <th>Patient Notes</th>
          </tr>
        </thead>
        <tbody>
          {notes
            .sort((a, b) => (b.date_stamp > a.date_stamp ? 1 : -1))
            .map((note) => (
              <React.Fragment key={note.patient_note_id}>
                <tr>
                  <td>{note.patient_note_id}</td>
                  <td>{note.date_stamp}</td>
                  <td>{note.employee_id}</td>
                  <td>{note.patient_note}</td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </Table>
      <h2>Medication</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>Medication ID</th>
            <th>Date Entered</th>
            <th>Physician ID Number</th>
            <th>Medication</th>
            <th>Prescription</th>
            <th>Last Fill Date</th>
          </tr>
        </thead>
        <tbody>
          {medication
            .sort((a, b) => (b.date_stamp > a.date_stamp ? 1 : -1))
            .map((medication) => (
              <React.Fragment key={medication.medication_id}>
                <tr>
                  <td>{medication.medication_id}</td>
                  <td>{medication.date_stamp}</td>
                  <td>{medication.employee_id}</td>
                  <td>{medication.medication}</td>
                  <td>{medication.prescription}</td>
                  <td>{medication.last_filled}</td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </Table>

      <h2>Diagnostic Results</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>Diagnostic Image ID</th>
            <th>Date Captured</th>
            <th>Imaging Tech ID</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {diagnostics
            .sort((a, b) => (b.date_stamp > a.date_stamp ? 1 : -1))
            .map((image) => (
              <React.Fragment key={image.diagnostic_image_id}>
                <tr>
                  <td>{image.diagnostic_image_id}</td>
                  <td>{image.date_stamp}</td>
                  <td>{image.employee_id}</td>
                  <td>{image.diagnostic_image}</td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </Table>

      <h2>Lab Results</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>Lab Result ID</th>
            <th>Date Completed</th>
            <th>Lab Tech ID</th>
            <th>Lab Result</th>
          </tr>
        </thead>
        <tbody>
          {labResults
            .sort((a, b) => (b.date_stamp > a.date_stamp ? 1 : -1))
            .map((lab) => (
              <div key={lab.lab_result_id}>
                <tr>
                  <td>{lab.lab_result_id}</td>
                  <td>{lab.date_stamp}</td>
                  <td>{lab.employee_id}</td>
                  <td>{lab.lab_result}</td>
                </tr>
              </div>
            ))}
        </tbody>
      </Table> */}
      <Row>
        <Button
          className="m-3"
          variant="primary"
          // type="submit"
          href="/CareProviderUpdatePatientPage2"
        >
          Add Patient Notes
        </Button>
        <Button
          className="m-3"
          variant="outline-primary"
          // type="submit"
          href={`/CareProviderUpdatePatientPage1/${health_card_number}`}
        >
          Update Patient Information
        </Button>
      </Row>
      {/* <Table responsive>
        <thead>
          <tr>
            <th>Medication</th>
          </tr>
        </thead>
        <tbody>
          {medication.map((patient) => (
            <div key={patient.medication_id}>
              <tr>
                <td>{patient.medication}</td>
              </tr>
            </div>
          ))}
        </tbody>
      </Table> */}
    </Container>
  );
};

export default IndividualPatientInfoPage;
