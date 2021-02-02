using System;
using System.Collections.Generic;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class Address
    {
        public Address()
        {
            #region Generated Constructor
            People = new HashSet<Person>();
            #endregion
        }

        #region Generated Properties
        public int Id { get; set; }

        public int Version { get; set; }

        public bool Disabled { get; set; }

        public string Name1 { get; set; }

        public string Name2 { get; set; }

        public string Street { get; set; }

        public string Zip { get; set; }

        public string City { get; set; }

        public int CountryId { get; set; }

        #endregion

        #region Generated Relationships
        public virtual Country Country { get; set; }

        public virtual ICollection<Person> People { get; set; }

        #endregion

    }
}
