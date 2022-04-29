-- Final Tables:
Student(s_Id, s_Fname, s_Lname, s_Batch, c_Id)
Course(c_id, c_Name)
Module(m_Code, m_Name, m_CreditHours)
CourseModule(c_id, m_Code)
Programmes(c_id, c_Name, m_Code, m_Name)

Student_ModuleResult(s_Id, m_Code, m_Grade, Status, Date)

-- Table Creation

Create Table Course(c_Id varchar(25) Primary Key, c_Name varchar(25) not null);

Create Table Module(m_Code varchar(25) Primary Key, m_Name varchar(25) not null, m_CreditHours int not null);

Create Table CourseModule(c_Id varchar(25) not null, m_Code varchar(25) not null, Foreign Key(c_Id) references Course(c_Id), Foreign Key(M_Code) references Module(M_Code));
CC12
Create Table Programmes(c_id varchar(25) not null, c_Name varchar(25) not null, m_Code varchar(25) not null, m_Name varchar(25) not null, Foreign Key(c_id) references Course(c_id), Foreign Key(m_Code) references Module(m_Code))


Create Table Students(id int UNSIGNED NOT NULL AUTO_INCREMENT, s_Id int Primary Key, s_Fname varchar(25) not null, s_Lname varchar(25) not null, s_Batch int not null, c_Id varchar(25) not null, KEY (id));

-- SMR: table create
Create Table student_moduleresult(id int UNSIGNED NOT NULL AUTO_INCREMENT, s_Id int not null, CC12 int DEFAULT NULL, CC49 int DEFAULT NULL , TG406 int DEFAULT NULL , SG12 int DEFAULT NULL, Average int DEFAULT NULL , KEY (id), FOREIGN KEY (`s_Id`) REFERENCES `Students` (`s_Id`));


CREATE TABLE `student_moduleresult` (
    `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `s_Id` int NOT NULL,
  `CC12` int DEFAULT NULL,
  `CC49` int DEFAULT NULL,
  `TG406` int DEFAULT NULL,
  `SG12` int DEFAULT NULL,
  `Average` int DEFAULT NULL,
  KEY `id` (`id`),
  CONSTRAINT `student_moduleresult_ibfk_1` FOREIGN KEY (`s_Id`) REFERENCES `students` (`s_Id`)
) 

-- Original
CREATE TABLE `student_moduleresult` (
  `s_Id` int NOT NULL,
  `CC12` int DEFAULT NULL,
  `CC49` int DEFAULT NULL,
  `TG406` int DEFAULT NULL,
  `SG12` int DEFAULT NULL,
  `Average` int DEFAULT NULL,
  KEY `s_Id` (`s_Id`),
  CONSTRAINT `student_moduleresult_ibfk_1` FOREIGN KEY (`s_Id`) REFERENCES `students` (`s_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

-- SMR: values
Insert into student_moduleresult values('1', '19031007', '65', '70', '40', '45', '55');
Insert into student_moduleresult values('2', '19031009', '50', '65', '63', '70', '62');
Insert into student_moduleresult values('3', '19031008', '76', '65', '87', '70', '75');
Insert into student_moduleresult values('4', '19031010', '66', '55', '60', '40', '55');
Insert into student_moduleresult values('5', '19031002', '60', '45', '60', '65', '58');
Insert into student_moduleresult values('6', '19031003', '54', '65', '65', '40', '56');



-- replace with table averageResult
CREATE TABLE student(s_Id int NOT NULL, CC12 int DEFAULT NULL, CC49 int DEFAULT NULL, TG406 int DEFAULT NULL, SG12 int DEFAULT NULL, Average int DEFAULT NULL, FOREIGN KEY (s_Id) REFERENCES students (s_Id));

CREATE TABLE sectionAverage(m_Code varchar(25) NOT NULL, Y1C1 int not null, Y1C2 int not null, Y1C3 int not null, Y1C4 int not null, FOREIGN KEY (m_Code) REFERENCES Module (m_Code));


INSERT INTO Module VALUES('', 'Data Structure and Algorithm', '30');
INSERT INTO Module VALUES('CC12', 'Data Structure and Algorithm', '30');
INSERT INTO Module VALUES('CC12', 'Data Structure and Algorithm', '30');
INSERT INTO Module VALUES('CC12', 'Data Structure and Algorithm', '30');

CREATE TABLE `student_moduleresult` (`s_Id` int NOT NULL,`CC12` int DEFAULT NULL,`CC49` int DEFAULT NULL,`TG406` int DEFAULT NULL,`SG12` int DEFAULT NULL,`Average` int DEFAULT NULL,
FOREIGN KEY (`s_Id`) REFERENCES `students` (`s_Id`)
) 

-- for user authentication
user(u_Id, userName, password)

-- update student db table and programmes page.

/*
For additional features:
batchYearResult(batch, s_Id, OverallResult)
*/