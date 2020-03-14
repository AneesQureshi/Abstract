using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BasicAppAPI.Models
{
    public class Image
    {
        public string id
        {
            get;
            set;
        }

        public string category_id
        {
            get;
            set;
        }

        public string image_name
        {
            get;
            set;
        }

        public string image_url
        {
            get;
            set;
        }
        public string updatedDate
        {
            get;
            set;
        }
    }
}