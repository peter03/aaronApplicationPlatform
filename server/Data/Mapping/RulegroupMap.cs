using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aaronApplicationPlatform.Data.Mapping
{
    public partial class RulegroupMap
        : IEntityTypeConfiguration<aaronApplicationPlatform.Data.Entity.Rulegroup>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<aaronApplicationPlatform.Data.Entity.Rulegroup> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("Rulegroup", "aaap");

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
        public const string TableName = "Rulegroup";

        public const string ColumnId = "Id";
        public const string ColumnName = "Name";
        public const string ColumnSort = "Sort";
        #endregion
    }
}
