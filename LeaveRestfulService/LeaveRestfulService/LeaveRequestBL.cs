using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace LeaveRestfulService
{
    [DataContract]
    public class LeaveRequestBL
    {
        [DataMember]
        public string Id { get; set; }
        [DataMember]
        public string Emp_Id { get; set; }
        [DataMember]
        public string Emp_LeaveRequest_Id { get; set; }
        [DataMember]
        public string Reviewer_Id { get; set; }
        [DataMember]
        public string Leave_Type_Master_Id { get; set; }
        [DataMember]
        public string Leave_Days { get; set; }
        [DataMember]
        public string Leave_Dates { get; set; }
        [DataMember]
        public string Leave_Start_Date { get; set; }
        [DataMember]
        public string Leave_End_Date { get; set; }
        [DataMember]
        public string Leave_Reason { get; set; }
        [DataMember]
        public string LeaveStatus { get; set; }

    }

    [DataContract]
    public class EmpDetailBL
    {
        [DataMember]
        public string emp_Id { get; set; }
        [DataMember]
        public string emp_MId { get; set; }
        [DataMember]
        public string emp_Role { get; set; }
        [DataMember]
        public string emp_Firstname { get; set; }
        [DataMember]
        public string emp_Lastname { get; set; }
        [DataMember]
        public string emp_PrimaryContact { get; set; }
        [DataMember]
        public string emp_SecondaryContact { get; set; }
        [DataMember]
        public string emp_WorkEmail { get; set; }
        [DataMember]
        public string emp_PersonalEmail { get; set; }
        [DataMember]
        public string emp_JoiningDate { get; set; }
        [DataMember]
        public string emp_LeavingDate { get; set; }
        [DataMember]
        public string emp_Position { get; set; }
        [DataMember]
        public string Emp_Department { get; set; }
        [DataMember]
        public string Emp_BloodGroup { get; set; }
        [DataMember]
        public string emp_LocalAddress { get; set; }
        [DataMember]
        public string emp_LocalEmergencyContact { get; set; }
        [DataMember]
        public string emp_LocalEmergencyRelation { get; set; }
        [DataMember]
        public string emp_PermanentAddress { get; set; }
        [DataMember]
        public string emp_PermanentEmergencyContact { get; set; }
        [DataMember]
        public string emp_PermanentEmergencyRelation { get; set; }
        [DataMember]
        public string emp_Password { get; set; }
        [DataMember]
        public string emp_Status { get; set; }
        [DataMember]
        public string emp_Manager { get; set; }
        [DataMember]
        public string emp_ConfirmationDate { get; set; }
        [DataMember]
        public string emp_Years_of_exp { get; set; }
        [DataMember]
        public string emp_Dob { get; set; }

        [DataMember]
        public string workingdays { get; set; }
        [DataMember]
        public string frmdt { get; set; }
        [DataMember]
        public string todt { get; set; }

        //[DataMember]
        //public int Emp_Id { get; set; }
        //[DataMember]
        //public string newid { get; set; }
        //[DataMember]
        //public string Emp_Name { get; set; }
        //[DataMember]
        //public string Emp_pass { get; set; }
        //[DataMember]
        //public string Emp_Add { get; set; }
        //   [DataMember]
        //   public string Emp_Dept { get; set; }
        //   [DataMember]
        //public string Emp_Position { get; set; }
        //   [DataMember]
        //public string Emp_mail { get; set; }
        //   [DataMember]
        //public string Emp_Contact { get; set; }
        //   [DataMember]
        //public string Emp_DOJ { get; set; }
        //[DataMember]
        //public string Emp_EmergencyC { get; set; }
        //[DataMember]
        //public string frmdt { get; set; }
        //[DataMember]
        //public string todt { get; set; }
    }

    [DataContract]
    public class AttendanceBL
    {
        [DataMember]
        public string EmpId { get; set; }
        [DataMember]
        public string Intime { get; set; }
        [DataMember]
        public string Outtime { get; set; }
        [DataMember]
        public string Attend_Date { get; set; }
    }

    [DataContract]
    public class LeaveTypeBL
    {
        [DataMember]
        public string LtId { get; set; }
        [DataMember]
        public string LtName { get; set; }
        [DataMember]
        public string ShortCode { get; set; }
        [DataMember]
        public string MonthlyAccrued { get; set; }
        [DataMember]
        public string MaxRollover { get; set; }
        [DataMember]
        public string Available { get; set; }
        [DataMember]
        public string Active { get; set; }

    }

    [DataContract]
    public class LeaveStatusInfo
    {
        [DataMember]
        public string leave_type { get; set; }
        [DataMember]
        public string leave_start_date { get; set; }
        [DataMember]
        public string leave_end_date { get; set; }
        [DataMember]
        public string leave_days { get; set; }
        [DataMember]
        public string leave_status { get; set; }
    }

    [DataContract]
    public class LeaveStatus
    { 
        [DataMember]
        public string Status { get; set; }
        [DataMember]
        public string Date { get; set; }
        [DataMember]
        public string By { get; set; }
        [DataMember]
        public string Comments { get; set; }
    }

    [DataContract]
    public class LeaveType
    {
        [DataMember]
        public string LtId { get; set; }
        [DataMember]
        public string LtName { get; set; }
        [DataMember]
        public string ShortCode { get; set; }
        [DataMember]
        public string MonthlyAccrued { get; set; }
        [DataMember]
        public string MaxRollover { get; set; }
        [DataMember]
        public string Available { get; set; }
        [DataMember]
        public string Active { get; set; }
    }

    [DataContract]
    public class LeaveSearch
    {
        [DataMember]
        public string userid { get; set; }
        [DataMember]
        public string name { get; set; }
        [DataMember]
        public string email { get; set; }
        [DataMember]
        public string type { get; set; }
        [DataMember]
        public string status { get; set; }
        [DataMember]
        public string manager { get; set; }
        [DataMember]
        public string fromdate { get; set; }
        [DataMember]
        public string todate { get; set; }
        [DataMember]
        public string year { get; set; }
    }

    [DataContract]
    public class Holiday
    {
        [DataMember]
        public string Holiday_ID { get; set; }
        [DataMember]
        public string Holiday_Date { get; set; }
        [DataMember]
        public string Holiday_Reason { get; set; }
    }

    [DataContract]
    public class EmpReport
    {
        [DataMember]
        public string Emp_Id { get; set; }
        [DataMember]
        public string Emp_Name { get; set; }
        [DataMember]
        public string No_Of_Working_Days { get; set; }
        [DataMember]
        public string No_Of_Holiday { get; set; }
        [DataMember]
        public string No_Of_Leave { get; set; }
    }

    [DataContract]
    public class LeaveCategoryBL
    {
        [DataMember]
        public string ID { get; set; }
        [DataMember]
        public string Emp_Id { get; set; }
        [DataMember]
        public string Earned_Leave { get; set; }
        [DataMember]
        public string Casual_Leave { get; set; }
        [DataMember]
        public string Unpaid_Leave { get; set; }
        [DataMember]
        public string Update_Date { get; set; }
    }

}