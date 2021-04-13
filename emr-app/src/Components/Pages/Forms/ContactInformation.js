import React from 'react';
import { InputGroup, FormControl, Form, Button, Col } from "react-bootstrap";

const ContactInformation = () => {
    return (
      <div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridStreetNumber">
              <Form.Control type="number" placeholder="Street Number" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridP">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control placeholder="City" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridProvince">
              <Form.Control as="select" defaultValue="Choose Province">
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

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Control placeholder="Zip" />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> 
        {/* <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Street Number"
            aria-label="streetNumber"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Street Name"
            aria-label="streetName"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter City/Town"
            aria-label="cityTown"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Province/State"
            aria-label="provinceState"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter
              Country"
            aria-label="country"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Postal Code"
            aria-label="postalCode"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Email"
            aria-label="email"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Fax"
            aria-label="fax"
            aria-describedby="basic-addon1"
          />
        </InputGroup> */}
      </div>
    );
}

export default ContactInformation
