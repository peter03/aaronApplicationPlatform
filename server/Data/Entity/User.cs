using System;
using System.Collections.Generic;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class User
    {
        public User()
        {
            #region Generated Constructor
            UserRoles = new HashSet<UserRole>();
            UserRules = new HashSet<UserRule>();
            #endregion
        }

        #region Generated Properties
        public int Id { get; set; }

        public string LoginName { get; set; }

        public string PasswordHash { get; set; }

        public int? PersonId { get; set; }

        public bool ChangePwdOnNextLogin { get; set; }

        public bool Disabled { get; set; }

        public int? PreferredLanguageId { get; set; }

        public DateTime DateCreated { get; set; }

        public int? CreatedBy { get; set; }

        #endregion

        #region Generated Relationships
        public virtual Person Person { get; set; }

        public virtual Language PreferredLanguage { get; set; }

        public virtual ICollection<UserRole> UserRoles { get; set; }

        public virtual ICollection<UserRule> UserRules { get; set; }

        #endregion

    }
}
