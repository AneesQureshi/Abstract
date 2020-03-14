CREATE DATABASE  IF NOT EXISTS `emp_mgmt_sys` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `emp_mgmt_sys`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: emp_mgmt_sys
-- ------------------------------------------------------
-- Server version	5.7.19-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_empedudetails`
--

DROP TABLE IF EXISTS `tbl_empedudetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_empedudetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `emp_id` int(11) DEFAULT NULL,
  `school` varchar(45) DEFAULT NULL,
  `board` varchar(45) DEFAULT NULL,
  `percent` int(11) DEFAULT NULL,
  `passoutyear` int(11) DEFAULT NULL,
  `edu_class` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `empid_idx` (`emp_id`),
  CONSTRAINT `empid` FOREIGN KEY (`emp_id`) REFERENCES `tbl_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_empedudetails`
--

LOCK TABLES `tbl_empedudetails` WRITE;
/*!40000 ALTER TABLE `tbl_empedudetails` DISABLE KEYS */;
INSERT INTO `tbl_empedudetails` VALUES (2,6,'lkj','klj',98,2007,'10'),(3,6,'jl','jlk',45,2003,'12'),(4,6,'j','lj',85,2330,'grad'),(5,6,'jlk','jl',96,2654,'upgrad'),(6,6,'lkj','klj',98,2007,'10'),(7,6,'jl','jlk',45,2003,'12'),(8,6,'j','lj',85,2330,'grad'),(9,6,'jlk','jl',96,2654,'upgrad'),(10,6,'lkj','klj',98,2007,'10'),(11,6,'jl','jlk',45,2003,'12'),(12,6,'j','lj',85,2330,'grad'),(13,6,'jlk','jl',96,2654,'upgrad'),(14,6,'lkj','klj',98,2007,'10'),(15,6,'jl','jlk',45,2003,'12'),(16,6,'j','lj',85,2330,'grad'),(17,6,'jlk','jl',96,2654,'upgrad'),(18,6,'lkj','klj',98,2007,'10'),(19,6,'jl','jlk',45,2003,'12'),(20,6,'j','lj',85,2330,'grad'),(21,6,'jlk','jl',96,2654,'upgrad'),(22,6,'lkj','klj',98,2007,'10'),(23,6,'jl','jlk',45,2003,'12'),(24,6,'j','lj',85,2330,'grad'),(25,6,'jlk','jl',96,2654,'upgrad'),(26,6,'lkj','klj',98,2007,'10'),(27,6,'jl','jlk',45,2003,'12'),(28,6,'j','lj',85,2330,'grad'),(29,6,'jlk','jl',96,2654,'upgrad'),(30,16,'sadf','asdf',45,4545,'10'),(31,16,'asdf','asdf',45,456456,'12'),(32,16,'asdf','asdf',55,45646,'grad'),(33,16,'sadf','asfd',78,45645,'upgrad'),(34,7,'sadf','asdf',45,4545,'10'),(35,7,'asdf','asdf',45,456456,'12'),(36,7,'asdf','asdf',55,45646,'grad'),(37,7,'sadf','asfd',78,45645,'upgrad');
/*!40000 ALTER TABLE `tbl_empedudetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(45) NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `dob` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `contact_no` varchar(45) DEFAULT NULL,
  `street` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `nation` varchar(45) DEFAULT NULL,
  `pincode` varchar(45) DEFAULT NULL,
  `profile` varchar(45) DEFAULT NULL,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user`
--

LOCK TABLES `tbl_user` WRITE;
/*!40000 ALTER TABLE `tbl_user` DISABLE KEYS */;
INSERT INTO `tbl_user` VALUES (5,123589,'Anees','Qureshi',NULL,'admin@1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'admin'),(6,850345,'Smith','Josh','asdf@zdg.cm','asdf','13-11-2007','male','985654','asdfasdf','delhi','Please select a State','uk','45356','db','emp'),(7,23432,'Mark','Twain','','mark456','','male','','','himachal','Please select a State','indian','','pm','emp'),(8,45646,'Smith','field',NULL,'SDFGS',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'emp'),(9,55,'kamal','khan',NULL,'hello',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'emp'),(10,56,'Naman','Sharma',NULL,'nice',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'emp'),(11,123656,'Rajesh','Kumar',NULL,'96546',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'emp'),(13,59,'Poonam','sharma',NULL,'asdgfa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'emp'),(15,65,'Raj','sharma',NULL,'asdf64',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'emp'),(16,2564,'Anil','Kumar','','799646','','male','','','mp','Please select a State','indian','','wd','emp');
/*!40000 ALTER TABLE `tbl_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'emp_mgmt_sys'
--
/*!50003 DROP PROCEDURE IF EXISTS `sp_insertEduDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_insertEduDetails`(in uid int(45),in eschool varchar(45),in eboard varchar(45),in epercent varchar(45),in epassoutyear varchar(45),in edu_class varchar(45))
begin

insert into tbl_empedudetails(emp_id,school, board,percent,passoutyear,edu_class) values (uid,eschool,eboard,epercent,epassoutyear,edu_class);


end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_insertMember` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_insertMember`(

in memeberid int(45),
in spfname varchar(45),
in splname varchar(45),
in spemail varchar(45),

in spdate varchar(45),
in spgend varchar(45),
in spc_no varchar(45),
in spstreet varchar(45),
in spstate varchar(45),
in spcity varchar(45),
in spnation varchar(45),
in sppincode varchar(45),
in spprofile varchar(45)
)
begin


UPDATE `emp_mgmt_sys`.`tbl_user`
SET


`first_name` = spfname,
`last_name` = splname,
`email` = spemail,

`dob` = spdate,
`gender` = spgend,
`contact_no` = spc_no,
`street` = spstreet,
`state` = spstate,
`city` = spcity,
`nation` = spnation,
`pincode` = sppincode,
`profile` = spprofile

WHERE `id` = memeberid;

end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_insertNewEmp` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_insertNewEmp`(in eid int(45),in ePass varchar(45),in efname varchar(45),in elname varchar(45))
begin

insert into tbl_user(user_id, password,first_name,last_name,role) values (eid,ePass,efname,elname,'emp');
select last_insert_id();


end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_validate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_validate`(in pwd varchar(45),in uid int(45))
begin

select user_id, role from tbl_user where user_id = uid and password = pwd;

end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_viewEmployee` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_viewEmployee`(in strpid varchar(45))
begin

select * from tbl_user where user_id = strpid;

end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_viewEmployeeDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_viewEmployeeDetails`(in uid int(11),in class varchar(45))
begin

select * from tbl_empedudetails where emp_id = uid and edu_class=class;

end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-08  2:42:07
