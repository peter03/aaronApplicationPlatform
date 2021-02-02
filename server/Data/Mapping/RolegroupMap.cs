using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aaronApplicationPlatform.Data.Mapping
{
    public partial class RolegroupMap
        : IEntityTypeConfiguration<aaronApplicationPlatform.Data.Entity.Rolegroup>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<aaronApplicationPlatform.Data.Entity.Rolegroup> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("Rolegroup", "aaap");

            // key
            builder.HasKey(t => t.Id);

            // properties
            builder.Property(t => t.Id)
                .IsRequired()
                .HasColumnName("Id")
                .HasColumnType("int")
                .ValueGeneratedOnAdd();

            builder.Property(t => t.Name)
                .IsRequired()
                .HasColumnName("Name")
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
        public const string TableName = "Rolegroup";

        public const string ColumnId = "Id";
        public const string ColumnName = "Name";
        public const string ColumnSort = "Sort";
        #endregion
    }
}
