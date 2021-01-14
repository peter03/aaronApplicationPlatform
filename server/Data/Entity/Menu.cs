using System;
using System.Collections.Generic;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class Menu
    {
        public Menu()
        {
            #region Generated Constructor
            ParentMenus = new HashSet<Menu>();
            #endregion
        }

        #region Generated Properties
        public int Id { get; set; }

        public int? ParentId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Route { get; set; }

        public int? RuleId { get; set; }

        public string SettingAsJson { get; set; }

        public int? Sort { get; set; }

        #endregion

        #region Generated Relationships
        public virtual Menu ParentMenu { get; set; }

        public virtual ICollection<Menu> ParentMenus { get; set; }

        public virtual Rule Rule { get; set; }

        #endregion

    }
}
