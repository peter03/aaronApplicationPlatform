using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using aaronApplicationPlatform.Data;
using aaronApplicationPlatform.Data.Entity;

namespace aaronApplicationPlatform.Logic
{
    public partial class PersonLogic : BaseLogic<Person> 
    {
        public PersonLogic()
        {
        }

        public PersonLogic(MyDbContext dbContext) : base(dbContext)
        {
        }

        public IEnumerable<Person> GetListIncludeAddress()
        {
            IQueryable<Person> qry = _dbContext.Set<Person>().Include("Address");
            return base.GetListByQuery(qry);
        }

        public override void Upsert(Person entity)
        {
            entity.Address = null;  // otherwise EF will update Address!
            base.Upsert(entity);
        }

    }
}
