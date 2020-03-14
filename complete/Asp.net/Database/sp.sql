DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Details`(IN con CHAR(20)	)
BEGIN
SELECT * FROM `tbl_empdetails` 
WHERE DeptId = con;
END$$
DELIMITER ;


DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertd`(IN dept varchar(20), CreatedBy varchar(20))
BEGIN

INSERT INTO `company`.tbl_empquality
(

`DeptName`,
`CreatedBy`,
`CreatedDate`
)

VALUES
(dept,CreatedBy,current_timestamp());


END$$
DELIMITER ;


	DELIMITER $$
	CREATE DEFINER=`root`@`localhost` PROCEDURE `inserte`(IN EmpName varchar(20), EmpPhone varchar(20), DeptId int(20), 
	CreatedBy varchar(20))
	BEGIN

	INSERT INTO `company`.`tbl_empdetails`
	(
	`EmpName`,
	`EmpPhone`,
	`DeptId`,
	`CreatedBy`,
	`CreatedDate`)
	VALUES
	(EmpName,EmpPhone,DeptId,CreatedBy,current_timestamp());  

	SELECT * FROM `company`.`tbl_empdetails`;

	END$$
	DELIMITER ;


DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertp`()
BEGIN

INSERT INTO `company`.tbl_empquality
(

`DeptName`,
`CreatedBy`,
`CreatedDate`
)

VALUES
('Operations','Abdul',current_timestamp());


END$$
DELIMITER ;


