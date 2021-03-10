using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations.Schema;

using aaronApplicationPlatform.Interface;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class RoleRule : IMappingEntity
    {
        [NotMapped]
        public int SourceId 
        { 
            get { return RoleId;  }
            set { RoleId = value; } 
        }

        [NotMapped]
        public int TargetId
        {
            get { return RuleId; }
            set { RuleId = value; }
        }

    }

}
