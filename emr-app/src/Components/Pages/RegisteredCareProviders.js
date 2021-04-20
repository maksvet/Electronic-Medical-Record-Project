import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const RegisteredCareProviders = (props) => {
  console.log(props);
  let id = props.match.params.employeeID;
  const [careProviders, setCareProviders] = useState([]);
  const [form, setForm] = useState({ display: "none" });
  const [careProvider, setCareProvider] = useState("");
  const history = useHistory();

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
    const index = careProviders.findIndex((careProvider=> careProvider.employeeID === id));
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

  const handleChange = (event) => {
    setCareProvider((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event, id) => {
    event.preventDefault();
    console.log(id);
    fetch(`/api/careProviders/${id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(careProvider),
    }).then((response) => response.json());
    history.push("/careProviders");
  };

  return (
    <div>
      {careProviders.map((careProvider) => (
        <div key={careProvider.employeeID}>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{careProvider.employeeID}</th>
                <td>{careProvider.firstName}</td>
                <td>{careProvider.lastName}</td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={(event) => {
              handleDelete(event, careProvider.employeeID);
            }}
          >
            Delete Me!
          </button>
          <button
            onClick={(event) => {
              handleEdit(event, careProvider.employeeID);
            }}
          >
            Edit Me!
          </button>
        </div>
      ))}

      {/* This is the form that pops up when you press the Edit Me! button */}
      <form onSubmit={(e) => handleSubmit(e, careProvider.id)} style={form}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={careProvider.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Photo:
            <input
              type="text"
              name="image"
              value={careProvider.image}
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RegisteredCareProviders;
