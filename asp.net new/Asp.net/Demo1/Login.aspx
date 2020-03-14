<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Demo1.Login1" %>

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

            <asp:Label ID="lb_InvalidIdPassword" runat="server" ForeColor="Red" />

            <div class="panel panel-primary">
                <div class="panel-body">
                    <h2>Login</h2>
                </div>

                <table class="table table-striped">
                    <tr>
                        <th class="auto-style1">User ID</th>
                        <td>
                            <asp:TextBox ID="loginId" runat="server" Width="174px" MaxLength="15"  ></asp:TextBox></td>
                        <td>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server"
                                ControlToValidate="loginId"
                                ErrorMessage="Please enter UserID."
                                ForeColor="Red">
                            </asp:RequiredFieldValidator></td>

                    </tr>
                    <tr>
                        <th>Password</th>
                        <td>
                            <asp:TextBox ID="loginPass1" runat="server" Width="174px" TextMode="Password" MaxLength="15"  ></asp:TextBox></td>
                        <td>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server"
                                ControlToValidate="loginPass1"
                                ErrorMessage="Password is a required field."
                                ForeColor="Red">
                            </asp:RequiredFieldValidator></td>
                    </tr>


                </table>
            </div>
            <div>
                <asp:Button ID="btn_login" runat="server" Text="Login" CssClass="btn btn-success btn pull-right" OnClick="btn_login_Click" />
            </div>
        </form>
    </div>
</body>
</html>
