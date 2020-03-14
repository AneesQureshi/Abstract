CREATE TABLE `tbl_empdetails` (

`EmpId` int(11) NOT NULL AUTO_INCREMENT,

`EmpName` varchar(11) DEFAULT NULL,

`EmpPhone` varchar(45) DEFAULT NULL,

`DeptId` int(11) NOT NULL,

`CreatedBy` varchar(45) DEFAULT NULL,

`CreatedDate` varchar(45) DEFAULT NULL,

`UpdatedBy` varchar(45) DEFAULT NULL,

`UpdatedDate` varchar(45) DEFAULT NULL,

PRIMARY KEY (`EmpId`),

KEY `FK_DeptId_idx` (`DeptId`),

CONSTRAINT `FK_DeptId` FOREIGN KEY (`DeptId`) REFERENCES `tbl_deptdetails` (`DeptId`)

ON DELETE NO ACTION ON UPDATE NO ACTION

) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

INSERT INTO `company`.`tbl_empdetails`
(
`EmpName`,
`EmpPhone`,
`DeptId`,
`CreatedBy`,
`CreatedDate`)
VALUES
('Job',8965632541,'3','Mathew',current_timestamp());  

UPDATE `company`.`tbl_empdetails`
SET
`EmpPhone` = '9656235469',
`UpdatedBy` = 'Mathew',
`UpdatedDate` = current_timestamp() WHERE `EmpId` = 6;

SELECT * FROM tbl_empdetails;

DELETE FROM `company`.`tbl_empdetails` 
where DeptId='2';
DELETE FROM `company`.`tbl_empdetails`
WHERE DeptId='2';

truncate `company`.`tbl_empdetails`;

DELETE FROM `company`.`tbl_empdetails`
WHERE EmpId=5;


DROP table tbl_empdetails;


ALTER TABLE `empdetails` RENAME `tbl_empdetails`;

