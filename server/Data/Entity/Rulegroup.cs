using System;
using System.Collections.Generic;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class Rulegroup
    {
        public Rulegroup()
        {
            #region Generated Constructor
            Rules = new HashSet<Rule>();
            #endregion
        }

        #region Generated Properties
        public int Id { get; set; }

        public string Name { get; set; }

        public int? Sort { get; set; }

        #endregion

        #region Generated Relationships
        public virtual ICollection<Rule> Rules { get; set; }

        #endregion

    }
}
