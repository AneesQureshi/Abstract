using EmpDemowcf.App_Code;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace EmpDemowcf
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IService1" in both code and config file together.
    [ServiceContract]
    public interface IService1
    {

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/LogIn/{empid}/{password}", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        bool LogIn(string empid, string password);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/LogIn1/", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        WcfUserObject LogIn1(WcfUserObject user);

        


    }


    
}
