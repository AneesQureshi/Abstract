using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BasicAppAPI.Models
{
    public class CategoryData
    {
        public int catId { get; set; }
        public int appId { get; set; }
        public int active { get; set; }
        public int contentCount { get; set; }
        public string catName { get; set; }
        public string catImage { get; set; }
        public string createDate { get; set; }
        public string updateDate { get; set; }
    }
}