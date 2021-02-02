using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using aaronApplicationPlatform.Data;
using aaronApplicationPlatform.Data.Entity;

namespace aaronApplicationPlatform.Logic
{
    public class RolegroupLogic : BaseLogic<Rolegroup> 
    {
        public RolegroupLogic()
        {
        }

        public RolegroupLogic(MyDbContext dbContext) : base(dbContext)
        {
        }

    }
}
