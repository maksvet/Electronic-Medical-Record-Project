import React, { useState, useEffect } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Row, Col, Input } from "reactstrap";
import Navigation from "../Shared/Navigation";
import { Container } from "react-bootstrap";
import { Table } from "reactstrap";

const IndividualPatientInfoPage = (props) => {
  const [patient, setPatient] = useState([]);
  const [notes, setNotes] = useState("");

  console.log(props);
  let id = props.match.params.health_card_number;

  useEffect(() => {
    async function fetchData() {
      console.log("something");
      const res = await fetch(
        `https://run.mocky.io/v3/c94433df-7ccf-4884-9224-16ce97623f48`,
        {
          method: "GET",
        }
      );
      res.json().then((res) => setPatient(...res));
      console.log(patient);
    }

    async function fetchData2() {
      console.log("notes");
      const res = await fetch(
        `https://run.mocky.io/v3/3a15c1fe-c6da-4f0e-93e4-c959ad68e28b`,
        {
          method: "GET",
        }
      );
      res.json().then((res) => setNotes(...res));
      console.log(notes);
    }
    fetchData2();


    fetchData();
  }, []);

  return (
    <Container className="p-3">
      <Navigation />

      <h1>Patient Information</h1>
      <h2>Contact Info</h2>
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
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
            <Form.Control
              type="text"
              name="street_number"
              placeholder="Street Number"
              id="street_number"
              readOnly
              defaultValue={patient.street_number}
              custom
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="text"
              name="street_name"
              placeholder="Street Name"
              id="street_name"
              readOnly
              defaultValue={patient.street_name}
              custom
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              name="city_Town"
              placeholder="City"
              id="city_Town"
              readOnly
              defaultValue={patient.city_Town}
              custom
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="text"
              name="province_State"
              placeholder="Province"
              id="province_State"
              readOnly
              defaultValue={patient.province_State}
              custom
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="text"
              name="country"
              placeholder="Country"
              id="country"
              readOnly
              defaultValue={patient.country}
              custom
            ></Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              name="postal_code"
              placeholder="Postal Code"
              id="postal code"
              readOnly
              defaultValue={patient.postal_code}
              custom
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              readOnly
              defaultValue={patient.email}
              custom
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="tel"
              name="fax"
              placeholder="Fax"
              id="fax"
              readOnly
              defaultValue={patient.fax}
              custom
            />
          </Form.Group>
        </Form.Row>
      </Form>

      <h2>Personal Details</h2>
      <Form>
        <Row className="py-2">
          <Col sm={4}>
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
          <label>Date of Birth</label>
          <Col sm={2}>
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
            <FormControl
              type="text"
              className="mr-sm-2"
              name="gender"
              placeholder="Gender"
              id="gender"
              readOnly
              defaultValue={patient.gender}
              custom
            ></FormControl>
          </Col>
        </Row>
      </Form>

      <h2>Patient Details</h2>
      <Form>
        <Form.Row>
          <Form.Group as={Col} sm={4}>
            <Form.Control
              type="text"
              name="health_card_number"
              placeholder="Health Card Number"
              readOnly
              id="health_card_number"
              defaultValue={patient.health_card_number}
            />
          </Form.Group>

          <Form.Group as={Col} sm={3}>
            <Form.Control
              type="text"
              name="marital_status"
              placeholder="Marital Status"
              readOnly
              id="marital_status"
              defaultValue={patient.marital_status}
            ></Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} sm={2}>
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

        <Form.Row>
          <Form.Group as={Col} sm={6}>
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
            <Form.Control
              type="number"
              name="employee_id"
              placeholder="Employee ID"
              readOnly
              id="employee_id"
              defaultValue={patient.employee_id}
            />
          </Form.Group>
        </Form.Row>
      </Form>

      <h2>Patient Notes</h2>
      <Form>
        <Form.Group as={Col} sm={2}>
          <Form.Control
            type="text"
            name="employee_id"
            placeholder="Employee ID"
            readOnly
            id="employee_id"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control
            type="textarea"
            name="patient_note"
            placeholder="Patient Notes"
            readOnly
            id="patient_note"
          />
        </Form.Group>
        <Form.Group as={Col} sm={3}>
          <Form.Control
            type="date"
            name="date_stamp"
            placeholder="Choose Date"
            readOnly
            id="date_stamp"
          />
        </Form.Group>
      </Form>

      <h2>Diagnostic Images</h2>
      <Form>
        <Form.Group as={Col} sm={2}>
          <Form.Control
            type="text"
            name="employee_id"
            placeholder="Employee ID"
            readOnly
            id="employee_id"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control
            type="file"
            name="diagnostic_image"
            placeholder="Diagnostic Image"
            readOnly
            id="diagnostic_image"
          />
        </Form.Group>
        <Form.Group as={Col} sm={3}>
          <Form.Control
            type="date"
            name="date_stamp"
            placeholder="Date"
            readOnly
            id="date_stamp"
          />
        </Form.Group>
      </Form>

      <h2>Lab Results</h2>
      <Form>
        <Form.Group as={Col}>
          <Form.Control
            type="file"
            name="lab_result"
            readOnly
            placeholder="Attach Lab Result"
            id="lab_result"
          />
        </Form.Group>
        <Form.Group as={Col} sm={3}>
          <Form.Control
            type="date"
            name="date_stamp"
            placeholder="Date"
            readOnly
            id="date_stamp"
          />
        </Form.Group>
      </Form>

      <h2>Medication</h2>
      <Form>
        <Form.Group as={Col}>
          <Form.Control
            type="textarea"
            name="medication"
            readOnly
            placeholder="Medication"
            id="medication"
          />
        </Form.Group>
        <Form.Group as={Col} sm={3}>
          <Form.Control type="date" name="date_stamp" id="date_stamp" />
        </Form.Group>
        <Row>
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              name="prescription"
              readOnly
              placeholder="Prescription"
              id="prescription"
            />
          </Form.Group>
          <Form.Group as={Col} sm={3}>
            <Form.Control
              type="date"
              name="last_filled_date"
              placeholder="Date"
              readOnly
              id="last_filled_date"
            />
          </Form.Group>
        </Row>

        <Button
          variant="primary"
          type="submit"
          href="/CareProviderUpdatePatientPage1"
        >
          Update
        </Button>
      </Form>
      <Table responsive>
        <thead>
          <tr>
            <th>Patient Notes</th>
            <th>Physician ID Number</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <div key={note.id}>
              <tr>
                <td>{note.id}</td>
                <td>{note.note}</td>
                <td>{note.date_stamp}</td>
              </tr>
            </div>
          ))}
        </tbody>
      </Table>
      <Table responsive>
        <thead>
          <tr>
            <th>Patient Notes</th>
            <th>Physician ID Number</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {patient.map((patient) => (
            <div key={patient.health_card_number}>
              <tr>
                <td>{patient.note}</td>
                <td>{patient.employee_id}</td>
                <td>{patient.date_stamp}</td>
              </tr>
            </div>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default IndividualPatientInfoPage;
