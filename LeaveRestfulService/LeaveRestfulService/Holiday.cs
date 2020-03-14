using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace LeaveRestfulService
{
    [DataContract]
    public class Holiday
    {
        [DataMember]
        public string ID;
        [DataMember]
        public string Holiday_date;
        [DataMember]
        public string Holiday_Reason;
    }
}