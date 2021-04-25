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
**Line Number:** 64
>router.post("/", async (req, res) => {
>  const sql = `SELECT e.login_id, e.password, a.isadmin 
>    FROM emrconn.employee e 
>    INNER JOIN emrconn.admin a 
>    ON ( e.employee_id = a.employee_id 
>      AND e.employee_id = a.employee_id 
>      AND e.employee_id = a.employee_id )`;<br/><br/>


**File Name:** careprovider.js<br/>
**Line Number:**




Link to Trello Project Management files
https://trello.com/b/5AARbiGI/fs1030-fall2020-grp-d

Link to GitLab respository for code
https://gitlab.com/DonKur/fs1030-fall2020-grp-d.git
