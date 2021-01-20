using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

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

        public override void Upsert(User entity)
        {
            if (entity.IsAdmin)   // suppress changes of admin data
            {
                return;
            }

            using (var transaction = _dbContext.Database.BeginTransaction())
            {

                // PersonLogic.Upsert(entity.Person);

                // 1st remove roles
                if (entity.Id != 0)
                {
                    _dbContext.UserRoles.RemoveRange(_dbContext.UserRoles.Where(e => e.UserId == entity.Id));
                }

                base.Upsert(entity);

                // 2nd upsert roles
                if (entity.RoleId != null && entity.RoleId.Any())
                {
                    foreach (int roleId in entity.RoleId)
                    {
                        _dbContext.UserRoles.Add(new UserRole() { UserId = entity.Id, RoleId = roleId });
                    }
                    _dbContext.SaveChanges();
                }

                transaction.Commit();
            }
        }

        public IEnumerable<User> GetListIncludeRole()
        {
            return _dbContext.Users.AsNoTracking().Include(e => e.UserRoles);
        }

        public IEnumerable<User> GetListIncludeRoleId()
        {
            List<User> result = GetListIncludeRole().ToList();
            if (result != null && result.Any())
            {
                foreach (var user in result)
                {
                    TransformRoleList(user);
                }
            };
            return result;
        }

        private void TransformRoleList(User entity)
        {

            // return int[] with ids instead of IEnumerable<Shop>

            if (entity.UserRoles != null && entity.UserRoles.Any())
            {
                entity.RoleId = entity.UserRoles.Select(s => s.RoleId).ToArray();
            }
            entity.UserRoles = null;    // remove navigation values
        }


    }
}
