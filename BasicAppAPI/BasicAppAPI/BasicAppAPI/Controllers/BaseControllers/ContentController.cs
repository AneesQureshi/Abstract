using BasicAppAPI.Models;
using Logger;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BasicAppAPI.Controllers.BaseControllers
{
    public class ContentController : ApiController
    {
        Connection dbCon = new Connection();

        //Api to get list of all content
        [Route("api/GetContentData/{catId}/{id}/{updationDate}")]
        public List<ContentData> GetContentData(int catId, int id, string updationDate)
        {
            if (updationDate != null || updationDate != "null")
            {
                updationDate = urcDecodeData(updationDate);
            }
            List<ContentData> contentDataList = new List<ContentData>();
            try
            {
                contentDataList = dbCon.getContentData(catId, id, updationDate);
            }
            catch (Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                   Module.BaseAppApiController, BaseApp.RiddleApp,
                   "category id= " + catId+", last content id= "+id+", updation date= "+updationDate);
                int errorId = ExceptionLogger.AddError(error);
            }
            return contentDataList;
        }

        //Api to get list of all content
        [Route("api/GetAllContentData/{catId}/{id}/{updationDate}")]
        public List<ContentData> GetAllContentData(int catId, int id, string updationDate)
        {
            List<ContentData> contentDataList = new List<ContentData>();
            try
            {
                contentDataList = dbCon.getAllContentData(catId, id, updationDate);
            }
            catch (Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                   Module.BaseAppApiController, BaseApp.RiddleApp,
                   "category id= " + catId + ", last content id= " + id + ", updation date= " + updationDate);
                int errorId = ExceptionLogger.AddError(error);
            }
            return contentDataList;
        }

        //Api to add new content 
        [Route("api/PostAddContent")]
        public int PostAddContent(ContentData content)
        {
            int contentId = 0;
            try
            {
                contentId = dbCon.addContent(content);
            }
            catch (Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                   Module.BaseAppApiController, BaseApp.RiddleApp,
                   "ContentData obj: content id= " + content.contentId);
                int errorId = ExceptionLogger.AddError(error);
            }
            return contentId;
        }

        //Api to delete content
        [Route("api/GetDeleteContent/{contentId}")]
        public bool GetDeleteContent(int contentId)
        {
            bool result = false;
            try
            {
                result = dbCon.deleteContent(contentId);

            }
            catch (Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                   Module.BaseAppApiController, BaseApp.RiddleApp,
                   "content id= " + contentId);
                int errorId = ExceptionLogger.AddError(error);
            }
            return result;
        }

        //Api to edit content details
        [Route("api/PostEditContent")]
        public bool PostEditContent(ContentData content)
        {
            bool result = false;
            try
            {
                result = dbCon.editContent(content);

            }
            catch (Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                   Module.BaseAppApiController, BaseApp.RiddleApp,
                   "ContentData obj: content id= " + content.contentId);
                int errorId = ExceptionLogger.AddError(error);
            }
            return result;
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
