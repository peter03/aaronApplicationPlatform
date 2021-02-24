using System;
using System.Collections.Generic;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class Person
    {
        public Person()
        {
            #region Generated Constructor
            Users = new HashSet<User>();
            #endregion
        }

        #region Generated Properties
        public int Id { get; set; }

        public int Version { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int? AddressId { get; set; }

        public string Email { get; set; }

        public string Gender { get; set; }

        #endregion

        #region Generated Relationships
        public virtual Address Address { get; set; }

        public virtual ICollection<User> Users { get; set; }

        #endregion

    }
}
