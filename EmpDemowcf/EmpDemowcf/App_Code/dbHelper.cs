using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;
using System.Data;

namespace EmpDemowcf.App_Code
{
    public class dbHelper
    {
        DbConnect db = new DbConnect();
        MySqlConnection con;
        MySqlCommand cmd;


        public Users ValidateUser(string userId, string pwd)
        {
            Users user = new Users();
            try
            {
                con = db.OpenConnection();
                cmd = new MySqlCommand("sp_validate", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("uid", userId);
                cmd.Parameters.AddWithValue("pwd", pwd);
                MySqlDataReader sdr = cmd.ExecuteReader();

                if (sdr.Read())
                {
                    user.UserId = sdr["user_id"].ToString();
                    user.Role = sdr["role"].ToString();
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            finally {
                db.CloseConnection();
            }
            return user;
        }

    }
}