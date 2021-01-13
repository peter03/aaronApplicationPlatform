using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aaronApplicationPlatform.Data.Mapping
{
    public partial class UserRoleMap
        : IEntityTypeConfiguration<aaronApplicationPlatform.Data.Entity.UserRole>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<aaronApplicationPlatform.Data.Entity.UserRole> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("UserRole", "aap");

            // key
            builder.HasKey(t => new { t.UserId, t.RoleId });

            // properties
            builder.Property(t => t.UserId)
                .IsRequired()
                .HasColumnName("UserId")
                .HasColumnType("int");

            builder.Property(t => t.RoleId)
                .IsRequired()
                .HasColumnName("RoleId")
                .HasColumnType("int");

            // relationships
            builder.HasOne(t => t.Role)
                .WithMany(t => t.UserRoles)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("FK_UserRole_Role");

            builder.HasOne(t => t.User)
                .WithMany(t => t.UserRoles)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_UserRole_User");

            #endregion
        }

        #region Generated Constants
        public const string TableSchema = "aap";
        public const string TableName = "UserRole";

        public const string ColumnUserId = "UserId";
        public const string ColumnRoleId = "RoleId";
        #endregion
    }
}
