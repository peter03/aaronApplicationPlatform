using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aaronApplicationPlatform.Data.Mapping
{
    public partial class CountryMap
        : IEntityTypeConfiguration<aaronApplicationPlatform.Data.Entity.Country>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<aaronApplicationPlatform.Data.Entity.Country> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("Country", "aaap");

            // key
            builder.HasKey(t => t.Id);

            // properties
            builder.Property(t => t.Id)
                .IsRequired()
                .HasColumnName("Id")
                .HasColumnType("int")
                .ValueGeneratedOnAdd();

            builder.Property(t => t.Sortname)
                .IsRequired()
                .HasColumnName("Sortname")
                .HasColumnType("nvarchar(3)")
                .HasMaxLength(3);

            builder.Property(t => t.Name)
                .IsRequired()
                .HasColumnName("Name")
                .HasColumnType("nvarchar(255)")
                .HasMaxLength(255);

            builder.Property(t => t.Phonecode)
                .IsRequired()
                .HasColumnName("Phonecode")
                .HasColumnType("int");

            builder.Property(t => t.Sort)
                .HasColumnName("Sort")
                .HasColumnType("int");

            builder.Property(t => t.Disabled)
                .IsRequired()
                .HasColumnName("Disabled")
                .HasColumnType("bit");

            // relationships
            #endregion
        }

        #region Generated Constants
        public const string TableSchema = "aaap";
        public const string TableName = "Country";

        public const string ColumnId = "Id";
        public const string ColumnSortname = "Sortname";
        public const string ColumnName = "Name";
        public const string ColumnPhonecode = "Phonecode";
        public const string ColumnSort = "Sort";
        public const string ColumnDisabled = "Disabled";
        #endregion
    }
}
