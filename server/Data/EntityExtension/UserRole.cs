using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations.Schema;

using aaronApplicationPlatform.Interface;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class UserRole : IMappingEntity
    {
        [NotMapped]
        public int SourceId 
        { 
            get { return UserId;  }
            set { UserId = value; } 
        }

        [NotMapped]
        public int TargetId
        {
            get { return RoleId; }
            set { RoleId = value; }
        }

    }

}
