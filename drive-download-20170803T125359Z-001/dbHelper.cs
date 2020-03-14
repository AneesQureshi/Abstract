using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;
using System.Data;

namespace Demo1
{
    public class dbHelper
    {
        MySqlConnection con;
        MySqlCommand cmd;

        public User ValidateUser(string userId, string password)
        {
          //User validatedUser = new User();
           //dbConnection db = new dbConnection();
            try {
                
                con = db.OpenConnection();

                cmd = new MySqlCommand("sp_validate", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("pwd", password);
                cmd.Parameters.AddWithValue("uid", userId);
                MySqlDataReader sdr = cmd.ExecuteReader();

                if (sdr.Read())
                {
                    validatedUser.User_Id = sdr["user_id"].ToString();
                    validatedUser.role = sdr["role"].ToString();
                }
                sdr.Close();
            }
            catch (Exception ex) { string message = ex.Message; }
            finally {

                db.CloseConnection();
            }

            return validatedUser;
        }

    }
}