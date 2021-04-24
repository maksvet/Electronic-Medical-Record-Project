import express from "express";
const router = express.Router();
import { isAuth } from "../middleware/isAuth.js";
import { isAdmin } from "../middleware/isAdmin.js";
import { db } from "../database/connection.js";
import bcrypt from "bcrypt";

// Declare primary(param) key
var pkText = "employee_id";

router.post("/", isAuth, isAdmin, async (req, res) => {
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
    login_id,
    job_title,
    isadmin,
    institution_id,
  } = req.body;

  const password = await bcrypt.hash(req.body.password, 10);

  const sql1 = `INSERT INTO ${process.env.DBNAME}.contact_information (phone_number, street_number, street_name, city_town, province_state, country, postal_code, email, fax) VALUES ('${phone_number}', '${street_number}', '${street_name}', '${city_town}', '${province_state}', '${country}','${postal_code}', '${email}', ${fax});
`;
  const sql2 = `INSERT INTO ${process.env.DBNAME}.person ( first_name, last_name, middle_name, dob, gender, contact_id) VALUES ('${first_name}', '${last_name}', '${middle_name}', '${dob}', '${gender}', LAST_INSERT_ID());`;

  const sql3 = `INSERT INTO ${process.env.DBNAME}.employee (login_id, password, person_id, institution_id, job_title) VALUES ( '${login_id}', '${password}', LAST_INSERT_ID(), '${institution_id}', '${job_title}');`;

  const sql4 = `INSERT INTO ${process.env.DBNAME}.admin (employee_id, isadmin) VALUES ( LAST_INSERT_ID(), ${isadmin} );`;

  try {
    await db.beginTransaction();
    await db.query(sql1);
    await db.query(sql2);
    await db.query(sql3);
    const results = await db.query(sql4);
    await db.commit();
    return dbStatus(res, results);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  const sql = `SELECT e.employee_id, e.job_title, p.first_name, p.last_name, a.isadmin
  FROM ${process.env.DBNAME}.employee e 
      INNER JOIN ${process.env.DBNAME}.person p ON ( e.person_id = p.person_id)  
      INNER JOIN ${process.env.DBNAME}.admin a ON ( e.employee_id = a.employee_id)
  WHERE e.isactive  = true;`;

  try {
    const results = await db.query(sql);
    return res.status(200).send(results);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get(`/:${pkText}`, async (req, res) => {
  const sql = `SELECT e.employee_id, e.login_id, e.job_title, eq.qualification, a.isadmin, p.person_id, p.first_name, p.last_name, p.middle_name, p.dob, p.gender, p.contact_id, ci.phone_number, ci.street_number, ci.street_name, ci.city_town, ci.province_State, ci.country, ci.postal_code, ci.email, ci.fax
  FROM emrconn.employee e 
      INNER JOIN ${process.env.DBNAME}.employee_qualification eq ON ( e.employee_id = eq.employee_id)  
      INNER JOIN ${process.env.DBNAME}.admin a ON ( e.employee_id = a.employee_id)  
      INNER JOIN ${process.env.DBNAME}.person p ON ( e.person_id = p.person_id)  
          INNER JOIN ${process.env.DBNAME}.contact_information ci ON ( p.contact_id = ci.contact_id)  
  WHERE (e.employee_id=${req.params[pkText]} && e.isactive=true) LIMIT 1;`;

  try {
    const results = await db.query(sql);
    res.status(200).send(results);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put(`/update/:contact_id/contact_info`, async (req, res) => {
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

router.put(`/update/:person_id/person`, async (req, res) => {
  let query = [];
  Object.entries(req.body).map((entry) => {
    query.push(`${entry[0]} = '${entry[1]}'`);
  });

  const sql = `UPDATE ${
    process.env.DBNAME
  }.person SET ${query.toString()} WHERE person_id='${req.params.person_id}';`;

  // Apply update
  try {
    const results = await db.query(sql);
    dbStatus(res, results);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put(`/update/:employee_id/employee`, async (req, res) => {
  let query = [];
  Object.entries(req.body).map((entry) => {
    query.push(`${entry[0]} = '${entry[1]}'`);
  });

  const sql = `UPDATE ${
    process.env.DBNAME
  }.employee SET ${query.toString()} WHERE employee_id=${
    req.params.employee_id
  };`;

  // Apply update
  try {
    const results = await db.query(sql);
    dbStatus(res, results);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put(`/update/:employee_id/admin`, async (req, res) => {
  let query = [];
  Object.entries(req.body).map((entry) => {
    query.push(`${entry[0]} = '${entry[1]}'`);
  });

  const sql = `UPDATE ${
    process.env.DBNAME
  }.admin SET ${query.toString()} WHERE employee_id=${req.params.employee_id};`;

  // Apply update
  try {
    const results = await db.query(sql);
    dbStatus(res, results);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put(`/update/:immunization_id/immunization`, async (req, res) => {
  let query = [];
  Object.entries(req.body).map((entry) => {
    query.push(`${entry[0]} = '${entry[1]}'`);
  });

  const sql = `UPDATE ${
    process.env.DBNAME
  }.immunization SET ${query.toString()} WHERE immunization_id=${
    req.params.immunization_id
  };`;

  // Apply update
  try {
    const results = await db.query(sql);
    dbStatus(res, results);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put(`/update/:medication_id/medication`, async (req, res) => {
  let query = [];
  Object.entries(req.body).map((entry) => {
    query.push(`${entry[0]} = '${entry[1]}'`);
  });

  const sql = `UPDATE ${
    process.env.DBNAME
  }.medication SET ${query.toString()} WHERE medication_id=${
    req.params.medication_id
  };`;

  // Apply update
  try {
    const results = await db.query(sql);
    dbStatus(res, results);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put(`/update/:qualification_id/qualification`, async (req, res) => {
  let query = [];
  Object.entries(req.body).map((entry) => {
    query.push(`${entry[0]} = '${entry[1]}'`);
  });

  const sql = `UPDATE ${
    process.env.DBNAME
  }.qualification SET ${query.toString()} WHERE qualification_id=${
    req.params.qualification_id
  };`;

  // Apply update
  try {
    const results = await db.query(sql);
    dbStatus(res, results);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.delete(`/:${pkText}`, async (req, res) => {
  const sql = `UPDATE ${process.env.DBNAME}.employee SET isactive = false WHERE ${pkText}='${req.params[pkText]}';`;

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
