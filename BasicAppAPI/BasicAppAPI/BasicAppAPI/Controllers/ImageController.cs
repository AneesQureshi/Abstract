using BasicAppAPI.Models;
using Logger;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BasicAppAPI.Controllers
{
    public class ImageController : ApiController
    {
        Connection dbcon = new Connection();
        [Route("api/Image/GetImageInfo/{category_id}/{image_id}/{updateDate}")]
        public List<Image> GetImageInfo(string category_id, string image_id, string updateDate)
        {
            //create list object to store the image list
            List<Image> imageInfoList = new List<Image>();
            updateDate = updateDate.Replace("S", "-");
            updateDate = updateDate.Replace("U", " ");
            updateDate = updateDate.Replace("C", ":");
            try
            {


                //get count of number of images to be returned on each service call from configuration file
                int image_limit = int.Parse(ConfigurationManager.AppSettings["GetImageLimit"]);
                if (category_id == "0")
                {
                    //call db to get category list
                    List<Category> categoryList = new List<Category>();
                    categoryList = dbcon.GetCategory();
                    foreach (var category in categoryList)
                    {
                        List<Image> imageList = new List<Image>();
                        if (category.id != "0")
                        {
                            imageList = dbcon.GetImageInfo(category.id, image_id, image_limit, updateDate);
                            foreach (var image in imageList)
                            {
                                imageInfoList.Add(image);
                            }
                        }
                    }
                }
                else
                {
                    //call db to get image list
                    imageInfoList = dbcon.GetImageInfo(category_id, image_id, image_limit, updateDate);
                }
            }
            catch (Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                  Module.BaseAppApiController, BaseApp.SpellMaster,
                  "category id= "+ category_id+ ", image id="+ image_id+ ", updateDate=" + updateDate);
                int errorId = ExceptionLogger.AddError(error);
            }
            //return image list
            return imageInfoList;
        }

        [Route("api/Image/GetImageCount/{category_id}/{image_id}")]
        public int GetImageCount(string category_id, string image_id)
        {
            //create count variable to store the image count
            int count = 0;
            try
            {
                //call db to get image count
                count = dbcon.GetImageCount(category_id, image_id);
            }
            catch (Exception ex)
            {
                ExceptionLogObject error = new ExceptionLogObject(ex, Application.BaseAppApi,
                  Module.BaseAppApiController, BaseApp.SpellMaster,
                  "category id= "+ category_id+ ", image id="+ image_id);
                int errorId = ExceptionLogger.AddError(error);
            }
            //return image count
            return count;
        }
    }
}
