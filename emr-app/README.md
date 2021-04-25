FS1030 Group Project
Electronic Medical Record System
fs1030-fall2020-grp-d
----------------------------------------------------------------------------------------------------------------------

**ReadMe**

1. To install the _emr-app_ log into Git and navigate to the following repository: https://gitlab.com/DonKur/fs1030-fall2020-grp-d.git

2. Clone the repository.

3. In the root folder _emr.app_, create an _.ENV_ file and the following:
Note: When we do a push _.ENV_ file gets ignored.

```
	PORT=9001
	REACT_APP_SERVERPORT=9000
	PRIVATEKEY="anykey"
	DBHOST= "localhost"
	DBUSER= "nodeclient"
	DBPASSWORD= "123456"
	DBNAME= "emrconn"
```

4. Open _command line_.

5. Navigate to the _emr.app_ directory.
.
5. To to install dependencies run the following command: _npm i_.

6. To start the app run the following command: _npm start_.

7. The application will start on port _localhost:9001_.

**SQL Statements**

Note: these files are all in the folder emr-app > src > routes
 
File Name: auth.js
Line Number:64
SQL Statement:
  const sql = `SELECT e.login_id, e.password, a.isadmin 
    FROM emrconn.employee e 
    INNER JOIN emrconn.admin a 
    ON ( e.employee_id = a.employee_id 
      AND e.employee_id = a.employee_id 
      AND e.employee_id = a.employee_id )`;
	  
File Name: careprovider.js
Line Number: 35 - 41

  const sql1 = `INSERT INTO ${process.env.DBNAME}.contact_information (phone_number, street_number, street_name, city_town, province_state, country, postal_code, email, fax) VALUES ('${phone_number}', '${street_number}', '${street_name}', '${city_town}', '${province_state}', '${country}','${postal_code}', '${email}', ${fax});
`;
  const sql2 = `INSERT INTO ${process.env.DBNAME}.person ( first_name, last_name, middle_name, dob, gender, contact_id) VALUES ('${first_name}', '${last_name}', '${middle_name}', '${dob}', '${gender}', LAST_INSERT_ID());`;

  const sql3 = `INSERT INTO ${process.env.DBNAME}.employee (login_id, password, person_id, institution_id, job_title) VALUES ( '${login_id}', '${password}', LAST_INSERT_ID(), '${institution_id}', '${job_title}');`;

  const sql4 = `INSERT INTO ${process.env.DBNAME}.admin (employee_id, isadmin) VALUES ( LAST_INSERT_ID(), ${isadmin} );`;
  
Line Number: 57 - 62
   const sql = `SELECT e.employee_id, e.job_title, p.first_name, p.last_name, a.isadmin
  FROM ${process.env.DBNAME}.employee e 
      INNER JOIN ${process.env.DBNAME}.person p ON ( e.person_id = p.person_id)  
      INNER JOIN ${process.env.DBNAME}.admin a ON ( e.employee_id = a.employee_id)
  WHERE e.isactive  = true;`;
  
Line Number 73 - 79
  const sql = `SELECT e.employee_id, e.login_id, e.job_title, eq.qualification, a.isadmin, p.person_id, p.first_name, p.last_name, p.middle_name, p.dob, p.gender, p.contact_id, ci.phone_number, ci.street_number, ci.street_name, ci.city_town, ci.province_State, ci.country, ci.postal_code, ci.email, ci.fax
  FROM emrconn.employee e 
      INNER JOIN ${process.env.DBNAME}.employee_qualification eq ON ( e.employee_id = eq.employee_id)  
      INNER JOIN ${process.env.DBNAME}.admin a ON ( e.employee_id = a.employee_id)  
      INNER JOIN ${process.env.DBNAME}.person p ON ( e.person_id = p.person_id)  
          INNER JOIN ${process.env.DBNAME}.contact_information ci ON ( p.contact_id = ci.contact_id)  
  WHERE (e.employee_id=${req.params[pkText]} && e.isactive=true) LIMIT 1;`;
  
Line Number 95 - 99
   const sql = `UPDATE ${
    process.env.DBNAME
  }.contact_information SET ${query.toString()} WHERE contact_id=${
    req.params.contact_id
  };`;
  
Line Number 110 - 114
router.put(`/update/:person_id/person`, async (req, res) => {
  let query = [];
  Object.entries(req.body).map((entry) => {
    query.push(`${entry[0]} = '${entry[1]}'`);
  });

Line Number 116 - 118
  const sql = `UPDATE ${
    process.env.DBNAME
  }.person SET ${query.toString()} WHERE person_id='${req.params.person_id}';`;
  
Line Number 135 - 149
  const sql = `UPDATE ${
    process.env.DBNAME
  }.employee SET ${query.toString()} WHERE employee_id=${
    req.params.employee_id
  };`;
  
Line Number 156 - 158
  const sql = `UPDATE ${
    process.env.DBNAME
  }.admin SET ${query.toString()} WHERE employee_id=${req.params.employee_id};`;
  
Line Number 175 - 179
  const sql = `UPDATE ${
    process.env.DBNAME
  }.immunization SET ${query.toString()} WHERE immunization_id=${
    req.params.immunization_id
  };`;
  
Line Number 196 - 200
  const sql = `UPDATE ${
    process.env.DBNAME
  }.medication SET ${query.toString()} WHERE medication_id=${
    req.params.medication_id
  };`;
  
Line Number 217 - 221
  const sql = `UPDATE ${
    process.env.DBNAME
  }.qualification SET ${query.toString()} WHERE qualification_id=${
    req.params.qualification_id
  };`;
  
Line Number 232 - 233
router.delete(`/:${pkText}`, async (req, res) => {
  const sql = `UPDATE ${process.env.DBNAME}.employee SET isactive = false WHERE ${pkText}='${req.params[pkText]}';`;
  
File Name: Patient.js

Line Number 37 - 45
  const sql1 = `INSERT INTO ${process.env.DBNAME}.contact_information
	(phone_number, street_number, street_name, city_town, province_state, country, postal_code, email, fax) VALUES ('${phone_number}', '${street_number}', '${street_name}', '${city_town}', '${province_state}', '${country}','${postal_code}', '${email}', '${fax}');
`;

  const sql2 = `INSERT INTO ${process.env.DBNAME}.person
	( first_name, last_name, middle_name, dob, gender, contact_id) VALUES ('${first_name}', '${last_name}', '${middle_name}', '${dob}', '${gender}', LAST_INSERT_ID());`;

  const sql3 = `INSERT INTO ${process.env.DBNAME}.patient
	( health_card_number, language, emergency_contact_name, allergies, blood_type, emergency_contact_number, person_id) VALUES ( '${health_card_number}', '${language}', '${emergency_contact_name}', '${allergies}','${blood_type}', '${emergency_contact_number}', LAST_INSERT_ID());`;
	
Line Number: 60 - 64
router.get("/", isAuth, async (req, res) => {
  const sql = `SELECT p.health_card_number, p1.first_name, p1.last_name, p1.dob, p1.gender
  FROM ${process.env.DBNAME}.patient p  
  INNER JOIN ${process.env.DBNAME}.person p1 ON ( p.person_id = p1.person_id)
  WHERE p.isative = true;`;
  
Line Number: 75 - 76
   const sql = `SELECT p.language, p.emergency_contact_name, p.allergies, p.blood_type, p.emergency_contact_number, api.race, api.marital_status, api.size_of_family, api.occupation, api.income_level, api.nationality, api.religion, api.insurance_details, api.family_physician, p1.first_name, p1.last_name, p1.middle_name, p1.dob, p1.gender, ci.phone_number, ci.street_number, ci.street_name, ci.city_town, ci.province_state, ci.country, ci.postal_code, ci.email, ci.fax FROM ${process.env.DBNAME}.patient p INNER JOIN ${process.env.DBNAME}.additional_patient_info api ON ( p.health_card_number = api.health_card_number)  INNER JOIN ${process.env.DBNAME}.person p1 ON ( p.person_id = p1.person_id) INNER JOIN ${process.env.DBNAME}.contact_information ci ON ( p1.contact_id = ci.contact_id)  WHERE p.${pkText} ='${req.params[pkText]}' AND p.isative = true`;
   
Line Number: 90 - 94
 const sql = `UPDATE ${
    process.env.DBNAME
  }.contact_information SET ${query.toString()} WHERE contact_id=${
    req.params.contact_id
  };`;
  
Line Number: 111 - 115
  const sql = `UPDATE ${
    process.env.DBNAME
  }.additional_patient_info SET ${query.toString()} WHERE ${pkText}='${
    req.params[pkText]
  }'`;
  
Line Number: 131 - 135
  const sql = `UPDATE ${
    process.env.DBNAME
  }.contact_information SET ${query.toString()} WHERE contact_id=${
    req.params.contact_id
  };`;

Line Number: 152 - 154
  const sql = `UPDATE ${
    process.env.DBNAME
  }.patient SET ${query.toString()} WHERE ${pkText}='${req.params[pkText]}'`;
  
Line Number: 184 - 185
  router.delete(`/:${pkText}`, isAuth, isAdmin, async (req, res) => {
  const sql = `UPDATE ${process.env.DBNAME}.patient SET isative = false WHERE ${pkText}='${req.params[pkText]}';`;

**Related**

Trello Project Management files
https://trello.com/b/5AARbiGI/fs1030-fall2020-grp-d



