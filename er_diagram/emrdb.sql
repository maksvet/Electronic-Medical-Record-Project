CREATE SCHEMA emrdb;

CREATE TABLE emrdb.`additional_patient_info_(optional)` ( 
	`Health_card_number` char(12)  NOT NULL    PRIMARY KEY,
	`Race`               varchar(50)      ,
	`Marital_status`     varchar(20)      ,
	`Size_of_family`     int      ,
	`Occupation`         varchar(50)      ,
	`Income_level`       varchar(10)      ,
	`Nationality`        varchar(50)      ,
	`Religion`           varchar(50)      ,
	`Insurance_details`  varchar(100)      ,
	`Family_physician`   varchar(100)      ,
	CONSTRAINT `PK/FK` UNIQUE ( `Health_card_number` ASC ) 
 );

CREATE TABLE emrdb.admin ( 
	`Admin_ID`           int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`Employee_ID`        int  NOT NULL    ,
	CONSTRAINT unq_admin_employee_id UNIQUE ( `Employee_ID` ) 
 );

CREATE TABLE emrdb.employee_qualification ( 
	employee_id          int  NOT NULL    PRIMARY KEY,
	qualification        int  NOT NULL    
 ) engine=InnoDB;

CREATE TABLE emrdb.healthcare_professional ( 
	`Employee_ID`        int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`Specialisation`     varchar(255)  NOT NULL    ,
	qualification        varchar(255)  NOT NULL    
 );

CREATE TABLE emrdb.patient ( 
	`Heath_card_number`  char(12)  NOT NULL    PRIMARY KEY,
	`Language`           varchar(50)  NOT NULL    ,
	`Emergency_contact_name` varchar(50)  NOT NULL    ,
	`Medications`        text  NOT NULL    ,
	`Allergies`          text  NOT NULL    ,
	`Blood_type`         varchar(50)      ,
	`Person_ID`          int  NOT NULL    ,
	`Emergency_contact_number` int  NOT NULL    ,
	CONSTRAINT unq_patient_person_id UNIQUE ( `Person_ID` ) 
 );

CREATE TABLE emrdb.patient_notes ( 
	note_id              int  NOT NULL    PRIMARY KEY,
	employee_id          int  NOT NULL    ,
	CONSTRAINT unq_patient_notes_employee_id UNIQUE ( employee_id ) 
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
 );

CREATE TABLE emrdb.institution ( 
	`Institution_ID`     int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`Contact_ID`         int  NOT NULL    ,
	`Name`               varchar(255)  NOT NULL    ,
	CONSTRAINT unq_institution_contact_id UNIQUE ( `Contact_ID` ) 
 );

CREATE TABLE emrdb.patient_note ( 
	note_id              int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	note                 longtext      ,
	`Date_stamp`         date  NOT NULL    ,
	`Health_card_number` char(12)  NOT NULL    
 );

CREATE TABLE emrdb.person ( 
	`Person_ID`          int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`First_name`         varchar(50)  NOT NULL    ,
	`Last_name`          varchar(50)      ,
	`Middle_name`        varchar(50)      ,
	`DOB`                date  NOT NULL    ,
	`Gender`             varchar(50)  NOT NULL    ,
	`Contact_ID`         int  NOT NULL    ,
	CONSTRAINT unq_person_contact_id UNIQUE ( `Contact_ID` ) 
 );

CREATE TABLE emrdb.contact_information ( 
	`Contact_ID`         int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	`Phone_number`       int  NOT NULL    ,
	`Street_number`      varchar(50)  NOT NULL    ,
	`Street_name`        varchar(50)  NOT NULL    ,
	`City_Town`          varchar(50)  NOT NULL    ,
	`Province_State`     varchar(50)  NOT NULL    ,
	`Country`            varchar(50)  NOT NULL    ,
	`Postal_code`        varchar(50)  NOT NULL    ,
	`Email`              varchar(50)      ,
	`FAX`                int      
 );

ALTER TABLE emrdb.contact_information ADD CONSTRAINT fk_contact_information_institution FOREIGN KEY ( `Contact_ID` ) REFERENCES emrdb.institution( `Contact_ID` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.contact_information ADD CONSTRAINT fk_contact_information_person FOREIGN KEY ( `Contact_ID` ) REFERENCES emrdb.person( `Contact_ID` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.employee ADD CONSTRAINT fk_employee_admin FOREIGN KEY ( `Employee_ID` ) REFERENCES emrdb.admin( `Employee_ID` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.employee ADD CONSTRAINT fk_employee_healthcare_professional FOREIGN KEY ( `Employee_ID` ) REFERENCES emrdb.healthcare_professional( `Employee_ID` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.employee ADD CONSTRAINT fk_employee_patient_notes FOREIGN KEY ( `Employee_ID` ) REFERENCES emrdb.patient_notes( employee_id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.healthcare_professional ADD CONSTRAINT fk_healthcare_professional_employee_qualification FOREIGN KEY ( `Employee_ID` ) REFERENCES emrdb.employee_qualification( employee_id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.institution ADD CONSTRAINT fk_institution_employee FOREIGN KEY ( `Institution_ID` ) REFERENCES emrdb.employee( `Institution_ID` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.patient ADD CONSTRAINT `fk_patient_additional_patient_info_(optional)` FOREIGN KEY ( `Heath_card_number` ) REFERENCES emrdb.`additional_patient_info_(optional)`( `Health_card_number` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.patient_note ADD CONSTRAINT fk_patient_note_patient_notes FOREIGN KEY ( note_id ) REFERENCES emrdb.patient_notes( note_id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.person ADD CONSTRAINT fk_person_employee FOREIGN KEY ( `Person_ID` ) REFERENCES emrdb.employee( `Person_ID` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE emrdb.person ADD CONSTRAINT fk_person_patient FOREIGN KEY ( `Person_ID` ) REFERENCES emrdb.patient( `Person_ID` ) ON DELETE NO ACTION ON UPDATE NO ACTION;

