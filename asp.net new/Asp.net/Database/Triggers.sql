

SHOW TRIGGERS;
DELIMITER $$
CREATE TRIGGER Insert_show AFTER INSERT
 ON tbl_empdetails
 FOR EACH ROW
 BEGIN
 SELECT * from tbl_empdetails;
 END$$
DELIMITER ;	

--  table to record any update in tbl_empdetails table


CREATE TABLE employees_audit (
    id INT AUTO_INCREMENT PRIMARY KEY,
    EmpId INT NOT NULL,
    EmpName VARCHAR(50) NOT NULL,
    changedat DATETIME DEFAULT NULL,
    action VARCHAR(50) DEFAULT NULL
);


-- trigger before update

DELIMITER $$
CREATE TRIGGER before_employee_update 
    BEFORE UPDATE ON tbl_empdetails
    FOR EACH ROW 
BEGIN
    INSERT INTO employees_audit
    SET action = 'update',
     EmpId = OLD.EmpId,
        EmpName = OLD.EmpName,
        changedat = NOW(); 
END$$
DELIMITER ;

UPDATE tbl_empdetails 
SET 
    EmpName = 'Sandy'
WHERE
    EmpId = 8;

SELECT 
    *
FROM
    employees_audit;