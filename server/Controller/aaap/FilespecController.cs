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

namespace aaronApplicationPlatform.Controller
{
    [Route("api/file")]
    [ApiController]
    public class FilespecController : BaseController<FilespecLogic, Filespec>
    {
        public FilespecController(MyDbContext dbContext, IUserService userContext) : base(dbContext, userContext)
        {
        }

        [HttpPost, DisableRequestSizeLimit]  
        [Route("upload")]  
        public async Task<IActionResult> UploadFile() 
        {

            var filespecData = Request.Form["Filespec"];

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };
            Filespec entity = JsonSerializer.Deserialize<Filespec>(filespecData, options);
            //entity.Filename = file.FileName;
            //entity.Filesize = (Int32)file.Length;
            entity.UserId = 1;  // to do


            // var file = Request.Form.Files[0];
            var files = Request.Form.Files;
            if (files != null && files.Count() > 0)
            {
                var file = files[0];
                if (!FileIsSupported(file.FileName))
                {
                    throw new Exception(String.Format("Filetype {0} is not supported!", Path.GetExtension(file.FileName)));
                }

                using (var memoryStream = new MemoryStream())
                {
                    await file.CopyToAsync(memoryStream);
                    entity.Filecontent = memoryStream.ToArray();

                    if (FileIsImage(file.FileName))
                    {
                        Image image = Image.FromStream(memoryStream);
                        entity.Imagewidth = image.Width;
                        entity.Imageheight = image.Height;
                    }
                }

                entity.Filesize = (Int32)file.Length;
                entity.Filename = file.FileName;

            }

            Logic.Upsert(entity);
            return Ok(entity);
        }

        // moved method to a separate class since overriding [Authorize] attribute of base class was not working?
        // [AllowAnonymous]
        // [HttpGet]
        // [Route("download")]  
        // public IActionResult DownloadFile(int id) {  

        //     Filespec ent = Logic.GetById(id, true);
        //     string mimeType = GetMimeTypeByFilename(ent.Filename);
        //     return File(ent.Filecontent, mimeType);
        // }

        #region helper

        // private string GetMimeTypeByFilename(string fileName) 
        // {
        //     var provider = new FileExtensionContentTypeProvider();
        //     string contentType;
        //     if(!provider.TryGetContentType(fileName, out contentType))
        //     {
        //         contentType = "application/octet-stream";
        //     }
        //     return contentType;
        // }

        private bool FileIsSupported(string fileName)
        {
            string ext = Path.GetExtension(fileName).TrimStart('.');
            return SupportedFileExtensions.Contains(ext);
        }

        private bool FileIsImage(string fileName)
        {
            string ext = Path.GetExtension(fileName).TrimStart('.');
            return ImageExtensions.Contains(ext);
        }

        private string[] SupportedFileExtensions
        {
            get {
                return (new string[] {}).Concat(ImageExtensions).ToArray();
            }
        }

        private string[] ImageExtensions
        {
            get {
                return new string[] { "gif", "jpg", "png" };
            }
        }

        #endregion  

    }
 }
