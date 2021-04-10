import React from 'react';
import { InputGroup, FormControl } from "react-bootstrap";

const ContactInformation = () => {
    return (
      <div>
        <InputGroup className="mb-3">
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
        </InputGroup>
      </div>
    );
}

export default ContactInformation
