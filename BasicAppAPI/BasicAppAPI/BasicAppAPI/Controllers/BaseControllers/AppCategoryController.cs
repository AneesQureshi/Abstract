using BasicAppAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Logger;

namespace BasicAppAPI.Controllers.BaseControllers
{
    public class AppCategoryController : ApiController
    {
        Connection dbCon = new Connection();

        //Api to get list of all categories
        [Route("api/GetCategoryData/{appId}/{updationDate}")]
        public List<CategoryData> GetCategoryData(int appId,string updationDate)
        {
            if(updationDate!=null|| updationDate != "null")
            {
                updationDate= urcDecodeData(updationDate);
            }
            List<CategoryData> catDataList = new List<CategoryData>();
            try
            {
                catDataList = dbCon.getCategoryData(appId, updationDate);
            }
            catch (Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                 Module.BaseAppApiController, BaseApp.RiddleApp,
                 "application id=" + appId+"updation date="+updationDate);
                int errorId = ExceptionLogger.AddError(error);
            }
            return catDataList;
        }

        //Api to add new category 
        [Route("api/PostAddCategory")]
        public int PostAddCategory(CategoryData cat)
        {
            int catId = 0;
            try
            {
                catId = dbCon.addCategory(cat);
            }
            catch (Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                 Module.BaseAppApiController, BaseApp.RiddleApp,
                 "CategoryData obj: category id=" + cat.catId);
                int errorId = ExceptionLogger.AddError(error);
            }
            return catId;
        }

        //Api to Delete Category
        [Route("api/GetDeleteCategory/{catId}")]
        public bool GetDeleteCategory(int catId)
        {
            bool result = false;
            try
            {
                result = dbCon.deleteCategory(catId);

            }
            catch (Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                  Module.BaseAppApiController, BaseApp.RiddleApp,
                  "category id=" + catId);
                int errorId = ExceptionLogger.AddError(error);
            }
            return result;
        }

        //Api to edit category details
        [Route("api/PostEditCategory")]
        public bool PostEditCategory(CategoryData cat) {
            bool result = false;
            try
            {
                result = dbCon.EditCategory(cat);

            }
            catch (Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                  Module.BaseAppApiController, BaseApp.RiddleApp,
                  "CategoryData obj: category id="+cat.catId);
                int errorId = ExceptionLogger.AddError(error);
            }
            return result;
        }

        //Api to get list of all categories
        [Route("api/GetAllCategory")]
        public List<CategoryData> GetAllCategory()
        {
            List<CategoryData> catDataList = new List<CategoryData>();
            try
            {
                catDataList = dbCon.GetAllCategory();
            }
            catch (Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                  Module.BaseAppApiController, BaseApp.RiddleApp,"");
                int errorId = ExceptionLogger.AddError(error);
            }
            return catDataList;
        }

        public string urcDecodeData(string data)
        {
            data = data.Replace("S", "/");
            data = data.Replace("U", " ");
            data = data.Replace("C", ":");
            return data;
        }
    }
}
