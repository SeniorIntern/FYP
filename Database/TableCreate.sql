-- simple forms
CREATE TABLE Student(Student_Id int(25) Primary Key, StudentName varchar(25) not null, A_ID varchar(25) not null);

CREATE TABLE Assignment(Assignment_ID varchar(25) Primary Key, AssignmentType varchar(25) not null);

CREATE TABLE Module(M_Code varchar(25) Primary Key, M_Name varchar(40) not null, Credit_Hours int not null, Assignment_ID1 varchar(25) not null, Assignment_ID2 varchar(25), Assignment_ID3 varchar(25), Foreign Key(Assignment_ID1) references Assignment(Assignment_ID), Foreign Key(Assignment_ID2) references Assignment(Assignment_ID), Foreign Key(Assignment_ID3) references Assignment(Assignment_ID));

CREATE TABLE TeacherModule(T_ID varchar(25) not null, M_Code1 varchar(25) not null , M_Code2 varchar(25), Classroom1 varchar(25) not null, Classroom2 varchar(25), WorkingHours1 int not null, WorkingHours2 int, Foreign Key(T_ID) references Teacher(T_ID), Foreign Key(M_Code1) references Module(M_Code), Foreign Key(M_Code2) references Module(M_Code));

CREATE TABLE StudentResult(Student_ID int not null, ResultStatus varchar(25) not null, Result_Date DATE not null, Foreign Key(Student_ID) references Student(Student_ID));

CREATE TABLE StudentModuleAssignment(Student_ID int not null, M_Code varchar(25) not null, Assignment_ID1 varchar(25) not null, Assignment_ID2 varchar(25) not null, Assignment_ID3 varchar(25) not null, Grade varchar(15) not null, Status varchar(25) not null, Foreign Key(Student_ID) references Student(Student_ID), Foreign Key(M_Code) references Module(M_Code), Foreign Key(Assignment_ID1) references Assignment(Assignment_ID), Foreign Key(Assignment_ID2) references Assignment(Assignment_ID), Foreign Key(Assignment_ID3) references Assignment(Assignment_ID));
