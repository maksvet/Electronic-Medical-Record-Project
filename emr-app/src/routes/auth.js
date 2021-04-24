import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Joi from "joi";
import { db } from "../database/connection.js";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

const getCredentials = (req) => {
  return new Promise((resolve, reject) => {
    // Validate input
    const { error } = validateAuthForm(req.body);
    if (error) return reject(error.details[0].message);

    let { login_id, password } = req.body;

    const payload = {
      login_id,
      password,
    };

    return resolve(payload);
  });
};

const validateUser = (userCredentials, usersFullCredentials) => {
  return new Promise(async (resolve, reject) => {
    const index = usersFullCredentials.findIndex(
      (userFullCredentials) =>
        userFullCredentials.login_id === userCredentials.login_id
    );

    if (index === -1) {
      return reject({ error: "Invalid ID or password.", status: 400 });
    } else {
      try {
        const validPassword = await bcrypt.compare(
          userCredentials.password,
          usersFullCredentials[index].password
        );

        if (!validPassword)
          return reject({ error: "Invalid ID or password.", status: 400 });
        return resolve(usersFullCredentials[index]);
      } catch (error) {
        return reject(error);
      }
    }
  });
};

const getToken = (validUser) => {
  const payload = {
    login_id: validUser.login_id,
    isadmin: validUser.isadmin,
  };
  return jwt.sign(payload, `${process.env.PRIVATEKEY}`);
};

router.post("/", async (req, res) => {
  const sql = `SELECT e.login_id, e.password, a.isadmin 
    FROM emrconn.employee e 
    INNER JOIN emrconn.admin a 
    ON ( e.employee_id = a.employee_id 
      AND e.employee_id = a.employee_id 
      AND e.employee_id = a.employee_id )`;

  try {
    const userCredentials = await getCredentials(req);
    const usersFullCredentials = await db.query(sql);
    const validUser = await validateUser(userCredentials, usersFullCredentials);
    const token = getToken(validUser);
    return res.status(201).json({ token: token });
  } catch (error) {
    if (error.status == 400) {
      return res.status(400).json({ message: "Invalid email or password!" });
    } else {
      return res.status(500).send(error);
    }
  } finally {
  }
});

const validateAuthForm = (reqBody) => {
  const schemaUserForm = Joi.object({
    login_id: Joi.string().min(5).required(),
    password: Joi.string().min(8).required(),
  });

  return schemaUserForm.validate(reqBody);
};

export default router;
