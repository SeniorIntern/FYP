-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: mark_visualizer
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `student_moduleresult`
--

DROP TABLE IF EXISTS `student_moduleresult`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_moduleresult` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `s_Id` int NOT NULL,
  `CC12` int DEFAULT NULL,
  `CC49` int DEFAULT NULL,
  `TG406` int DEFAULT NULL,
  `SG12` int DEFAULT NULL,
  `Average` int DEFAULT NULL,
  KEY `id` (`id`),
  KEY `s_Id` (`s_Id`),
  CONSTRAINT `student_moduleresult_ibfk_1` FOREIGN KEY (`s_Id`) REFERENCES `students` (`s_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_moduleresult`
--

LOCK TABLES `student_moduleresult` WRITE;
/*!40000 ALTER TABLE `student_moduleresult` DISABLE KEYS */;
INSERT INTO `student_moduleresult` VALUES (1,19031007,65,70,40,45,55),(2,19031009,50,65,63,70,62),(3,19031008,76,65,87,70,75),(4,19031010,66,55,60,40,55),(5,19031002,60,45,60,65,58),(6,19031003,45,65,65,40,46);
/*!40000 ALTER TABLE `student_moduleresult` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-26  3:20:34
