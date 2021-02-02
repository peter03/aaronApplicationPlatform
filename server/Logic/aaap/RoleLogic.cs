using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using aaronApplicationPlatform;
using aaronApplicationPlatform.Data;
using aaronApplicationPlatform.Data.Entity;
using aaronApplicationPlatform.Interface;

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

        public override void Upsert(Role entity)
        {
            using (var transaction = _dbContext.Database.BeginTransaction())
            {
                // 1st remove roles
                if (entity.Id != 0)
                {
                    _dbContext.RoleRules.RemoveRange(_dbContext.RoleRules.Where(e => e.RoleId == entity.Id));
                }

                base.Upsert(entity);

                // 2nd upsert roles
                if (entity.RuleId != null && entity.RuleId.Any())
                {
                    foreach (int ruleId in entity.RuleId)
                    {
                        _dbContext.RoleRules.Add(new RoleRule() { RoleId = entity.Id, RuleId = ruleId });
                    }
                    _dbContext.SaveChanges();
                }

                transaction.Commit();
            }
        }

        public IEnumerable<Role> GetListIncludeRule()
        {
            return _dbContext.Roles.AsNoTracking().Include(e => e.RoleRules);
        }

        public IEnumerable<Role> GetListIncludeRuleId()
        {
            List<Role> result = GetListIncludeRule().ToList();
            if (result != null && result.Any())
            {
                foreach (var role in result)
                {
                    var list = role.RoleRules.Cast<IMappingEntity>();
                    role.RuleId = list.ToIntArray();
                    role.RoleRules = null;    // remove navigation values
                }
            };
            return result;
        }

    }
}
