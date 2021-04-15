using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using aaronApplicationPlatform.Data;
using aaronApplicationPlatform.Data.Entity;

namespace aaronApplicationPlatform.Logic
{
    public class MenuLogic : BaseLogic<Menu> 
    {
        public MenuLogic()
        {
        }

        public MenuLogic(MyDbContext dbContext) : base(dbContext)
        {
        }

        public IEnumerable<Menu> GetListConsiderRights()
        {
            var qry = _dbContext.Menus.AsNoTracking().Include(e => e.Rule);
            var res = GetListByQuery(qry);



            return res;
        }


    }
}
