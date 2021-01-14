using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aaronApplicationPlatform.Data.Mapping
{
    public partial class MenuMap
        : IEntityTypeConfiguration<aaronApplicationPlatform.Data.Entity.Menu>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<aaronApplicationPlatform.Data.Entity.Menu> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("Menu", "aap");

            // key
            builder.HasKey(t => t.Id);

            // properties
            builder.Property(t => t.Id)
                .IsRequired()
                .HasColumnName("Id")
                .HasColumnType("int")
                .ValueGeneratedOnAdd();

            builder.Property(t => t.ParentId)
                .HasColumnName("ParentId")
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

            builder.Property(t => t.Route)
                .IsRequired()
                .HasColumnName("Route")
                .HasColumnType("nvarchar(128)")
                .HasMaxLength(128);

            builder.Property(t => t.RuleId)
                .HasColumnName("RuleId")
                .HasColumnType("int");

            builder.Property(t => t.SettingAsJson)
                .HasColumnName("SettingAsJson")
                .HasColumnType("nvarchar(max)");

            builder.Property(t => t.Sort)
                .HasColumnName("Sort")
                .HasColumnType("int");

            // relationships
            builder.HasOne(t => t.ParentMenu)
                .WithMany(t => t.ParentMenus)
                .HasForeignKey(d => d.ParentId)
                .HasConstraintName("FK_Menu_Menu");

            builder.HasOne(t => t.Rule)
                .WithMany(t => t.Menus)
                .HasForeignKey(d => d.RuleId)
                .HasConstraintName("FK_Menu_Rule");

            #endregion
        }

        #region Generated Constants
        public const string TableSchema = "aap";
        public const string TableName = "Menu";

        public const string ColumnId = "Id";
        public const string ColumnParentId = "ParentId";
        public const string ColumnName = "Name";
        public const string ColumnDescription = "Description";
        public const string ColumnRoute = "Route";
        public const string ColumnRuleId = "RuleId";
        public const string ColumnSettingAsJson = "SettingAsJson";
        public const string ColumnSort = "Sort";
        #endregion
    }
}
