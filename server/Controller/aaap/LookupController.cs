using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using aaronApplicationPlatform.Data;
using aaronApplicationPlatform.Data.Entity;
using aaronApplicationPlatform.Interface;
using aaronApplicationPlatform.Authentication;
using aaronApplicationPlatform.Logic;

namespace aaronApplicationPlatform.Controller
{
    [Route("api/lookup")]
    [ApiController]
    public class LookupController : ControllerBase
    {

        protected readonly MyDbContext _dbContext;

        public LookupController(MyDbContext dbContext, IUserService userContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("filetype")]
        public  IEnumerable<LookupDto> GetFiletype()
        {
            List<LookupDto> res = null;
            IEnumerable<Filetype> list =_dbContext.Filetypes.ToList();
            if (list != null && list.Any())
            {
                res = new List<LookupDto>();
                foreach (var itm in list)
                {
                    res.Add(new LookupDto(itm.Id, itm.Name));
                }
            };
            return res;
        }

    }
}
