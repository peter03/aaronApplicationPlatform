using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using aaronApplicationPlatform.Data;
using aaronApplicationPlatform.Data.Entity;
using aaronApplicationPlatform.Logic;
using aaronApplicationPlatform.Interface;
using aaronApplicationPlatform.Authentication;

namespace aaronApplicationPlatform.Controller
{
    [Authorize]
    public abstract class BaseController<L, T> : ControllerBase where L: BaseLogic<T>, new() where T: class, IId, new()
    {

        private readonly L _Logic;
        protected L Logic
        {
            get { return _Logic; }
        }

        private IUserService _UserContext;
        protected IUserService UserContext
        {
            get { return _UserContext; }
        }

        public BaseController(MyDbContext dbContext, IUserService userContext)
        {
            _Logic = new L();
            _Logic.DbContext = dbContext;
            _UserContext = userContext;
        }

        [HttpGet]
        [Route("list")]
        public virtual IEnumerable<T> GetList()
        {
            return _Logic.GetList();
        }

        [HttpDelete("{id}")]
        public virtual void Delete(int id)
        {
            _Logic.Delete(id);
        }

        [HttpPost]
        [Route("upsert")]
        //public virtual T Upsert([FromBody] T entity)
        public virtual T Upsert(T entity)
        {
            _Logic.Upsert(entity);
            return entity;
        }

    }
}
