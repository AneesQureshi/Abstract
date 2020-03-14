<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="addEmpDetails.aspx.cs" Inherits="Demo1.addEmpDetails1" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title>Mind IT Systems</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="STYLESHEET" href="css/bootstrap.min.css" />
    <script src="js/bootstrap.js"></script>
   
    <script type="text/javascript" src="javaScript%20and%20jquery/jquery-3.2.1.min.js"></script>


    
    <script>

        var states = new Array();

        states['delhi'] = new Array('Pitampura', 'Ncr', 'Rohini');
        states['mp'] = new Array('Satna', 'Gwalior', 'Reeva');
        states['up'] = new Array('Jhaansi', 'Agra', 'Noida');
        states['andhra'] = new Array('vijaywada', 'vishakhapatnam', 'hyderabad');
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

    <form name="myform" runat="server">

    <div class="container-fluid">
        <div class="jumbotron" id="header"
            style="background-image: url(mindit.png); background-position: right; background-repeat: no-repeat; color: white; text-shadow: black 0.3em 0.3em 0.3em;">
       
         <header>
                <h1>Mind IT Systems</h1>
            </header>    
        </div>

       

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
                        <li class="active"><a href="Login.aspx">Home</a></li>

                    </ul>

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
            <asp:Label ID="lbl_memberId" runat="server" Text="" Visible="false"></asp:Label>

            <asp:Label ID="Label1" runat="server" />

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

                        <th>Gender</th>

                        <td>
                            <asp:RadioButtonList ID="gend" runat="server"  RepeatDirection="Horizontal">
                                <asp:ListItem Value="male" Text="Male"></asp:ListItem>
                                <asp:ListItem Value="female" Text="Female"></asp:ListItem>
                            </asp:RadioButtonList>
                        </td>
                        <td>
                         <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server"
                                ControlToValidate="gend"
                                ErrorMessage="Gender is a required field."
                                ForeColor="Red">
                            </asp:RequiredFieldValidator>
                        </td>


                       
                    </tr>


                    <tr>
                        <th>DOB</th>
                        <td>
                            <asp:TextBox ID="date" Font-Names="date" runat="server" Width="170px" TextMode="Date"></asp:TextBox></td>
                        <td>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server"
                                ControlToValidate="date"
                                ErrorMessage="Date is a required field."
                                ForeColor="Red">
                            </asp:RequiredFieldValidator>
                    </td>
                        <th class="auto-style1">Contact No.</th>
                        <td>
                            <asp:TextBox ID="c_no" runat="server" Width="174px"></asp:TextBox></td>
                        
                        <td>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server"
                                ControlToValidate="c_no"
                                ErrorMessage="Contact no. is a required field."
                                ForeColor="Red">
                            </asp:RequiredFieldValidator>
                    </td>
                    
                        
                    </tr>
                    <tr>

                        <th class="auto-style1">State</th>
                        <td>
                            <asp:DropDownList ID="state" runat="server" CssClass="form-control" Enabled="true" onchange="setStates(this)">
                                <asp:ListItem Value="delhi">Delhi</asp:ListItem>
                                <asp:ListItem Value="himachal">Himachal Pradesh</asp:ListItem>
                                <asp:ListItem Value="up">Uttar Pradesh</asp:ListItem>
                                <asp:ListItem Value="mp">Madhya Pradesh</asp:ListItem>
                                <asp:ListItem Value="andhra">Andhra Pradesh</asp:ListItem>
                            </asp:DropDownList>
                        </td>

                        <td>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator7" runat="server"
                                ControlToValidate="state"
                                ErrorMessage="State is a required field."
                                ForeColor="Red">
                            </asp:RequiredFieldValidator>
                    </td>
                        <th>City</th>
                        <td>
                            <asp:DropDownList ID="city" runat="server" CssClass="form-control">
                                <asp:ListItem>Please select a State</asp:ListItem>
                            </asp:DropDownList>
                        </td>
                        <td>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator8" runat="server"
                                ControlToValidate="city"
                                ErrorMessage="city is a required field."
                                ForeColor="Red">
                            </asp:RequiredFieldValidator>
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
                        <td>
                            </td>
                        <th>Street</th>
                        <td>
                            <asp:TextBox ID="street" runat="server" Width="174px"></asp:TextBox>
                        </td>
                         <td>
                            </td>
                    </tr>
                    <tr>

                        <th class="auto-style1">PinCode</th>
                        <td>
                            <asp:TextBox ID="pincode" runat="server" Width="174px"></asp:TextBox>
                        </td>
                         <td>
                            </td>
                         <td>
                            </td>
                         <td>
                            </td>
                         <td>
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
                    <h2>Work Details</h2>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        
                        <table class="table">
                            <tr>
                               
                                
                                <th>Profile</th>
                                <td></td>
                                    <td>       </td>
                                    <td>       </td>
                                    <td>        </td>
                                <td>
                                    
                                
                                    
                                
                                    <asp:DropDownList ID="profile" runat="server" CssClass="form-control">
                                        <asp:ListItem Value="uk">Select</asp:ListItem>
                                        <asp:ListItem Value="qt">Quality Analyser</asp:ListItem>
                                        <asp:ListItem Value="wd">Web Development</asp:ListItem>
                                        <asp:ListItem Value="pm">Project Manager</asp:ListItem>
                                        <asp:ListItem Value="db">DataBase Administrator</asp:ListItem>
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

    <div id="footer" class="footer navbar-fixed-relative">
            <footer>
                <marquee scrollamount="4" direction="left" behavior="scroll"><label>
© Copyright 2016 - Mind IT Systems | All rights reserved</label></marquee>
            </footer>
        </div>
</body>
</html>
