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

**File Name: careprovider.js  
Line Number: 35 - 41**
  
  const sql1 = `INSERT INTO ${process.env.DBNAME}.contact_information (phone_number, street_number, street_name, city_town, province_state, country, postal_code, email, fax) VALUES ('${phone_number}', '${street_number}', '${street_name}', '${city_town}', '${province_state}', '${country}','${postal_code}', '${email}', ${fax});
`;
  const sql2 = `INSERT INTO ${process.env.DBNAME}.person ( first_name, last_name, middle_name, dob, gender, contact_id) VALUES ('${first_name}', '${last_name}', '${middle_name}', '${dob}', '${gender}', LAST_INSERT_ID());`;

  const sql3 = `INSERT INTO ${process.env.DBNAME}.employee (login_id, password, person_id, institution_id, job_title) VALUES ( '${login_id}', '${password}', LAST_INSERT_ID(), '${institution_id}', '${job_title}');`;

  const sql4 = `INSERT INTO ${process.env.DBNAME}.admin (employee_id, isadmin) VALUES ( LAST_INSERT_ID(), ${isadmin} );`;```
  
**Line Number: 57 - 62 **
   const sql = `SELECT e.employee_id, e.job_title, p.first_name, p.last_name, a.isadmin
  FROM ${process.env.DBNAME}.employee e 
      INNER JOIN ${process.env.DBNAME}.person p ON ( e.person_id = p.person_id)  
      INNER JOIN ${process.env.DBNAME}.admin a ON ( e.employee_id = a.employee_id)
  WHERE e.isactive  = true;`;


**Related**

Trello Project Management files
https://trello.com/b/5AARbiGI/fs1030-fall2020-grp-d



