<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="adminAddEmployee.aspx.cs" Inherits="Demo1.adminAddEmployee" %>

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
                        </ul>
                    </div>
                </div>
            </nav>

            <div>
                <article class="well well-sm">
                    <h1>Dashboard</h1>
                </article>
            </div>
            <asp:Label ID="Label1" runat="server" ForeColor="Green" />
           
            <div class="panel panel-primary">
                <div class="panel-body">
                    <h2> Create New Employee</h2>
                </div>

                <table class="table table-striped">
                    <tr>
                        <th>Employee UserID</th>
                        <td>
                            <asp:TextBox ID="empid" runat="server" Width="174px" MaxLength="15"  ></asp:TextBox></td>
                        <td>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server"
                                ControlToValidate="empid"
                                ErrorMessage="Please enter employee email id!"
                                ForeColor="Red">
                            </asp:RequiredFieldValidator></td>
                        <th>First Name</th>
                         <td>
                            <asp:TextBox ID="empfname" runat="server" Width="174px" MaxLength="15"  ></asp:TextBox></td>
                        <td>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server"
                                ControlToValidate="empfname"
                                ErrorMessage="Please enter your first name!"
                                ForeColor="Red">
                            </asp:RequiredFieldValidator></td>
                    </tr>
                    <tr>
                        <th>Assign Password</th>
                        <td>
                            <asp:TextBox ID="empPass" runat="server" Width="174px" TextMode="Password" MaxLength="15"  ></asp:TextBox></td>
                        <td>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server"
                                ControlToValidate="empPass"
                                ErrorMessage="Please assign any Password!"
                                ForeColor="Red">
                            </asp:RequiredFieldValidator></td>
                        <th>Last Name</th>
                        <td>
                            <asp:TextBox ID="emplname" runat="server" Width="174px" MaxLength="15"  ></asp:TextBox></td>
                        <td>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server"
                                ControlToValidate="emplname"
                                ErrorMessage="Please enter your Last name!"
                                ForeColor="Red">
                            </asp:RequiredFieldValidator></td>
                    </tr>


                </table>
            </div>
            <div>
                <asp:Button ID="btn_addEmp" runat="server" Text="Submit" CssClass="btn btn-success btn pull-right" OnClick="btn_addEmp_Click"  />
            </div>
        </form>
    </div>
</body>
</html>
