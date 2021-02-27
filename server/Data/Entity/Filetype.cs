using System;
using System.Collections.Generic;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class Filetype
    {
        public Filetype()
        {
            #region Generated Constructor
            Filespecs = new HashSet<Filespec>();
            #endregion
        }

        #region Generated Properties
        public int Id { get; set; }

        public string Name { get; set; }

        #endregion

        #region Generated Relationships
        public virtual ICollection<Filespec> Filespecs { get; set; }

        #endregion

    }
}
