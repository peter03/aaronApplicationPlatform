using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

    }
}
