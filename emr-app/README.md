FS1030 Group Project
Electronic Medical Record System
fs1030-fall2020-grp-d
----------------------------------------------------------------------------------------------------------------------

**ReadMe**

1. To install the _emr-app_, log into Git and navigate to the following repository: https://gitlab.com/DonKur/fs1030-fall2020-grp-d.git

2. Clone the repository.

3. Navigate to the root folder _emr.app_ and create an _.ENV_ file. Add the following information:

	PORT=9001
	REACT_APP_SERVERPORT=9000
	PRIVATEKEY="anykey"
	DBHOST= "localhost"
	DBUSER= "nodeclient"
	DBPASSWORD= "123456"
	DBNAME= "emrconn"

Note: When we do a push _.ENV_ file gets ignored.

4. Open command line.

5. Navigate to the _emr.app_ directory.
.
5. To to install dependencies run the following command: _npm i_.

6. To start the app run the following command: _npm start_.

7. The application will start on port _localhost:9001_.

**Related Links**

Link to Trello Project Management files
https://trello.com/b/5AARbiGI/fs1030-fall2020-grp-d

Link to GitLab respository for code
https://gitlab.com/DonKur/fs1030-fall2020-grp-d.git
