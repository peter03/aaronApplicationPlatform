using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aaronApplicationPlatform.Data.Mapping
{
    public partial class RoleMap
        : IEntityTypeConfiguration<aaronApplicationPlatform.Data.Entity.Role>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<aaronApplicationPlatform.Data.Entity.Role> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("Role", "aap");

            // key
            builder.HasKey(t => t.Id);

            // properties
            builder.Property(t => t.Id)
                .IsRequired()
                .HasColumnName("Id")
                .HasColumnType("int")
                .ValueGeneratedOnAdd();

            builder.Property(t => t.RolegroupId)
                .IsRequired()
                .HasColumnName("RolegroupId")
                .HasColumnType("int");

            builder.Property(t => t.Name)
                .IsRequired()
                .HasColumnName("Name")
                .HasColumnType("nvarchar(128)")
                .HasMaxLength(128);

            builder.Property(t => t.Description)
                .HasColumnName("Description")
                .HasColumnType("nvarchar(255)")
                .HasMaxLength(255);

            // relationships
            builder.HasOne(t => t.Rolegroup)
                .WithMany(t => t.Roles)
                .HasForeignKey(d => d.RolegroupId)
                .HasConstraintName("FK_Role_RoleGroup");

            #endregion
        }

        #region Generated Constants
        public const string TableSchema = "aap";
        public const string TableName = "Role";

        public const string ColumnId = "Id";
        public const string ColumnRolegroupId = "RolegroupId";
        public const string ColumnName = "Name";
        public const string ColumnDescription = "Description";
        #endregion
    }
}
