using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using MySql.Data.MySqlClient;
using System.Configuration;
using Demo1;

namespace Demo1
{
    public partial class addEmpDetails1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["user_id"] != null)
            {
                ValidationSettings.UnobtrusiveValidationMode = UnobtrusiveValidationMode.None;
                String profileID = Request.QueryString["EmployeeID"];
                // postback is second time load of page and !post is first time load of page.
                if (!IsPostBack)
                {
                    if (profileID != null)
                    {
                        // already filled details of employee will display by calling below function on page load.
                        SP_View(profileID);
                    }

                }
            }
            else
            {
                Response.Redirect("Login.aspx");
            }
           
        }

        protected void Logout(object sender, EventArgs e)
        {

            Session.RemoveAll();
            Response.Redirect("Login.aspx");

        }

        protected void SP_View(String strpid)
        {
            string memberId = string.Empty;
            String connectionString = ConfigurationManager.ConnectionStrings["localConnection"].ConnectionString;
            MySqlConnection sqlcon = new MySqlConnection(connectionString);
            sqlcon.Open();
            try
            {
               

                MySqlCommand cmd = new MySqlCommand("sp_viewEmployee", sqlcon);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("strpid", strpid);

                MySqlDataReader sdr = cmd.ExecuteReader();

                if (sdr.Read())
                {
                    lbl_memberId.Text = sdr["id"].ToString();
                    fname.Text = sdr["first_name"].ToString();
                    lname.Text = sdr["last_name"].ToString();
                    email.Text = sdr["email"].ToString();
                    date.Text = sdr["dob"].ToString();
                    gend.Text = sdr["gender"].ToString();
                    c_no.Text = sdr["contact_no"].ToString();
                    street.Text = sdr["street"].ToString();
                    nation.Text = sdr["nation"].ToString();
                    pincode.Text = sdr["pincode"].ToString();
                    state.Text = sdr["state"].ToString();
                    city.Text = sdr["city"].ToString();
                    profile.Text = sdr["profile"].ToString();

                }
                sdr.Close();

                MySqlCommand cmd1 = new MySqlCommand("sp_viewEmployeeDetails", sqlcon);
                cmd1.CommandType = CommandType.StoredProcedure;
                cmd1.Parameters.AddWithValue("uid", lbl_memberId.Text);
                cmd1.Parameters.AddWithValue("class", "10");

                MySqlDataReader sdr1 = cmd1.ExecuteReader();

                if (sdr1.Read())
                {

                    schnm10.Text = sdr1["school"].ToString();
                    board10.Text = sdr1["board"].ToString();
                    Percent10.Text = sdr1["percent"].ToString();
                    year10.Text = sdr1["passoutyear"].ToString();
                    

                }
                sdr1.Close();

                MySqlCommand cmd2 = new MySqlCommand("sp_viewEmployeeDetails", sqlcon);
                cmd2.CommandType = CommandType.StoredProcedure;
                cmd2.Parameters.AddWithValue("uid", lbl_memberId.Text);
                cmd2.Parameters.AddWithValue("class", "12");

                MySqlDataReader sdr2 = cmd2.ExecuteReader();

                if (sdr2.Read())
                {

                    schnm12.Text = sdr2["school"].ToString();
                    board12.Text = sdr2["board"].ToString();
                    Percent12.Text = sdr2["percent"].ToString();
                    year12.Text = sdr2["passoutyear"].ToString();


                }
                sdr2.Close();

                MySqlCommand cmd3 = new MySqlCommand("sp_viewEmployeeDetails", sqlcon);
                cmd3.CommandType = CommandType.StoredProcedure;
                cmd3.Parameters.AddWithValue("uid", lbl_memberId.Text);
                cmd3.Parameters.AddWithValue("class", "grad");

                MySqlDataReader sdr3 = cmd3.ExecuteReader();

                if (sdr3.Read())
                {

                    clgnmgrad.Text = sdr3["school"].ToString();
                    boardgrad.Text = sdr3["board"].ToString();
                    Percentgrad.Text = sdr3["percent"].ToString();
                    yeargrad.Text = sdr3["passoutyear"].ToString();


                }
                sdr3.Close();

                MySqlCommand cmd4 = new MySqlCommand("sp_viewEmployeeDetails", sqlcon);
                cmd4.CommandType = CommandType.StoredProcedure;
                cmd4.Parameters.AddWithValue("uid", lbl_memberId.Text);
                cmd4.Parameters.AddWithValue("class", "upgrad");

                MySqlDataReader sdr4 = cmd4.ExecuteReader();

                if (sdr4.Read())
                {

                    clgnmupgrad.Text = sdr4["school"].ToString();
                    boardupgrad.Text = sdr4["board"].ToString();
                    Percentupgrad.Text = sdr4["percent"].ToString();
                    yearupgrad.Text = sdr4["passoutyear"].ToString();


                }
                sdr4.Close();


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

        

        protected void SP_Insert(object sender, EventArgs e)
        {
            
            string connectionString = ConfigurationManager.ConnectionStrings["localConnection"].ConnectionString;
            MySqlConnection sqlcon = new MySqlConnection(connectionString);
            sqlcon.Open();
            String profileID = Request.QueryString["EmployeeID"];
            try
            {
                bool inserted = false;

                MySqlCommand cmd = new MySqlCommand("sp_insertMember", sqlcon);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("memeberid",lbl_memberId.Text);
                cmd.Parameters.AddWithValue("spfname", fname.Text);
                cmd.Parameters.AddWithValue("splname", lname.Text);
                cmd.Parameters.AddWithValue("spemail", email.Text);
               
                cmd.Parameters.AddWithValue("spdate", date.Text);
                cmd.Parameters.AddWithValue("spgend", gend.Text);
                cmd.Parameters.AddWithValue("spc_no", c_no.Text);
                cmd.Parameters.AddWithValue("spstreet", street.Text);
                cmd.Parameters.AddWithValue("spstate", state.Text);
                cmd.Parameters.AddWithValue("spcity", city.Text);
                cmd.Parameters.AddWithValue("spnation", nation.Text);
                cmd.Parameters.AddWithValue("sppincode", pincode.Text);
                cmd.Parameters.AddWithValue("spprofile", profile.Text);

                

                int rowInserted = cmd.ExecuteNonQuery();

                if (rowInserted > 0)
                {
                    inserted = true;
                }

                if (inserted)
                {
                    //insert education details

                    //makeanother stored procedure with 4 in parameters and call here 4 times with diff 4 values.


                    MySqlCommand cmd1 = new MySqlCommand("sp_insertEduDetails", sqlcon);
                    cmd1.CommandType = CommandType.StoredProcedure;

                    cmd1.Parameters.AddWithValue("uid", lbl_memberId.Text);
                    cmd1.Parameters.AddWithValue("eschool", schnm10.Text);
                    cmd1.Parameters.AddWithValue("eboard", board10.Text);
                    cmd1.Parameters.AddWithValue("epercent", Percent10.Text);
                    cmd1.Parameters.AddWithValue("epassoutyear", year10.Text);
                    cmd1.Parameters.AddWithValue("edu_class", "10");

                    cmd1.ExecuteNonQuery();

                    MySqlCommand cmd2 = new MySqlCommand("sp_insertEduDetails", sqlcon);
                    cmd2.CommandType = CommandType.StoredProcedure;

                    cmd2.Parameters.AddWithValue("uid", lbl_memberId.Text);
                    cmd2.Parameters.AddWithValue("eschool", schnm12.Text);
                    cmd2.Parameters.AddWithValue("eboard", board12.Text);
                    cmd2.Parameters.AddWithValue("epercent", Percent12.Text);
                    cmd2.Parameters.AddWithValue("epassoutyear", year12.Text);
                    cmd2.Parameters.AddWithValue("edu_class", "12");

                    cmd2.ExecuteNonQuery();

                    MySqlCommand cmd3 = new MySqlCommand("sp_insertEduDetails", sqlcon);
                    cmd3.CommandType = CommandType.StoredProcedure;

                    cmd3.Parameters.AddWithValue("uid", lbl_memberId.Text);
                    cmd3.Parameters.AddWithValue("eschool", clgnmgrad.Text);
                    cmd3.Parameters.AddWithValue("eboard", boardgrad.Text);
                    cmd3.Parameters.AddWithValue("epercent", Percentgrad.Text);
                    cmd3.Parameters.AddWithValue("epassoutyear", yeargrad.Text);
                    cmd3.Parameters.AddWithValue("edu_class", "grad");

                    cmd3.ExecuteNonQuery();
                    
                    MySqlCommand cmd4 = new MySqlCommand("sp_insertEduDetails", sqlcon);
                    cmd4.CommandType = CommandType.StoredProcedure;

                    cmd4.Parameters.AddWithValue("uid", lbl_memberId.Text);
                    cmd4.Parameters.AddWithValue("eschool", clgnmupgrad.Text);
                    cmd4.Parameters.AddWithValue("eboard", boardupgrad.Text);
                    cmd4.Parameters.AddWithValue("epercent", Percentupgrad.Text);
                    cmd4.Parameters.AddWithValue("epassoutyear", yearupgrad.Text);
                    cmd4.Parameters.AddWithValue("edu_class", "upgrad");

                    cmd4.ExecuteNonQuery();

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