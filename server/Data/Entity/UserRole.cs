using System;
using System.Collections.Generic;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class UserRole
    {
        public UserRole()
        {
            #region Generated Constructor
            #endregion
        }

        #region Generated Properties
        public int UserId { get; set; }

        public int RoleId { get; set; }

        #endregion

        #region Generated Relationships
        public virtual Role Role { get; set; }

        public virtual User User { get; set; }

        #endregion

    }
}
