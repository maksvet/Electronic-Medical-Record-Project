import React from 'react';
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap';

const CreateCareProviderForm = () => {
    return (
      <div>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter login ID"
            aria-label="loginId"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter login password"
            aria-label="password"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Job Title"
            aria-label="jobTitle"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Qualification"
            aria-label="qualification"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Institution Name"
            aria-label="institutionName"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    );
}

export default CreateCareProviderForm
