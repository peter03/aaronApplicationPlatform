using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aaronApplicationPlatform.Data.Mapping
{
    public partial class LanguageMap
        : IEntityTypeConfiguration<aaronApplicationPlatform.Data.Entity.Language>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<aaronApplicationPlatform.Data.Entity.Language> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("Language", "aaap");

            // key
            builder.HasKey(t => t.Id);

            // properties
            builder.Property(t => t.Id)
                .IsRequired()
                .HasColumnName("Id")
                .HasColumnType("int")
                .ValueGeneratedOnAdd();

            builder.Property(t => t.Shortcut)
                .IsRequired()
                .HasColumnName("Shortcut")
                .HasColumnType("nvarchar(4)")
                .HasMaxLength(4);

            builder.Property(t => t.Description)
                .HasColumnName("Description")
                .HasColumnType("nvarchar(80)")
                .HasMaxLength(80);

            builder.Property(t => t.Sort)
                .HasColumnName("Sort")
                .HasColumnType("int");

            // relationships
            #endregion
        }

        #region Generated Constants
        public const string TableSchema = "aaap";
        public const string TableName = "Language";

        public const string ColumnId = "Id";
        public const string ColumnShortcut = "Shortcut";
        public const string ColumnDescription = "Description";
        public const string ColumnSort = "Sort";
        #endregion
    }
}
