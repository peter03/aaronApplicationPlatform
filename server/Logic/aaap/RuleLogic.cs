using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using aaronApplicationPlatform.Data;
using aaronApplicationPlatform.Data.Entity;

namespace aaronApplicationPlatform.Logic
{
    public class RuleLogic : BaseLogic<Rule> 
    {
        public RuleLogic()
        {
        }

        public RuleLogic(MyDbContext dbContext) : base(dbContext)
        {
        }

    }
}
