
CREATE TABLE `employee_job_title` (
  `job_title_id` INT NOT NULL AUTO_INCREMENT ,
  `job_title` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`job_title_id`)
);

CREATE TABLE `Contact_information` (
  `Phone_number` INT(10) NOT NULL,
  `Street_number` VARCHAR(50) NOT NULL,
  `Street_name` VARCHAR(255) NOT NULL,
  `City_Town` VARCHAR(255) NOT NULL,
  `Province_State` VARCHAR(255) NOT NULL,
  `Country` VARCHAR(255) NOT NULL,
  `Postal_code` VARCHAR(50) NOT NULL,
  `Email` VARCHAR(255) NULL,
  `Contact_ID` INT NOT NULL AUTO_INCREMENT,
  `FAX` INT(10) NULL,
  PRIMARY KEY (`Contact_ID`)
);

CREATE TABLE `Institution` (
  `Institution_ID` INT NOT NULL AUTO_INCREMENT ,
  `Contact_ID` INT NOT NULL,
  `Name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`Institution_ID`),
FOREIGN KEY (`Contact_ID`) REFERENCES Contact_information(`Contact_ID`)
);

CREATE TABLE `Person` (
  `Person_ID` INT NOT NULL AUTO_INCREMENT ,
  `First_name` VARCHAR(255) NOT NULL,
  `Last_name` VARCHAR(255) NULL,
  `Middle_name` VARCHAR(255) NULL,
  `DOB` DATE NOT NULL,
  `Gender` VARCHAR(50) NOT NULL,
  `Contact_ID` INT NOT NULL,
  PRIMARY KEY (`Person_ID`),
FOREIGN KEY (`Contact_ID`) REFERENCES Contact_information(`Contact_ID`)
);

CREATE TABLE `Employee` (
  `Employee_ID` INT NOT NULL AUTO_INCREMENT ,
  `Login_ID` VARCHAR(30) NOT NULL,
  `Password` VARCHAR(30) NOT NULL,
  `Person_ID` INT NOT NULL,
  `Institution_ID` INT NOT NULL,
  `job_title_id` INT NOT NULL,
  PRIMARY KEY (`Employee_ID`),
FOREIGN KEY (`Person_ID`) REFERENCES Person(`Person_ID`),
FOREIGN KEY (`Institution_ID`) REFERENCES Institution(`Institution_ID`),
FOREIGN KEY (`job_title_id`) REFERENCES employee_job_title(`job_title_id`)
);

CREATE TABLE `Admin` (
  `Employee_ID` INT NOT NULL,
  `Admin_ID` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`Admin_ID`),
FOREIGN KEY (`Employee_ID`) REFERENCES Employee(`Employee_ID`)
);

CREATE TABLE `Patient` (
  `Language` VARCHAR(50) NOT NULL,
  `Health_card_number` CHAR(12) NOT NULL,
  `Emergency_contact_name` VARCHAR(255) NOT NULL,
  `Medications` TEXT NOT NULL,
  `Allergies` TEXT NOT NULL,
  `Blood_type` VARCHAR(50) NULL,
  `Person_ID` INT NOT NULL,
  `Emergency_contact_number` INT(10) NOT NULL,
  PRIMARY KEY (`Health_card_number`),
FOREIGN KEY (`Person_ID`) REFERENCES Person(`Person_ID`)
);

CREATE TABLE `Patient_note` (
  `Employee_ID` INT NOT NULL,
  `Note` LONGTEXT NULL,
  `Note_ID` INT NOT NULL AUTO_INCREMENT ,
  `Date_stamp`  DATE NOT NULL,
  `Health_card_number` CHAR(12) NOT NULL,
  PRIMARY KEY (`Note_ID`),
FOREIGN KEY (`Employee_ID`) REFERENCES Employee(`Employee_ID`),
FOREIGN KEY (`Health_card_number`) REFERENCES Patient(`Health_card_number`)
);

CREATE TABLE `Additional_patient_info` (
  `Health_card_number` CHAR(12) NOT NULL,
  `Race` VARCHAR(50) NULL,
  `Marital_status` VARCHAR(20) NULL,
  `Size_of_family` INT(2) NULL,
  `Occupation` VARCHAR(255) NULL,
  `Income_level` VARCHAR(10) NULL,
  `Nationality` VARCHAR(50) NULL,
  `Religion` VARCHAR(50) NULL,
  `Insurance_details` VARCHAR(255) NULL,
  `Family_physician` VARCHAR(255) NULL,
  PRIMARY KEY (`Health_card_number`),
	FOREIGN KEY (`Health_card_number`) REFERENCES Patient(`Health_card_number`)
);

CREATE TABLE `Employee_qualification` (
  `Qualification_ID` INT NOT NULL AUTO_INCREMENT ,
  `Qualification` VARCHAR(255) NOT NULL,
  `Employee_ID` INT NOT NULL,
  PRIMARY KEY (`Qualification_ID`),
FOREIGN KEY (`Employee_ID`) REFERENCES Employee(`Employee_ID`)
);