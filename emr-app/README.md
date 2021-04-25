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
>      AND e.employee_id = a.employee_id )`;<br/><br/>


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
>  WHERE e.isactive  = true;`;<br/><br/>

**Line Number: 71 - 77**<br/>
> router.get(`/:${pkText}`, async (req, res) => {
>  const sql = `SELECT e.login_id, e.password, e.person_id, e.institution_id, e.job_title, e.isactive, p.first_name, p.last_name, p.middle_name, p.dob, p.gender, p.contact_id, ci.phone_number, ci.street_number, ci.street_name, ci.city_town, ci.province_state, ci.country, ci.postal_code, ci.email, ci.fax
> FROM ${process.env.DBNAME}.employee e 
>   INNER JOIN ${process.env.DBNAME}.person p ON ( e.person_id = p.person_id)  
>     INNER JOIN ${process.env.DBNAME}.contact_information ci ON ( p.contact_id = ci.contact_id )  
> WHERE e.${pkText}= ${req.params[pkText]} && e.isactive=true; `;

**Line Number: 118 - 124**<br/>

**Line Number: 141 - 145**<br/>

**Line Number: 162 - 164**<br/>

**Line Number: 181 - 185**<br/>

**Line Number: 202 - 206**<br/>

**Line Number: 223 - 227**<br/>

**Line Number: 238 - 239**<br/><br/>



**File Name:** patient.js<br/>
**Line Number: 37 - 39**<br/>

**Line Number: 41 - 42**<br/>
**Line Number: 44 - 45**<br/>
**Line Number: 60 - 64**<br/>
**Line Number: 77 - 78**<br/>
**Line Number: 100 - 112**<br/>

**Line Number: 137 - 143**<br/>
**Line Number: 159 - 163**<br/>
**Line Number: 213 - 214**<br/>






**Works in Progress**<br/>
Note: there are still some _console.logs_ and _alerts_ in the code for testing purposes.<br/><br/>
* Lab results
* Diagnotic Images
* Patient Notes
* Additional Patient Info
* Medication
* Immunization


Link to Trello Project Management files
https://trello.com/b/5AARbiGI/fs1030-fall2020-grp-d

Link to GitLab respository for code
https://gitlab.com/DonKur/fs1030-fall2020-grp-d.git
