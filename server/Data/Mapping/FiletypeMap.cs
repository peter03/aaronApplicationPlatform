using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aaronApplicationPlatform.Data.Mapping
{
    public partial class FiletypeMap
        : IEntityTypeConfiguration<aaronApplicationPlatform.Data.Entity.Filetype>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<aaronApplicationPlatform.Data.Entity.Filetype> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("Filetype", "aaap");

            // key
            builder.HasKey(t => t.Id);

            // properties
            builder.Property(t => t.Id)
                .IsRequired()
                .HasColumnName("Id")
                .HasColumnType("int");

            builder.Property(t => t.Name)
                .IsRequired()
                .HasColumnName("Name")
                .HasColumnType("nvarchar(80)")
                .HasMaxLength(80);

            // relationships
            #endregion
        }

        #region Generated Constants
        public const string TableSchema = "aaap";
        public const string TableName = "Filetype";

        public const string ColumnId = "Id";
        public const string ColumnName = "Name";
        #endregion
    }
}
