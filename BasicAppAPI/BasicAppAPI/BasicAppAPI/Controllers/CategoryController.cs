using BasicAppAPI.Models;
using Logger;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace BasicAppAPI.Controllers
{
    public class CategoryController : ApiController
    {
        Connection dbcon = new Connection();
        [Route("api/Category/GetCategory")]
        public List<Category> GetCategory()
        {
            //create list object to store the category list
            List<Category> categoryList = new List<Category>();
            try
            {
                //call db to get category list
                categoryList = dbcon.GetCategory();
            }
            catch (Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                  Module.BaseAppApiController, BaseApp.SpellMaster,"");
                int errorId = ExceptionLogger.AddError(error);
            }
            //return category list
            return categoryList;
        }
    }
}
