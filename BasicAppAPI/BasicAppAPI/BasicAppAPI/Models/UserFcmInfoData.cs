using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BasicAppAPI.Models
{
    public class UserFcmInfoData
    {
        public int id { get; set; }
        public int deviceId { get; set; }
        public int fcmId { get; set; }
        public string createDate { get; set; }
        public string updateDate { get; set; }
    }
}