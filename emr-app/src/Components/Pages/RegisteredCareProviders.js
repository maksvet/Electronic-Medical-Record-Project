import React, { useState, useEffect } from "react";
// import { findDOMNode } from "react-dom";
// import { useHistory } from "react-router-dom";

const RegisteredCareProviders = () => {
  const [cats, setCats] = useState([]);
  const [cat, setCat] = useState([{ name: "", image: "" }]);
  const [editID, setEditID] = useState({ display: "block" });
  //const history = useHistory();

  useEffect(() => {
    //   fetch("http://localhost:3001/api/cats")
    //     .then((res) => res.json())
    //     .then((res) => this.setCats(res));
    // });

    async function fetchData() {
      const res = await fetch("http://localhost:3001/api/cats");
      res.json().then((res) => setCats(res));
      //.catch((err) => setErrors(err));
    }
    fetchData();
  }, []);

  const handleDelete = (event, id) => {
    event.preventDefault();
    const index = cats.findIndex((props) => props.id === id);
    cats.splice(index, 1);
    setCats([...cats]);
    fetch(`/api/cats/${id}`, {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    // history.push("/cats");
    // window.location.href = "/cats";
  };

  const handleEdit = (event, cat) => {
    event.preventDefault();
    setEditID(cat.id);
  };

  const handleChange = (event, cat) => {
    // setCat((prevState) => ({
    // ...prevState,
    // [event.target.name]: event.target.value,
    // }));

    const payload = {
      id: cat.id,
      name: cat.name,
      image: cat.image,
    };

    const index = cats.findIndex((props) => props.id === cat.id);
    console.log(index);

    cats[index] = {
      payload,
      ...cats[index],
      [event.target.name]: event.target.value,
    };

    setCat(cats[index]);
    setCats([...cats]);
  };

  const handleSubmit = (event, id) => {
    event.preventDefault();
    setEditID("");
    fetch(`/api/cats/${id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(cat),
    }).then((response) => response.json());
    // history.push("/cats");
    // window.location.href = "/cats";
  };

  return (
    <div>
      {cats.map((cat) => (
        // (cat[cat.id] = { name: cat.name, image: cat.image }),
        <div key={cat.id}>
          <p>{cat.name}</p>
          <img src={cat.image} alt={cat.name} width="300" height="300" />
          <br />
          <button
            onClick={(e) => {
              handleDelete(e, cat.id);
            }}
          >
            Delete Me!
          </button>
          <button
            onClick={(e) => {
              handleEdit(e, cat);
            }}
          >
            Edit Me!
          </button>

          <form
            onSubmit={(e) => handleSubmit(e, cat.id)}
            style={
              editID === cat.id ? { display: "block" } : { display: "none" }
            }
            id={cat.id}
          >
            <div>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  // defaultValue={cat[cat.id].name}
                  defaultValue={cat.name}
                  // value=
                  onChange={(e) => handleChange(e, cat)}
                />
              </label>
            </div>
            <div>
              <label>
                Photo:
                <input
                  type="text"
                  name="image"
                  // defaultValue={cat[cat.id].image}
                  defaultValue={cat.image}
                  // value=
                  onChange={(e) => handleChange(e, cat)}
                />
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      ))}
    </div>
  );
};

export default RegisteredCareProviders;
