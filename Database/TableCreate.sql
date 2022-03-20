-- Final Tables:

Address (c_Id, c_Name)
Student (s_Id, s_Fname, s_Lname, s_Batch, c_Id)
Assignment (Assignment_Id, AssignmentType)
Module (m_Code, m_Name, m_CreditHours)
Student_ModuleResult(s_Id, M_Code, m_Grade, Status, Date)

-- Table Creation

Create Table Course(c_Id varchar(25) Primary Key, c_Name varchar(25) not null);

Create Table Module(m_Code varchar(25) Primary Key, m_Name varchar(25) not null, m_CreditHours int not null);

Create Table CourseModule(c_Id varchar(25) not null, m_Code varchar(25) not null, Foreign Key(c_Id) references Course(c_Id), Foreign Key(M_Code) references Module(M_Code));

Create Table Student(s_Id varchar(25) Primary Key, s_Fname varchar(25) not null, s_Lname varchar(25) not null, s_Batch int not null, c_Id varchar(25) not null);

Create Table Student_ModuleResult(s_Id varchar(25) not null, M_Code varchar(25) not null, m_Grade int not null, ResultStatus varchar(25) not null, ResultDate Date not null, Foreign Key(s_Id) references Student(s_Id), Foreign Key(M_Code) references Module(M_Code));

-- for user authentication
user(u_Id, userName, password)

-- update student db table and programmes page.

/*
For additional features:
batchYearResult(batch, s_Id, OverallResult)
*/