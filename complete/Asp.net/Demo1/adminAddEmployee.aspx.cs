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
    public partial class adminAddEmployee : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ValidationSettings.UnobtrusiveValidationMode = UnobtrusiveValidationMode.None;

            if (Session["user_id"] == null)
            {
                Response.Redirect("Login.aspx");
            }
        }

       
        protected void btn_addEmp_Click(object sender, EventArgs e)
        { 
       string connectionString = ConfigurationManager.ConnectionStrings["localConnection"].ConnectionString;
        MySqlConnection sqlcon = new MySqlConnection(connectionString);
        sqlcon.Open();
            try
            {
             
                int rowInserted = 0;
                MySqlCommand cmd = new MySqlCommand("sp_insertNewEmp", sqlcon);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("eid", empid.Text);
                cmd.Parameters.AddWithValue("ePass", empPass.Text);
                cmd.Parameters.AddWithValue("efname", empfname.Text);                
                cmd.Parameters.AddWithValue("elname", emplname.Text);

                var memberId = cmd.ExecuteScalar();
                if (memberId != null)
                {
                    rowInserted = int.Parse(memberId.ToString());
                }
               

                if (rowInserted > 0)
                {
                    Label1.Visible = true;
                    Label1.Text = "Records are Submitted Successfully";
                    Label1.ForeColor = System.Drawing.Color.Green;
                }
                else
                {
                    Label1.Visible = true;
                    Label1.Text = "Unable to insert record";
                    Label1.ForeColor = System.Drawing.Color.Red;
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            finally
            {
                if (sqlcon != null)
                {
                    sqlcon.Close();
                }
            }
        }
    }
}