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
            ValidationSettings.UnobtrusiveValidationMode = UnobtrusiveValidationMode.None;
            String profileID = Request.QueryString["EmployeeID"];
            SP_View(profileID);


     
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
                }
                sdr.Close();

                int rowInserted = cmd.ExecuteNonQuery();

               
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

                cmd.Parameters.AddWithValue("memeberid", lbl_memberId.Text);
                cmd.Parameters.AddWithValue("spfname", fname.Text);
                cmd.Parameters.AddWithValue("splname", lname.Text);
                cmd.Parameters.AddWithValue("spemail", email.Text);
                cmd.Parameters.AddWithValue("spPassword1", Password1.Text);
                cmd.Parameters.AddWithValue("spdate", date.Text);
                cmd.Parameters.AddWithValue("spgend", gend.Text);
                cmd.Parameters.AddWithValue("spc_no", c_no.Text);
                cmd.Parameters.AddWithValue("spstreet", street.Text);
                cmd.Parameters.AddWithValue("spstate", state.Text);
                cmd.Parameters.AddWithValue("spcity", city.Text);
                cmd.Parameters.AddWithValue("spnation", nation.Text);
                cmd.Parameters.AddWithValue("sppincode", pincode.Text);
                cmd.Parameters.AddWithValue("spprofile", profile.Text);

                //cmd.Parameters.AddWithValue("spschnm10", schnm10.Text);
                //cmd.Parameters.AddWithValue("spboard10", board10.Text);
                //cmd.Parameters.AddWithValue("spPercent10", Percent10.Text);
                //cmd.Parameters.AddWithValue("spyear10", year10.Text);

                //cmd.Parameters.AddWithValue("spschnm12", schnm12.Text);
                //cmd.Parameters.AddWithValue("spboard12", board12.Text);
                //cmd.Parameters.AddWithValue("spPercent12", Percent12.Text);
                //cmd.Parameters.AddWithValue("spyear12", year12.Text);

                //cmd.Parameters.AddWithValue("spclgnmgrad", clgnmgrad.Text);
                //cmd.Parameters.AddWithValue("spboardgrad", boardgrad.Text);
                //cmd.Parameters.AddWithValue("spPercentgrad", Percentgrad.Text);
                //cmd.Parameters.AddWithValue("spyeargrad", yeargrad.Text);

                //cmd.Parameters.AddWithValue("spclgnmupgrad", clgnmupgrad.Text);
                //cmd.Parameters.AddWithValue("spboardupgrad", boardupgrad.Text);
                //cmd.Parameters.AddWithValue("spPercentupgrad", Percentupgrad.Text);
                //cmd.Parameters.AddWithValue("spyearupgrad", yearupgrad.Text);

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
                }
                else
                {
                    Label1.Visible = true;
                    Label1.Text = "Unable to insert record";
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