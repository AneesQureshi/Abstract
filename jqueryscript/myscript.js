$(document).ready(function(){
    $("#but1").click(function(){
		var eid=$("#eid").val();
		var fname=$("#fname").val();
		var gender=$("#gender").val();
		var pno=$("#pno").val();
		var email=$("#email").val();
		var fline=$("#fline").val();
		var pincode=$("#pincode").val();
		var regx = /^[A-Za-z]+$/;
		if(eid=="")
		{
			alert("Emp ID not be null");
			return false;
		}
		else{
			if(!$.isNumeric($("#eid").val()))
			{
				alert("Emp Id must be Nummeric");
				return false;
			}
		}
		if(fname=="")
		{
			alert("First Name not be null");
			return false;
		}
		else{
			if(!regx.test(fname))
			{
				alert("First Name must be alphabetic");
				return false;
			}
		}
		if(gender=="")
		{
			alert("Please Select gender");
			return false;
		}
		if(pno=="")
		{
			alert("Phone No. not be null");
			return false;
		}
		else{
			if(!$.isNumeric($("#pno").val()))
			{
				alert("Phone No. is Wrong");
				return false;
			}
			else{
				var y=pno.length;
					if(y!=10)
					{
						alert("Phone No. is Wrong");
						return false;
					}
			}
		}
		if(email=="")
		{
			alert("Email not be null");
			return false;
		}
		else{
			var str = "@";
			if(email.indexOf(str) == -1){
				alert("Email is Wrong");
				return false;
			}
			else{
				var y=email.length;
				if(y<5)
				{
					alert("Email is Wrong1");
					return false;
				}
			}
		}
		if(fline=="")
		{
			alert("Address not be null");
			return false;
		}
		if(pincode=="")
		{
			alert("Pincode not be null");
			return false;
		}
		else{
			if(!$.isNumeric($("#pincode").val()))
			{
				alert("Pincode is Wrong");
				return false;
			}
			else{
				var y=pincode.length;
					if(y!=6)
					{
						alert("Pincode is Wrong");
						return false;
					}
			}
		}
    });
});		
function onload(){
			var parameters=location.search.substring(1).split("?");
			if(parameters=="")
			{
				
			}
			else
			{ 
				var temp =parameters[0].split("&");
				var id=unescape(temp[0]);
				var name=unescape(temp[1]);
				var name =temp[1].split("%20");
				var fname=name[0];
				var lname=name[1];
				document.getElementById("eid").value=id;
				document.getElementById("fname").value=fname;
				document.getElementById("lname").value=lname;
			}
}