using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;

namespace BasicAppAPI.Models
{
    public class Connection
    {
        public MySqlConnection sqlDbCon = new MySqlConnection();
        public MySqlCommand sqlDbCmd = new MySqlCommand();
        DBHelper dhelper = new DBHelper();

        //get count of number of images to be returned on each service call from configuration file
        int content_limit = int.Parse(ConfigurationManager.AppSettings["content_limit"]);

        //Constructor
        public Connection()
        {
            Initialize();
        }

        //Initialize values
        private void Initialize()
        {
            string connectionString;
            connectionString = ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;
            sqlDbCon = new MySqlConnection(connectionString);
        }

        //add new application 
        public int addApp(AppData app)
        {
            int appId = 0;

            //Open connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create command
                sqlDbCmd = new MySqlCommand("sp_AddApp", sqlDbCon);
                sqlDbCmd.CommandType = CommandType.StoredProcedure;
                sqlDbCmd.Parameters.AddWithValue("appname", app.appname);

                //Create a data reader and Execute the command
                MySqlDataReader dataReader = sqlDbCmd.ExecuteReader();

                //Read the data and store appId
                if (dataReader.Read())
                {
                    appId = dataReader.GetInt32("appId");
                }

                //Close data reader
                dataReader.Close();

                //Close connection
                dhelper.CloseConnection(sqlDbCon);

                return appId;
            }
            else
            {
                //Close connection
                dhelper.CloseConnection(sqlDbCon);
                return appId;
            }
        }

        //get application details
        public AppData getAppData(int appId)
        {
            AppData appData = new AppData();

            //Open connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create command
                sqlDbCmd = new MySqlCommand("sp_GetAppData");
                sqlDbCmd.CommandType = CommandType.StoredProcedure;
                sqlDbCmd.Parameters.AddWithValue("app_id", appId);

                //Create data reader and execute the command
                sqlDbCmd.Connection = sqlDbCon;
                MySqlDataReader datareader = sqlDbCmd.ExecuteReader();
                

                //Read the data and store app details
                if (datareader.Read())
                {
                    appData.appId = datareader.GetInt32("appId");
                    appData.appname = datareader.GetString("appName");
                }

                //Close data reader
                datareader.Close();

                //close connection
                dhelper.CloseConnection(sqlDbCon);

                return appData;
            }
            else
            {
                //Close connection
                dhelper.CloseConnection(sqlDbCon);
                return appData;
            }
        }

        //get list of all apllications
        public List<AppData> getAllApp()
        {
            List<AppData> appDataList = new List<AppData>();

            //Open Connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create command
                sqlDbCmd = new MySqlCommand("sp_GetAllApp", sqlDbCon);
                sqlDbCmd.CommandType = CommandType.StoredProcedure;

                //Create data reader and execute query
                MySqlDataReader datareader = sqlDbCmd.ExecuteReader();

                //Read the data and store all app details
                while (datareader.Read())
                {
                    AppData appData = new AppData();

                    appData.appId = datareader.GetInt32("id");
                    appData.appname = datareader.GetString("name");
                    appDataList.Add(appData);
                }

                //close data reader
                datareader.Close();

                //Close connection
                dhelper.CloseConnection(sqlDbCon);

                return appDataList;
            }
            else
            {
                //Close connection
                dhelper.CloseConnection(sqlDbCon);
                return appDataList;
            }
        }

        //get list of all active categories by application id and updation date
        public List<CategoryData> getCategoryData(int appId, string updationDate)
        {
            List<CategoryData> catDataList = new List<CategoryData>();
            if (updationDate == "null")
            {
                updationDate = "";
            }
            else
            {
                DateTime updateDate = Convert.ToDateTime(updationDate);
                updationDate = updateDate.ToString("yyyy-MM-dd HH:mm:ss");
            }

            //Open Connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create command
                sqlDbCmd = new MySqlCommand("sp_GetCategoryData", sqlDbCon);
                sqlDbCmd.CommandType = CommandType.StoredProcedure;
                sqlDbCmd.Parameters.AddWithValue("applicationId", appId);
                sqlDbCmd.Parameters.AddWithValue("updateDate", updationDate);

                //Create data reader and execute query
                MySqlDataReader datareader = sqlDbCmd.ExecuteReader();

                //Read the data and store all app details
                while (datareader.Read())
                {
                    CategoryData catData = new CategoryData();

                    catData.appId = datareader.GetInt32("appId");
                    catData.catId = datareader.GetInt32("catId");
                    catData.catImage = datareader.GetString("catImageUrl");
                    catData.catName = datareader.GetString("catName");
                    catData.contentCount = datareader.GetInt32("catContentCount");
                    catData.createDate = datareader.GetString("createdDate");
                    catData.updateDate = datareader.GetString("updatedDate");
                    catDataList.Add(catData);
                }

                //close data reader
                datareader.Close();

                //Close connection
                dhelper.CloseConnection(sqlDbCon);

                return catDataList;
            }
            else
            {
                //Close connection
                dhelper.CloseConnection(sqlDbCon);
                return catDataList;
            }
        }

        //add new category
        public int addCategory(CategoryData cat)
        {
            int catId = 0;

            //Open connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create command
                sqlDbCmd = new MySqlCommand("sp_AddCategory", sqlDbCon);
                sqlDbCmd.CommandType = CommandType.StoredProcedure;
                sqlDbCmd.Parameters.AddWithValue("appId", cat.appId);
                sqlDbCmd.Parameters.AddWithValue("catName", cat.catName);
                sqlDbCmd.Parameters.AddWithValue("catImage", cat.catImage);

                //Create a data reader and Execute the command
                MySqlDataReader dataReader = sqlDbCmd.ExecuteReader();

                //Read the data and store appId
                if (dataReader.Read())
                {
                    catId = dataReader.GetInt32("catId");
                }

                //Close data reader
                dataReader.Close();

                //Close connection
                dhelper.CloseConnection(sqlDbCon);

                return catId;
            }
            else
            {
                //Close connection
                dhelper.CloseConnection(sqlDbCon);
                return catId;
            }
        }

        //edit category details
        public bool EditCategory(CategoryData cat)
        {
            int id = 0;
            bool result = false;

            //Open connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create command
                sqlDbCmd = new MySqlCommand("sp_EditCategory", sqlDbCon);
                sqlDbCmd.CommandType = CommandType.StoredProcedure;
                sqlDbCmd.Parameters.AddWithValue("catId", cat.catId);
                sqlDbCmd.Parameters.AddWithValue("catName", cat.catName);
                sqlDbCmd.Parameters.AddWithValue("catImage", cat.catImage);

                //Execute the command
                id = sqlDbCmd.ExecuteNonQuery();
                if (id != 0)
                    result = true;

                //Close connection
                dhelper.CloseConnection(sqlDbCon);

                return result;
            }
            else
            {
                //Close connection
                dhelper.CloseConnection(sqlDbCon);
                return result;
            }
        }

        //delete category
        public bool deleteCategory(int catId)
        {
            int id = 0;
            bool result = false;

            //Open connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create command
                sqlDbCmd = new MySqlCommand("sp_DeleteCategory", sqlDbCon);
                sqlDbCmd.CommandType = CommandType.StoredProcedure;
                sqlDbCmd.Parameters.AddWithValue("catId", catId);

                //Execute the command
                id = sqlDbCmd.ExecuteNonQuery();
                if (id != 0)
                    result = true;

                //Close connection
                dhelper.CloseConnection(sqlDbCon);

                return result;
            }
            else
            {
                //Close connection
                dhelper.CloseConnection(sqlDbCon);
                return result;
            }
        }

        //get list of all categories
        public List<CategoryData> GetAllCategory()
        {
            List<CategoryData> catDataList = new List<CategoryData>();

            //Open Connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create command
                sqlDbCmd = new MySqlCommand("sp_GetAllCategory", sqlDbCon);
                sqlDbCmd.CommandType = CommandType.StoredProcedure;

                //Create data reader and execute query
                MySqlDataReader datareader = sqlDbCmd.ExecuteReader();

                //Read the data and store all app details
                while (datareader.Read())
                {
                    CategoryData catData = new CategoryData();

                    catData.appId = datareader.GetInt32("app_id");
                    catData.catId = datareader.GetInt32("id");
                    catData.catImage = datareader.GetString("image");
                    catData.catName = datareader.GetString("name");
                    catData.contentCount = datareader.GetInt32("content_count");
                    catData.createDate = datareader.GetString("creation_date");
                    catData.updateDate = datareader.GetString("updation_date");
                    catDataList.Add(catData);
                }

                //close data reader
                datareader.Close();

                //Close connection
                dhelper.CloseConnection(sqlDbCon);

                return catDataList;
            }
            else
            {
                //Close connection
                dhelper.CloseConnection(sqlDbCon);
                return catDataList;
            }
        }

        //get content data by category id and last content id and updation date
        public List<ContentData> getContentData(int catId, int id, string updationDate)
        {
            List<ContentData> contentDataList = new List<ContentData>();

            if (updationDate == "null")
            {
                updationDate = "";
            }
            else
            {
                DateTime updateDate = Convert.ToDateTime(updationDate);
                updationDate = updateDate.ToString("yyyy-MM-dd HH:mm:ss");
            }

            //Open Connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create command
                sqlDbCmd = new MySqlCommand("sp_GetContentData", sqlDbCon);
                sqlDbCmd.CommandType = CommandType.StoredProcedure;
                sqlDbCmd.Parameters.AddWithValue("cat_id", catId);
                sqlDbCmd.Parameters.AddWithValue("content_id", id);
                sqlDbCmd.Parameters.AddWithValue("updatedDate", updationDate);
                sqlDbCmd.Parameters.AddWithValue("maxlimit", content_limit);

                //Create data reader and execute query
                MySqlDataReader datareader = sqlDbCmd.ExecuteReader();

                //Read the data and store all app details
                while (datareader.Read())
                {
                    ContentData contentData = new ContentData();

                    contentData.contentId = datareader.GetInt32("contentId");
                    contentData.catId = datareader.GetInt32("catId");
                    contentData.contentType = datareader.GetString("contentType");
                    contentData.riddleContent = datareader.GetString("riddleContent");
                    contentData.riddleSolution = datareader.GetString("riddleSolution");
                    contentData.active = datareader.GetInt32("contentActive");
                    contentData.createDate = datareader.GetString("ContentCreatedDate");
                    contentData.updateDate = datareader.GetString("contentUpdatedDate");
                    contentDataList.Add(contentData);
                }

                //close data reader
                datareader.Close();

                //Close connection
                dhelper.CloseConnection(sqlDbCon);

                return contentDataList;
            }
            else
            {
                //Close connection
                dhelper.CloseConnection(sqlDbCon);
                return contentDataList;
            }
        }

        //get content data by category id and last content id and updation date
        public List<ContentData> getAllContentData(int catId, int id, string updationDate)
        {
            List<ContentData> contentDataList = new List<ContentData>();

            if (updationDate == "null")
            {
                updationDate = "";
            }
            else
            {
                DateTime updateDate = Convert.ToDateTime(updationDate);
                updationDate = updateDate.ToString("yyyy-MM-dd HH:mm:ss");
            }

            //Open Connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create command
                sqlDbCmd = new MySqlCommand("sp_GetAllContentData", sqlDbCon);
                sqlDbCmd.CommandType = CommandType.StoredProcedure;
                sqlDbCmd.Parameters.AddWithValue("cat_id", catId);
                sqlDbCmd.Parameters.AddWithValue("content_id", id);
                sqlDbCmd.Parameters.AddWithValue("updatedDate", updationDate);

                //Create data reader and execute query
                MySqlDataReader datareader = sqlDbCmd.ExecuteReader();

                //Read the data and store all app details
                while (datareader.Read())
                {
                    ContentData contentData = new ContentData();

                    contentData.contentId = datareader.GetInt32("contentId");
                    contentData.catId = datareader.GetInt32("catId");
                    contentData.contentType = datareader.GetString("contentType");
                    contentData.riddleContent = datareader.GetString("riddleContent");
                    contentData.riddleSolution = datareader.GetString("riddleSolution");
                    contentData.active = datareader.GetInt32("contentActive");
                    contentData.createDate = datareader.GetString("ContentCreatedDate");
                    contentData.updateDate = datareader.GetString("contentUpdatedDate");
                    contentDataList.Add(contentData);
                }

                //close data reader
                datareader.Close();

                //Close connection
                dhelper.CloseConnection(sqlDbCon);

                return contentDataList;
            }
            else
            {
                //Close connection
                dhelper.CloseConnection(sqlDbCon);
                return contentDataList;
            }
        }

        //add new content
        public int addContent(ContentData content)
        {
            int contentId = 0;

            //Open connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create command
                sqlDbCmd = new MySqlCommand("sp_AddContent", sqlDbCon);
                sqlDbCmd.CommandType = CommandType.StoredProcedure;
                sqlDbCmd.Parameters.AddWithValue("catId", content.catId);
                sqlDbCmd.Parameters.AddWithValue("contentType", content.contentType);
                sqlDbCmd.Parameters.AddWithValue("riddleContent", content.riddleContent); 
                sqlDbCmd.Parameters.AddWithValue("riddleSolution", content.riddleSolution);

                //Create a data reader and Execute the command
                MySqlDataReader dataReader = sqlDbCmd.ExecuteReader();

                //Read the data and store appId
                if (dataReader.Read())
                {
                    contentId = dataReader.GetInt32("contentId");
                }

                //Close data reader
                dataReader.Close();

                //Close connection
                dhelper.CloseConnection(sqlDbCon);

                return contentId;
            }
            else
            {
                //Close connection
                dhelper.CloseConnection(sqlDbCon);
                return contentId;
            }
        }

        //delete content
        public bool deleteContent(int contentId)
        {

            int id = 0;
            bool result = false;

            //Open connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create command
                sqlDbCmd = new MySqlCommand("sp_DeleteContent", sqlDbCon);
                sqlDbCmd.CommandType = CommandType.StoredProcedure;
                sqlDbCmd.Parameters.AddWithValue("contentId", contentId);

                //Execute the command
                id = sqlDbCmd.ExecuteNonQuery();
                if (id != 0)
                    result = true;

                //Close connection
                dhelper.CloseConnection(sqlDbCon);

                return result;
            }
            else
            {
                //Close connection
                dhelper.CloseConnection(sqlDbCon);
                return result;
            }
        }

        //edit content details
        public bool editContent(ContentData content)
        {
            int id = 0;
            bool result = false;

            //Open connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create command
                sqlDbCmd = new MySqlCommand("sp_EditContent", sqlDbCon);
                sqlDbCmd.CommandType = CommandType.StoredProcedure;
                sqlDbCmd.Parameters.AddWithValue("contentId", content.contentId);
                sqlDbCmd.Parameters.AddWithValue("contentType", content.contentType);
                sqlDbCmd.Parameters.AddWithValue("riddleContent", content.riddleContent);
                sqlDbCmd.Parameters.AddWithValue("riddleSolution", content.riddleSolution);
               
                //Execute the command
                id = sqlDbCmd.ExecuteNonQuery();
                if (id != 0)
                    result = true;

                //Close connection
                dhelper.CloseConnection(sqlDbCon);

                return result;
            }
            else
            {
                //Close connection
                dhelper.CloseConnection(sqlDbCon);
                return result;
            }
        }

        //add/update FCM info
        public int updateFCMInfo(UserFcmInfoData info)
        {
            int id = 0;

            //Open connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create command
                sqlDbCmd = new MySqlCommand("sp_UpdateUserFCMInfo", sqlDbCon);
                sqlDbCmd.CommandType = CommandType.StoredProcedure;
                sqlDbCmd.Parameters.AddWithValue("deviceId",info.deviceId);
                sqlDbCmd.Parameters.AddWithValue("fcmId", info.fcmId);

                //Create a data reader and Execute the command
                MySqlDataReader dataReader = sqlDbCmd.ExecuteReader();

                //Read the data and store appId
                if (dataReader.Read())
                {
                    id = dataReader.GetInt32("ID");
                }

                //Close data reader
                dataReader.Close();

                //Close connection
                dhelper.CloseConnection(sqlDbCon);

                return id;
            }
            else
            {
                //Close connection
                dhelper.CloseConnection(sqlDbCon);
                return id;
            }
        }

        //get list of all users FCM info
        public List<UserFcmInfoData> getUserFCMInfo()
        {
            List<UserFcmInfoData> fcmInfoList = new List<UserFcmInfoData>();

            //Open Connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create command
                sqlDbCmd = new MySqlCommand("sp_GetUserFCMInfo", sqlDbCon);
                sqlDbCmd.CommandType = CommandType.StoredProcedure;

                //Create data reader and execute query
                MySqlDataReader datareader = sqlDbCmd.ExecuteReader();

                //Read the data and store all app details
                while (datareader.Read())
                {
                    UserFcmInfoData info = new UserFcmInfoData();

                    info.id = datareader.GetInt32("id");
                    info.deviceId = datareader.GetInt32("device_id");
                    info.fcmId = datareader.GetInt32("fcm_id");
                    info.createDate = datareader.GetString("creation_date"); 
                    info.updateDate = datareader.GetString("updation_date");
                    fcmInfoList.Add(info);
                }

                //close data reader
                datareader.Close();

                //Close connection
                dhelper.CloseConnection(sqlDbCon);

                return fcmInfoList;
            }
            else
            {
                //Close connection
                dhelper.CloseConnection(sqlDbCon);
                return fcmInfoList;
            }
        }


        /**************************************************************Old API's of spell master**********************************************************/

        //Get Image Info
        public List<Image> GetImageInfo(string category_id, string image_id, int image_limit, string updateDate)
        {
            //Create a list to store the result
            List<Image> imageInfo_list = new List<Image>();
            Image image;

            //Open connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create Command
                sqlDbCmd = new MySqlCommand("GetImageInfo", sqlDbCon);
                sqlDbCmd.CommandType = CommandType.StoredProcedure;
                sqlDbCmd.Parameters.AddWithValue("cat_id", category_id);
                sqlDbCmd.Parameters.AddWithValue("image_id", image_id);
                sqlDbCmd.Parameters.AddWithValue("image_limit", image_limit);
                sqlDbCmd.Parameters.AddWithValue("update_date", updateDate);
                //Create a data reader and Execute the command
                MySqlDataReader dataReader = sqlDbCmd.ExecuteReader();
                sqlDbCmd.Connection = sqlDbCon;
                //Read the data and store them in the list
                while (dataReader.Read())
                {
                    image = new Image();
                    //userData.userid = dataReader.GetString("uid");
                    image.id = dataReader.GetString("ID");
                    image.category_id = dataReader.GetString("CategoryID");
                    image.image_name = dataReader.GetString("ImageName");
                    image.image_url = dataReader.GetString("ImageUrl");
                    image.updatedDate = dataReader.GetString("updatedDate");
                    imageInfo_list.Add(image);
                }

                //close Data Reader
                dataReader.Close();

                //close Connection
                dhelper.CloseConnection(sqlDbCon);

                //return list to be displayed
                return imageInfo_list;
            }
            else
            {
                //close connection
                dhelper.CloseConnection(sqlDbCon);
                return imageInfo_list;
            }
        }

        //Get Image Count
        public int GetImageCount(string category_id, string image_id)
        {
            //Create a variable to store the result
            int count = 0;

            //Open connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create Command
                sqlDbCmd = new MySqlCommand("GetImageCount", sqlDbCon);
                sqlDbCmd.CommandType = CommandType.StoredProcedure;
                sqlDbCmd.Parameters.AddWithValue("cat_id", category_id);
                sqlDbCmd.Parameters.AddWithValue("image_id", image_id);
                //Create a data reader and Execute the command
                MySqlDataReader dataReader = sqlDbCmd.ExecuteReader();
                sqlDbCmd.Connection = sqlDbCon;
                //Read the data and store it in the int variable
                while (dataReader.Read())
                {
                    count = dataReader.GetInt32("rows_count");
                }

                //close Data Reader
                dataReader.Close();

                //close Connection
                dhelper.CloseConnection(sqlDbCon);
                //return count variable
                if (count >= 0)
                {
                    return count;
                }
                else
                {
                    return 0;
                }
            }
            else
            {
                //close connection
                dhelper.CloseConnection(sqlDbCon);
                return count;
            }
        }

        //Get Category
        public List<Category> GetCategory()
        {

            //Create a list to store the result
            List<Category> category_list = new List<Category>();
            Category category;

            //Open connection
            if (dhelper.OpenConnection(sqlDbCon))
            {
                //Create Command
                sqlDbCmd = new MySqlCommand("GetCategory", sqlDbCon);
                sqlDbCmd.CommandType = CommandType.StoredProcedure;
                //Create a data reader and Execute the command
                MySqlDataReader dataReader = sqlDbCmd.ExecuteReader();
                sqlDbCmd.Connection = sqlDbCon;
                //Read the data and store them in the list
                while (dataReader.Read())
                {
                    category = new Category();
                    //userData.userid = dataReader.GetString("uid");
                    category.id = dataReader.GetString("id");
                    category.category_name = dataReader.GetString("category_name");
                    category_list.Add(category);
                }

                //close Data Reader
                dataReader.Close();

                //close Connection
                dhelper.CloseConnection(sqlDbCon);

                //return list to be displayed
                return category_list;
            }
            else
            {
                //close connection
                dhelper.CloseConnection(sqlDbCon);
                return category_list;
            }
        }

    }
}