import React, { useState } from "react";
import { Container, Form, Button, FormControl } from "react-bootstrap";
import Navigation from "../Shared/Navigation";
import { useHistory, useLocation } from "react-router-dom";

const CareProviderHome = () => {
    let history = useHistory();
    let location = useLocation();
  const [health_card_number, setHealth_card_number] = useState("");

  // const handleChange = (event) => {
  //   setHealth_card_number((prevState) => ({
  //     ...prevState,
  //     [event.target.name]: event.target.value,
  //   }));
  //   console.log(health_card_number);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(health_card_number);
    console.log("working!")
    async function fetchData() {
      console.log("something");
      const res = await fetch(
        `https://run.mocky.io/v3/36919d01-9c59-4d91-a4bb-b565e5a24af4/${health_card_number}`
      );
      res.json().then((res) => setHealth_card_number(res));
    }
    fetchData();

    let { from } = location.state || { from: { pathname: "/IndividualPatientInfoPage" } };
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

      {/* <Form> */}
      {/* <Button
            className="ahbtn"
            variant="primary"
            type="submit"
            href="/UpdatePatientPage"
          >
            Update Patient
            <br />
            CRUD
          </Button>
        </Form> */}
    </Container>
  );
};

export default CareProviderHome;
