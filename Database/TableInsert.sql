
-- Address' table population
INSERT INTO Address VALUES('A1', 'Nepal', 'Pokhara', '2', 'Bindabashini');
INSERT INTO Address VALUES('A2', 'Nepal', 'Pokhara', '4', 'Nadibur');
INSERT INTO Address VALUES('A3', 'Nepal', 'Pokhara', '5', 'Nadibur');
INSERT INTO Address VALUES('A4', 'Nepal', 'Pokhara', '4', 'Bagar');
INSERT INTO Address VALUES('A5', 'Nepal', 'Pokhara', '4', 'Newroad');
INSERT INTO Address VALUES('A6', 'Nepal', 'Pokhara', '4', 'Birauta');

-- Student' table population
INSERT INTO Student VALUES('19031007', 'Nikhil Thapa', 'A1');
INSERT INTO Student VALUES('19031008', 'Bipin Chhetri', 'A2');
INSERT INTO Student VALUES('19031009', 'Nirmal Khawas', 'A3');
INSERT INTO Student VALUES('19031010', 'Ram Krishna', 'A4');
INSERT INTO Student VALUES('19031002', 'Sunil Thapa', 'A2');
INSERT INTO Student VALUES('19031006', 'Sujan Gurung', 'A5');

-- Department' table population
INSERT INTO Department VALUES('D1', 'IT');
INSERT INTO Department VALUES('D2', 'Account');
INSERT INTO Department VALUES('D3', 'Management');
INSERT INTO Department VALUES('D4', 'Finance');
INSERT INTO Department VALUES('D5', 'Teaching');
INSERT INTO Department VALUES('D6', 'Maintainance');

-- Teacher' table population
INSERT INTO Teacher VALUES('T1', 'Walter White', 'WalterWhite@gmail.com', 'A1', 'A2', 'D5');
INSERT INTO Teacher VALUES('T2', 'Chris Heria', 'ChrisHeria@gmail.com', 'A3', '', 'D5');
INSERT INTO Teacher VALUES('T3', 'Jack Synder', 'JackSynder@gmail.com', 'A2', '', 'D2');
INSERT INTO Teacher VALUES('T4', 'Saul Goodman', 'JackSynder@gmail.com', 'A4', 'A5', 'D5');
INSERT INTO Teacher VALUES('T5', 'Tim Musk', 'TimMusk@gmail.com', 'A2', '', 'D4');
INSERT INTO Teacher VALUES('T6', 'Jake Yip', 'JakeYip@gmail.com', 'A4', 'A1', 'D5');
INSERT INTO Teacher VALUES('T7', 'Sabin Gurung', 'SabinGurung@gmail.com', 'A4', 'A1', 'D5');
INSERT INTO Teacher VALUES('T8', 'Nishan Chhetri', 'NishanChhetri@gmail.com', 'A4', 'A1', 'D5');
INSERT INTO Teacher VALUES('T9', 'Sujal Thapa', 'SujalThapa@gmail.com', 'A4', 'A1', 'D5');
INSERT INTO Teacher VALUES('T10', 'Amrit Shrestha', 'AmritShrestha@gmail.com', 'A4', 'A1', 'D5');


-- Assignment' table population
INSERT INTO Assignment VALUES('As1', 'Coursework');
INSERT INTO Assignment VALUES('As2', 'Written Exam');
INSERT INTO Assignment VALUES('As3', 'Individual Assignment');
INSERT INTO Assignment VALUES('As4', 'Group Assignment');
INSERT INTO Assignment VALUES('As5', 'Unseen Examination');

-- Module' table population
INSERT INTO Module VALUES('CC12', 'Data Structure and Algorithm', '30', 'As1', 'As2', 'As4');
INSERT INTO Module VALUES('CC49', 'Engineering Thermodynamic', '60', 'As1', 'As2', '');
INSERT INTO Module VALUES('SG101', 'Software engineer', '30', 'As1', 'As4', 'As5');
INSERT INTO Module VALUES('TG405', 'Data Analysis', '50', 'As1', 'As4', '');
INSERT INTO Module VALUES('TG406', 'Networking', '50', 'As1', 'As5', '');
INSERT INTO Module VALUES('SG406', 'Java Programming', '50', 'As1', 'As5', '');
INSERT INTO Module VALUES('SG12', 'Python Programming', '30', 'As1', 'As2', 'As4');

-- Bill' table population
INSERT INTO Bill VALUES('Bi1', 'Semsiter Fee', '80000', TO_DATE('2022-1-30','YYYY-MM-DD'), '19031007');
INSERT INTO Bill VALUES('Bi2', 'Admission Fee', '60000', TO_DATE('2019-7-30','YYYY-MM-DD'), '19031009');
INSERT INTO Bill VALUES('Bi3', 'University Fee', '70000', TO_DATE('2019-7-31','YYYY-MM-DD'), '19031008');
INSERT INTO Bill VALUES('Bi4', 'Admission Fee', '50000', TO_DATE('2019-7-31','YYYY-MM-DD'), '19031010');
INSERT INTO Bill VALUES('Bi5', 'Semsiter Fee', '80000', TO_DATE('2022-3-1','YYYY-MM-DD'), '19031007');
INSERT INTO Bill VALUES('Bi6', 'Semsiter Fee', '80000', TO_DATE('2022-2-2','YYYY-MM-DD'), '19031008');
INSERT INTO Bill VALUES('Bi7', 'Semsiter Fee', '80000', TO_DATE('2022-2-3','YYYY-MM-DD'), '19031010');
INSERT INTO Bill VALUES('Bi8', 'Semister Fee', '60000', TO_DATE('2019-11-30','YYYY-MM-DD'), '19031009');
INSERT INTO Bill VALUES('Bi9', 'Resit Fee', '50000', TO_DATE('2022-3-3','YYYY-MM-DD'), '19031002');
INSERT INTO Bill VALUES('Bi10', 'Semsiter Fee', '80000', TO_DATE('2022-2-28','YYYY-MM-DD'), '19031006');



-- Payment' table population
INSERT INTO Payment VALUES('P1', 'Sucessfull', '19031007', 'Bi1', '80000', TO_DATE('2022-1-30','YYYY-MM-DD'));
INSERT INTO Payment VALUES('P2', 'Sucessfull', '19031008', 'Bi3', '70000', TO_DATE('2019-7-31','YYYY-MM-DD'));
INSERT INTO Payment VALUES('P3', 'Sucessfull', '19031008', 'Bi6', '80000', TO_DATE('2022-2-2','YYYY-MM-DD'));
INSERT INTO Payment VALUES('P4', 'Sucessfull', '19031009', 'Bi2', '80000', TO_DATE('2019-7-30','YYYY-MM-DD'));
INSERT INTO Payment VALUES('P5', 'Sucessfull', '19031009', 'Bi8', '80000', TO_DATE('2019-11-30','YYYY-MM-DD'));
INSERT INTO Payment VALUES('P6', 'Sucessfull', '19031007', 'Bi5', '80000', TO_DATE('2022-3-1','YYYY-MM-DD'));
INSERT INTO Payment VALUES('P7', 'Sucessfull', '19031010', 'Bi4', '80000', TO_DATE('2019-7-31','YYYY-MM-DD'));
INSERT INTO Payment VALUES('P8', 'Sucessfull', '19031010', 'Bi7', '80000', TO_DATE('2022-2-3','YYYY-MM-DD'));
INSERT INTO Payment VALUES('P9', 'Sucessfull', '19031002', 'Bi9', '80000', TO_DATE('2022-3-3','YYYY-MM-DD'));
INSERT INTO Payment VALUES('P10', 'Sucessfull', '19031006', 'Bi10', '80000', TO_DATE('2022-2-28','YYYY-MM-DD'));


-- TeacherModule' table population
INSERT INTO TeacherModule VALUES('T1', 'CC12', 'TG406', 'Begnas', 'Nilgiri', '1', '2');
INSERT INTO TeacherModule VALUES('T2', 'TG405', 'CC49','Tilicho', 'Fewa', '1', '2');
INSERT INTO TeacherModule VALUES('T3', 'CC49', 'SG101','Begnas', 'Fewa', '2', '1');
INSERT INTO TeacherModule VALUES('T4', 'SG101', 'CC49','Nilgiri', 'Machhapuchre', '2', '2');
INSERT INTO TeacherModule VALUES('T5', 'SG101', 'TG405','Annapurna', 'Gokyo', '2', '2');
INSERT INTO TeacherModule VALUES('T6', 'TG406', '','Annapurna', '', '2', '');
INSERT INTO TeacherModule VALUES('T7', 'TG406', 'TG405','Fewa', 'Begnas', '1', '2');
INSERT INTO TeacherModule VALUES('T8', 'SG406', '','Fewa', '', '2', '');
INSERT INTO TeacherModule VALUES('T9', 'SG12', 'SG406','Machhapuchre', 'Gokyo', '1', '2');
INSERT INTO TeacherModule VALUES('T10', 'SG406', 'CC12','Machhapuchre', 'Gokyo', '2', '2');

-- StudentResult' table population
INSERT INTO StudentResult VALUES('19031007', 'Pass', TO_DATE('2022-12-31','YYYY-MM-DD'));
INSERT INTO StudentResult VALUES('19031008', 'Pass', TO_DATE('2022-12-31','YYYY-MM-DD'));
INSERT INTO StudentResult VALUES('19031010', 'Fail', TO_DATE('2022-12-31','YYYY-MM-DD'));
INSERT INTO StudentResult VALUES('19031006', 'Pass', TO_DATE('2022-12-31','YYYY-MM-DD'));
INSERT INTO StudentResult VALUES('19031009', 'Fail', TO_DATE('2022-12-31','YYYY-MM-DD'));
INSERT INTO StudentResult VALUES('19031002', 'Pass', TO_DATE('2022-12-31','YYYY-MM-DD'));


-- StudentModuleAssignment' table population
INSERT INTO StudentModuleAssignment VALUES('19031002', 'CC12', 'As1', 'As2', 'As3', 'A', 'Pass');
INSERT INTO StudentModuleAssignment VALUES('19031006', 'CC12', 'As1', 'As2', 'As3', 'A', 'Pass');
INSERT INTO StudentModuleAssignment VALUES('19031007', 'CC12', 'As1', 'As2', 'As3', 'D', 'Fail');
INSERT INTO StudentModuleAssignment VALUES('19031008', 'CC12', 'As1', 'As2', 'As3', 'A', 'Pass');
INSERT INTO StudentModuleAssignment VALUES('19031009', 'CC12', 'As1', 'As2', 'As3', 'A', 'Pass');
INSERT INTO StudentModuleAssignment VALUES('19031010', 'CC12', 'As1', 'As2', 'As3', 'A', 'Fail');
INSERT INTO StudentModuleAssignment VALUES('19031002', 'CC49', 'As1', 'As2', 'As3', 'A', 'Pass');
INSERT INTO StudentModuleAssignment VALUES('19031006', 'CC49', 'As1', 'As2', 'As3', 'A', 'Pass');
INSERT INTO StudentModuleAssignment VALUES('19031007', 'CC49', 'As1', 'As2', 'As3', 'A', 'Pass');
INSERT INTO StudentModuleAssignment VALUES('19031008', 'CC49', 'As1', 'As2', 'As3', 'A', 'Pass');
INSERT INTO StudentModuleAssignment VALUES('19031009', 'CC49', 'As1', 'As2', 'As3', 'A', 'Fail');
INSERT INTO StudentModuleAssignment VALUES('19031010', 'CC49', 'As1', 'As2', 'As3', 'A', 'Pass');
