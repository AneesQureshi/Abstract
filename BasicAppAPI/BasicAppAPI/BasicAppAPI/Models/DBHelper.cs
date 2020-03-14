using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace BasicAppAPI.Models
{
    public class DBHelper
    {
        //open connection to database
        public bool OpenConnection(MySqlConnection sql_con)
        {
            ConnectionState state = sql_con.State;
            if (state == ConnectionState.Open)
            {
                return true;
            }
            else
            {
                sql_con.Open();
                return true;
            }

        }
        //Close connection
        public bool CloseConnection(MySqlConnection sql_con)
        {
            ConnectionState state = sql_con.State;
            if (state == ConnectionState.Closed)
            {
                return true;
            }
            else
            {
                sql_con.Close();
                return true;
            }
        }
    }
}