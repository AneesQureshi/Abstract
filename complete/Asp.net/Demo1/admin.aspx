<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="admin.aspx.cs" Inherits="Demo1.admin1" MasterPageFile="~/master.Master" %>


   <asp:Content ID="Content1" ContentPlaceHolderID="contenttitle" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="contenthead" runat="server">

     <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="STYLESHEET" href="css/bootstrap.min.css" />
        <script src="js/bootstrap.js"></script>

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="contentbody" runat="server">         




    
     <div>
                <article class="well well-sm">
                    <h1>Admin</h1>
                </article>
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
       
       
</asp:Content>