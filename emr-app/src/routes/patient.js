import express from "express";
const router = express.Router();
import { isAuth } from "../middleware/isAuth.js";
import { isAdmin } from "../middleware/isAdmin.js";
import { db } from "../database/connection.js";

// Declare primary(param) key
var pkText = "health_card_number";

router.post("/", isAuth, isAdmin, async (req, res) => {
  // Get payload
  const {
    phone_number,
    street_number,
    street_name,
    city_town,
    province_state,
    country,
    postal_code,
    email,
    fax,

    first_name,
    last_name,
    middle_name,
    dob,
    gender,

    health_card_number,
    language,
    emergency_contact_name,
    allergies,
    blood_type,
    emergency_contact_number,
  } = req.body;

  const sql1 = `INSERT INTO ${process.env.DBNAME}.contact_information
	(phone_number, street_number, street_name, city_town, province_state, country, postal_code, email, fax) VALUES ('${phone_number}', '${street_number}', '${street_name}', '${city_town}', '${province_state}', '${country}','${postal_code}', '${email}', '${fax}');
`;

  const sql2 = `INSERT INTO ${process.env.DBNAME}.person
	( first_name, last_name, middle_name, dob, gender, contact_id) VALUES ('${first_name}', '${last_name}', '${middle_name}', '${dob}', '${gender}', LAST_INSERT_ID());`;

  const sql3 = `INSERT INTO ${process.env.DBNAME}.patient
	( health_card_number, language, emergency_contact_name, allergies, blood_type, emergency_contact_number, person_id) VALUES ( '${health_card_number}', '${language}', '${emergency_contact_name}', '${allergies}','${blood_type}', '${emergency_contact_number}', LAST_INSERT_ID());`;

  try {
    await db.beginTransaction();
    await db.query(sql1);
    await db.query(sql2);
    const results = await db.query(sql3);
    await db.commit();
    dbStatus(res, results);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.get("/", isAuth, async (req, res) => {
  const sql = `SELECT p.health_card_number, p1.first_name, p1.last_name, p1.dob, p1.gender
  FROM ${process.env.DBNAME}.patient p  
  INNER JOIN ${process.env.DBNAME}.person p1 ON ( p.person_id = p1.person_id)
  WHERE p.isative = true;`;

  try {
    const results = await db.query(sql);
    res.status(200).send(results);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get(`/:${pkText}`, isAuth, async (req, res) => {
  // const sql = `SELECT p.language, p.emergency_contact_name, p.allergies, p.blood_type, p.emergency_contact_number, api.race, api.marital_status, api.size_of_family, api.occupation, api.income_level, api.nationality, api.religion, api.insurance_details, api.family_physician, p1.first_name, p1.last_name, p1.middle_name, p1.dob, p1.gender, ci.phone_number, ci.street_number, ci.street_name, ci.city_town, ci.province_state, ci.country, ci.postal_code, ci.email, ci.fax FROM ${process.env.DBNAME}.patient p INNER JOIN ${process.env.DBNAME}.additional_patient_info api ON ( p.health_card_number = api.health_card_number)  INNER JOIN ${process.env.DBNAME}.person p1 ON ( p.person_id = p1.person_id) INNER JOIN ${process.env.DBNAME}.contact_information ci ON ( p1.contact_id = ci.contact_id)  WHERE p.${pkText} ='${req.params[pkText]}' AND p.isative = true`;

  const sql = `SELECT p.language, p.emergency_contact_name, p.allergies, p.blood_type, p.emergency_contact_number, p1.first_name, p1.last_name, p1.middle_name, p1.dob, p1.gender, ci.phone_number, ci.street_number, ci.street_name, ci.city_town, ci.province_state, ci.country, ci.postal_code, ci.email, ci.fax 
  FROM emrconn.patient p INNER JOIN emrconn.person p1 ON ( p.person_id = p1.person_id) INNER JOIN emrconn.contact_information ci ON ( p1.contact_id = ci.contact_id)  WHERE p.${pkText} ='${req.params[pkText]}' AND p.isative = true;`;

  try {
    const results = await db.query(sql);
    res.status(200).send(results);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put(`/update/:${pkText}/contact_info`, isAuth, async (req, res) => {
  let query = [];
  Object.entries(req.body).map((entry) => {
    query.push(`c1.${entry[0]} = '${entry[1]}'`);
  });

  // const sql = `UPDATE ${
  //   process.env.DBNAME
  // }.contact_information SET ${query.toString()} WHERE contact_id=${
  //   req.params.contact_id
  // };`;

  const sql = `UPDATE ${
    process.env.DBNAME
  }.contact_information c1, (SELECT ci.contact_id
    FROM ${process.env.DBNAME}.contact_information ci 
      INNER JOIN ${
        process.env.DBNAME
      }.person p ON ( ci.contact_id = p.contact_id)  
        INNER JOIN ${
          process.env.DBNAME
        }.patient p1 ON ( p.person_id = p1.person_id)
    WHERE p1.${pkText}='${req.params[pkText]}') c2
    SET ${query.toString()} 
    WHERE c1.contact_id = c2.contact_id;`;

  // const sql = `UPDATE ${process.env.DBNAME}.person p1, (SELECT p.person_id
  //   FROM ${process.env.DBNAME}.person p INNER JOIN ${
  //   process.env.DBNAME
  // }.patient p1 ON ( p.person_id = p1.person_id)
  //   WHERE ${pkText}="${req.params.health_card_number}") p2
  //   SET ${query.toString()}
  //   WHERE p1.person_id = p2.person_id ;`;

  // Apply update
  try {
    const results = await db.query(sql);
    dbStatus(res, results);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put(`/update/:${pkText}/personal_info`, isAuth, async (req, res) => {
  let query = [];
  Object.entries(req.body).map((entry) => {
    query.push(`${entry[0]} = '${entry[1]}'`);
  });

  const sql = `UPDATE ${process.env.DBNAME}.person p1, (SELECT p.person_id
    FROM ${process.env.DBNAME}.person p INNER JOIN ${
    process.env.DBNAME
  }.patient p1 ON ( p.person_id = p1.person_id)
    WHERE ${pkText}="${req.params.health_card_number}") p2  
    SET ${query.toString()} 
    WHERE p1.person_id = p2.person_id ;`;

  try {
    const results = await db.query(sql);
    dbStatus(res, results);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put(`/update/:contact_id/contact_info`, isAuth, async (req, res) => {
  let query = [];
  Object.entries(req.body).map((entry) => {
    query.push(`${entry[0]} = '${entry[1]}'`);
  });

  const sql = `UPDATE ${
    process.env.DBNAME
  }.contact_information SET ${query.toString()} WHERE contact_id=${
    req.params.contact_id
  };`;

  // Apply update
  try {
    const results = await db.query(sql);
    dbStatus(res, results);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put(`/update/:${pkText}/patient_details`, isAuth, async (req, res) => {
  let query = [];
  Object.entries(req.body).map((entry) => {
    query.push(`${entry[0]} = '${entry[1]}'`);
  });

  const sql = `UPDATE ${
    process.env.DBNAME
  }.patient SET ${query.toString()} WHERE ${pkText}='${req.params[pkText]}'`;

  // Apply update
  try {
    const results = await db.query(sql);
    dbStatus(res, results);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// router.put(`/update/:${pkText}/medical_history`, async (req, res) => {
//   let query = [];
//   Object.entries(req.body).map((entry) => {
//     query.push(`${entry[0]} = '${entry[1]}'`);
//   });

//   const sql = `UPDATE ${
//     process.env.DBNAME
//   }.patient SET ${query.toString()} WHERE ${pkText}='${req.params[pkText]}'`;

//   // Apply update
//   try {
//     const results = await db.query(sql);
//     dbStatus(res, results);
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// });

router.delete(`/:${pkText}`, isAuth, isAdmin, async (req, res) => {
  const sql = `UPDATE ${process.env.DBNAME}.patient SET isative = false WHERE ${pkText}='${req.params[pkText]}';`;

  try {
    const results = await db.query(sql);
    dbStatus(res, results);
  } catch (error) {
    console.log(error);
    return res.status(404).json(error);
  }
});

const dbStatus = (res, results) => {
  if (results.affectedRows !== 0)
    return res.status(200).json(`Database successfully updated!`);
  return res.status(400).json(`Error: database not updated!!`);
};

export default router;
