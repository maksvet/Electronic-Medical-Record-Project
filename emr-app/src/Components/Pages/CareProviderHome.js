import React, { useState } from "react";
import { Container, Form, Button, FormControl } from "react-bootstrap";
import Navigation from "../Shared/Navigation";
import { useHistory, useLocation } from "react-router-dom";

const CareProviderHome = () => {
    let history = useHistory();
    let location = useLocation();
  const [health_card_number, setHealth_card_number] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let { from } = location.state || { from: { pathname: `/IndividualPatientInfoPage/${health_card_number}` } };
    history.replace(from);
    
    setHealth_card_number("");
  };

  return (
    <Container className="p-3">
      <Navigation />
      <h2 className="py-5 text-center">
        Welcome Care Provider: <span className="userName">John Doe</span>
      </h2>

      <Form className="p-5 mx-5" onSubmit={handleSubmit} inline>
        <FormControl
          type="text"
          placeholder="Health Card Number"
          className="mr-sm-3"
          value={health_card_number}
          onChange={(e) => setHealth_card_number(e.target.value)}
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default CareProviderHome;
