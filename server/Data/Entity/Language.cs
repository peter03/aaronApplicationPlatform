using System;
using System.Collections.Generic;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class Language
    {
        public Language()
        {
            #region Generated Constructor
            PreferredUsers = new HashSet<User>();
            #endregion
        }

        #region Generated Properties
        public int Id { get; set; }

        public string Shortcut { get; set; }

        public string Description { get; set; }

        public int? Sort { get; set; }

        #endregion

        #region Generated Relationships
        public virtual ICollection<User> PreferredUsers { get; set; }

        #endregion

    }
}
