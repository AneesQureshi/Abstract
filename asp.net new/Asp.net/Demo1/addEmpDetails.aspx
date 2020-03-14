<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="addEmpDetails.aspx.cs" Inherits="Demo1.addEmpDetails1" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title>Mind IT Systems</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="STYLESHEET" href="css/bootstrap.min.css" />
    <script src="js/bootstrap.js"></script>
    <script src="jquery-3.2.1.js"></script>
    <script src="jquery-3.2.1.min.js"></script>


    <script>

        var states = new Array();

        states['delhi'] = new Array('Pitampura', 'Ncr', 'Rohini');
        states['mp'] = new Array('Satna', 'Gwalior', 'Reeva');
        states['up'] = new Array('Jhaansi', 'Agra', 'Noida');
        states['andra'] = new Array('vijaywada', 'vishakhapatnam', 'hyderabad');
        states['himachal'] = new Array('Manali', 'Kufri', 'Shimla');

        function setStates() {
            cntrySel = document.getElementById('state');
            stateList = states[cntrySel.value];
            changeSelect('city', stateList, stateList);
        }

        function changeSelect(fieldID, newOptions, newValues) {
            selectField = document.getElementById(fieldID);
            selectField.options.length = 0;
            for (i = 0; i < newOptions.length; i++) {
                selectField.options[selectField.length] = new Option(newOptions[i], newValues[i]);
            }
        }

    </script>

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
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="mine.html">Home</a></li>
                            <li><a href="mine.html">Add New Member</a></li>

                        </ul>
                        <ul class="nav navbar-nav navbar-right">

                            <li><a href="login.aspx"><span class="glyphicon glyphicon-log-in"></span>Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div>
                <article class="well well-sm">
                    <h1>Dashboard</h1>
                </article>
            </div>
            <asp:Label ID="lbl_memberId" runat="server" Text="" Visible="false"></asp:Label>
            <asp:Label ID="Label1" runat="server" ForeColor="Green" />

            <div class="panel panel-primary">
                <div class="panel-body">
                    <h2>Personal Information</h2>
                </div>

                <table class="table table-striped">
                    <tr>
                        <th class="auto-style1">First Name</th>
                        <td>
                            <asp:TextBox ID="fname" runat="server" Width="174px"></asp:TextBox></td>
                        <td>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server"
                                ControlToValidate="fname"
                                ErrorMessage="First Name is a required field."
                                ForeColor="Red">
                            </asp:RequiredFieldValidator></td>
                        <th>Last Name</th>
                        <td>
                            <asp:TextBox ID="lname" runat="server" Width="153px"></asp:TextBox></td>
                        <td>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server"
                                ControlToValidate="lname"
                                ErrorMessage="Last Name is a required field."
                                ForeColor="Red">
                            </asp:RequiredFieldValidator></td>
                    </tr>

                    <tr>
                        <th class="auto-style1">Email</th>
                        <td>
                            <asp:TextBox ID="email" runat="server" Width="170px"></asp:TextBox></td>
                        <td>
                            <asp:RegularExpressionValidator ID="remail" runat="server"
                                ControlToValidate="email" ErrorMessage="Please enter the correct email"
                                ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"
                                ForeColor="Red">
                            </asp:RegularExpressionValidator>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server"
                                ControlToValidate="email"
                                ErrorMessage="email is a required field."
                                ForeColor="Red">
                            </asp:RequiredFieldValidator>
                        </td>
                        <th>Password</th>
                        <td>
                            <asp:TextBox ID="Password1" runat="server" Width="170px" TextMode="Password"></asp:TextBox></td>
                        <td>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server"
                                ControlToValidate="Password1"
                                ErrorMessage="Password is a required field."
                                ForeColor="Red">
                            </asp:RequiredFieldValidator>
                        </td>
                    </tr>


                    <tr>
                        <th class="auto-style1">DOB</th>
                        <td>
                            <asp:TextBox ID="date" Font-Names="date" runat="server" Width="170px" TextMode="Date"></asp:TextBox></td>

                        <th>Gender</th>
                        <td>
                            <asp:RadioButtonList ID="gend" runat="server">
                                <asp:ListItem Value="male">Male</asp:ListItem>
                                <asp:ListItem Value="female">Female</asp:ListItem>
                            </asp:RadioButtonList>
                        </td>
                    </tr>
                    <tr>
                        <th class="auto-style1">Contact No.</th>
                        <td>
                            <asp:TextBox ID="c_no" runat="server" Width="174px"></asp:TextBox></td>
                        

                        <th>Street</th>
                        <td>
                            <asp:TextBox ID="street" runat="server" Width="174px"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <th class="auto-style1">State</th>
                        <td>
                            <asp:DropDownList ID="state" runat="server" CssClass="form-control">
                                <asp:ListItem Value="delhi">Delhi</asp:ListItem>
                                <asp:ListItem Value="himachal">Himachal Pradesh</asp:ListItem>
                                <asp:ListItem Value="up">Uttar Pradesh</asp:ListItem>
                                <asp:ListItem Value="mp">Madhya Pradesh</asp:ListItem>
                                <asp:ListItem Value="ap">Andhra Pradesh</asp:ListItem>
                            </asp:DropDownList>
                        </td>
                        <th>City</th>
                        <td>
                            <asp:DropDownList ID="city" runat="server" CssClass="form-control">
                                <asp:ListItem>Please select a State</asp:ListItem>
                            </asp:DropDownList>
                        </td>
                    </tr>
                    <tr>
                        <th class="auto-style1">Nation</th>
                        <td>
                            <asp:DropDownList ID="nation" runat="server" CssClass="form-control">
                                <asp:ListItem Value="uk">UK</asp:ListItem>
                                <asp:ListItem Value="london">London</asp:ListItem>
                                <asp:ListItem Value="shri">Shri Lanka</asp:ListItem>
                                <asp:ListItem Value="rusy">Russia</asp:ListItem>
                                <asp:ListItem Value="south">South Africa</asp:ListItem>
                                <asp:ListItem Value="indian">India</asp:ListItem>
                            </asp:DropDownList>
                        </td>
                        <td>Pin Code</td>
                        <td>
                            <asp:TextBox ID="pincode" runat="server" Width="174px"></asp:TextBox>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="panel panel-primary">

                <div class="panel-body">
                    <h2>Educational Qualification</h2>
                </div>
                <table class="table table-striped">
                    <tr>
                        <td></td>
                        <td>School/College</td>
                        <td>Board/University</td>
                        <td>Percent(%)</td>
                        <td>Passout Year</td>
                    </tr>
                    <tr>
                        <th>Matric</th>
                        <td>
                            
                            <asp:TextBox ID="schnm10" runat="server" Width="170px"></asp:TextBox>
                        </td>
                        <td>
                         
                            <asp:TextBox ID="board10" runat="server" Width="170px"></asp:TextBox>
                        </td>
                        <td>
                            
                            <asp:TextBox ID="Percent10" runat="server" Width="170px"></asp:TextBox>
                        </td>
                        <td>
                            
                            <asp:TextBox ID="year10" runat="server" Width="170px"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <th>High Secondary</th>
                        <td>
                            
                            <asp:TextBox ID="schnm12" runat="server" Width="170px"></asp:TextBox>
                        </td>
                        <td>
                            
                            <asp:TextBox ID="board12" runat="server" Width="170px"></asp:TextBox>
                        </td>
                        <td>
                           
                            <asp:TextBox ID="Percent12" runat="server" Width="170px"></asp:TextBox>
                        </td>
                        <td>
                            
                            <asp:TextBox ID="year12" runat="server" Width="170px"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>

                        <th>Graduation</th>
                        <td>
                            
                            <asp:TextBox ID="clgnmgrad" runat="server" Width="170px"></asp:TextBox>
                        </td>
                        <td>
                            
                            <asp:TextBox ID="boardgrad" runat="server" Width="170px"></asp:TextBox>
                        </td>
                        <td>
                            
                            <asp:TextBox ID="Percentgrad" runat="server" Width="170px"></asp:TextBox>
                        </td>
                        <td>
                            
                            <asp:TextBox ID="yeargrad" runat="server" Width="170px"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <th>Post Graduation</th>
                        <td>
                            
                            <asp:TextBox ID="clgnmupgrad" runat="server" Width="170px"></asp:TextBox>
                        </td>
                        <td>
                            
                            <asp:TextBox ID="boardupgrad" runat="server" Width="170px"></asp:TextBox>
                        </td>
                        <td>
                           
                            <asp:TextBox ID="Percentupgrad" runat="server" Width="170px"></asp:TextBox>
                        </td>
                        <td>
                            <asp:TextBox ID="yearupgrad" runat="server" Width="170px"></asp:TextBox>
                        </td>
                    </tr>
                </table>

            </div>

            <div class="panel panel-primary">
                <div class="panel-body">
                    <h2>Work details</h2>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <table class="table">
                            <tr>
                                <th>Profile</th>
                                <td>
                                    <asp:DropDownList ID="profile" runat="server" CssClass="form-control">
                                        <asp:ListItem Value="uk">Select</asp:ListItem>
                                        <asp:ListItem Value="qt">Quality Analyser</asp:ListItem>
                                        <asp:ListItem Value="wd">Web Development</asp:ListItem>
                                        <asp:ListItem Value="pm">Project Manager</asp:ListItem>
                                        <asp:ListItem Value="db">DataBase Administato</asp:ListItem>
                                        <asp:ListItem Value="prog">Software Programmer</asp:ListItem>
                                    </asp:DropDownList>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div>
                <asp:Button ID="btnSubmitSP" runat="server" Text="Submit" CssClass="btn btn-success btn pull-right" OnClick="SP_Insert" />
            </div>
        </form>
    </div>
</body>
</html>
