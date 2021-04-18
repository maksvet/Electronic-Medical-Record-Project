import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const UpdatePatientPage = (props) => {
  console.log(props);
  let id = props.match.params.health_card_number;
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({ display: "none" });
  const [patient, setPatient] = useState("");
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
      res.json().then((res) => setPatients([...res]));
    }
    fetchData();
  }, [id]);

  const handleDelete = (event, id) => {
    event.preventDefault();
    console.log("Donald was here");
    console.log(id);

    fetch(`/api/patients/${id}`, {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    history.push("/patients");
  };

  const handleEdit = (event, patient) => {
    event.preventDefault();
    console.log("D is here again");
    console.log(patient);
    setForm({ display: "block" });
    setPatient(patient);
  };

  const handleChange = (event) => {
    setPatient((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event, id) => {
    event.preventDefault();
    console.log(id);
    fetch(`/api/patients/${id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(patient),
    }).then((response) => response.json());
    history.push("/patients");
  };

  return (
    <div>
      {patients.map((patient) => (
        <div key={patient.id}>
          <p>{patient.name}</p>
          <img
            src={patient.image}
            alt={patient.name}
            width="300"
            height="300"
          />
          <button
            onClick={(e) => {
              handleDelete(e, patient.id);
            }}
          >
            Delete Me!
          </button>
          <button
            onClick={(e) => {
              handleEdit(e, patient);
            }}
          >
            Edit Me!
          </button>
        </div>
      ))}

      {/* This is the form that pops up when you press the Edit Me! button */}
      <form onSubmit={(e) => handleSubmit(e, patient.id)} style={form}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={patient.name}
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
              value={patient.image}
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UpdatePatientPage;
