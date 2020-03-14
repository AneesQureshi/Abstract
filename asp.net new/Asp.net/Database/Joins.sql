CREATE DATABASE company;

-- inner join
SELECT tbl_empdetails.EmpName, tbl_empquality.Tech
FROM tbl_empdetails
INNER JOIN tbl_empquality
ON tbl_empdetails.EmpId=tbl_empquality.EmpId
ORDER BY tbl_empdetails.EmpId;
-- left join
SELECT 
tbl_empdetails.EmpId,
tbl_empdetails.EmpName,
tbl_empdetails.DeptId,
tbl_empdetails.EmpPhone, 
tbl_empquality.Tech

FROM tbl_empdetails
 LEFT JOIN tbl_empquality
ON tbl_empdetails.EmpId=tbl_empquality.EmpId
ORDER BY tbl_empdetails.EmpId;	


SELECT * FROM tbl_empdetails
LEFT JOIN tbl_empquality
ON tbl_empdetails.EmpId=tbl_empquality.EmpId
ORDER BY tbl_empdetails.EmpId;   
UNION  
SELECT * FROM tbl_empquality
RIGHT JOIN tbl_empquality
ON tbl_empdetails.EmpId=tbl_empquality.EmpId
ORDER BY tbl_empdetails.EmpId;

-- full join is not applicable in mysql rather to achieve the same result we use union.