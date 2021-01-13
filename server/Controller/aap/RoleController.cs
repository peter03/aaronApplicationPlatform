using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using aaronApplicationPlatform.Data;
using aaronApplicationPlatform.Data.Entity;
using aaronApplicationPlatform.Interface;
using aaronApplicationPlatform.Authentication;
using aaronApplicationPlatform.Logic;

namespace aaronApplicationPlatform.Controller
{
    [Route("api/role")]
    [ApiController]
    public class RoleController : BaseController<RoleLogic, Role>
    {
        public RoleController(MyDbContext dbContext, IUserService userContext) : base(dbContext, userContext)
        {
        }

    }
  }
