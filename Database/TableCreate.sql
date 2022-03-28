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

-- replace with table averageResult
CREATE TABLE student(s_Id int NOT NULL, CC12 int DEFAULT NULL, CC49 int DEFAULT NULL, TG406 int DEFAULT NULL, SG12 int DEFAULT NULL, Average int DEFAULT NULL, FOREIGN KEY (s_Id) REFERENCES students (s_Id));

CREATE TABLE sectionAverage(m_Code varchar(25) NOT NULL, Y1C1 int not null, Y1C2 int not null, Y1C3 int not null, Y1C4 int not null, FOREIGN KEY (m_Code) REFERENCES Module (m_Code));


INSERT INTO Module VALUES('', 'Data Structure and Algorithm', '30');
INSERT INTO Module VALUES('CC12', 'Data Structure and Algorithm', '30');
INSERT INTO Module VALUES('CC12', 'Data Structure and Algorithm', '30');
INSERT INTO Module VALUES('CC12', 'Data Structure and Algorithm', '30');


-- for user authentication
user(u_Id, userName, password)

-- update student db table and programmes page.

/*
For additional features:
batchYearResult(batch, s_Id, OverallResult)
*/