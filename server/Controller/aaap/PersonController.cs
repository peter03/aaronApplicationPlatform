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
    [Route("api/person")]
    [ApiController]
    public class PersonController : BaseController<PersonLogic, Person>
    {
        public PersonController(MyDbContext dbContext, IUserService userContext) : base(dbContext, userContext)
        {
        }

        [HttpGet]
        [Route("list")]
        public override IEnumerable<Person> GetList()
        {
            // include person address
            return Logic.GetListIncludeAddress();
        }

    }
}
