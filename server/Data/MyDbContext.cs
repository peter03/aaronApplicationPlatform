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

        public virtual DbSet<aaronApplicationPlatform.Data.Entity.User> Users { get; set; }

        #endregion

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region Generated Configuration
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.LanguageMap());
            modelBuilder.ApplyConfiguration(new aaronApplicationPlatform.Data.Mapping.UserMap());
            #endregion
        }
    }
}
