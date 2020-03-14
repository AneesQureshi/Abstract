<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="admin.aspx.cs" Inherits="Demo1.admin1" %>

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
                    <h1>Admin</h1>
                </article>
            </div>




    
  </div>            
              
              
      <div class="table-responsive">
    
    
                <asp:GridView ID="GridView1" runat="server" CssClass="table table-hover table-striped" AutoGenerateColumns="false">
                    <Columns>

                        <asp:TemplateField  HeaderText="EmployeeID">
                            <ItemTemplate>
                                <asp:Label ID="lblID1" runat="server"
                                  Text='<%#Eval("user_id")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>

                         <asp:TemplateField  HeaderText="First Name">
                            <ItemTemplate>
                                <asp:Label ID="lblID2" runat="server"    
                                  Text='<%#Eval("first_name")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>

                        <asp:TemplateField  HeaderText="Last Name">
                            <ItemTemplate>
                                <asp:Label ID="lblID3" runat="server"
                                  Text='<%#Eval("last_name")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>

                         <asp:TemplateField HeaderText="Details">
            <ItemTemplate>
                <asp:HyperLink runat="server" NavigateUrl='<%# string.Format("~/addEmpDetails.aspx?EmployeeID={0}",HttpUtility.UrlEncode(Eval("user_id").ToString())) %>'
                    Text="View Details" />
            </ItemTemplate>
        </asp:TemplateField>
                    
                    </Columns>
                </asp:GridView>
                
</div>        
              
       
<div>
    <asp:LinkButton ID="addNewEmployeeLinkBtn" runat="server" cssClass="btn btn-info btn pull-right" PostBackUrl="~/adminAddEmployee.aspx" >Click here to add new employee</asp:LinkButton>
    
     </div>
       
    </form>    
    </div>
        
    
</body>
</html>