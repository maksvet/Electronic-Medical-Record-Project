import React from 'react';
import Person from './Forms/Person';
import ContactInformation from './Forms/ContactInformation';
import { InputGroup, FormControl } from 'react-bootstrap';

const CreateCareProviderForm = () => {
    return (
      <div>
        <Person />
        <ContactInformation />

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
    
    <InputGroup controlId="formBasicCheckbox">
          <FormControl type="checkbox" label="Admin" />
        </InputGroup>
      </div>
    );
}

export default CreateCareProviderForm
