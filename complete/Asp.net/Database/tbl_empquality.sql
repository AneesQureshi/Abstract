CREATE TABLE `tbl_empquality` (


`QId` int(11) NOT NULL AUTO_INCREMENT,
`Tech` varchar(11) DEFAULT NULL,
`percentage` varchar(11) DEFAULT NULL,
`EmpId` int(11) DEFAULT NULL,
`CreatedBy` varchar(45) DEFAULT NULL,

`CreatedDate` varchar(45) DEFAULT NULL,

`UpdatedBy` varchar(45) DEFAULT NULL,

`UpdatedDate` varchar(45) DEFAULT NULL,
PRIMARY KEY (`QId`),
KEY `FK_EmpId_idx` (`EmpId`),

CONSTRAINT `FK_EmpId` FOREIGN KEY (`EmpId`) REFERENCES `tbl_empdetails` (`EmpId`)

ON DELETE NO ACTION ON UPDATE NO ACTION

) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;


INSERT INTO `company`.`tbl_empquality`
(

`Tech`,
`Percentage`,
`EmpId`,
`CreatedBy`,
`CreatedDate`)
VALUES
('sql',80,7,'Anees',current_timestamp());  

UPDATE `company`.`tbl_empquality`
SET
`Percentage` = 90,
`UpdatedBy` = 'Mathew',
`UpdatedDate` = current_timestamp() WHERE `EmpId` = 5;


SELECT * FROM tbl_empquality;