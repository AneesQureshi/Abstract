<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Employee.aspx.cs" Inherits="Demo1.Employee1" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title>Mind IT Systems</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="STYLESHEET" href="css/bootstrap.min.css" />
    <script src="js/bootstrap.js"></script>
 

 
  

</head>

<body>
    <div class="container-fluid">
        <div class="jumbotron" id="header"
            style="background-image: url(mindit.png); background-position: right; background-repeat: no-repeat; color: white; text-shadow: black 0.3em 0.3em 0.3em;">
        </div>
        
          <form name="myform" runat="server">

            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>

                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        
                        <ul class="nav navbar-nav navbar-right">
                            
                            <li><asp:LinkButton ID="logoutLinkBtn" runat="server"  OnClick="Logout" ><span class="glyphicon glyphicon-log-out"></span> Logout</asp:LinkButton></li>
                             </ul>
                    </div>
                </div>
            </nav>

            <div>
                <article class="well well-sm">
                    <h1>Employee</h1>
                </article>
            </div>
        
                 
            

           

            <div  >

 <asp:LinkButton ID="addEmpDetailsLinkBtn" runat="server" cssClass="btn btn-info btn pull-right" postbackurl="addEmpDetails.aspx">Click here to add Details</asp:LinkButton>
    
</div>
        </form>
    </div>
</body>
</html>
