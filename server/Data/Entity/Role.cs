using System;
using System.Collections.Generic;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class Role
    {
        public Role()
        {
            #region Generated Constructor
            RoleRules = new HashSet<RoleRule>();
            UserRoles = new HashSet<UserRole>();
            #endregion
        }

        #region Generated Properties
        public int Id { get; set; }

        public int RolegroupId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        #endregion

        #region Generated Relationships
        public virtual Rolegroup Rolegroup { get; set; }

        public virtual ICollection<RoleRule> RoleRules { get; set; }

        public virtual ICollection<UserRole> UserRoles { get; set; }

        #endregion

    }
}
