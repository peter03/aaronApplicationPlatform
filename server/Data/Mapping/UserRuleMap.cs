using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aaronApplicationPlatform.Data.Mapping
{
    public partial class UserRuleMap
        : IEntityTypeConfiguration<aaronApplicationPlatform.Data.Entity.UserRule>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<aaronApplicationPlatform.Data.Entity.UserRule> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("UserRule", "aap");

            // key
            builder.HasKey(t => new { t.UserId, t.RuleId });

            // properties
            builder.Property(t => t.UserId)
                .IsRequired()
                .HasColumnName("UserId")
                .HasColumnType("int");

            builder.Property(t => t.RuleId)
                .IsRequired()
                .HasColumnName("RuleId")
                .HasColumnType("int");

            builder.Property(t => t.Deny)
                .HasColumnName("Deny")
                .HasColumnType("bit");

            // relationships
            builder.HasOne(t => t.Rule)
                .WithMany(t => t.UserRules)
                .HasForeignKey(d => d.RuleId)
                .HasConstraintName("FK_UserRule_Rule");

            builder.HasOne(t => t.User)
                .WithMany(t => t.UserRules)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_UserRule_User");

            #endregion
        }

        #region Generated Constants
        public const string TableSchema = "aap";
        public const string TableName = "UserRule";

        public const string ColumnUserId = "UserId";
        public const string ColumnRuleId = "RuleId";
        public const string ColumnDeny = "Deny";
        #endregion
    }
}
