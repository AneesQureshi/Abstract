CREATE TABLE `tbl_deptdetails` (
 
  `DeptId` INT NOT NULL AUTO_INCREMENT  ,
  `DeptName`  varchar(45) DEFAULT NULL,
  
  `CreatedBy` varchar(45) DEFAULT NULL,
  `CreatedDate` varchar(45) DEFAULT NULL,
  `UpdatedBy` varchar(45) DEFAULT NULL,
  `UpdatedDate` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`DeptId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




INSERT INTO `company`.`tbl_deptdetails`
(

`DeptName`,

`CreatedBy`,
`CreatedDate`
)

VALUES
('Testing','Anil',current_timestamp());

SELECT * FROM tbl_deptdetails;

DELETE FROM `company`.`tbl_deptdetails`
WHERE DeptId='5';

truncate `company`.`tbl_deptdetails`;


DELETE FROM `company`.`tbl_deptdetails`;

drop table tbl_deptdetails

ALTER TABLE `deptdetails` RENAME `tbl_deptdetails`;
