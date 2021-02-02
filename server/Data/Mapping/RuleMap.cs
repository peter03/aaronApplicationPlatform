using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aaronApplicationPlatform.Data.Mapping
{
    public partial class RuleMap
        : IEntityTypeConfiguration<aaronApplicationPlatform.Data.Entity.Rule>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<aaronApplicationPlatform.Data.Entity.Rule> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("Rule", "aaap");

            // key
            builder.HasKey(t => t.Id);

            // properties
            builder.Property(t => t.Id)
                .IsRequired()
                .HasColumnName("Id")
                .HasColumnType("int")
                .ValueGeneratedOnAdd();

            builder.Property(t => t.RulegroupId)
                .IsRequired()
                .HasColumnName("RulegroupId")
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
            builder.HasOne(t => t.Rulegroup)
                .WithMany(t => t.Rules)
                .HasForeignKey(d => d.RulegroupId)
                .HasConstraintName("FK_Rule_RuleGroup");

            #endregion
        }

        #region Generated Constants
        public const string TableSchema = "aaap";
        public const string TableName = "Rule";

        public const string ColumnId = "Id";
        public const string ColumnRulegroupId = "RulegroupId";
        public const string ColumnName = "Name";
        public const string ColumnDescription = "Description";
        #endregion
    }
}
