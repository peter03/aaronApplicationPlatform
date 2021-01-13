using System;
using System.Collections.Generic;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class RoleRule
    {
        public RoleRule()
        {
            #region Generated Constructor
            #endregion
        }

        #region Generated Properties
        public int RoleId { get; set; }

        public int RuleId { get; set; }

        #endregion

        #region Generated Relationships
        public virtual Role Role { get; set; }

        public virtual Rule Rule { get; set; }

        #endregion

    }
}
