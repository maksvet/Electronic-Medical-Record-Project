import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import ContactInformation from './Forms/ContactInformation';
import Person from './Forms/Person';

const CreatePatientForm = () => {
  return (
    <div>
      <Person />
      <ContactInformation />

      <InputGroup className="mb-3">
       <FormControl
          placeholder="Enter Language"
          aria-label="language"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

       <InputGroup className="mb-3">
       <FormControl
         placeholder="Enter Health Card No"
         aria-label="healthCardNo"
         aria-describedby="basic-addon1"
       />
       </InputGroup>

     <InputGroup className="mb-3">
     <FormControl
       placeholder="Enter Allergies"
       aria-label="allergies"
       aria-describedby="basic-addon1"
     />
   </InputGroup>
   
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Enter Blood Type"
      aria-label="bloodType"
      aria-describedby="basic-addon1"
    />
     </InputGroup>

      <InputGroup className="mb-3">
      <FormControl
        placeholder="Enter Emergency Contact Name"
        aria-label="emergencyContactName"
        aria-describedby="basic-addon1"
      />
    </InputGroup>

      <InputGroup className="mb-3">
      <FormControl
        placeholder="Enter Emergency Contact No"
        aria-label="emergencyContactNo"
        aria-describedby="basic-addon1"
      />
    </InputGroup>  

    <InputGroup className="mb-3">
       <FormControl
          placeholder="Enter Race"
          aria-label="R"ce
          aria-describedby="basic-addon1"
        />
      </InputGroup>

       <InputGroup className="mb-3">
       <FormControl
         placeholder="Enter Marital Status"
         aria-label="maritalStatus"
         aria-describedby="basic-addon1"
       />
       </InputGroup>

     <InputGroup className="mb-3">
     <FormControl
       placeholder="Enter Size of Family"
       aria-label="sizeOfFamily"
       aria-describedby="basic-addon1"
     />
   </InputGroup>

    <InputGroup className="mb-3">
    <FormControl
      placeholder="Enter Occupation"
      aria-label="occupation"
      aria-describedby="basic-addon1"
    />
     </InputGroup>

      <InputGroup className="mb-3">
      <FormControl
        placeholder="Enter Nationality"
        aria-label="nationality"
        aria-describedby="basic-addon1"
      />
    </InputGroup>

      <InputGroup className="mb-3">
      <FormControl
        placeholder="Enter Religion"
        aria-label="religion"
        aria-describedby="basic-addon1"
      />
    </InputGroup>

      <InputGroup className="mb-3">
      <FormControl
        placeholder="Enter Insurance Details"
        aria-label="insuranceDetails"
        aria-describedby="basic-addon1"
      />
    </InputGroup>

      <InputGroup className="mb-3">
      <FormControl
        placeholder="Enter Family Physician"
        aria-label="familyPhysician"
        aria-describedby="basic-addon1"
      />
    </InputGroup> 
     </div>
  );
};

export default CreatePatientForm;
