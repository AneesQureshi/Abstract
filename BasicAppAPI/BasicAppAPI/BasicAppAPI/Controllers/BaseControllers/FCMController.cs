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
    public class FCMController : ApiController
    {
        Connection dbCon = new Connection();

        //Api to update fcm info 
        [Route("api/PostUpdateFCMInfo")]
        public int PostUpdateFCMInfo(UserFcmInfoData info)
        {
            int id = 0;
            try
            {
                id = dbCon.updateFCMInfo(info);
            }
            catch (Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                  Module.BaseAppApiController, BaseApp.RiddleApp,
                  "UserFcmInfoData obj: fcm id= " + info.fcmId+", device id= "+info.deviceId);
                int errorId = ExceptionLogger.AddError(error);
            }
            return id;
        }

        //Api to get user FCM info
        [Route("api/GetUserFCMInfo")]
        public List<UserFcmInfoData> GetUserFCMInfo()
        {
            List<UserFcmInfoData> info = new List<UserFcmInfoData>();
            try
            {
                info = dbCon.getUserFCMInfo();
            }
            catch (Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                  Module.BaseAppApiController, BaseApp.RiddleApp,"");
                int errorId = ExceptionLogger.AddError(error);
            }
            return info;
        }

    }
}
