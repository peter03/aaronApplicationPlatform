using System;
using System.Collections.Generic;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class User
    {
        public User()
        {
            #region Generated Constructor
            #endregion
        }

        #region Generated Properties
        public int Id { get; set; }

        public string LoginName { get; set; }

        public string PasswordMD5 { get; set; }

        public bool ChangePwdOnNextLogin { get; set; }

        public bool Disabled { get; set; }

        public int? PreferredLanguageId { get; set; }

        public DateTime DateCreated { get; set; }

        public int? CreatedBy { get; set; }

        #endregion

        #region Generated Relationships
        public virtual Language PreferredLanguage { get; set; }

        #endregion

    }
}