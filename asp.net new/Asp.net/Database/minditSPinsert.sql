delimiter //

create procedure sp_insertMember(
in spfname varchar(45),
in splname varchar(45),
in spemail varchar(45),
in spPassword1 varchar(45),
in spdate varchar(45),
in spgend varchar(45),
in spc_no varchar(45),
in spstreet varchar(45),
in spstate varchar(45),
in spcity varchar(45),
in spnation varchar(45),
in sppincode varchar(45),
in spprofile varchar(45))

begin

insert into newmember (FirstName, LastName,Email,Password,DOB,Gender,ContactNo,Street,State,City,Nation,PinCode,Profile) values (spfname, splname,spemail,spPassword1,spdate,spgend,spc_no,spstreet,spstate,spcity,spnation,sppincode,spprofile);

end//

delimiter ;


SELECT * FROM `mindit`.`newmember`;

delimiter //

create procedure sp_validate()

begin

select * from login;
end//

delimiter ;

delimiter //

create procedure sp_insertNewEmp(in eName varchar(45),in ePass varchar(45))

begin

insert into login(userID, loginPass,role) values (eName, ePass, 'emp');


end//

delimiter ;

call sp_insertNewEmp('raj',45664);

select * from newmember;