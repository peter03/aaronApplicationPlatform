using System;
using System.Collections.Generic;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class Country
    {
        public Country()
        {
            #region Generated Constructor
            Addresses = new HashSet<Address>();
            #endregion
        }

        #region Generated Properties
        public int Id { get; set; }

        public string Sortname { get; set; }

        public string Name { get; set; }

        public int Phonecode { get; set; }

        public int? Sort { get; set; }

        public bool Disabled { get; set; }

        #endregion

        #region Generated Relationships
        public virtual ICollection<Address> Addresses { get; set; }

        #endregion

    }
}
