Electronic Medical Record System Group Project<br/>
====================================================
**fs1030-fall2020-grp-d**
----------------------------------------------------

**ReadMe**

1. To run emr-app log into Git and navigate to the following repository:<br/> https://gitlab.com/DonKur/fs1030-fall2020-grp-d.git

2. Clone the repository.

3. Go to the root folder emr.app and create an _.ENV_ file. Add the following information:<br/>

	>PORT=9001<br/>
	>REACT_APP_SERVERPORT=9000<br/>
	>PRIVATEKEY="anykey"<br/>
	>DBHOST= "localhost"<br/>
	>DBUSER= "nodeclient"<br/>
	>DBPASSWORD= "123456"<br/>
	>DBNAME= "emrconn"<br/>

Note: When we do a push _.ENV_ file gets ignored.

4. Open command line.

5. Navigate to the _emr.app_ directory.
.
5. Run the following command to install dependencies:<br/>
 >npm i 

6. Run the following command:<br/>
>npm start.

7. The application will start on port _localhost:9001._

8. You can log in to the app as an *admin* using the following credentials:<br/><br/>

>**User ID:** admin1@admin.com<br/>

>**Password:** adminadmin<br/>

9. You can log in to the app as a *care provider* using the following credentials:<br/>

>**User ID:** care@care.com<br/>

>**Password:** 12345678<br/><br/>

**SQL Statements**<br/><br/>
Note: the following files are all in the folder _emr-app > src > routes_<br/><br/>


**File Name:** auth.js<br/>
**Line Number:** 62  - 68
> router.post("/", async (req, res) => {
>  const sql = `SELECT e.login_id, e.password, a.isadmin 
>    FROM emrconn.employee e 
>    INNER JOIN emrconn.admin a 
>    ON ( e.employee_id = a.employee_id 
>      AND e.employee_id = a.employee_id 
>      AND e.employee_id = a.employee_id )`;


**File Name:** careprovider.js<br/>
**Line Number: 35 - 41**<br/>

>  const sql1 = `INSERT INTO ${process.env.DBNAME}.contact_information (phone_number, street_number, street_name, city_town, province_state, country, postal_code, email, fax) VALUES ('${phone_number}', '${street_number}', '${street_name}', '${city_town}', '${province_state}', '${country}','${postal_code}', '${email}', ${fax});
>`;
>  const sql2 = `INSERT INTO ${process.env.DBNAME}.person ( first_name, last_name, middle_name, dob, gender, contact_id) VALUES ('${first_name}', '${last_name}', '${middle_name}', '${dob}', '${gender}', LAST_INSERT_ID());`;

>  const sql3 = `INSERT INTO ${process.env.DBNAME}.employee (login_id, password, person_id, institution_id, job_title) VALUES ( '${login_id}', '${password}', LAST_INSERT_ID(), '${institution_id}', '${job_title}');`;

>  const sql4 = `INSERT INTO ${process.env.DBNAME}.admin (employee_id, isadmin) VALUES ( LAST_INSERT_ID(), ${isadmin} );`;

**Line Number: 57 - 62**<br/>
> router.get("/", async (req, res) => {
>  const sql = `SELECT e.employee_id, e.job_title, p.first_name, p.last_name, a.isadmin
>  FROM ${process.env.DBNAME}.employee e 
>      INNER JOIN ${process.env.DBNAME}.person p ON ( e.person_id = p.person_id)  
>      INNER JOIN ${process.env.DBNAME}.admin a ON ( e.employee_id = a.employee_id)
>  WHERE e.isactive  = true;`;

**Line Number: 71 - 77**<br/>
> router.get(`/:${pkText}`, async (req, res) => {
>  const sql = `SELECT e.login_id, e.password, e.person_id, e.institution_id, e.job_title, e.isactive, p.first_name, p.last_name, p.middle_name, p.dob, p.gender, p.contact_id, ci.phone_number, ci.street_number, ci.street_name, ci.city_town, ci.province_state, ci.country, ci.postal_code, ci.email, ci.fax
> FROM ${process.env.DBNAME}.employee e 
>   INNER JOIN ${process.env.DBNAME}.person p ON ( e.person_id = p.person_id)  
>     INNER JOIN ${process.env.DBNAME}.contact_information ci ON ( p.contact_id = ci.contact_id )  
> WHERE e.${pkText}= ${req.params[pkText]} && e.isactive=true; `;

**Line Number: 93 - 99**<br/>
>  const sql = `UPDATE ${process.env.DBNAME}.contact_information c, (SELECT ci.contact_id
>      FROM ${process.env.DBNAME}.employee e 
>        INNER JOIN ${process.env.DBNAME}.person p ON ( e.person_id = p.person_id)  
          INNER JOIN ${process.env.DBNAME}.contact_information ci ON ( p.contact_id = ci.contact_id)
>      WHERE e.${pkText} = ${req.params[pkText]}) e 
>      SET ${query}
>      WHERE c.contact_id = e.contact_id;`;

**Line Number: 118 - 126**<br/>
>  const sql = `UPDATE ${
>    process.env.DBNAME
>  }.person p1, (SELECT p.person_id FROM ${
>    process.env.DBNAME
>  }.person p INNER JOIN ${
>    process.env.DBNAME
>  }.employee e ON ( p.person_id = e.person_id)WHERE e.${pkText}='${
>    req.params[pkText]
>  }' ) p2 SET ${query.toString()} WHERE p1.person_id = p2.person_id;`;

**Line Number: 150 - 154**<br/>
>  const sql = `UPDATE ${
>    process.env.DBNAME
>  }.employee SET ${query.toString()} WHERE employee_id=${
>    req.params.employee_id
>  };`;

**Line Number: 171 - 173**<br/>
>  const sql = `UPDATE ${
>    process.env.DBNAME
>  }.admin SET ${query.toString()} WHERE employee_id=${req.params.employee_id};`;

**Line Number: 190 - 194**<br/>
> const sql = `UPDATE ${
>    process.env.DBNAME
>  }.immunization SET ${query.toString()} WHERE immunization_id=${
>    req.params.immunization_id
>  };`;

**Line Number: 211 - 215**<br/>
>  const sql = `UPDATE ${
>    process.env.DBNAME
>  }.medication SET ${query.toString()} WHERE medication_id=${
>    req.params.medication_id
>  };`;

**Line Number: 232 - 236**<br/><br/>
>  const sql = `UPDATE ${
>    process.env.DBNAME
>  }.qualification SET ${query.toString()} WHERE qualification_id=${
>    req.params.qualification_id
>  };`;


**File Name:** patient.js<br/>
**Line Number: 37 - 39**<br/>
>  const sql1 = `INSERT INTO ${process.env.DBNAME}.contact_information
>	(phone_number, street_number, street_name, city_town, province_state, country, postal_code, email, fax) VALUES ('${phone_number}', '${street_number}', '${street_name}', '${city_town}', '${province_state}', '${country}','${postal_code}', '${email}', '${fax}');
>`;

**Line Number: 41 - 42**<br/>
>  const sql2 = `INSERT INTO ${process.env.DBNAME}.person
>	( first_name, last_name, middle_name, dob, gender, contact_id) VALUES ('${first_name}', '${last_name}', '${middle_name}', '${dob}', '${gender}', LAST_INSERT_ID());`;

**Line Number: 44 - 45**<br/>
>  const sql3 = `INSERT INTO ${process.env.DBNAME}.patient
>	( health_card_number, language, emergency_contact_name, allergies, blood_type, emergency_contact_number, person_id) VALUES ( '${health_card_number}', '${language}', '${emergency_contact_name}', '${allergies}','${blood_type}', '${emergency_contact_number}', LAST_INSERT_ID());`;
	
**Line Number: 60 - 64**<br/>
> router.get("/", isAuth, async (req, res) => {
 > const sql = `SELECT p.health_card_number, p1.first_name, p1.last_name, p1.dob, p1.gender
 > FROM ${process.env.DBNAME}.patient p  
 > INNER JOIN ${process.env.DBNAME}.person p1 ON ( p.person_id = p1.person_id)
 > WHERE p.isative = true;`;

**Line Number: 77 - 78**<br/>
>  const sql = `SELECT p.language, p.emergency_contact_name, p.allergies, p.blood_type, p.emergency_contact_number, p1.first_name, p1.last_name, p1.middle_name, p1.dob, p1.gender, ci.phone_number, ci.street_number, ci.street_name, ci.city_town, ci.province_state, ci.country, ci.postal_code, ci.email, ci.fax 
>  FROM emrconn.patient p INNER JOIN emrconn.person p1 ON ( p.person_id = p1.person_id) INNER JOIN emrconn.contact_information ci ON ( p1.contact_id = ci.contact_id)  WHERE p.${pkText} ='${req.params[pkText]}' AND p.isative = true;`;
  
**Line Number: 100 - 112**<br/>
>  const sql = `UPDATE ${
>    process.env.DBNAME
>  }.contact_information c1, (SELECT ci.contact_id
>    FROM ${process.env.DBNAME}.contact_information ci 
>      INNER JOIN ${
>        process.env.DBNAME
>      }.person p ON ( ci.contact_id = p.contact_id)  
>        INNER JOIN ${
>          process.env.DBNAME
>        }.patient p1 ON ( p.person_id = p1.person_id)
>    WHERE p1.${pkText}='${req.params[pkText]}') c2
>    SET ${query.toString()} 
>    WHERE c1.contact_id = c2.contact_id;`;

**Line Number: 137 - 143**<br/>
>  const sql = `UPDATE ${process.env.DBNAME}.person p1, (SELECT p.person_id
>    FROM ${process.env.DBNAME}.person p INNER JOIN ${
>    process.env.DBNAME
>  }.patient p1 ON ( p.person_id = p1.person_id)
>    WHERE ${pkText}="${req.params.health_card_number}") p2  
>    SET ${query.toString()} 
>    WHERE p1.person_id = p2.person_id ;`;

**Line Number: 159 - 163**<br/>
>  const sql = `UPDATE ${
>    process.env.DBNAME
>  }.contact_information SET ${query.toString()} WHERE contact_id=${
>    req.params.contact_id
>  };`;

**Line Number: 180 - 182**<br/>
>  const sql = `UPDATE ${
>    process.env.DBNAME
>  }.patient SET ${query.toString()} WHERE ${pkText}='${req.params[pkText]}'`;


**Works in Progress**<br/>
Note: there are still some _console.logs_ and _alerts_ in the code for testing purposes.<br/><br/>
* Lab results
* Diagnotic Images
* Patient Notes
* Additional Patient Info
* Medication
* Immunization

**Other Resouces**
Link to Trello Project Management files
https://trello.com/b/5AARbiGI/fs1030-fall2020-grp-d

Link to GitLab respository for code
https://gitlab.com/DonKur/fs1030-fall2020-grp-d.git
