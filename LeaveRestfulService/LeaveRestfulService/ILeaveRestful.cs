using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using System.Data;
using LeaveRestfulService.Model;

namespace LeaveRestfulService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "ILeaveRestful" in both code and config file together.
    [ServiceContract]
    public interface ILeaveRestful
    {
        [OperationContract]
        [WebInvoke(Method="GET", UriTemplate="/LogIn/{empid}/{password}",ResponseFormat=WebMessageFormat.Json,BodyStyle=WebMessageBodyStyle.WrappedRequest)]
        string LogIn(string empid,string password);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/insertSessionId/{empId}/{sessionId}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string insertSessionId(string empId, string sessionId);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/insertLeaveTypeBalance/{leaveTypeId}/{emp_Id}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string insertLeaveTypeBalance(string leaveTypeId, string emp_Id);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/validateSession/{empId}/{sessionId}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string validateSession(string empId, string sessionId);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/deleteSessionId/{empId}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string deleteSessionId(string empId);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/ActivateUser/{userid}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string ActivateUser(string userid);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/DeactivateUser/{userid}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string DeactivateUser(string userid);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/ChangePassword/{userid}/{old_password}/{new_password}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string changePassword(string userid, string old_password, string new_password);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/FetchAvailableBalance/{userId}/{leaveTypeId}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string fetchAvailableBalance(string userId, string leaveTypeId);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/fetchLeaveAvailibility/{leaveTypeId}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string fetchLeaveAvailibility(string leaveTypeId);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/ApproveLeaveRequest/{userId}/{lrId}/{leaves_approved}/{comment}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string approveLeaveRequest(string userId, string lrId, string leaves_approved, string comment);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/FetchManager/{userId}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string fetchManager(string userId);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/DisapproveLeaveRequest/{userId}/{lrId}/{comment}/{leaves_approved}/{leave_type_id}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string disapproveLeaveRequest(string userId, string lrId, string comment, string leaves_approved, string leave_type_id);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/CancelLeaveRequest/{userId}/{lrId}/{leaves_approved}/{comment}/{leave_type_id}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string cancelLeaveRequest(string userId, string lrId, string leaves_approved, string comment, string leave_type_id);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/ConfirmMember/{id}/{joinDate}/{confirmDate}/{lv_type_id}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string confirmMember(string id, string joinDate, string confirmDate, string lv_type_id);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/ChangeStatusToConfirmed/{userid}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string changeStatusToConfirmed(string userid);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/CountLeaveType", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        List<LeaveType> countLeaveType();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/FetchUserName/{userid}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string fetchUserName(string userid);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/FetchUserRole/{userid}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string fetchUserRole(string userid);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/FetchRole/{role}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string fetchRole(string role);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/FetchEmail/{id}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        string fetchEmail(string id);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetLeaveBalance/{userid}/{year}/{month}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        DataSet GetLeaveBalance(string userid, string year, string month);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetLeaveBalanceByName/{name}/{year}/{month}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        DataSet GetLeaveBalanceByName(string name, string year, string month);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetAllMembers", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        DataSet GetAllMembers();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetAllMembersById/{userid}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        DataSet GetAllMembersById(string userid);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/BindMemberDropdownWhenManager", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        DataSet BindMemberDropdownWhenManager();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/UserProfileDetails/{userid}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        UserProfile GetUserProfileDetails(string userid);
        
        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/fetchLeaveStatusInfo/{userid}/{leaveid}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        LeaveStatusInfo fetchLeaveStatusInfo(string userid, string leaveid);
        //[OperationContract]
        //[WebInvoke(Method="POST", UriTemplate="/LeaveRequest",ResponseFormat=WebMessageFormat.Json,RequestFormat=WebMessageFormat.Json)]
        //string LeaveRequest(LeaveRequestBL param1);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate="/RegisterEmp", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        string RegisterEmp(EmpDetailBL empd);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/InsertNewLeaveType", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        string InsertNewLeaveType(LeaveTypeBL lt);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/FetchLeaveTypeGrid", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet FetchLeaveTypeGrid();
        
        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetLeaveTypesList", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetLeaveTypesList();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetAllRole", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetAllRole();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetUsersbyAllotedRole/{roleid}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetUsersbyAllotedRole(string roleid);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetAllUsersNotAllotedRole/{roleid}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetAllUsersNotAllotedRole(string roleid);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetTxtSearchAllUsers/{roleid}/{txtSearch}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetTxtSearchAllUsers(string roleid, string txtSearch);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetDepartment", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetDepartment();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetUserRole", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetUserRole();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetManagers", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetManagers();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetStatus", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetStatus();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetLeaveTypes", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetLeaveTypes();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetRhDates", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetRhDates();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetMemberList/{mgr}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetMemberList(string mgr);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetGridLeaveRequests/{userid}/{isManager}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetGridLeaveRequests(string userid, string isManager);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/newleaverequestgridsearch", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet newleaverequestgridsearch(LeaveSearch search);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/newsearchLeaveIfManager", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet newsearchLeaveIfManager(LeaveSearch search);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/newsearchLeaveIfAdmin", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet newsearchLeaveIfAdmin(LeaveSearch search);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetGridAttendanceReport/{member}/{fromdate}/{todate}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetGridAttendanceReport(string member, string fromdate, string todate);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetGridAttendanceReportIfUser/{userid}/{member}/{fromdate}/{todate}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetGridAttendanceReportIfUser(string userid, string member, string fromdate, string todate);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/InsertLeaveRequest", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        string InsertLeaveRequest(LeaveRequestBL lt);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/GetProfile", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        EmpDetailBL GetProfile(string empid);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/UpdateProfile", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        string UpdateProfile(EmpDetailBL empd);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/FetchLeaveTypeData", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet FetchLeaveTypeData(LeaveType lt);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetConfirmedEmployees", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        List<EmpDetailBL> GetConfirmedEmployees();

        //[OperationContract]
        //[WebInvoke(Method = "POST", UriTemplate = "/InsertLeaveInAttendance", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        //string InsertLeaveInAttendance(LeaveRequestBL lrb);

        //[OperationContract]
        //[WebInvoke(Method = "POST", UriTemplate = "/ChangePassword/{empid}/{oldpass}/{newpass}", ResponseFormat = WebMessageFormat.Json, BodyStyle=WebMessageBodyStyle.WrappedRequest)]
        //string ChangePassword(string empid, string oldpass, string newpass);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/Resetpass/{empid}/{pass}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        EmpDetailBL Resetpass(string empid,string pass);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/FetchEmpInfo/", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        EmpDetailBL FetchEmpInfo(EmpDetailBL ebl);
        
        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/FetchLeaveRequestInfo/", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        LeaveRequestBL FetchLeaveRequestInfo(LeaveRequestBL lbr);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/FetchLeaveRequestStatusInfo/{leaveId}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        LeaveStatus FetchLeaveRequestStatusInfo(string leaveId);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetLeaveTypesById/{id}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        LeaveType getLeaveTypesById(string id);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/SearchEmployee", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        DataSet SearchEmployee(EmpDetailBL empl);

        //[OperationContract]
        //[WebInvoke(Method = "POST", UriTemplate = "/AdminSearchLeaveHistory", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        //DataSet AdminSearchLeaveHistory(LeaveRequestBL lbr);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/CountLeave", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        string CountLeave(LeaveRequestBL lbr);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/AttendanceIn",RequestFormat=WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        string AttendanceIn(AttendanceBL abl);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/UpdateAttendance", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        string UpdateAttendance(AttendanceBL abl);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/AttendanceOut", RequestFormat=WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        string AttendanceOut(AttendanceBL abl);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/CheckAttendance/{empid}",ResponseFormat = WebMessageFormat.Json,BodyStyle=WebMessageBodyStyle.WrappedRequest)]
        string CheckAttendance(string empid);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/CheckStatus/{empid}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        string CheckStatus(string empid);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/ShowAttendance/{empid}/{frmdate}/{todate}", BodyStyle=WebMessageBodyStyle.WrappedRequest, ResponseFormat = WebMessageFormat.Json)]
        DataSet ShowAttendance(string empid, string frmdate, string todate);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/CheckDuty/{empid}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        string CheckDuty(string empid);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/DeleteLeaveRequest", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        DataSet DeleteLeaveRequest(EmpDetailBL emp);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/GetAllLeaveRequest", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        DataSet GetAllLeaveRequest();

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/UpdateLeaveRequest", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        void UpdateLeaveRequest(LeaveRequestBL lbr);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/InsertHoliday", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        void InsertHoliday(Holiday hol);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/GetHolidayStatus", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        string GetHolidayStatus(Holiday hol);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/MarkHolidayInAttendance/{empid}/{holidate}", RequestFormat=WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        void MarkHolidayInAttendance(string empid, string holidate);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/UpdateAssignRole/{roleId}/{userId}/{activeStatus}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        void UpdateAssignRole(string roleId, string userId, string activeStatus);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/GetHolidayList", RequestFormat=WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        List<Holiday> GetHolidayList();

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json, UriTemplate = "/GetHolidayStatusInAttendance/{empid}/{holidate}")]
        string GetHolidayStatusInAttendance(string empid,string holidate);

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, UriTemplate = "/EmployeeReport")]
        List<EmpReport> EmployeeReport();

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, UriTemplate = "/DeleteMarkedLeave")]
        string DeleteMarkedLeave(LeaveRequestBL lrb);

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, UriTemplate = "/Insert_LeaveCategoryDetail")]
        void Insert_LeaveCategoryDetail(EmpDetailBL emp);

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, UriTemplate = "/Update_CLStatus")]
        void Update_CLStatus(LeaveRequestBL lrb);

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, UriTemplate = "/Update_ELStatus")]
        void Update_ELStatus(LeaveRequestBL lrb);

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, UriTemplate = "/Update_ULStatus")]
        void Update_ULStatus(LeaveRequestBL lrb);

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, UriTemplate = "/Update_MonthlyLeaveCategoryStatus")]
        void Update_MonthlyLeaveCategoryStatus();

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, UriTemplate = "/Update_YearlyLeaveCategoryStatus")]
        string Update_YearlyLeaveCategoryStatus();

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/GetAllLeaveCategoryStatus/{empid}")]
        List<LeaveCategoryBL> GetAllLeaveCategoryStatus(string empid);

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/Get_Emp_ELCounter/{empid}")]
        string Get_Emp_ELCounter(string empid);

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, UriTemplate = "/Get_Emp_CLCounter/{empid}")]
        string Get_Emp_CLCounter(string empid);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/showlastinlastout/{empid}", BodyStyle = WebMessageBodyStyle.WrappedRequest, ResponseFormat = WebMessageFormat.Json)]
        AttendanceBL showlastinlastout(string empid);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/Getname/{empid}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        string Getname(string empid);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/EmpLeave", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        DataSet EmpLeave(EmpDetailBL empl);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetPageAccessByRole/{roleID}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetPageAccessByRole(string roleID);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetPageName", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetPageName();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetPageAccess", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetPageAccess();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetSearchResult/{searchTxt}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetSearchResult(string searchTxt);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetRole/{roleID}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        string GetRole(string roleID);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetDescription/{roleID}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        string GetDescription(string roleID);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/InsertRole/{name}/{description}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        string InsertRole(string name, string description);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/InsertPagelevelAccess/{roleId}/{pageId}/{activeStatus}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        string InsertPagelevelAccess(string roleId, string pageId, string activeStatus);
        
        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/DeactivatePageLevelAccess/{roleId}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        void DeactivatePageLevelAccess(string roleId);
        
        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetRoleId/{rolename}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        string GetRoleId(string rolename);

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/GetDataTable", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        DataSet GetDataTable();
    }   
}
