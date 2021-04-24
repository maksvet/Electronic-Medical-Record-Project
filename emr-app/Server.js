import express from "express";
import cors from "cors";
import auth from "./src/routes/auth.js";
import patient from "./src/routes/patient.js";
import careprovider from "./src/routes/careprovider";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.use("/patient/addinfo", patientAddInfo);

app.use("/auth", auth);
app.use("/patient", patient);
app.use("/careprovider", careprovider);

app.get("*", (req, res) => {
  const err = new Error("An invalid URL");
  return res.status(404).send(err.message);
});

const port = process.env.REACT_APP_SERVERPORT;

app.listen(port, () =>
  console.log(`Server started! listening on port ${port}...`)
);
