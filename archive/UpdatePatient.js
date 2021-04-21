import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const UpdatePatient = () => {
    return (
      <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Medication"
            aria-label="medication"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Prescription"
            aria-label="prescription"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Last Filled Date"
            aria-label="LastFilledDate"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Patient Note"
            aria-label="patientNote"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Type"
            aria-label="type"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Diagnostic Image"
            aria-label="diagnosticImage"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Lab Result"
            aria-label="labResult"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Immunization ID"
            aria-label="immunizationID"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Lab Results ID"
            aria-label="labResultsID"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
    );
}

export default UpdatePatient

