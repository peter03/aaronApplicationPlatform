using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using aaronApplicationPlatform.Data;
using aaronApplicationPlatform.Data.Entity;

namespace aaronApplicationPlatform.Logic
{
    public class RoleLogic : BaseLogic<Role> 
    {
        public RoleLogic()
        {
        }

        public RoleLogic(MyDbContext dbContext) : base(dbContext)
        {
        }

    }
}
