using System;
using System.Collections.Generic;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class Rolegroup
    {
        public Rolegroup()
        {
            #region Generated Constructor
            Roles = new HashSet<Role>();
            #endregion
        }

        #region Generated Properties
        public int Id { get; set; }

        public string Name { get; set; }

        public int? Sort { get; set; }

        #endregion

        #region Generated Relationships
        public virtual ICollection<Role> Roles { get; set; }

        #endregion

    }
}
