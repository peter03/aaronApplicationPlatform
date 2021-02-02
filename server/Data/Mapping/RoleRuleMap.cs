using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aaronApplicationPlatform.Data.Mapping
{
    public partial class RoleRuleMap
        : IEntityTypeConfiguration<aaronApplicationPlatform.Data.Entity.RoleRule>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<aaronApplicationPlatform.Data.Entity.RoleRule> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("RoleRule", "aaap");

            // key
            builder.HasKey(t => new { t.RoleId, t.RuleId });

            // properties
            builder.Property(t => t.RoleId)
                .IsRequired()
                .HasColumnName("RoleId")
                .HasColumnType("int");

            builder.Property(t => t.RuleId)
                .IsRequired()
                .HasColumnName("RuleId")
                .HasColumnType("int");

            // relationships
            builder.HasOne(t => t.Role)
                .WithMany(t => t.RoleRules)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("FK_RoleRule_Role");

            builder.HasOne(t => t.Rule)
                .WithMany(t => t.RoleRules)
                .HasForeignKey(d => d.RuleId)
                .HasConstraintName("FK_RoleRule_Rule");

            #endregion
        }

        #region Generated Constants
        public const string TableSchema = "aaap";
        public const string TableName = "RoleRule";

        public const string ColumnRoleId = "RoleId";
        public const string ColumnRuleId = "RuleId";
        #endregion
    }
}
