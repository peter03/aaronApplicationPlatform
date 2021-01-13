using System;
using System.Collections.Generic;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class UserRuleView
    {
        public UserRuleView()
        {
            #region Generated Constructor
            #endregion
        }

        #region Generated Properties
        public int? RoleId { get; set; }

        public int? RolegroupId { get; set; }

        public string RoleName { get; set; }

        public int RuleId { get; set; }

        public int RulegroupId { get; set; }

        public string RuleName { get; set; }

        public string Description { get; set; }

        public int Id { get; set; }

        public string LoginName { get; set; }

        public bool Denied { get; set; }

        public bool? FromRole { get; set; }

        #endregion

        #region Generated Relationships
        #endregion

    }
}
