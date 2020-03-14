    using System;
using System.Collections.Generic;
using System.Data;
using System.Configuration;
using MySql.Data.MySqlClient;
using LeaveRestfulService.Model;
using System.Linq;

namespace LeaveRestfulService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "LeaveRestful" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select LeaveRestful.svc or LeaveRestful.svc.cs at the Solution Explorer and start debugging.
    public class LeaveRestful : ILeaveRestful
    {

        string conn = ConfigurationManager.ConnectionStrings["mysqlcon"].ConnectionString;

        public string ActivateUser(string userid)
        {
            string msg = "";
            try
            {
                using (MySqlConnection mcon = new MySqlConnection(conn))
                {
                    mcon.Open();
                    using (MySqlCommand cmd = new MySqlCommand("ActivateUser", mcon))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("eid", userid);
                        MySqlDataReader dr = cmd.ExecuteReader();
                        if (dr.HasRows)
                        {
                            while (dr.Read())
                            {
                                string result = dr["status"].ToString();

                                if (result != null)
                                {
                                    msg = result;
                                }
                                else
                                {
                                    msg = "fail";
                                }

                            }
                        }
                        dr.Close();
                    }
                    mcon.Close();
                    return msg;
                }
            }
            catch (Exception ee)
            {
                return msg = ee.Message;
            }
        }

        public string DeactivateUser(string userid)
        {
            string msg = "";
            try
            {
                using (MySqlConnection mcon = new MySqlConnection(conn))
                {
                    mcon.Open();
                    using (MySqlCommand cmd = new MySqlCommand("DeactivateUser", mcon))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("eid", userid);
                        MySqlDataReader dr = cmd.ExecuteReader();
                        if (dr.HasRows)
                        {
                            while (dr.Read())
                            {
                                string result = dr["status"].ToString();

                                if (result != null)
                                {
                                    msg = result;
                                }
                                else
                                {
                                    msg = "fail";
                                }

                            }
                        }
                        dr.Close();
                    }
                    mcon.Close();
                    return msg;
                }
            }
            catch (Exception ee)
            {
                return msg = ee.Message;
            }
        }

        //Change Password
        public string changePassword(string userid, string old_password, string new_password)
        {
            string status = "";
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                try
                {
                    con.Open();
                    using (MySqlCommand cmd = new MySqlCommand("ChangePassword", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("empid", userid);
                        cmd.Parameters.AddWithValue("empoldpass", old_password);
                        cmd.Parameters.AddWithValue("empnewpass", new_password);
                        MySqlDataReader sdr = cmd.ExecuteReader();
                        if (sdr.Read())
                        {
                            status = sdr["STATUS"].ToString();
                            if (status != "")
                                status = "success";
                        }
                    }
                    con.Close();
                }
                catch (Exception ex)
                {

                }
            }
            return status;
        }

        //Fetch Available Balance
        public string fetchAvailableBalance(string userId, string leaveTypeId)
        {
            string balance = "";
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                try
                {
                    con.Open();
                    using (MySqlCommand cmd = new MySqlCommand("fetchAvailableBalance", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("userId", userId);
                        cmd.Parameters.AddWithValue("leaveTypeId", leaveTypeId);
                        MySqlDataReader sdr = cmd.ExecuteReader();
                        if (sdr.Read())
                        {
                            balance = sdr["balance"].ToString();
                        }
                    }
                    con.Close();
                }
                catch (Exception ex)
                {

                }
            }
            return balance;
        }

        //Fetch Leave Availibility dyring training/probation
        public string fetchLeaveAvailibility(string leaveTypeId)
        {
            string available = "";
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                try
                {
                    con.Open();
                    using (MySqlCommand cmd = new MySqlCommand("CheckLeaveAvailability", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("l_id", leaveTypeId);
                        MySqlDataReader sdr = cmd.ExecuteReader();
                        if (sdr.Read())
                        {
                            available = sdr["available"].ToString();
                        }
                    }
                    con.Close();
                }
                catch (Exception ex)
                {

                }
            }
            return available;
        }

        //approve Leave Request
        public string approveLeaveRequest(string userId, string lrId, string leaves_approved, string comment)
        {
            string id = "0";
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                try
                {
                    if (comment == "null")
                        comment = "";
                    con.Open();
                    using (MySqlCommand cmd = new MySqlCommand("approveLeaveRequest", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("userid", userId);
                        cmd.Parameters.AddWithValue("lrid", lrId);
                        cmd.Parameters.AddWithValue("leaves_approved", leaves_approved);
                        cmd.Parameters.AddWithValue("rev_comment", comment);
                        MySqlDataReader sdr = cmd.ExecuteReader();
                        if (sdr.Read())
                        {
                            id = sdr["ID"].ToString();
                            if (id != "0" && id!="")
                                id = "1";
                            else if (id == "0")
                                id = "-1";
                        }
                    }
                    con.Close();
                }
                catch (Exception ex)
                {

                }
            }
            return id;
        }

        //disapprove Leave Request
        public string disapproveLeaveRequest(string userId, string lrId, string comment, string leaves_approved, string leave_type_id)
        {
            string id = "0";
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                try
                {
                    if (comment == "null")
                        comment = "";
                    con.Open();
                    using (MySqlCommand cmd = new MySqlCommand("disapproveLeaveRequest", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("userid", userId);
                        cmd.Parameters.AddWithValue("lrid", lrId);
                        cmd.Parameters.AddWithValue("rev_comment", comment);
                        cmd.Parameters.AddWithValue("leaves_approved", leaves_approved);
                        cmd.Parameters.AddWithValue("leave_type_id", leave_type_id);
                        MySqlDataReader sdr = cmd.ExecuteReader();
                        if (sdr.Read())
                        {
                            id = sdr["ID"].ToString();
                            if (id != "0" && id != "")
                                id = "1";
                            else if (id == "0")
                                id = "-1";
                        }
                    }
                    con.Close();
                }
                catch (Exception ex)
                {

                }
            }
            return id;
        }

        //cancel Leave Request
        public string cancelLeaveRequest(string userId, string lrId, string leaves_approved, string comment, string leave_type_id)
        {
            string id = "0";
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                try
                {
                    if (comment == "null")
                        comment = "";
                    con.Open();
                    using (MySqlCommand cmd = new MySqlCommand("cancelLeaveRequest", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("userid", userId);
                        cmd.Parameters.AddWithValue("lrid", lrId);
                        cmd.Parameters.AddWithValue("leaves_approved", leaves_approved);
                        cmd.Parameters.AddWithValue("rev_comment", comment);
                        cmd.Parameters.AddWithValue("leave_type_id", leave_type_id);
                        MySqlDataReader sdr = cmd.ExecuteReader();
                        if (sdr.Read())
                        {
                            id = sdr["ID"].ToString();
                            if (id != "0" && id != "")
                                id = "1";
                            else if (id == "0")
                                id = "-1";
                        }
                    }
                    con.Close();
                }
                catch (Exception ex)
                {

                }
            }
            return id;
        }

        //Fetch manager
        public string fetchManager(string userId)
        {
            string managerId = "";
            string id = "";
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                try
                {
                    con.Open();
                    using (MySqlCommand cmd = new MySqlCommand("FetchManagerId", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        MySqlDataReader sdr = cmd.ExecuteReader();
                        if (sdr.Read())
                        {
                            managerId = sdr["manager"].ToString();
                            if (managerId == userId)
                            {
                                id = managerId;
                            }
                        }
                    }
                    con.Close();
                }
                catch (Exception ex)
                {

                }
            }
            return id;
        }

        //Confirm Member
        public string confirmMember(string id, string joinDate, string confirmDate, string lv_type_id)
        {
            //var dateTimeConfirm = confirmDate.ToString("yyyy-MM-dd");
            //var dateTimeJoin = joinDate.ToString("yyyy-MM-dd");
            string status = "";
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                try
                {
                    con.Open();
                    using (MySqlCommand cmd = new MySqlCommand("ConfirmMember", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("userId", id);
                        cmd.Parameters.AddWithValue("joiningDate", joinDate);
                        cmd.Parameters.AddWithValue("confirmDate", confirmDate);
                        cmd.Parameters.AddWithValue("lv_type_id", lv_type_id);
                        MySqlDataReader sdr = cmd.ExecuteReader();
                        if (sdr.Read())
                        {
                            status = sdr["emp_status_id"].ToString();
                            if (status == "3")
                            {
                                status = "0";
                            }
                        }
                    }
                    con.Close();
                }
                catch (Exception ex)
                {

                }
            }
            return status;
        }

        //Fetch User Name
        public string fetchUserName(string userid)
        {
            string username = "";
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                try
                {
                    con.Open();
                    using (MySqlCommand cmd = new MySqlCommand("FetchUserName", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("loginuserid", userid);
                        MySqlDataReader sdr = cmd.ExecuteReader();
                        if (sdr.Read())
                        {
                            username = sdr["fname"].ToString() + " " + sdr["lname"].ToString();
                        }
                    }
                    con.Close();
                }
                catch (Exception ex)
                {

                }
            }
            return username;
        }

        //Fetch User Role
        public string fetchUserRole(string userid)
        {
            string userrole = "";
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                try
                {
                    con.Open();
                    using (MySqlCommand cmd = new MySqlCommand("FetchUserRole", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("loginuserid", userid);
                        MySqlDataReader sdr = cmd.ExecuteReader();
                        if (sdr.Read())
                        {
                            userrole = sdr["EmployeeRole"].ToString();
                        }
                    }
                    con.Close();
                }
                catch (Exception ex)
                {

                }
            }
            return userrole;
        }

        //Fetch Role
        public string fetchRole(string role)
        {
            string userrole = "";
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                try
                {
                    con.Open();
                    using (MySqlCommand cmd = new MySqlCommand("FetchRole", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("userroleId", role);
                        MySqlDataReader sdr = cmd.ExecuteReader();
                        if (sdr.Read())
                        {
                            userrole = sdr["userRole"].ToString();
                        }
                    }
                    con.Close();
                }
                catch (Exception ex)
                {

                }
            }
            return userrole;
        }

        //Fetch Email
        public string fetchEmail(string id)
        {
            string email = "";
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                try
                {
                    con.Open();
                    using (MySqlCommand cmd = new MySqlCommand("FetchEmail", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("userId", id);
                        MySqlDataReader sdr = cmd.ExecuteReader();
                        if (sdr.Read())
                        {
                            email = sdr["email"].ToString();
                        }
                    }
                    con.Close();
                }
                catch (Exception ex)
                {

                }
            }
            return email;
        }

        //Login
        public string LogIn(string empid, string password)
        {
            string msg = "";
            try
            {
                using (MySqlConnection mcon = new MySqlConnection(conn))
                {
                    mcon.Open();
                    using (MySqlCommand cmd = new MySqlCommand("LimitedView", mcon))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("eid", empid);
                        MySqlDataReader dr = cmd.ExecuteReader();
                        if (dr.HasRows)
                        {
                            while (dr.Read())
                            {
                                string pass = dr["emp_password"].ToString();
                                string is_active = dr["active"].ToString();
                                if (pass != password)
                                {
                                    msg = "Password is incorrect";
                                }
                                else
                                {
                                    if (is_active != "0")
                                        msg = "success";
                                    else
                                        msg = "deactivated";
                                }

                            }
                        }
                        else
                            msg = "error";
                        dr.Close();
                    }
                    mcon.Close();
                    return msg;
                }
            }
            catch (Exception ee)
            {
                return msg = ee.Message;
            }
        }

        //insertLeaveTypeBalance
        public string insertLeaveTypeBalance(string leaveTypeId, string emp_Id)
        {
            string msg = "";
            try
            {
                using (MySqlConnection mcon = new MySqlConnection(conn))
                {
                    mcon.Open();
                    using (MySqlCommand cmd = new MySqlCommand("InsertAllLeavesPerUser", mcon))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("ltypeid", leaveTypeId);
                        cmd.Parameters.AddWithValue("empid", emp_Id);
                        int result = cmd.ExecuteNonQuery();
                        msg = result.ToString();
                    }
                    mcon.Close();
                    return msg;
                }
            }
            catch (Exception ee)
            {
                return msg = ee.Message;
            }
        }

        //insertSessionId
        public string insertSessionId(string empId, string sessionId)
        {
            string msg = "";
            try
            {
                using (MySqlConnection mcon = new MySqlConnection(conn))
                {
                    mcon.Open();
                    using (MySqlCommand cmd = new MySqlCommand("insert_session_id", mcon))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("eid", empId);
                        cmd.Parameters.AddWithValue("sid", sessionId);
                        int result = cmd.ExecuteNonQuery();
                        msg = result.ToString();
                    }
                    mcon.Close();
                    return msg;
                }
            }
            catch (Exception ee)
            {
                return msg = ee.Message;
            }
        }

        //validateSession
        public string validateSession(string empId,string sessionId)
        {
            string msg = "";
            try
            {
                using (MySqlConnection mcon = new MySqlConnection(conn))
                {
                    mcon.Open();
                    using (MySqlCommand cmd = new MySqlCommand("validateSessionId", mcon))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("eid", empId);
                        cmd.Parameters.AddWithValue("sid", sessionId);
                        MySqlDataReader dr = cmd.ExecuteReader();
                        if (dr.HasRows)
                        {
                            while (dr.Read())
                            {
                                msg = dr["STATUS"].ToString();

                            }
                        }

                        dr.Close();
                    }
                    mcon.Close();
                    return msg;
                }
            }
            catch (Exception ee)
            {
                return msg = ee.Message;
            }
        }

        //deleteSessionId
        public string deleteSessionId(string empId)
        {
            string msg = "";
            try
            {
                using (MySqlConnection mcon = new MySqlConnection(conn))
                {
                    mcon.Open();
                    using (MySqlCommand cmd = new MySqlCommand("delete_session_id", mcon))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("eid", empId);
                        int result = cmd.ExecuteNonQuery();
                        msg = result.ToString();
                    }
                    mcon.Close();
                    return msg;
                }
            }
            catch (Exception ee)
            {
                return msg = ee.Message;
            }
        }

        //fetchLeaveStatusInfo to send in mail
        public LeaveStatusInfo fetchLeaveStatusInfo(string userid, string leaveid)
        {
            LeaveStatusInfo leaveInfo = null;
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                try
                {
                    con.Open();
                    using (MySqlCommand cmd = new MySqlCommand("FetchLeaveStatusInfoByID", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add(new MySqlParameter("empid", userid));
                        cmd.Parameters.Add(new MySqlParameter("lrid", leaveid));
                        MySqlDataReader sdr = cmd.ExecuteReader();
                        if (sdr.Read())
                        {
                            leaveInfo = new LeaveStatusInfo();
                            leaveInfo.leave_type = sdr["leave_type"].ToString();
                            leaveInfo.leave_days = sdr["leave_days"].ToString();
                            leaveInfo.leave_start_date = sdr["start_date"].ToString();
                            leaveInfo.leave_end_date = sdr["end_date"].ToString();
                            leaveInfo.leave_status = sdr["leave_status"].ToString();
                        }
                    }
                    con.Close();
                }
                catch (Exception ex)
                {

                }
            }
            return leaveInfo;
        }

        //GetUserProfileDetails after successfull login
        public UserProfile GetUserProfileDetails(string userid)
        {
            UserProfile profile = null;
            reporting_members memberReport = null;
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                try
                {
                    con.Open();
                    using (MySqlCommand cmd = new MySqlCommand("GetUserProfileInfo", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add(new MySqlParameter("empId", userid));
                        MySqlDataReader sdr = cmd.ExecuteReader();
                        if (sdr.Read())
                        {
                            profile = new UserProfile();
                            profile.id = sdr["ID"].ToString();
                            profile.name = sdr["NAME"].ToString();
                            profile.email = sdr["EMAIL"].ToString();
                            profile.role = sdr["ROLE"].ToString();
                            profile.profile_pic_path = sdr["PROFILE_PIC_PATH"].ToString();
                            profile.manager_id = sdr["MANAGER_ID"].ToString();
                            profile.status = sdr["EMP_STATUS"].ToString();
                        }
                    }
                    con.Close();
                    //call other stored procedure to bring reporting members
                    MySqlConnection con1 = new MySqlConnection(conn);
                    con1.Open();
                    List<reporting_members> report = new List<reporting_members>();
                    using (MySqlCommand cmd = new MySqlCommand("GetUsersbyAllotedRole", con1))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add(new MySqlParameter("Id", userid));
                        MySqlDataReader sdr = cmd.ExecuteReader();
                       
                        while (sdr.Read())
                        {
                            reporting_members rep_members = new reporting_members();
                            rep_members.id = sdr["ID"].ToString();
                            rep_members.rolename = sdr["NAME"].ToString();
                            report.Add(rep_members);
                        }
                    }
                    profile.reporting_members= report;
                    con1.Close();
                }
                catch (Exception ex)
                {

                }
            }   
                return profile;
        }
        
        //ChangeStatusToConfirmed
        public string changeStatusToConfirmed(string userid)
        {
            string status = "";
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                try
                {
                    con.Open();
                    using (MySqlCommand cmd = new MySqlCommand("ChangeStatusToConfirmed", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("userid", userid);
                        MySqlDataReader sdr = cmd.ExecuteReader();
                        if (sdr.Read())
                        {
                            status = sdr["emp_status_id"].ToString();
                        }
                    }
                    con.Close();
                }
                catch (Exception ex)
                {

                }
            }
            return status;
        }

        //Count Leave Type(get list pf leave type id's)
        public List<LeaveType> countLeaveType()
        {
            List<LeaveType> leaveType = new List<LeaveType>();
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                try
                {
                    con.Open();
                    using (MySqlCommand cmd = new MySqlCommand("count_leave_types", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        MySqlDataReader sdr = cmd.ExecuteReader();
                        while(sdr.Read())
                        {
                            LeaveType lt = new LeaveType();
                            lt.LtId = sdr["lt_id"].ToString();
                            leaveType.Add(lt);
                        }
                    }
                    con.Close();
                }
                catch (Exception ex)
                {

                }
            }
            return leaveType;
        }

        public string InsertNewLeaveType(LeaveTypeBL lt)
        {
            string msg = "";
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    con.Open();
                    // string msg = "";
                    using (MySqlCommand cmd = new MySqlCommand("InsertLeaveType", con))
                    {

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("ltId", lt.LtId);
                        cmd.Parameters.AddWithValue("ltName", lt.LtName);
                        cmd.Parameters.AddWithValue("ltShortCode", lt.ShortCode);
                        cmd.Parameters.AddWithValue("ltAccrurd", lt.MonthlyAccrued);
                        cmd.Parameters.AddWithValue("ltMaxRollover", lt.MaxRollover);
                        cmd.Parameters.AddWithValue("ltAvailable", lt.Available);
                        cmd.Parameters.AddWithValue("ltActive", lt.Active);
                        MySqlDataReader sdr = cmd.ExecuteReader();

                        while (sdr.Read())
                        {

                            // msg = sdr["CheckExists"].ToString();
                            msg = sdr["STATUS"].ToString();
                        }
                        con.Close();
                        // return msg;
                    }


                }
            }
            catch (Exception ex)
            {
                string errormsg = ex.Message;
            }
            return msg;
        }

        //FetchLeaveTypeGrid
        public DataSet FetchLeaveTypeGrid()
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("FetchLeaveTypeGrid", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //GetLeaveTypesList
        public DataSet GetLeaveTypesList()
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetLeaveTypesList", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //GetAllRole
        public DataSet GetAllRole()
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetAllRole", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset, "Roles");
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //GetUsersbyAllotedRole
        public DataSet GetUsersbyAllotedRole(string roleid)
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("justfortest", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", roleid);
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //GetUsersNotAllotedRole
        public DataSet GetAllUsersNotAllotedRole(string roleid)
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetAllUsersNotAllotedRole", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", roleid);
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //Get Txt Search All Users
        public DataSet GetTxtSearchAllUsers(string roleid, string txtSearch)
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetTxtSearchAllUsers", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", roleid);
                    cmd.Parameters.AddWithValue("@txtSearch", txtSearch);
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //Get Department
        public DataSet GetDepartment()
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetDepartment", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset, "dept_name");
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //Get GetUserRole
        public DataSet GetUserRole()
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetUserRole", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset, "Role");
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //Get GetManagers
        public DataSet GetManagers()
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetManagers", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset, "Managers");
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //Get Get Status
        public DataSet GetStatus()
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetStatus", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset, "Status");
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //Get Get Leave Types
        public DataSet GetLeaveTypes()
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetLeaveTypes", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //Get Get Rh Dates
        public DataSet GetRhDates()
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetRhDates", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //Get Member List
        public DataSet GetMemberList(string mgr)
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetMemberList", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("manager", mgr);
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //Get Grid Leave Requests
        public DataSet GetGridLeaveRequests(string userid, string isManager)
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetGridLeaveRequests", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("userId", userid);
                    cmd.Parameters.AddWithValue("Ismanager", isManager);
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //Get Search Grid LeaveRequests Data if User
        public DataSet newleaverequestgridsearch(LeaveSearch search)
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("newleaverequestgridsearch", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("userId", search.userid);
                    cmd.Parameters.AddWithValue("empnm", search.name);
                    cmd.Parameters.AddWithValue("empmail", search.email);
                    cmd.Parameters.AddWithValue("emp_type", search.type);
                    cmd.Parameters.AddWithValue("emp_status", search.status);
                    cmd.Parameters.AddWithValue("manager_id", search.manager);
                    if (search.fromdate != "")
                    {
                        DateTime dtime1 = Convert.ToDateTime(search.fromdate);
                        string frmdate = dtime1.ToString("yyyy-MM-dd HH:mm:ss");
                        cmd.Parameters.AddWithValue("leave_from", frmdate);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("leave_from", search.fromdate);
                    }
                    if (search.todate != "")
                    {
                        DateTime dtime2 = Convert.ToDateTime(search.todate);
                        string todt = dtime2.ToString("yyyy-MM-dd HH:mm:ss");
                        cmd.Parameters.AddWithValue("leave_end", todt);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("leave_end", search.todate);
                    }
                    cmd.Parameters.AddWithValue("l_year", search.year);
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //Get Search Grid LeaveRequests Data if Manager
        public DataSet newsearchLeaveIfManager(LeaveSearch search)
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("newsearchLeaveIfManager", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("userId", search.userid);
                    cmd.Parameters.AddWithValue("empnm", search.name);
                    cmd.Parameters.AddWithValue("empmail", search.email);
                    cmd.Parameters.AddWithValue("emp_type", search.type);
                    cmd.Parameters.AddWithValue("emp_status", search.status);
                    cmd.Parameters.AddWithValue("manager_id", search.manager);
                    if (search.fromdate != "")
                    {
                        DateTime dtime1 = Convert.ToDateTime(search.fromdate);
                        string frmdate = dtime1.ToString("yyyy-MM-dd HH:mm:ss");
                        cmd.Parameters.AddWithValue("leave_from", frmdate);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("leave_from", search.fromdate);
                    }
                    if (search.todate != "")
                    {
                        DateTime dtime2 = Convert.ToDateTime(search.todate);
                        string todt = dtime2.ToString("yyyy-MM-dd HH:mm:ss");
                        cmd.Parameters.AddWithValue("leave_end", todt);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("leave_end", search.todate);
                    }
                    cmd.Parameters.AddWithValue("l_year", search.year);
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //Get Search Grid LeaveRequests Data if Admin
        public DataSet newsearchLeaveIfAdmin(LeaveSearch search)
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("newsearchLeaveIfAdmin", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("userId", search.userid);
                    cmd.Parameters.AddWithValue("empnm", search.name);
                    cmd.Parameters.AddWithValue("empmail", search.email);
                    cmd.Parameters.AddWithValue("emp_type", search.type);
                    cmd.Parameters.AddWithValue("emp_status", search.status);
                    cmd.Parameters.AddWithValue("manager_id", search.manager);
                    if (search.fromdate != "")
                    {
                        DateTime dtime1 = Convert.ToDateTime(search.fromdate);
                        string frmdate = dtime1.ToString("yyyy-MM-dd HH:mm:ss");
                        cmd.Parameters.AddWithValue("leave_from", frmdate);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("leave_from", search.fromdate);
                    }
                    if (search.todate != "")
                    {
                        DateTime dtime2 = Convert.ToDateTime(search.todate);
                        string todt = dtime2.ToString("yyyy-MM-dd HH:mm:ss");
                        cmd.Parameters.AddWithValue("leave_end", todt);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("leave_end", search.todate);
                    }
                    cmd.Parameters.AddWithValue("l_year", search.year);
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //Get Grid Attendance Report
        public DataSet GetGridAttendanceReport(string member, string fromdate, string todate)
        {
            if (member == "null")
                member = "";
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("test_proc_attendance", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("empnm", member);
                    cmd.Parameters.AddWithValue("fromdate", fromdate);
                    cmd.Parameters.AddWithValue("todate", todate);
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //Get Grid Attendance Report If User
        public DataSet GetGridAttendanceReportIfUser(string userid,string member, string fromdate, string todate)
        {
            if (member == "null")
                member = "";
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("notamembersearchAttendanceReport", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("userId", userid);
                    cmd.Parameters.AddWithValue("empnm", member);
                    cmd.Parameters.AddWithValue("fromdate", fromdate);
                    cmd.Parameters.AddWithValue("todate", todate);
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //InsertLeaveRequest
        public string InsertLeaveRequest(LeaveRequestBL lr)
        {
            string msg = "";

            string StartDateFrom = "";
            string EndDateTo = "";
            //if (lr.Leave_Dates != "")
            //{
            //string[] date = (lr.Leave_Dates).Split('-');
                string fromdate = lr.Leave_Start_Date;
                string todate = lr.Leave_End_Date;
                DateTime startDate = Convert.ToDateTime(fromdate);
                StartDateFrom = startDate.ToString("yyyy-MM-dd");
                DateTime endDate = Convert.ToDateTime(todate);
                EndDateTo = endDate.ToString("yyyy-MM-dd");
            //}

            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    con.Open();
                    // string msg = "";
                    using (MySqlCommand cmd = new MySqlCommand("InsertLeaveRequest", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("emp_id", lr.Emp_LeaveRequest_Id);
                        cmd.Parameters.AddWithValue("manager_id", lr.Reviewer_Id);
                        cmd.Parameters.AddWithValue("leave_type_id", lr.Leave_Type_Master_Id);
                        DateTime leaveFromDatetime = Convert.ToDateTime(StartDateFrom);

                        cmd.Parameters.AddWithValue("leave_start_date", StartDateFrom);
                        DateTime leaveToDatetime = Convert.ToDateTime(EndDateTo);
                        cmd.Parameters.AddWithValue("leave_end_date", EndDateTo);
                        cmd.Parameters.AddWithValue("leave_reason", lr.Leave_Reason);
                        cmd.Parameters.AddWithValue("leave_days", lr.Leave_Days);
                        MySqlDataReader sdr = cmd.ExecuteReader();

                        while (sdr.Read())
                        {

                            // msg = sdr["CheckExists"].ToString();
                            msg = sdr["LId"].ToString();
                        }
                        con.Close();
                        // return msg;
                    }


                }
            }
            catch (Exception ex)
            {
                string errormsg = ex.Message;
            }
            return msg;
        }

        public string RegisterEmp(EmpDetailBL empd)
        {
            string msg = "";
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    con.Open();
                    // string msg = "";
                    using (MySqlCommand cmd = new MySqlCommand("register", con))
                    {


                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("employeeID", empd.emp_Id);
                        cmd.Parameters.AddWithValue("empfname", empd.emp_Firstname);
                        cmd.Parameters.AddWithValue("emplname", empd.emp_Lastname);
                        cmd.Parameters.AddWithValue("emppass", empd.emp_Password);
                        cmd.Parameters.AddWithValue("emprole", empd.emp_Role);
                        cmd.Parameters.AddWithValue("emppriphone", empd.emp_PrimaryContact);
                        cmd.Parameters.AddWithValue("empsecphone", empd.emp_SecondaryContact);
                        DateTime joiningDatetime = Convert.ToDateTime(empd.emp_JoiningDate);
                        cmd.Parameters.AddWithValue("empdoj", joiningDatetime);
                        DateTime confirmDatetime = Convert.ToDateTime(empd.emp_ConfirmationDate);
                        cmd.Parameters.AddWithValue("empdoc", confirmDatetime);
                        if (empd.emp_LeavingDate != "")
                        {
                            DateTime leavingDatetime = Convert.ToDateTime(empd.emp_LeavingDate);
                            cmd.Parameters.AddWithValue("empdol", leavingDatetime);
                        }
                        else
                        {
                            cmd.Parameters.AddWithValue("empdol", null);
                        }
                        cmd.Parameters.AddWithValue("empworkmail", empd.emp_WorkEmail);
                        cmd.Parameters.AddWithValue("emppersonalmail", empd.emp_PersonalEmail);
                        cmd.Parameters.AddWithValue("emppos", empd.emp_Position);
                        cmd.Parameters.AddWithValue("empdept", empd.Emp_Department);
                        cmd.Parameters.AddWithValue("empbloodgrp", empd.Emp_BloodGroup);
                        cmd.Parameters.AddWithValue("emplocaladd", empd.emp_LocalAddress);
                        cmd.Parameters.AddWithValue("emplocalcontact", empd.emp_LocalEmergencyContact);
                        cmd.Parameters.AddWithValue("emplocalrelation", empd.emp_LocalEmergencyRelation);
                        cmd.Parameters.AddWithValue("empperadd", empd.emp_PermanentAddress);
                        cmd.Parameters.AddWithValue("emppercontact", empd.emp_PermanentEmergencyContact);
                        cmd.Parameters.AddWithValue("empperrelation", empd.emp_PermanentEmergencyRelation);
                        cmd.Parameters.AddWithValue("empperm", "Allow");
                        cmd.Parameters.AddWithValue("empStatus", empd.emp_Status);
                        cmd.Parameters.AddWithValue("empYearsOfExp", empd.emp_Years_of_exp);
                        cmd.Parameters.AddWithValue("empManager", empd.emp_Manager);
                        DateTime dobDatetime = Convert.ToDateTime(empd.emp_Dob);
                        cmd.Parameters.AddWithValue("empdob", dobDatetime);
                        cmd.Parameters.AddWithValue("empmid", empd.emp_MId);
                        MySqlDataReader sdr = cmd.ExecuteReader();

                        while (sdr.Read())
                        {

                            // msg = sdr["CheckExists"].ToString();
                            msg = sdr["EId"].ToString();
                        }
                        con.Close();
                        // return msg;
                    }


                }
            }
            catch (Exception ex)
            {
                string errormsg = ex.Message;
                msg = errormsg;
            }
            return msg;
        }

        //GetConfirmedEmployees list
        public List<EmpDetailBL> GetConfirmedEmployees()
        {
            List<EmpDetailBL> empList = new List<EmpDetailBL>();
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                con.Open();
                using (MySqlCommand cmd = new MySqlCommand("GetConfirmedEmployeesList", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataReader sdr = cmd.ExecuteReader();
                    EmpDetailBL ebl = null;
                    while(sdr.Read())
                    {
                        ebl = new EmpDetailBL();
                        ebl.emp_Id = sdr["e_id"].ToString();
                        empList.Add(ebl);
                    }
                    con.Close();
                    return empList;
                }

            }
        }

        //GetProfile
        public EmpDetailBL GetProfile(string empid)
        {
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                con.Open();
                using (MySqlCommand cmd = new MySqlCommand("GetEmployeeByID", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new MySqlParameter("empid", empid));
                    MySqlDataReader sdr = cmd.ExecuteReader();
                    EmpDetailBL ebl = null;
                    if (sdr.Read())
                    {
                        ebl = new EmpDetailBL();
                        ebl.emp_Firstname = sdr["E_Name"].ToString();
                        ebl.Emp_Department = sdr["Department"].ToString();
                        ebl.emp_Position = sdr["E_Position"].ToString();
                        ebl.emp_WorkEmail = sdr["Email"].ToString();
                        ebl.emp_LocalAddress = sdr["E_Address"].ToString();
                        ebl.emp_PrimaryContact = sdr["E_Contact"].ToString();

                    }
                    con.Close();
                    return ebl;
                }

            }
        }

        public string UpdateProfile(EmpDetailBL empd)
        {
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                con.Open();
                string msg;
                using (MySqlCommand cmd = new MySqlCommand("UpdateEmpDetail", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("empid", empd.emp_Id);
                    cmd.Parameters.AddWithValue("empnm", empd.emp_Firstname);
                    cmd.Parameters.AddWithValue("empadd", empd.emp_LocalAddress);
                    cmd.Parameters.AddWithValue("empdept", empd.Emp_Department);
                    cmd.Parameters.AddWithValue("emppos", empd.emp_Position);
                    cmd.Parameters.AddWithValue("empmail", empd.emp_WorkEmail);
                    cmd.Parameters.AddWithValue("empcon", empd.emp_PrimaryContact);
                    int x = cmd.ExecuteNonQuery();
                    if (x == 1)
                    {
                        msg = "Successfully udpated";
                    }
                    else
                        msg = "Unable to update";
                }
                con.Close();
                return msg;
            }
        }

        //public string InsertLeaveInAttendance(LeaveRequestBL lrb)
        //{
        //    DateTime frmdt = Convert.ToDateTime(lrb.FromDate);
        //    DateTime tdate = Convert.ToDateTime(lrb.ToDate);
        //    using (MySqlConnection con = new MySqlConnection(conn))
        //    {

        //        int x = 0;
        //        string msg;
        //        while (frmdt <= tdate)
        //        {
        //            con.Open();
        //            MySqlCommand cmd = new MySqlCommand("UpdateLongLeave", con);
        //            cmd.CommandType = CommandType.StoredProcedure;
        //            cmd.Parameters.AddWithValue("empid", lrb.Emp_Id);
        //            cmd.Parameters.AddWithValue("frmdate", frmdt);
        //            x = cmd.ExecuteNonQuery();
        //            frmdt = frmdt.AddDays(1);
        //            con.Close();
        //        }

        //        if (x == 1)
        //        {
        //            msg = "Leave updated";
        //        }
        //        else
        //            msg = "unable to process your request";
        //        return msg;
        //    }
        //}

        //public string ChangePassword(string empid, string oldpass, string newpass)
        //{
        //    using (MySqlConnection con = new MySqlConnection(conn))
        //    {
        //        con.Open();
        //        string msg;
        //        using (MySqlCommand cmd = new MySqlCommand("ChangePassword", con))
        //        {
        //            cmd.CommandType = CommandType.StoredProcedure;
        //            cmd.Connection = con;
        //            cmd.Parameters.AddWithValue("empid", empid);
        //            cmd.Parameters.AddWithValue("empoldpass", oldpass);
        //            cmd.Parameters.AddWithValue("empnewpass", newpass);
        //            int x = cmd.ExecuteNonQuery();
        //            if (x == 0)
        //            {
        //                msg = "Old password not matching";
        //            }
        //            else
        //            {
        //                msg = "Password Saved.";
        //            }

        //            con.Close();
        //            return msg;
        //        }
        //    }
        //}

        public EmpDetailBL Resetpass(string empid, string pass)
        {
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                con.Open();

                using (MySqlCommand cmd = new MySqlCommand("changeotp", con))
                {

                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("empid", empid);
                    cmd.Parameters.AddWithValue("emppass", pass);
                    MySqlDataReader sdr = cmd.ExecuteReader();
                    EmpDetailBL ebl1 = null;
                    if (sdr.Read())
                    {
                        ebl1 = new EmpDetailBL();
                        ebl1.emp_Firstname = sdr["emp_fname"].ToString();
                        ebl1.emp_WorkEmail = sdr["emp_work_email"].ToString();

                    }
                    con.Close();
                    return ebl1;
                }

            }
        }

        //EmpLeave
        public DataSet EmpLeave(EmpDetailBL empbl)
        {
            DataSet ds = null;
            using (MySqlConnection myconn = new MySqlConnection(conn))
            {
                using (MySqlCommand cmd = new MySqlCommand("EmpLeave", myconn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new MySqlParameter("empid", empbl.emp_Id));
                    cmd.Parameters.Add(new MySqlParameter("empnm", empbl.emp_Firstname));
                    cmd.Parameters.Add(new MySqlParameter("emppos", empbl.emp_Position));
                    cmd.Parameters.Add(new MySqlParameter("empdept", empbl.Emp_Department));
                    cmd.Parameters.Add(new MySqlParameter("Frm_SP", empbl.frmdt));
                    cmd.Parameters.Add(new MySqlParameter("todt_SP", empbl.todt));
                    MySqlDataAdapter sda = new MySqlDataAdapter(cmd);
                    MySqlCommandBuilder mcb = new MySqlCommandBuilder(sda);
                    ds = new DataSet();
                    sda.Fill(ds);

                }
            }
            return ds;
        }

        //FetchLeaveTypeData
        public DataSet FetchLeaveTypeData(LeaveType lt)
        {
            DataSet ds = null;
            using (MySqlConnection myconn = new MySqlConnection(conn))
            {
                using (MySqlCommand cmd = new MySqlCommand("newleavetypesearch", myconn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("lv_type", lt.LtName);
                    cmd.Parameters.AddWithValue("short_code", lt.ShortCode);
                    cmd.Parameters.AddWithValue("available", lt.Available);
                    MySqlDataAdapter sda = new MySqlDataAdapter(cmd);
                    MySqlCommandBuilder mcb = new MySqlCommandBuilder(sda);
                    ds = new DataSet();
                    sda.Fill(ds);

                }
            }
            return ds;
        }

        //FetchEmpInfo
        public EmpDetailBL FetchEmpInfo(EmpDetailBL ebl)
        {
            try
            {
                MySqlConnection myconn = new MySqlConnection(conn);
                MySqlCommand cmd;
                myconn.Open();
                cmd = new MySqlCommand("GetEmployeeByID", myconn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new MySqlParameter("empid", ebl.emp_Id));
                MySqlDataReader sdr = cmd.ExecuteReader();
                EmpDetailBL ebl1 = null;
                if (sdr.Read())
                {
                    ebl1 = new EmpDetailBL();
                    ebl1.emp_Firstname = sdr["emp_fname"].ToString();
                    ebl1.emp_Lastname = sdr["emp_lname"].ToString();
                    ebl1.emp_WorkEmail = sdr["emp_work_email"].ToString();
                    ebl1.emp_PersonalEmail = sdr["emp_personal_email"].ToString();
                    ebl1.emp_Position = sdr["emp_position"].ToString();
                    ebl1.emp_PrimaryContact = sdr["emp_primary_contact"].ToString();
                    ebl1.emp_SecondaryContact = sdr["emp_secondary_contact"].ToString();
                    ebl1.emp_JoiningDate = sdr["emp_joining_date"].ToString();
                    ebl1.emp_LeavingDate = sdr["emp_leaving_date"].ToString();
                    ebl1.Emp_Department = sdr["dept_id"].ToString();
                    ebl1.emp_Role = sdr["emp_role"].ToString();
                    ebl1.emp_LocalEmergencyContact = sdr["local_contact"].ToString();
                    ebl1.emp_LocalEmergencyRelation = sdr["local_Relationship"].ToString();
                    ebl1.emp_LocalAddress = sdr["local_Address"].ToString();
                    ebl1.emp_PermanentAddress = sdr["permanent_Address"].ToString();
                    ebl1.emp_PermanentEmergencyContact = sdr["Permanent_Contact"].ToString();
                    ebl1.emp_PermanentEmergencyRelation = sdr["Permanent_Relationship"].ToString();
                    ebl1.emp_Id = ebl.emp_Id;
                    ebl1.Emp_BloodGroup = sdr["emp_blood_group"].ToString();
                    ebl1.emp_Status= sdr["emp_status"].ToString();
                    ebl1.emp_Manager = sdr["emp_manager"].ToString();
                    ebl1.emp_Years_of_exp = sdr["emp_years_of_exp"].ToString();
                    ebl1.emp_ConfirmationDate = sdr["emp_confirmation_date"].ToString();
                    ebl1.emp_Dob = sdr["emp_dob"].ToString();
                    ebl1.emp_MId= sdr["emp_mid"].ToString();
                }
                myconn.Close();
                return ebl1;
            }
            catch (Exception ex)
            {
                string errmsg = ex.Message;
            }
            return null;
        }

        //FetchLeaveRequestInfo
        public LeaveRequestBL FetchLeaveRequestInfo(LeaveRequestBL lbr)
        {
            try
            {
                MySqlConnection myconn = new MySqlConnection(conn);
                MySqlCommand cmd;
                myconn.Open();
                cmd = new MySqlCommand("GetLeaveRequestDetailByID", myconn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new MySqlParameter("empid", lbr.Emp_Id));
                cmd.Parameters.Add(new MySqlParameter("lrid", lbr.Id));
                MySqlDataReader sdr = cmd.ExecuteReader();
                LeaveRequestBL ebl1 = null;
                if (sdr.Read())
                {
                    ebl1 = new LeaveRequestBL();
                   // ebl1.Leave_Dates = sdr["leave_dates"].ToString();
                    ebl1.Reviewer_Id = sdr["manager"].ToString();
                    ebl1.Leave_Type_Master_Id = sdr["leave_type"].ToString();
                    ebl1.Leave_Start_Date = sdr["start_date"].ToString();
                    ebl1.Leave_End_Date = sdr["end_date"].ToString();
                    ebl1.Leave_Days = sdr["leave_days"].ToString();
                    ebl1.Leave_Reason= sdr["Reason"].ToString();
                    ebl1.Emp_Id = lbr.Emp_Id;
                }
                myconn.Close();
                return ebl1;
            }
            catch (Exception ex)
            {
                string errmsg = ex.Message;
            }
            return null;
        }

        //FetchLeaveRequestStatusInfo
        public LeaveStatus FetchLeaveRequestStatusInfo(string leaveId)
        {
            try
            {
                MySqlConnection myconn = new MySqlConnection(conn);
                MySqlCommand cmd;
                myconn.Open();
                cmd = new MySqlCommand("GetLeaveStatusInfo", myconn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("leaveId", leaveId);
                MySqlDataReader sdr = cmd.ExecuteReader();
                LeaveStatus status = null;
                if (sdr.Read())
                {
                    status = new LeaveStatus();
                    status.Status = sdr["Status"].ToString();
                    status.Date = sdr["Date"].ToString();
                    status.By = sdr["Reviewer"].ToString();
                    status.Comments = sdr["Comments"].ToString();
                }
                myconn.Close();
                return status;
            }
            catch (Exception ex)
            {
                string errmsg = ex.Message;
            }
            return null;
        }

        //getLeaveTypesById
        public LeaveType getLeaveTypesById(string id)
        {
            try
            {
                MySqlConnection myconn = new MySqlConnection(conn);
                MySqlCommand cmd;
                myconn.Open();
                cmd = new MySqlCommand("getLeaveTypesById", myconn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("lt_id", id);
                MySqlDataReader sdr = cmd.ExecuteReader();
                LeaveType lt = null;
                if (sdr.Read())
                {
                    lt = new LeaveType();
                    lt.LtId = sdr["lt_id"].ToString();
                    lt.LtName = sdr["TYPE"].ToString();
                    lt.ShortCode = sdr["ShortCode"].ToString();
                    lt.MonthlyAccrued = sdr["MonthlyAccrued"].ToString();
                    lt.MaxRollover = sdr["YearlyRollover"].ToString();
                    lt.Available = sdr["Available_in_training"].ToString();
                    lt.Active = sdr["lt_active"].ToString();
                }
                myconn.Close();
                return lt;
            }
            catch (Exception ex)
            {
                string errmsg = ex.Message;
            }
            return null;
        }

        //SearchEmployee
        public DataSet SearchEmployee(EmpDetailBL empbl)
        {
            string joiningDateFrom = "";
            string joiningDateTo = "";
            if (empbl.emp_JoiningDate != "")
            {
                string[] date = (empbl.emp_JoiningDate).Split('-');
                string fromdate = date[0];
                string todate = date[1];
                DateTime joinfrom = Convert.ToDateTime(fromdate);
                joiningDateFrom = joinfrom.ToString("yyyy-MM-dd");
                DateTime jointo = Convert.ToDateTime(todate);
                joiningDateTo = jointo.ToString("yyyy-MM-dd");
            }
            DataSet ds = null;
            string iId = "";
            if (empbl.emp_MId == "0")
            {
                iId = "";
            }
            else
            {
                iId = empbl.emp_MId;
            }
            using (MySqlConnection myconn = new MySqlConnection(conn))
            {
                using (MySqlCommand cmd = new MySqlCommand("newsearch", myconn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new MySqlParameter("empid", iId));
                    cmd.Parameters.Add(new MySqlParameter("empnm", empbl.emp_Firstname));
                    cmd.Parameters.Add(new MySqlParameter("emppos", empbl.emp_Position));
                    cmd.Parameters.Add(new MySqlParameter("empmail", empbl.emp_WorkEmail));
                    cmd.Parameters.Add(new MySqlParameter("empdept", empbl.Emp_Department));
                    cmd.Parameters.Add(new MySqlParameter("empstatus", empbl.emp_Status));
                    cmd.Parameters.Add(new MySqlParameter("empcon", empbl.emp_PrimaryContact));
                    cmd.Parameters.Add(new MySqlParameter("empjoinfrom", joiningDateFrom));
                    cmd.Parameters.Add(new MySqlParameter("empjointo", joiningDateTo));
                    cmd.Parameters.Add(new MySqlParameter("empmgr", empbl.emp_Manager));
                    MySqlDataAdapter sda = new MySqlDataAdapter(cmd);
                    MySqlCommandBuilder mcb = new MySqlCommandBuilder(sda);
                    ds = new DataSet();
                    sda.Fill(ds);

                }
            }
            return ds;
        }

        //public DataSet AdminSearchLeaveHistory(LeaveRequestBL lbr)
        //{
        //    MySqlConnection myconn = new MySqlConnection(conn);
        //    DataSet ds = null;
        //    MySqlCommand cmd;
        //    myconn.Open();
        //    cmd = new MySqlCommand("SearchLeave", myconn);
        //    cmd.CommandType = CommandType.StoredProcedure;
        //    cmd.Parameters.Add(new MySqlParameter("empid", lbr.Emp_Id));
        //    cmd.Parameters.Add(new MySqlParameter("fdate", lbr.FromDate));
        //    cmd.Parameters.Add(new MySqlParameter("tdate", lbr.ToDate));
        //    MySqlDataAdapter mda = new MySqlDataAdapter(cmd);
        //    MySqlCommandBuilder mcb = new MySqlCommandBuilder(mda);
        //    ds = new DataSet();
        //    mda.Fill(ds);
        //    myconn.Close();
        //    return ds;
        //}

        public string CountLeave(LeaveRequestBL lbr)
        {
            MySqlConnection myconn = new MySqlConnection(conn);
            MySqlCommand cmd;
            myconn.Open();
            cmd = new MySqlCommand("CountLeave", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("empid", lbr.Emp_Id);
            cmd.Parameters.AddWithValue("leavecount", MySqlDbType.Int32);
            cmd.Parameters["leavecount"].Direction = ParameterDirection.Output;
            string x = cmd.ExecuteScalar().ToString();
            myconn.Close();
            return x;
        }

        public string AttendanceIn(AttendanceBL abl)
        {
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                string msg = null;
                DateTime intime = DateTime.UtcNow;
                string inTime = intime.ToString("yyyy-MM-dd HH:mm:ss");
                abl.Intime = inTime;
                con.Open();
                using (MySqlCommand cmd = new MySqlCommand("StoreAttend", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Emp_Id1", abl.EmpId);
                    cmd.Parameters.AddWithValue("@InTime1", abl.Intime);
                    cmd.Parameters.AddWithValue("@OutTime1", "00:00:00");
                    cmd.Parameters.AddWithValue("@C_Date1", abl.Attend_Date);
                    int x = cmd.ExecuteNonQuery();
                    if (x == 1)
                    {
                        msg = "Saved";
                    }
                    else
                    {
                        msg = "Unable to save";
                    }
                }
                con.Close();
                return msg;
            }
        }

        public string AttendanceOut(AttendanceBL abl)
        {
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                string msg = null;
                DateTime outtime = DateTime.UtcNow;
                string outTime = outtime.ToString("yyyy-MM-dd HH:mm:ss");
                abl.Outtime = outTime;
                con.Open();
                using (MySqlCommand cmd = new MySqlCommand("UpdateOutTime", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Emp_Id1", abl.EmpId);
                    cmd.Parameters.AddWithValue("@OutTime1", abl.Outtime);
                    cmd.Parameters.AddWithValue("@C_Date1", abl.Attend_Date);
                    int x = cmd.ExecuteNonQuery();
                    if (x == 1)
                    {
                        msg = "Saved";
                    }
                    else
                    {
                        msg = "Unable to save";
                    }
                }
                con.Close();
                return msg;
            }
        }

        public string UpdateAttendance(AttendanceBL abl)
        {
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                string msg = null;
                con.Open();
                using (MySqlCommand cmd = new MySqlCommand("UpdateAttendanceByAdmin2", con))
                {
                    DateTime intime=Convert.ToDateTime(abl.Intime);
                    string inTime = intime.ToString("yyyy-MM-dd HH:mm:ss");
                    DateTime outtime = Convert.ToDateTime(abl.Outtime);
                    string outTime = outtime.ToString("yyyy-MM-dd HH:mm:ss");
                    DateTime checkintime = Convert.ToDateTime(abl.Attend_Date);
                    string checkinTime = checkintime.ToString("yyyy-MM-dd");
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Emp_Id", abl.EmpId);
                    cmd.Parameters.AddWithValue("@inTime", inTime);
                    cmd.Parameters.AddWithValue("@outTime", outTime);
                    cmd.Parameters.AddWithValue("@checkInDate", checkinTime);
                    int x = cmd.ExecuteNonQuery();
                    if (x == 1)
                    {
                        msg = "Saved";
                    }
                    else
                    {
                        msg = "Unable to save";
                    }
                }
                con.Close();
                return msg;
            }
        }

        public string CheckAttendance(string empid)
        {
            string msg = "";
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                   
                    con.Open();
                    using (MySqlCommand cmd = new MySqlCommand("LimitedAttendView", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("Emp_Id", empid);

                        MySqlDataReader dr = cmd.ExecuteReader();
                        if (dr.HasRows)
                        {
                            msg = "Already_In";
                            while (dr.Read())
                            {
                                string OutTime = dr["out_time"].ToString();
                                if (OutTime == "00:00:00")
                                {
                                    msg = "Already_In";
                                }
                                else if (OutTime != "00:00:00")
                                {
                                    msg = "Already_Out";
                                }
                                else
                                {
                                    msg = "Error";
                                }
                            }
                        }
                        else
                        {
                            msg = "Mark_attend";
                        }
                        dr.Close();
                        con.Close();
                    }
                }
            }
            catch (Exception ex)
            {

            }
                    return msg;
                }

        public string CheckStatus(string empid)
        {
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                con.Open();
                string msg = null;
                using (MySqlCommand cmd = new MySqlCommand("LimitedView", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Emp_Id1", empid);
                    MySqlDataReader dr = cmd.ExecuteReader();
                    if (dr.HasRows)
                    {
                        while (dr.Read())
                        {
                            msg = dr.GetString("Permitted");
                        }
                    }

                    dr.Close();
                    con.Close();
                    return msg;
                }
            }
        }

        public DataSet ShowAttendance(string empid, string frmdate, string todate)
        {
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                DataSet ds = null;
                con.Open();
                MySqlCommand cmd = new MySqlCommand("SearchAttedInBtDate", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Emp_Id1", empid);
                cmd.Parameters.AddWithValue("@C_Date1", frmdate);
                cmd.Parameters.AddWithValue("@C_Date2", todate);
                MySqlDataAdapter sda = new MySqlDataAdapter(cmd);
                MySqlCommandBuilder mcb = new MySqlCommandBuilder(sda);
                ds = new DataSet();
                sda.Fill(ds);
                con.Close();
                return ds;
            }

        }

        public string CheckDuty(string empid)
        {
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                con.Open();
                string msg = null;
                using (MySqlCommand cmd = new MySqlCommand("LimitedView", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Emp_Id1", empid);
                    MySqlDataReader dr = cmd.ExecuteReader();
                    if (dr.HasRows)
                    {
                        while (dr.Read())
                        {
                            msg = dr.GetString("Emp_Duty");
                        }
                    }

                    dr.Close();
                    con.Close();
                    return msg;
                }
            }
        }

        public DataSet DeleteLeaveRequest(EmpDetailBL emp)
        {

            DataSet ds = null;
            MySqlConnection myconn;
            MySqlCommand cmd;
            myconn = new MySqlConnection(conn);
            myconn.Open();
            cmd = new MySqlCommand("DeleteLeaveRequest", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("empid", emp.emp_Id));
            cmd.ExecuteNonQuery();
            myconn.Close();
            //MySqlConnection myconn1 = new MySqlConnection(conn);
            //MySqlCommand cmd1;
            myconn = new MySqlConnection(conn);
            myconn.Open();
            cmd = new MySqlCommand("LeaveRequestDetail", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            MySqlDataAdapter mda = new MySqlDataAdapter(cmd);
            MySqlCommandBuilder mcb = new MySqlCommandBuilder(mda);
            ds = new DataSet();
            mda.Fill(ds);
            myconn.Close();
            return ds;
        }

        public DataSet GetAllLeaveRequest()
        {
            MySqlConnection myconn = new MySqlConnection(conn);
            MySqlCommand cmd;
            DataSet ds = null;
            myconn.Open();
            cmd = new MySqlCommand("LeaveRequestDetail", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            MySqlDataAdapter mda = new MySqlDataAdapter(cmd);
            ds = new DataSet();
            mda.Fill(ds);
            myconn.Close();
            return ds;
        }

        public void UpdateLeaveRequest(LeaveRequestBL lbr)
        {
            MySqlConnection myconn = new MySqlConnection(conn);
            MySqlCommand cmd;
            myconn.Open();
            cmd = new MySqlCommand("ChangeLeaveStatus", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("empid", lbr.Emp_Id));
            //cmd.Parameters.Add(new MySqlParameter("lvstatus", lbr.lvstatus));
            //cmd.Parameters.Add(new MySqlParameter("frmdt", Convert.ToDateTime(lbr.FromDate).ToString("yyyy-MM-dd")));
            //cmd.Parameters.Add(new MySqlParameter("todt", Convert.ToDateTime(lbr.ToDate).ToString("yyyy-MM-dd")));
            cmd.ExecuteNonQuery();
            myconn.Close();
        }

        public void InsertHoliday(Holiday hol)
        {
            MySqlConnection myconn = new MySqlConnection(conn);
            myconn.Open();
            MySqlCommand cmd = new MySqlCommand("InsertHoliday", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@holidaydate", hol.Holiday_Date);
            cmd.Parameters.AddWithValue("@holidayreason", hol.Holiday_Reason);
            cmd.ExecuteNonQuery();
            myconn.Close();
        }

        public string GetHolidayStatus(Holiday hol)
        {
            MySqlConnection myconn = new MySqlConnection(conn);
            myconn.Open();
            MySqlCommand cmd = new MySqlCommand("GetHolidayStatus", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@holdate", hol.Holiday_Date);
            cmd.Parameters.AddWithValue("@count", MySqlDbType.Int32).Direction = ParameterDirection.Output;
            string count = cmd.ExecuteScalar().ToString();
            myconn.Close();
            return count;

        }

        //MarkHolidayInAttendance
        public void MarkHolidayInAttendance(string empid, string holidate)
        {
            MySqlConnection myconn = new MySqlConnection(conn);
            myconn.Open();
            MySqlCommand cmd = new MySqlCommand("MarkHoliday", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@empid", empid);
            cmd.Parameters.AddWithValue("@holdate", holidate);
            cmd.ExecuteNonQuery();
        }

        //UpdateAssignRole
        public void UpdateAssignRole(string roleId, string userId, string activeStatus)
        {
            MySqlConnection myconn = new MySqlConnection(conn);
            myconn.Open();
            MySqlCommand cmd = new MySqlCommand("UpdateAssignRole", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@RoleId", roleId);
            cmd.Parameters.AddWithValue("@UserId", userId);
            cmd.Parameters.AddWithValue("@RoleStatus", activeStatus);
            cmd.ExecuteNonQuery();
        }

        public List<Holiday> GetHolidayList()
        {
            MySqlConnection myconn = new MySqlConnection(conn);
            myconn.Open();
            MySqlCommand cmd = new MySqlCommand("GetHolidayOfCurrentMonth", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            MySqlDataReader sdr = cmd.ExecuteReader();
            List<Holiday> holi = new List<Holiday>();
            Holiday holiday = null;
            while (sdr.Read())
            {
                holiday = new Holiday();
                holiday.Holiday_Date = sdr["Holiday_Date"].ToString();
                holi.Add(holiday);
            }
            myconn.Close();
            return holi;
        }

        public string GetHolidayStatusInAttendance(string empid, string holidate)
        {
            MySqlConnection mycon = new MySqlConnection(conn);
            mycon.Open();
            MySqlCommand cmd = new MySqlCommand("GetHolidayStatusInAttendance", mycon);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@empid", empid).Direction = ParameterDirection.Input;
            cmd.Parameters.AddWithValue("@holdate", holidate).Direction = ParameterDirection.Input;
            cmd.Parameters.AddWithValue("@count", MySqlDbType.Int32).Direction = ParameterDirection.Output;
            string count = cmd.ExecuteScalar().ToString();
            mycon.Close();
            return count;

        }

        public List<EmpReport> EmployeeReport()
        {
            MySqlConnection myconn = new MySqlConnection(conn);
            myconn.Open();
            MySqlCommand cmd = new MySqlCommand("GetAllEmployee", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            MySqlDataReader reader = cmd.ExecuteReader();
            MySqlConnection mycon1 = new MySqlConnection(conn);
            mycon1.Open();
            MySqlConnection mycon2 = new MySqlConnection(conn);
            mycon2.Open();
            MySqlConnection mycon3 = new MySqlConnection(conn);
            mycon3.Open();
            List<EmpReport> report = new List<EmpReport>();
            EmpReport ereport = null;
            while (reader.Read())
            {
                ereport = new EmpReport();
                ereport.Emp_Id = reader.GetString("Emp_Id");
                ereport.Emp_Name = reader.GetString("E_Name");
                cmd = new MySqlCommand("CountPresence", mycon1);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@empid", ereport.Emp_Id);
                cmd.Parameters.AddWithValue("@presencecount", MySqlDbType.Int32).Direction = ParameterDirection.Output;
                ereport.No_Of_Working_Days = cmd.ExecuteScalar().ToString();
                cmd = new MySqlCommand("CountHoliday", mycon2);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@empid", ereport.Emp_Id);
                cmd.Parameters.AddWithValue("@countholiday", MySqlDbType.Int32).Direction = ParameterDirection.Output;
                ereport.No_Of_Holiday = cmd.ExecuteScalar().ToString();
                cmd = new MySqlCommand("CountLeave", mycon3);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@empid", ereport.Emp_Id);
                cmd.Parameters.AddWithValue("@leavecount", MySqlDbType.Int32).Direction = ParameterDirection.Output;
                ereport.No_Of_Leave = cmd.ExecuteScalar().ToString();
                report.Add(ereport);
            }
            reader.Close();
            myconn.Close();
            mycon1.Close();
            mycon2.Close();
            mycon3.Close();
            return report;
        }

        public string DeleteMarkedLeave(LeaveRequestBL lrb)
        {
            MySqlConnection myconn = new MySqlConnection(conn);
            myconn.Open();
            MySqlCommand cmd = new MySqlCommand("CancelLeave", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@empid", lrb.Emp_Id);
            //cmd.Parameters.AddWithValue("@fromdt", lrb.FromDate);
            //cmd.Parameters.AddWithValue("@todate", lrb.ToDate);
            string result = cmd.ExecuteNonQuery().ToString();
            myconn.Close();
            return result;

        }

        public void Insert_LeaveCategoryDetail(EmpDetailBL emp)
        {
            MySqlConnection myconn = new MySqlConnection(conn);
            myconn.Open();
            int months = 13 - (DateTime.Now.Month);
            string earned_leave = months.ToString();
            string casual_leave = (months / 2).ToString();
            emp.emp_JoiningDate = DateTime.Now.ToString();
            MySqlCommand cmd = new MySqlCommand("Insert_LeaveCategoryDetail", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@empid", emp.emp_Id);
            cmd.Parameters.AddWithValue("@updt", emp.emp_JoiningDate);
            cmd.Parameters.AddWithValue("@el", earned_leave);
            cmd.Parameters.AddWithValue("@cl", casual_leave);
            cmd.ExecuteNonQuery();
            myconn.Close();

        }

        public void Update_CLStatus(LeaveRequestBL lrb)
        {
            MySqlConnection myconn = new MySqlConnection(conn);
            myconn.Open();
            MySqlCommand cmd = new MySqlCommand("Update_CL_Status", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@empid", lrb.Emp_Id);
            cmd.ExecuteNonQuery();
            myconn.Close();

        }

        public void Update_ELStatus(LeaveRequestBL lrb)
        {
            MySqlConnection myconn = new MySqlConnection(conn);
            myconn.Open();
            MySqlCommand cmd = new MySqlCommand("Update_EL_Status", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@empid", lrb.Emp_Id);
            cmd.ExecuteNonQuery();
            myconn.Close();
        }

        public void Update_ULStatus(LeaveRequestBL lrb)
        {
            MySqlConnection myconn = new MySqlConnection(conn);
            myconn.Open();
            MySqlCommand cmd = new MySqlCommand("Update_UnpaidLeaveStatus", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@empid", lrb.Emp_Id);
            cmd.ExecuteNonQuery();
            myconn.Close();
        }

        public void Update_MonthlyLeaveCategoryStatus()
        {
            MySqlConnection myconn = new MySqlConnection(conn);
            myconn.Open();
            MySqlCommand cmd = new MySqlCommand("Update_MonthlyLeaveCategoryStatus", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.ExecuteNonQuery();
            myconn.Close();
        }

        public string Update_YearlyLeaveCategoryStatus()
        {
            string result = "";
            MySqlConnection myconn = new MySqlConnection(conn);
            myconn.Open();
            MySqlConnection myconn1 = new MySqlConnection(conn);
            myconn1.Open();
            MySqlCommand cmd = new MySqlCommand("Get_ELCounter_Status", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            MySqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                string empid = reader.GetString("Emp_Id");
                int counter = int.Parse(reader.GetString("EL_Counter"));
                int elCount = int.Parse(reader.GetString("Earned_Leave"));
                DateTime doj = Convert.ToDateTime(reader.GetString("E_Date"));
                DateTime today = DateTime.Today;

                if (counter >= 8)
                {
                    counter = 8;
                }
                elCount = elCount + counter;
                if (elCount > 20)
                {
                    elCount = 20;
                }
                MySqlCommand cmd1 = new MySqlCommand("Update_YearlyLeaveCategoryStatus", myconn1);
                cmd1.CommandType = CommandType.StoredProcedure;
                cmd1.Parameters.AddWithValue("@empid", empid);
                cmd1.Parameters.AddWithValue("@elcount", elCount);
                result = cmd1.ExecuteNonQuery().ToString();
            }
            myconn1.Close();
            myconn.Close();
            return result;
        }

        public List<LeaveCategoryBL> GetAllLeaveCategoryStatus(string empid)
        {
            MySqlConnection myconn = new MySqlConnection(conn);
            myconn.Open();
            MySqlCommand cmd = new MySqlCommand("GetAllLeaveCategoryStatus", myconn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@empid", empid);
            MySqlDataReader reader = cmd.ExecuteReader();
            List<LeaveCategoryBL> categorylist = new List<LeaveCategoryBL>();
            LeaveCategoryBL category = null;
            while (reader.Read())
            {
                category = new LeaveCategoryBL();
                category.ID = reader["ID"].ToString();
                category.Emp_Id = reader["Emp_Id"].ToString();
                category.Earned_Leave = reader["Earned_Leave"].ToString();
                category.Casual_Leave = reader["Casual_Leave"].ToString();
                category.Unpaid_Leave = reader["Unpaid_Leave"].ToString();
                category.Update_Date = reader["Update_Date"].ToString();
                categorylist.Add(category);
            }
            myconn.Close();
            return categorylist;
        }

        public string Get_Emp_ELCounter(string empid)
        {
            string counter = "";
            MySqlConnection con = new MySqlConnection(conn);
            con.Open();
            MySqlCommand cmd = new MySqlCommand("Get_Emp_ELCounter", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@empid", empid);
            MySqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                counter = reader.GetString("EL_Counter");
            }
            con.Close();
            return counter;
        }

        public string Get_Emp_CLCounter(string empid)
        {
            string counter = "";
            MySqlConnection con = new MySqlConnection(conn);
            con.Open();
            MySqlCommand cmd = new MySqlCommand("Get_Emp_CLCounter", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@empid", empid);
            MySqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                counter = reader.GetString("CL_Counter");
            }
            con.Close();
            return counter;
        }

        public AttendanceBL showlastinlastout(string empid)
        {
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                AttendanceBL abl = new AttendanceBL();
                MySqlConnection myconn = new MySqlConnection(conn);
                MySqlCommand cmd;
                myconn.Open();
                cmd = new MySqlCommand("lastinlastout", myconn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new MySqlParameter("empid", empid));
                MySqlDataReader sdr = cmd.ExecuteReader();
                while (sdr.Read())
                {
                    abl = new AttendanceBL();
                    abl.Intime = sdr["intime"].ToString();
                    abl.Outtime = sdr["outtime"].ToString();
                }
                myconn.Close();
                return abl;
            }
        }

        //Get Name
        public string Getname(string empid)
        {
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                EmpDetailBL ebl = new EmpDetailBL();
                MySqlConnection myconn = new MySqlConnection(conn);
                MySqlCommand cmd;
                myconn.Open();
                cmd = new MySqlCommand("GetEmployeeByID", myconn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new MySqlParameter("empid", empid));
                MySqlDataReader sdr = cmd.ExecuteReader();
                while (sdr.Read())
                {
                    ebl = new EmpDetailBL();
                    ebl.emp_Firstname = sdr["E_Name"].ToString();
                }
                myconn.Close();
                return ebl.emp_Firstname;
            }
        }

        public DataSet GetPageAccessByRole(string roleID)
        {
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                DataSet dataset = new DataSet();
                MySqlConnection myconn = new MySqlConnection(conn);
                MySqlCommand cmd;
                myconn.Open();
                cmd = new MySqlCommand("GetPageAccessByRole", myconn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@role", roleID).Direction = ParameterDirection.Input;
                MySqlDataAdapter da = new MySqlDataAdapter();
                da.SelectCommand = cmd;
                da.Fill(dataset);
                myconn.Close();
                return dataset;
            }
        }

        public DataSet GetPageName()
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetPageName", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        public DataSet GetPageAccess()
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetPageAccess", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //Get Search Result
        public DataSet GetSearchResult(string searchTxt)
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("manageRoleSearchResult", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@searchtxt", searchTxt).Direction = ParameterDirection.Input;
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }

        //GetLeaveBalance
        public DataSet GetLeaveBalance(string userid, string year, string month)
        {
            DataSet ds = new DataSet();
            DataTable balance=null;
            DataSet bal = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetLeaveBalance", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@userid", userid).Direction = ParameterDirection.Input;
                    cmd.Parameters.AddWithValue("@l_year", year).Direction = ParameterDirection.Input;
                    cmd.Parameters.AddWithValue("@l_month", month).Direction = ParameterDirection.Input;
                    MySqlDataAdapter sda = new MySqlDataAdapter();
                    sda.SelectCommand = cmd;
                    ds = new DataSet();
                    sda.Fill(ds);
                    if(month=="0")//for annual report
                    {
                        DataTable dt = ds.Tables[0];
                        List<DataTable> result = dt.AsEnumerable()
                       .GroupBy(row => row.Field<int>("lt_id"))
                       .Select(g => g.CopyToDataTable())
                       .ToList();

                        balance = dt.Clone();

                            //create annual report from these datatables
                            foreach (DataTable item in result)
                        {
                            Object obj = new object();
                            string id = "";
                            string member = "";
                            string lt_name = "";
                            string lt_id = "";
                            int lt_taken = 0;
                            int lt_available = 0;
                            int lt_accrued = 0;
                            int lt_credited = 0;
                            foreach (DataRow row in item.Rows)
                            {
                                id = row["ID"].ToString();
                                member = row["MEMBER"].ToString();
                                lt_name = row["lt_name"].ToString();
                                lt_id = row["lt_id"].ToString();
                                break;
                            }

                            lt_taken = Convert.ToInt32(item.Compute("SUM(lt_taken)", string.Empty));
                            lt_accrued = Convert.ToInt32(item.Compute("SUM(lt_accrued)", string.Empty));
                            if(lt_name.Equals("Restricted Holiday")){
                                lt_credited = 0;
                            }
                            else
                            {
                                lt_credited = Convert.ToInt32(item.Compute("SUM(lt_credited)", string.Empty));
                            }
                            lt_available = (lt_accrued + lt_credited) - lt_taken;

                            //create new row
                            DataRow dr = item.NewRow();
                            item.Clear();
                            dr["ID"] = id;
                            dr["MEMBER"] = member;
                            dr["lt_name"] = lt_name;
                            dr["lt_id"] = lt_id;
                            dr["lt_taken"] = lt_taken;
                            dr["lt_available"] = lt_available;
                            dr["lt_accrued"] = lt_accrued;
                            dr["lt_credited"] = lt_credited;
                            item.Rows.Add(dr);

                            //add row to main data table
                            balance.ImportRow(item.Rows[0]);
                        }

                        bal.Tables.Add(balance);
                    }
                    else
                        bal = ds;
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return bal;
        }

        //GetLeaveBalanceByName
        public DataSet GetLeaveBalanceByName(string name, string year, string month)
        {
            DataSet ds = new DataSet();
            DataTable balance = null;
            DataSet bal = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetLeaveBalanceByName", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@username", name).Direction = ParameterDirection.Input;
                    cmd.Parameters.AddWithValue("@l_year", year).Direction = ParameterDirection.Input;
                    cmd.Parameters.AddWithValue("@l_month", month).Direction = ParameterDirection.Input;
                    MySqlDataAdapter sda = new MySqlDataAdapter();
                    sda.SelectCommand = cmd;
                    ds = new DataSet();
                    sda.Fill(ds);
                    if (month == "0")//for annual report
                    {
                        DataTable dt = ds.Tables[0];
                        List<DataTable> result = dt.AsEnumerable()
                       .GroupBy(row => row.Field<int>("lt_id"))
                       .Select(g => g.CopyToDataTable())
                       .ToList();

                        balance = dt.Clone();

                        //create annual report from these datatables
                        foreach (DataTable item in result)
                        {
                            Object obj = new object();
                            string id = "";
                            string member = "";
                            string lt_name = "";
                            string lt_id = "";
                            int lt_taken = 0;
                            int lt_available = 0;
                            int lt_accrued = 0;
                            int lt_credited = 0;
                            foreach (DataRow row in item.Rows)
                            {
                                id = row["ID"].ToString();
                                member = row["MEMBER"].ToString();
                                lt_name = row["lt_name"].ToString();
                                lt_id = row["lt_id"].ToString();
                                break;
                            }

                            lt_taken = Convert.ToInt32(item.Compute("SUM(lt_taken)", string.Empty));
                            lt_accrued = Convert.ToInt32(item.Compute("SUM(lt_accrued)", string.Empty));
                            if (lt_name.Equals("Restricted Holiday"))
                            {
                                lt_credited = 0;
                            }
                            else
                            {
                                lt_credited = Convert.ToInt32(item.Compute("SUM(lt_credited)", string.Empty));
                            }
                            lt_available = (lt_accrued + lt_credited) - lt_taken;

                            //create new row
                            DataRow dr = item.NewRow();
                            item.Clear();
                            dr["ID"] = id;
                            dr["MEMBER"] = member;
                            dr["lt_name"] = lt_name;
                            dr["lt_id"] = lt_id;
                            dr["lt_taken"] = lt_taken;
                            dr["lt_available"] = lt_available;
                            dr["lt_accrued"] = lt_accrued;
                            dr["lt_credited"] = lt_credited;
                            item.Rows.Add(dr);

                            //add row to main data table
                            balance.ImportRow(item.Rows[0]);
                        }
                        bal.Tables.Add(balance);

                    }
                    else
                        bal = ds;
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }

            return bal;
        }

        //Get All Members
        public DataSet GetAllMembers()
        {
            DataSet ds = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetAllMembers", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataAdapter sda = new MySqlDataAdapter();
                    sda.SelectCommand = cmd;
                    ds = new DataSet();
                    sda.Fill(ds);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return ds;
        }

        //Get All Members By Id
        public DataSet GetAllMembersById(string userid)
        {
            DataSet ds = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetAllMembersById", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@userid", userid).Direction = ParameterDirection.Input;
                    MySqlDataAdapter sda = new MySqlDataAdapter();
                    sda.SelectCommand = cmd;
                    ds = new DataSet();
                    sda.Fill(ds, "Members");
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return ds;
        }

        //Bind Member Dropdown When Manager
        public DataSet BindMemberDropdownWhenManager()
        {
            DataSet ds = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetAllMembersWhenManager", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataAdapter sda = new MySqlDataAdapter();
                    sda.SelectCommand = cmd;
                    ds = new DataSet();
                    sda.Fill(ds, "Members");
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return ds;
        }

        //GetRole
        public string GetRole(string roleId)
        {
            string roleName = "";
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                MySqlConnection myconn = new MySqlConnection(conn);
                MySqlCommand cmd;
                myconn.Open();
                cmd = new MySqlCommand("GetRoleNameById", myconn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@roleid", roleId).Direction = ParameterDirection.Input;
                MySqlDataReader dr = cmd.ExecuteReader();
                if (dr.HasRows)
                {
                    while (dr.Read())
                    {
                        roleName = dr.GetString("Role");
                    }
                }
                dr.Close();
                myconn.Close();
                return roleName;
            }
        }

        //GetDescription
        public string GetDescription(string roleId)
        {
            string description = "";
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                MySqlConnection myconn = new MySqlConnection(conn);
                MySqlCommand cmd;
                myconn.Open();
                cmd = new MySqlCommand("GetRoleDescriptionById", myconn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@roleid", roleId).Direction = ParameterDirection.Input;
                MySqlDataReader dr = cmd.ExecuteReader();
                if (dr.HasRows)
                {
                    while (dr.Read())
                    {
                        description = dr.GetString("Description");
                    }
                }
                dr.Close();
                myconn.Close();
                return description;
            }
        }

        public string InsertRole(string name, string description)
        {
            string id = "0";
            if (description == "empty")
            {
                description = "";
            }
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                MySqlConnection myconn = new MySqlConnection(conn);
                MySqlCommand cmd;
                myconn.Open();
                cmd = new MySqlCommand("InsertRole", myconn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@applicationname", "/").Direction = ParameterDirection.Input;
                cmd.Parameters.AddWithValue("@rolename", name).Direction = ParameterDirection.Input;
                cmd.Parameters.AddWithValue("@roledescription", description).Direction = ParameterDirection.Input;
                MySqlDataReader dr = cmd.ExecuteReader();
                if (dr.HasRows)
                {
                    while (dr.Read())
                    {
                        id = dr.GetString("Id");
                    }
                }
                dr.Close();
                myconn.Close();
                return id;
            }
        }

        public string InsertPagelevelAccess(string roleId, string pageId, string activeStatus)
        {
            string id = "0";
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                MySqlConnection myconn = new MySqlConnection(conn);
                MySqlCommand cmd;
                myconn.Open();
                cmd = new MySqlCommand("InsertPagelevelAccess", myconn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@roleId", roleId).Direction = ParameterDirection.Input;
                cmd.Parameters.AddWithValue("@pageId", pageId).Direction = ParameterDirection.Input;
                cmd.Parameters.AddWithValue("@activestatus", activeStatus).Direction = ParameterDirection.Input;
                MySqlDataReader dr = cmd.ExecuteReader();
                if (dr.HasRows)
                {
                    while (dr.Read())
                    {
                        id = dr.GetString("Id");
                    }
                }
                dr.Close();
                myconn.Close();
                return id;
            }
        }

        public void DeactivatePageLevelAccess(string roleId)
        {
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                con.Open();
                MySqlCommand cmd = new MySqlCommand("DeletePageAccessByRoleId", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@roleId", roleId).Direction = ParameterDirection.Input;
                cmd.ExecuteNonQuery();
                con.Close();
            }
        }

        public string GetRoleId(string rolename)
        {
            string Id = "";
            using (MySqlConnection con = new MySqlConnection(conn))
            {
                con.Open();
                MySqlCommand cmd = new MySqlCommand("GetRole", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@role", rolename).Direction = ParameterDirection.Input;
                MySqlDataReader DataReader1 = cmd.ExecuteReader();
                if (DataReader1.HasRows)
                {
                    while (DataReader1.Read())
                    {
                        Id = DataReader1.GetString("ID");
                    }
                }
                DataReader1.Close();
                con.Close();
            }
            return Id;
        }

        public DataSet GetDataTable()
        {
            DataSet dataset = new DataSet();
            try
            {
                using (MySqlConnection con = new MySqlConnection(conn))
                {
                    MySqlConnection myconn = new MySqlConnection(conn);
                    MySqlCommand cmd;
                    myconn.Open();
                    cmd = new MySqlCommand("GetPageAccess", myconn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataAdapter da = new MySqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dataset);
                    myconn.Close();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return dataset;
        }
        //  List<PageAccess> listOfPages = new List<PageAccess>();
        //  PageAccess pages = new PageAccess();
        ////  DataSet dataset = new DataTable();
        //  try
        //  {
        //      using (MySqlConnection con = new MySqlConnection(conn))
        //      {
        //          MySqlConnection myconn = new MySqlConnection(conn);
        //          MySqlCommand cmd;
        //          myconn.Open();
        //          cmd = new MySqlCommand("GetPageAccess", myconn);
        //          cmd.CommandType = CommandType.StoredProcedure;
        //          //MySqlDataAdapter da = new MySqlDataAdapter();
        //          //da.SelectCommand = cmd;
        //          //da.Fill(dataset);
        //          //myconn.Close();

        //          MySqlDataReader dr = cmd.ExecuteReader();
        //          if (dr.HasRows)
        //          {
        //              while (dr.Read())
        //              {
        //                  pages.Name= dr.GetString("Name");
        //                  pages.Description = dr.GetString("Description");
        //                  pages.Permisssion = dr.GetString("Permissions");
        //              }
        //              listOfPages.Add(pages);
        //          }
        //          dr.Close();
        //          myconn.Close();
        //      }
        //  }
        //  catch (Exception ex)
        //  {
        //      string msg = ex.Message;
        //  }
        //  return listOfPages;
        // }
    }
}