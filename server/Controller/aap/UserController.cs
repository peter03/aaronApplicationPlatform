using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

using aaronApplicationPlatform.Data;
using aaronApplicationPlatform.Data.Entity;
using aaronApplicationPlatform.Interface;
using aaronApplicationPlatform.Authentication;
using aaronApplicationPlatform.Logic;

namespace aaronApplicationPlatform.Controller
{
    [Route("api/user")]
    [ApiController]
    public class UserController : BaseController<UserLogic, User>
    {
        public UserController(MyDbContext dbContext, IUserService userContext) : base(dbContext, userContext)
        {
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("info")]
        
        public string GetInfo()
        {
            return this.RouteData.ToString();
        }

        [HttpGet]
        [Route("list")]
        public override IEnumerable<User> GetList()
        {
            return Logic.GetListIncludeRoleId().Where(e => e.Id > 1);     // skip Admin!
        }

    }
  }
