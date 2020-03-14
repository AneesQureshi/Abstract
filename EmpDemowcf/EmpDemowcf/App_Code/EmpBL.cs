using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace EmpDemowcf.App_Code
{
    [DataContract]
    public class UserModel
    {
        [DataMember]
        public string userId { get; set; }
        [DataMember]
        public string password { get; set; }
    }
}