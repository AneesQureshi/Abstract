USE `company`;
DROP procedure IF EXISTS `insertp`;

DELIMITER $$
USE `company`$$
CREATE PROCEDURE `insertp` ()
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