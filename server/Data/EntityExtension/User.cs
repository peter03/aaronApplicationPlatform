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
        public virtual IEnumerable<int> ShopId { get; set; }

        [NotMapped]
        public bool IsAdmin { 
            get 
            {
                return LoginName.Equals("admin", StringComparison.OrdinalIgnoreCase);
            }
         }
         
        [NotMapped]
        public bool IsShopOwner { 
            get 
            {
                return RoleId != null && RoleId.Contains(2);
            }
         }

        [NotMapped]
        public bool IsShopAssistant { 
            get 
            {
                return RoleId != null && RoleId.Contains(3);
            }
         }

        [NotMapped]
        public bool IsSupplier { 
            get 
            {
                return RoleId != null && RoleId.Contains(4);
            }
         }

    }

}
