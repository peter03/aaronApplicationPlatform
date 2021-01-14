using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace aaronApplicationPlatform.Data
{
    public partial class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options)
            : base(options)
        {
        }

        #region Generated Properties
        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Language> Languages { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Menu> Menus { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Rolegroup> Rolegroups { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.RoleRule> RoleRules { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Role> Roles { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Rulegroup> Rulegroups { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.Rule> Rules { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.UserRole> UserRoles { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.UserRule> UserRules { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.UserRuleView> UserRuleViews { get; set; }

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.User> Users { get; set; }

        #endregion

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region Generated Configuration
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.LanguageMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.MenuMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.RolegroupMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.RoleMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.RoleRuleMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.RulegroupMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.RuleMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.UserMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.UserRoleMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.UserRuleMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.UserRuleViewMap());
            #endregion
        }
    }
}
