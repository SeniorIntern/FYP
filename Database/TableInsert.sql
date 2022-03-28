
-- Student' table population
INSERT INTO Students VALUES('1', '19031007', 'Nikhil', 'Thapa', '2019', 'CS50');
INSERT INTO Students VALUES('2', '19031008', 'Bipin', 'Chhetri', '2019', 'CS50');
INSERT INTO Students VALUES('3', '19031009', 'Nirmal', 'Khawas', '2019', 'CS50');
INSERT INTO Students VALUES('4', '19031010', 'Ram', 'Krishna', '2019', 'MS32');
INSERT INTO Students VALUES('5', '19031002', 'Sunil', 'Thapa', '2019', 'CS50');
INSERT INTO Students VALUES('6', '19031006', 'Sujan', 'Gurung', '2019', 'MS32');

-- Module' table population
INSERT INTO Module VALUES('CC12', 'Data Structure and Algorithm', '30');
INSERT INTO Module VALUES('CC49', 'Engineering Thermodynamic', '60');
INSERT INTO Module VALUES('SG101', 'Software engineer', '30');
INSERT INTO Module VALUES('TG405', 'Data Analysis', '50');
INSERT INTO Module VALUES('TG406', 'Networking', '50');
INSERT INTO Module VALUES('SG406', 'Java Programming', '50');
INSERT INTO Module VALUES('SG12', 'Python Programming', '30');

-- programmes' table population
Insert into programmes values('CS50', 'BIT','SG12','Python Programming')

-- Student_ModuleResult' table population
Insert into mark_visualizer.student_moduleresult values("19031002", "70", "65", "77", "70", "70.5");
Insert into mark_visualizer.student_moduleresult values("19031007", "77", "70", "80", "68", "73.75");
Insert into mark_visualizer.student_moduleresult values("19031008", "80", "75", "85", "67", "76.75");
Insert into mark_visualizer.student_moduleresult values("19031009", "76", "65", "87", "70", "74.5");
Insert into mark_visualizer.student_moduleresult values("19031010", "67", "60", "88", "70", "71.25");

-- sectionAverage' table population
Insert into sectionAverage values("CC12", "70", "74", "78", "60");
Insert into sectionAverage values("CC49", "80", "67", "74", "70");
Insert into sectionAverage values("TG406", "60", "58", "67", "65");
Insert into sectionAverage values("SG12", "75", "80", "80", "74");
Insert into sectionAverage values("SG406", "67", "72", "70", "70");
Insert into sectionAverage values("SG101", "58", "65", "70", "70");