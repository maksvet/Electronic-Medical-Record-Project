CREATE SCHEMA emrdb;

CREATE TABLE emrdb.additional_patient_info ( 
	`Health_Card_Number` char(12)  NOT NULL    PRIMARY KEY,
	`Race`               varchar(50)      ,
	`Marital_Status`     varchar(20)      ,
	`Size_Of_Family`     int      ,
	`Occupation`         varchar(255)      ,
	`Income_Level`       varchar(10)      ,
	`Nationality`        varchar(50)      ,
	`Religion`           varchar(50)      ,
	`Insurance_Details`  varchar(255)      ,
	`Family_Physician`   varchar(255)      ,
	CONSTRAINT `PK/FK` UNIQUE ( `Health_Card_Number` ASC ) 
 )engine=InnoDB;

CREATE TABLE emrdb.administrator ( 
	`Admin_ID`           int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`Employee_ID`        int  NOT NULL    ,
	CONSTRAINT unq_administrator_employee_id UNIQUE ( `Employee_ID` ) 
 )engine=InnoDB;

# Consider combining the next two tables

CREATE TABLE emrdb.employee_qualification ( 
	`Employee_ID`          int  NOT NULL    PRIMARY KEY,
	`Qualification`        int  NOT NULL    
 ) engine=InnoDB;

CREATE TABLE emrdb.healthcare_professional ( 
	`Employee_ID`        int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`Specialisation`     varchar(255)  NOT NULL    ,
	`Qualification`        varchar(255)  NOT NULL    
 )engine=InnoDB;

CREATE TABLE emrdb.patient ( 
	`Heath_Card_Number`  char(12)  NOT NULL    PRIMARY KEY,
	`Language`           varchar(50)  NOT NULL    ,
	`Emergency_Contact_Name` varchar(255)  NOT NULL    ,
	`Medications`        text  NOT NULL    ,
	`Allergies`          text  NOT NULL    ,
	`Blood_Type`         varchar(50)      ,
	`Person_ID`          int  NOT NULL    ,
	`Emergency_Contact_Number` int  NOT NULL    ,
	CONSTRAINT unq_patient_person_id UNIQUE ( `Person_ID` ) 
 )engine=InnoDB;

# Consider combining patient_notes and patient_note

CREATE TABLE emrdb.patient_notes ( 
	`Note_ID`              int  NOT NULL    PRIMARY KEY,
	`Employee_ID`          int  NOT NULL    ,
	CONSTRAINT unq_patient_notes_employee_id UNIQUE ( `Employee_ID` ) 
 ) engine=InnoDB;

CREATE TABLE emrdb.employee ( 
	`Employee_ID`        int  NOT NULL  AUTO_INCREMENT  ,
	`Institution_ID`     int  NOT NULL    ,
	`Login_ID`           varchar(30)  NOT NULL    ,
	`Password`           varchar(30)  NOT NULL    ,
	`Person_ID`          int  NOT NULL    ,
	CONSTRAINT pk_employee PRIMARY KEY ( `Employee_ID`, `Institution_ID` ),
	CONSTRAINT unq_employee_person_id UNIQUE ( `Person_ID` ) ,
	CONSTRAINT unq_employee_employee_id UNIQUE ( `Employee_ID` ) ,
	CONSTRAINT unq_employee_institution_id UNIQUE ( `Institution_ID` ) 
 )engine=InnoDB;

CREATE TABLE emrdb.institution ( 
	`Institution_ID`     int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`Contact_ID`         int  NOT NULL    ,
	`Name`               varchar(255)  NOT NULL    ,
	CONSTRAINT unq_institution_contact_id UNIQUE ( `Contact_ID` ) 
 )engine=InnoDB;

CREATE TABLE emrdb.patient_note ( 
	`Note_ID`              int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`Note`                 longtext      ,
	`Date_Stamp`         date  NOT NULL    ,
	`Health_Card_Number` char(12)  NOT NULL    
 )engine=InnoDB;

CREATE TABLE emrdb.person ( 
	`Person_ID`          int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`First_Name`         varchar(255)  NOT NULL    ,
	`Last_Name`          varchar(255)      ,
	`Middle_Name`        varchar(255)      ,
	`DOB`                date  NOT NULL    ,
	`Gender`             varchar(50)  NOT NULL    ,
	`Contact_ID`         int  NOT NULL    ,
	CONSTRAINT unq_person_contact_id UNIQUE ( `Contact_ID` ) 
 )engine=InnoDB;

CREATE TABLE emrdb.contact_information ( 
	`Contact_ID`         int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`Phone_Number`       int  NOT NULL    ,
	`Street_Number`      varchar(255)  NOT NULL    ,
	`Street_Name`        varchar(255)  NOT NULL    ,
	`City_Town`          varchar(50)  NOT NULL    ,
	`Province_State`     varchar(50)  NOT NULL    ,
	`Country`            varchar(50)  NOT NULL    ,
	`Postal_Code`        varchar(50)  NOT NULL    ,
	`Email`              varchar(255)      ,
	`FAX`                int      
 )engine=InnoDB;

ALTER TABLE emrdb.contact_information ADD CONSTRAINT fk_contact_information_institution FOREIGN KEY ( `Contact_ID` ) REFERENCES emrdb.institution( `Contact_ID` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.contact_information ADD CONSTRAINT fk_contact_information_person FOREIGN KEY ( `Contact_ID` ) REFERENCES emrdb.person( `Contact_ID` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.employee ADD CONSTRAINT fk_employee_administrator FOREIGN KEY ( `Employee_ID` ) REFERENCES emrdb.administrator( `Employee_ID` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.employee ADD CONSTRAINT fk_employee_healthcare_professional FOREIGN KEY ( `Employee_ID` ) REFERENCES emrdb.healthcare_professional( `Employee_ID` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.employee ADD CONSTRAINT fk_employee_patient_notes FOREIGN KEY ( `Employee_ID` ) REFERENCES emrdb.patient_notes( `Employee_ID` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.healthcare_professional ADD CONSTRAINT fk_healthcare_professional_employee_qualification FOREIGN KEY ( `Employee_ID` ) REFERENCES emrdb.employee_qualification( `Employee_ID` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.institution ADD CONSTRAINT fk_institution_employee FOREIGN KEY ( `Institution_ID` ) REFERENCES emrdb.employee( `Institution_ID` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.patient ADD CONSTRAINT fk_patient_additional_patient_info FOREIGN KEY ( `Heath_Card_Number` ) REFERENCES emrdb.additional_patient_info( `Health_Card_Number` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.patient_note ADD CONSTRAINT fk_patient_note_patient_notes FOREIGN KEY ( `Note_ID` ) REFERENCES emrdb.patient_notes( `Note_ID` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.person ADD CONSTRAINT fk_person_employee FOREIGN KEY ( `Person_ID` ) REFERENCES emrdb.employee( `Person_ID` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.person ADD CONSTRAINT fk_person_patient FOREIGN KEY ( `Person_ID` ) REFERENCES emrdb.patient( `Person_ID` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

