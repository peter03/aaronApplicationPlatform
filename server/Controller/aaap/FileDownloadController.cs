using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web; 
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.EntityFrameworkCore;

using System.Text.Json;
using System.Text.Json.Serialization;

using aaronApplicationPlatform.Data;
using aaronApplicationPlatform.Data.Entity;
using aaronApplicationPlatform.Interface;
using aaronApplicationPlatform.Authentication;
using aaronApplicationPlatform.Logic;

namespace pskapi.Controllers
{
    [Route("api/file")]
    [ApiController]
    public class FileDownloadController : Controller
    {

        private FilespecLogic _Logic;
        private IUserService _UserContext;

        public FileDownloadController(MyDbContext dbContext, IUserService userContext)
        {
            _Logic = new FilespecLogic();
            _Logic.DbContext = dbContext;
            _UserContext = userContext;
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("download")]  
        public IActionResult DownloadFile(int id) 
        {  

            Filespec ent = _Logic.GetById(id, true);
            string mimeType = GetMimeTypeByFilename(ent.Filename);
            return File(ent.Filecontent, mimeType);
        }

        #region helper

        private string GetMimeTypeByFilename(string fileName) 
        {
            var provider = new FileExtensionContentTypeProvider();
            string contentType;
            if(!provider.TryGetContentType(fileName, out contentType))
            {
                contentType = "application/octet-stream";
            }
            return contentType;
        }

        #endregion  

    }
 }
