import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const Person = () => {
    return (
      <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter First Name"
            aria-label="firstName"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Last Name"
            aria-label="lastName"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
          
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter Middle Name"
              aria-label="middleName"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter Date Of Birth"
              aria-label="dateOfBirth"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter Gender"
              aria-label="gender"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
      </div>
    );
}

export default Person
