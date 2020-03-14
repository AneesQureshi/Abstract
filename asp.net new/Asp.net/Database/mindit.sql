CREATE TABLE `newmember` (
  `idnewmember` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(45) DEFAULT NULL,
  `Last Name` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  `DOB` varchar(45) DEFAULT NULL,
  `Gender` varchar(45) DEFAULT NULL,
  `ContactNo` varchar(45) DEFAULT NULL,
  `Street` varchar(45) DEFAULT NULL,
  `State` varchar(45) DEFAULT NULL,
  `City` varchar(45) DEFAULT NULL,
  `Nation` varchar(45) DEFAULT NULL,
  `PinCode` varchar(45) DEFAULT NULL,
  `Profile` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idnewmember`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;



SELECT * FROM `mindit`.`newmember`;

CREATE TABLE `login` (
`userID` varchar(45) NOT NULL,
`loginPass` int(45) NOT NULL,
`role` varchar(45) NOT NULL,

PRIMARY KEY (`userID`)
)

SELECT * FROM `login`;

INSERT INTO `login` (`userID`,`loginPass`,`role`) VALUES('John','3','emp');




 
 UPDATE `mindit`.`login`
SET

loginPass = '202020'

WHERE loginPass = 2;

 
 
 