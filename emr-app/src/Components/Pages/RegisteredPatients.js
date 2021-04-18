import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const RegisteredPatients = (props) => {
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
        `https://run.mocky.io/v3/9f08c699-0bfe-4da0-aef3-a9395865d444`,
        {
          method: "GET",
        }
      );
      res.json().then((res) => setCareProviders([...res]));
    }
    fetchData();
  }, [id]);

  const handleDelete = (event, id) => {
    event.preventDefault();
    console.log("Donald was here");
    console.log(id);

    fetch(`/api/careProviders/${id}`, {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    history.push("/careProviders");
  };

  const handleEdit = (event, careProvider) => {
    event.preventDefault();
    console.log("D is here again");
    console.log(careProvider);
    setForm({ display: "block" });
    setCareProvider(careProvider);
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
        <div key={careProvider.id}>
          <p>{careProvider.name}</p>
          <img
            src={careProvider.image}
            alt={careProvider.name}
            width="300"
            height="300"
          />
          <button
            onClick={(e) => {
              handleDelete(e, careProvider.id);
            }}
          >
            Delete Me!
          </button>
          <button
            onClick={(e) => {
              handleEdit(e, careProvider);
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

export default RegisteredPatients;
