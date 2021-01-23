using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using aaronApplicationPlatform.Data;
using aaronApplicationPlatform.Data.Entity;

namespace aaronApplicationPlatform.Logic
{
    public class UserRuleViewLogic
    {
        
        protected MyDbContext _dbContext;

        public UserRuleViewLogic()
        {
        }

        public UserRuleViewLogic(MyDbContext dbContext)
        {
            this._dbContext = dbContext;
        }

        public IEnumerable<UserRuleView> GetList(int[] userIds)
        {
            var res = _dbContext.UserRuleViews.Where(e => userIds.Contains(e.Id));
            return res;
        }

    }
}
