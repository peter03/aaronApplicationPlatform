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
    [Route("api/rolegroup")]
    [ApiController]
    public class RolegroupController : BaseController<RolegroupLogic, Rolegroup>
    {
        public RolegroupController(MyDbContext dbContext, IUserService userContext) : base(dbContext, userContext)
        {
        }

    }
  }