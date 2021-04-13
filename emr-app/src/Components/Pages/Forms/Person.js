import React, { useState } from 'react';
import { Col, FormControl, Form, Row} from "react-bootstrap";
import { Input, Label } from 'reactstrap';
// import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

const Person = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  

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

    console.log(
      JSON.stringify({ firstName, middleName, lastName, dob, gender })
    );
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


  return (
    <Form onSubmit={handleSubmit}>
      <Row className="py-2">
        <Col sm={4}>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter First Name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Col>

        <Col sm={4}>
          <Input
            type="text"
            name="middleName"
            id="middleName"
            placeholder="Enter Middle Name"
            required
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </Col>

        <Col sm={4}>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter Last Name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Col>
      </Row>

      <Row className="py-2">
        <Col sm={6}>
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

        <Col sm={6}>
          <FormControl
            as="select"
            className="mr-sm-2"
            type="text"
            name="gender"
            id="gender"
            placeholder=""
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            custom
          >
            <option value="0">Select Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Non-Binary</option>
          </FormControl>
        </Col>
      </Row>
    </Form>
  );
}

export default Person
