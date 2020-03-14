using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LeaveRestfulService.Model
{
    public class UserProfile
    {
        public string id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string role { get; set; }
        public string profile_pic_path { get; set; }
        public string manager_id { get; set; }
        public string status { get; set; }
        public List<reporting_members> reporting_members { get; set; }
    }
    public class reporting_members
    {
        public string id { get; set; }
        public string rolename { get; set; }
    }
}