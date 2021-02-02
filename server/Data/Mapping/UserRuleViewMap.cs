using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aaronApplicationPlatform.Data.Mapping
{
    public partial class UserRuleViewMap
        : IEntityTypeConfiguration<aaronApplicationPlatform.Data.Entity.UserRuleView>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<aaronApplicationPlatform.Data.Entity.UserRuleView> builder)
        {
            #region Generated Configure
            // table
            builder.ToView("UserRuleView", "aaap");

            // key
            builder.HasNoKey();

            // properties
            builder.Property(t => t.RoleId)
                .HasColumnName("RoleId")
                .HasColumnType("int");

            builder.Property(t => t.RolegroupId)
                .HasColumnName("RolegroupId")
                .HasColumnType("int");

            builder.Property(t => t.RoleName)
                .HasColumnName("RoleName")
                .HasColumnType("nvarchar(128)")
                .HasMaxLength(128);

            builder.Property(t => t.RuleId)
                .IsRequired()
                .HasColumnName("RuleId")
                .HasColumnType("int");

            builder.Property(t => t.RulegroupId)
                .IsRequired()
                .HasColumnName("RulegroupId")
                .HasColumnType("int");

            builder.Property(t => t.RuleName)
                .IsRequired()
                .HasColumnName("RuleName")
                .HasColumnType("nvarchar(128)")
                .HasMaxLength(128);

            builder.Property(t => t.Description)
                .HasColumnName("Description")
                .HasColumnType("nvarchar(255)")
                .HasMaxLength(255);

            builder.Property(t => t.Id)
                .IsRequired()
                .HasColumnName("Id")
                .HasColumnType("int");

            builder.Property(t => t.LoginName)
                .IsRequired()
                .HasColumnName("LoginName")
                .HasColumnType("nvarchar(40)")
                .HasMaxLength(40);

            builder.Property(t => t.Denied)
                .IsRequired()
                .HasColumnName("Denied")
                .HasColumnType("bit");

            builder.Property(t => t.FromRole)
                .HasColumnName("FromRole")
                .HasColumnType("bit");

            // relationships
            #endregion
        }

        #region Generated Constants
        public const string TableSchema = "aaap";
        public const string TableName = "UserRuleView";

        public const string ColumnRoleId = "RoleId";
        public const string ColumnRolegroupId = "RolegroupId";
        public const string ColumnRoleName = "RoleName";
        public const string ColumnRuleId = "RuleId";
        public const string ColumnRulegroupId = "RulegroupId";
        public const string ColumnRuleName = "RuleName";
        public const string ColumnDescription = "Description";
        public const string ColumnId = "Id";
        public const string ColumnLoginName = "LoginName";
        public const string ColumnDenied = "Denied";
        public const string ColumnFromRole = "FromRole";
        #endregion
    }
}
