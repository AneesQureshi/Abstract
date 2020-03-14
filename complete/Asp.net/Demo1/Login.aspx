<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Demo1.Login1" MasterPageFile="~/master.Master" %>


<asp:Content ID="Content1" ContentPlaceHolderID="contenttitle" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="contenthead" runat="server">

     <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="STYLESHEET" href="css/bootstrap.min.css" />
        <script src="js/bootstrap.js"></script>
    <script type="text/javascript" src="javaScript%20and%20jquery/jquery-3.2.1.min.js"></script>

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="contentbody" runat="server">

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
       


</asp:Content>




    

       
