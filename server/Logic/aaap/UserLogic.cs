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
    public partial class UserLogic : BaseLogic<User> 
    {
        public UserLogic()
        {
        }

        private PersonLogic _PersonLogic;
        private PersonLogic PersonLogic
        {
            get
            {
                if (_PersonLogic == null)
                {
                    _PersonLogic = new PersonLogic(_dbContext);
                }
                return _PersonLogic;
            }
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

                PersonLogic.Upsert(entity.Person);
                entity.PersonId = entity.Person.Id;

                // 1st remove roles
                if (entity.Id != 0)
                {
                    _dbContext.UserRoles.RemoveRange(_dbContext.UserRoles.Where(e => e.UserId == entity.Id));
                }

                // update password?
                if (!String.IsNullOrEmpty(entity.Password))
                {
                    entity.PasswordHash = entity.Password.ToMd5Hash();
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
                    var list = user.UserRoles.Cast<IMappingEntity>();
                    user.RoleId = list.ToIntArray();
                    // TransformRoleList(user);
                    //user.RoleId = CollectTargetIds(user.UserRoles.Cast<IMappingEntity>());  // convert IEnumerable<IMappingEntity> to int[]
                    user.UserRoles = null;    // remove navigation values
                }
            };
            return result;
        }
        public User GetByLoginNameAndPwd(string loginName, string pwdHash, bool throwExIfNotFound = false)
        {
            User result = GetList().Where(e => e.LoginName.Equals(loginName, StringComparison.OrdinalIgnoreCase) && e.PasswordHash == pwdHash).FirstOrDefault();
            if (result == null && throwExIfNotFound)
            {
                throw new Exception(String.Format("Record with LoginName = {0} not found!"));
            }
            return result;
        }

    }
}
