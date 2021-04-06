CREATE TABLE `employee_job_title` (
  `job_title_id` INT NOT NULL AUTO_INCREMENT ,
  `job_title` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`job_title_id`)
);

CREATE TABLE `contact_information` (
  `phone_number` INT(10) NOT NULL,
  `street_number` VARCHAR(50) NOT NULL,
  `street_name` VARCHAR(255) NOT NULL,
  `city_Town` VARCHAR(255) NOT NULL,
  `province_State` VARCHAR(255) NOT NULL,
  `country` VARCHAR(255) NOT NULL,
  `postal_code` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NULL,
  `contact_id` INT NOT NULL AUTO_INCREMENT,
  `fax` INT(10) NULL,
  PRIMARY KEY (`contact_id`)
);

CREATE TABLE `institution` (
  `institution_id` INT NOT NULL AUTO_INCREMENT ,
  `contact_id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`institution_id`),
FOREIGN KEY (`contact_id`) REFERENCES contact_information(`contact_id`)
);

CREATE TABLE `person` (
  `person_id` INT NOT NULL AUTO_INCREMENT ,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NULL,
  `middle_name` VARCHAR(255) NULL,
  `dob` DATE NOT NULL,
  `gender` VARCHAR(50) NOT NULL,
  `contact_id` INT NOT NULL,
  PRIMARY KEY (`person_id`),
FOREIGN KEY (`contact_id`) REFERENCES contact_information(`contact_id`)
);

CREATE TABLE `employee` (
  `employee_id` INT NOT NULL AUTO_INCREMENT ,
  `login_id` VARCHAR(30) NOT NULL,
  `password` VARCHAR(30) NOT NULL,
  `person_id` INT NOT NULL,
  `institution_id` INT NOT NULL,
  `job_title_id` INT NOT NULL,
  PRIMARY KEY (`employee_id`),
FOREIGN KEY (`person_id`) REFERENCES person(`person_id`),
FOREIGN KEY (`institution_id`) REFERENCES institution(`institution_id`),
FOREIGN KEY (`job_title_id`) REFERENCES employee_job_title(`job_title_id`)
);

CREATE TABLE `admin` (
  `employee_id` INT NOT NULL,
  `admin_id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`admin_id`),
FOREIGN KEY (`employee_id`) REFERENCES employee(`employee_id`)
);

CREATE TABLE `patient` (
  `language` VARCHAR(50) NOT NULL,
  `health_card_number` CHAR(12) NOT NULL,
  `emergency_contact_name` VARCHAR(255) NOT NULL,
  `medications` TEXT NOT NULL,
  `allergies` TEXT NOT NULL,
  `blood_type` VARCHAR(50) NULL,
  `person_id` INT NOT NULL,
  `emergency_contact_number` INT(10) NOT NULL,
  PRIMARY KEY (`health_card_number`),
FOREIGN KEY (`person_id`) REFERENCES person(`person_id`)
);

CREATE TABLE `patient_note` (
  `employee_id` INT NOT NULL,
  `note` LONGTEXT NULL,
  `note_id` INT NOT NULL AUTO_INCREMENT ,
  `date_stamp`  DATE NOT NULL,
  `health_card_number` CHAR(12) NOT NULL,
  PRIMARY KEY (`note_id`),
FOREIGN KEY (`employee_id`) REFERENCES employee(`employee_id`),
FOREIGN KEY (`health_card_number`) REFERENCES patient(`health_card_number`)
);

CREATE TABLE `additional_patient_info` (
  `health_card_number` CHAR(12) NOT NULL,
  `race` VARCHAR(50) NULL,
  `marital_status` VARCHAR(20) NULL,
  `size_of_family` INT(2) NULL,
  `occupation` VARCHAR(255) NULL,
  `income_level` VARCHAR(10) NULL,
  `nationality` VARCHAR(50) NULL,
  `religion` VARCHAR(50) NULL,
  `insurance_details` VARCHAR(255) NULL,
  `family_physician` VARCHAR(255) NULL,
  PRIMARY KEY (`health_card_number`),
	FOREIGN KEY (`health_card_number`) REFERENCES patient(`health_card_number`)
);

CREATE TABLE `employee_qualification` (
  `qualification_id` INT NOT NULL AUTO_INCREMENT ,
  `qualification` VARCHAR(255) NOT NULL,
  `employee_id` INT NOT NULL,
  PRIMARY KEY (`qualification_id`),
FOREIGN KEY (`employee_id`) REFERENCES employee(`employee_id`)
);