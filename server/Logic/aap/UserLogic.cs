using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using aaronApplicationPlatform.Data;
using aaronApplicationPlatform.Data.Entity;

namespace aaronApplicationPlatform.Logic
{
    public class UserLogic : BaseLogic<User> 
    {
        public UserLogic()
        {
        }

        public UserLogic(MyDbContext dbContext) : base(dbContext)
        {
        }

    }
}
