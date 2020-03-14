using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmpDemowcf.App_Code
{
    public class Users
    {
        public string  UserId{ get; set; }
        public string Role { get; set; }

        public bool ValidateUser(string userId, string pwd)
        {
            bool validated = false;
            Users user = new Users();
            dbHelper db = new dbHelper();
            user = db.ValidateUser(userId, pwd);

            if (user.UserId != null)
            {
                validated = true;
            }
            return validated;
        }
        
    }

    public class WcfUserObject
    {
        public string userId { get; set; }
        public string password { get; set; }
    }
}