FS1030 Group Project
Electronic Medical Record System
fs1030-fall2020-grp-d
----------------------------------------------------------------------------------------------------------------------

Link to Trello Project Management files
https://trello.com/b/5AARbiGI/fs1030-fall2020-grp-d

Link to GitLab respository for code
https://gitlab.com/DonKur/fs1030-fall2020-grp-d.git


ReadMe

1. To run emr-app log into Git and navigate to the following repository: https://gitlab.com/DonKur/fs1030-fall2020-grp-d.git

2. Clone the repository.

3. Go to the root folder emr.app and create an .ENV file. Add the following information:

	PORT=9001
	REACT_APP_SERVERPORT=9000
	PRIVATEKEY="anykey"
	DBHOST= "localhost"
	DBUSER= "nodeclient"
	DBPASSWORD= "123456"
	DBNAME= "emrconn"

Note: When we do a push .ENV file gets ignored.

4. Open command line.

5. Navigate to the emr.app directory.
.
5. Run the following command: npm i to install dependencies

6. Run the following command: npm start.

7. The application will start on port localhost:9001.

