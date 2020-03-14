using EntityLayer;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;

namespace ePrabhat.Models
{
    public class APIConnect
    {
        public static  HttpResponseMessage GetData(string uri)
        {
            HttpResponseMessage response = null;
            try
            {
                using (var client = new HttpClient())
                {
                    string con = APIPath.path;
                    client.BaseAddress = new Uri(con);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    response = client.GetAsync(uri).Result;
                }
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
            }
            return response;
        }
        public static HttpResponseMessage PostData(string uri, object  jdata) 
        {

            HttpResponseMessage response = null;
            try
            {
              //  string jresult;
               // HttpResponseMessage response;
                using (var client = new HttpClient())
                {
                   
                        string con =APIPath.path;
                    client.Timeout = TimeSpan.FromMinutes(30);
                        client.BaseAddress = new Uri(con);
                        client.DefaultRequestHeaders.Accept.Clear();
                        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                        //response = client.GetAsync(uri).Result;
                        response = client.PostAsJsonAsync(uri, jdata).Result ;
                        // jresult = response.Content.ReadAsStringAsync().Result;
                   
                }
                return response;

               // RunAsync(uri,jdata).Wait();
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
            }
            return response;
        }
       
    }
}
