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
    [Route("api/address")]
    [ApiController]
    public class AddressController : BaseController<AddressLogic, Address>
    {
        public AddressController(MyDbContext dbContext, IUserService userContext) : base(dbContext, userContext)
        {
        }

    }
}
