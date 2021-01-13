using System;
using System.Collections.Generic;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class UserRule
    {
        public UserRule()
        {
            #region Generated Constructor
            #endregion
        }

        #region Generated Properties
        public int UserId { get; set; }

        public int RuleId { get; set; }

        public bool? Deny { get; set; }

        #endregion

        #region Generated Relationships
        public virtual Rule Rule { get; set; }

        public virtual User User { get; set; }

        #endregion

    }
}
