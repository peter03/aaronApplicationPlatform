using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations.Schema;

using aaronApplicationPlatform.Interface;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class User : IId
    {
        [NotMapped]
        public virtual IEnumerable<int> RoleId { get; set; }

        [NotMapped]
        public bool IsAdmin { 
            get 
            {
                return LoginName.Equals("admin", StringComparison.OrdinalIgnoreCase);
            }
         }

    }

}
