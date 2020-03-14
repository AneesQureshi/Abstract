using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;
using System.Configuration;
using System.Data;

namespace Demo1
{
    public class dbConnection
    {
        MySqlConnection con;
        public dbConnection()
        {
            string connectionString = ConfigurationManager.ConnectionStrings["localConnection"].ConnectionString;
            con = new MySqlConnection(connectionString);
        }

        public MySqlConnection OpenConnection()
        {
            if (con.State == ConnectionState.Closed)
            {
                con.Open();
            }
            return con;
        }

        public MySqlConnection CloseConnection()
        {
            if (con.State == ConnectionState.Open)
            {
                con.Close();
            }
            return con;
        }
    }
}