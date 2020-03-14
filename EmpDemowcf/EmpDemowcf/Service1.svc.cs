using EmpDemowcf.App_Code;
using System;
using System.Configuration;


namespace EmpDemowcf
{


    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class Service1 : IService1
    {
       
       
        public bool LogIn(string empid, string password) //---getting values from wcf1CheckUser
        {

            bool validatedUser = false;
            Users user = new Users();
            try
            {
                validatedUser = user.ValidateUser(empid, password);
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return validatedUser;
        }

        public WcfUserObject LogIn1(WcfUserObject user)
        {

            bool validatedUser = false;
            WcfUserObject returnobj = new WcfUserObject();
            Users user1 = new Users();
            try
            {
                validatedUser = user1.ValidateUser(user.userId,user.password);
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            if (validatedUser == true)
            {
                returnobj.userId = "1";
            }
            else
            {
                returnobj.userId = "0";
            }
            return returnobj;
        }

        
    }
}
