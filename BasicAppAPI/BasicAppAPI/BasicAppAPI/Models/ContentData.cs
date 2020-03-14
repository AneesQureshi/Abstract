using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BasicAppAPI.Models
{
    public class ContentData
    {
        public int contentId { get; set; }
        public int catId { get; set; }
        public int active { get; set; }
        public string contentType { get; set; }
        public string riddleContent { get; set; }
        public string riddleSolution { get; set; }
        public string createDate { get; set; }
        public string updateDate { get; set; }
    }
}