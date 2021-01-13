using System;
using System.Collections.Generic;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class Rule
    {
        public Rule()
        {
            #region Generated Constructor
            RoleRules = new HashSet<RoleRule>();
            UserRules = new HashSet<UserRule>();
            #endregion
        }

        #region Generated Properties
        public int Id { get; set; }

        public int RulegroupId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        #endregion

        #region Generated Relationships
        public virtual ICollection<RoleRule> RoleRules { get; set; }

        public virtual Rulegroup Rulegroup { get; set; }

        public virtual ICollection<UserRule> UserRules { get; set; }

        #endregion

    }
}
