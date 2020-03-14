using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using MySql.Data.MySqlClient;
using System.Configuration;


namespace Demo1
{
    public partial class Login1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ValidationSettings.UnobtrusiveValidationMode = UnobtrusiveValidationMode.None;
            
        }

        protected void btn_login_Click(object sender, EventArgs e)
        {
        //sers

            string uID;
            string role = string.Empty;
            string connectionString = ConfigurationManager.ConnectionStrings["localConnection"].ConnectionString;
            MySqlConnection con = new MySqlConnection(connectionString);
            con.Open();
            try
            {

                MySqlCommand cmd = new MySqlCommand("sp_validate", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("pwd", loginPass1.Text);
                cmd.Parameters.AddWithValue("uid", loginId.Text);
                MySqlDataReader sdr = cmd.ExecuteReader();

                if (sdr.Read())
                {
                    uID = sdr["user_id"].ToString();
                   role = sdr["role"].ToString();
                    Session["user_id"] = uID;
                    if (role == "admin")
                        Response.Redirect("admin.aspx");
                    else if (role == "emp")
                        Response.Redirect("addEmpDetails.aspx?EmployeeID="+uID,true);
                }
                else
                {

                    lb_InvalidIdPassword.Visible = true;
                    lb_InvalidIdPassword.Text = "Invalid User Name or Password! Please try again!";

                }

        }

            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            finally
            {
                if (con != null)
                {
                    con.Close();
                }
            }
        }
}
    }