using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BasicAppAPI.Models;
using Logger;

namespace BasicAppAPI.Controllers.BaseControllers
{
    public class ApplicationController : ApiController
    {
        Connection dbCon = new Connection();

        //Api to get application data by application id
        [Route("api/GetAppData")]
        public AppData GetAppData(int appId)
        {
            AppData appData = new AppData();

            try
            {
                appData = dbCon.getAppData(appId);
            }
            catch(Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                    Module.BaseAppApiController, BaseApp.RiddleApp,
                    "application id= " + appId);
                int errorId = ExceptionLogger.AddError(error);
            }
            return appData;
        }

        //Api to add new application
        [Route("api/PostAddApp")]
        public int PostAddApp(AppData app)
        {
            int appId = 0;
            try
            {
                appId = dbCon.addApp(app);
            }
            catch (Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                  Module.BaseAppApiController, BaseApp.RiddleApp,
                  "AppData obj: application id=" + app.appId);
                int errorId = ExceptionLogger.AddError(error);
            }
            return appId;
        }

        //Api to get all existing application details
        [Route("api/GetAllApp")]
        public List<AppData> GetAllApp()
        {
            List<AppData> appList = new List<AppData>();
            try
            {
                appList = dbCon.getAllApp();
            }
            catch (Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                   Module.BaseAppApiController, BaseApp.RiddleApp,"");
                int errorId = ExceptionLogger.AddError(error);
            }
            return appList;
        }
    }
}
