import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import Navigation from "../Shared/Navigation";
import { Button } from "react-bootstrap";
import { Table } from "reactstrap";
import { Container } from "react-bootstrap";

const RegisteredCareProviders = (props) => {
  console.log(props);
  let id = props.match.params.employeeID;
  const [careProviders, setCareProviders] = useState([]);
  // const [careProvider, setCareProvider] = useState("");
  // const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      console.log("something");
      const res = await fetch(
        `https://run.mocky.io/v3/342ddaf9-7e18-44c4-9a68-f7e47778221a`,
        {
          method: "GET",
        }
      );
      res.json().then((res) => setCareProviders(res));
    }
    fetchData();
  }, [id]);
 
  const handleDelete = (event, id) => {
    event.preventDefault();
    const index = careProviders.findIndex(
      (careProvider) => careProvider.employeeID === id
    );
    console.log(index);
    careProviders.splice(index, 1);
    setCareProviders([...careProviders]);

    // fetch(`/api/careProviders/${careProvider.employeeID}`, {
    //   method: "delete",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // }).then((response) => response.json());
    // history.push("/careProviders");
  };

  const handleEdit = (event, id) => {
    event.preventDefault();
    // window.location.href = `/AdminUpdateCareProvider/${id}`;
    window.location.href = "/AdminUpdateCareProviderPage";
  };

  return (
    <Container className="p-3">
      <Navigation />
      <h2>Registered Care Providers</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
          {careProviders.map((careProvider) => (
            <React.Fragment key={careProvider.employeeID}>
              <tbody>
              <tr>
                <td>{careProvider.employeeID}</td>
                <td>{careProvider.firstName}</td>
                <td>{careProvider.lastName}</td>
                <td>
                  <Button
                    onClick={(event) => {
                      handleDelete(event, careProvider.employeeID);
                    }}
                  >
                    Delete Me!
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={(event) => {
                      handleEdit(event, careProvider.employeeID);
                    }}
                  >
                    Edit Me!
                  </Button>
                </td>
              </tr>
              </tbody>
            </React.Fragment>
          ))}
      </Table>
    </Container>
  );
};

export default RegisteredCareProviders;
