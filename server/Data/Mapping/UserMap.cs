using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aaronApplicationPlatform.Data.Mapping
{
    public partial class UserMap
        : IEntityTypeConfiguration<aaronApplicationPlatform.Data.Entity.User>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<aaronApplicationPlatform.Data.Entity.User> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("User", "aaap");

            // key
            builder.HasKey(t => t.Id);

            // properties
            builder.Property(t => t.Id)
                .IsRequired()
                .HasColumnName("Id")
                .HasColumnType("int")
                .ValueGeneratedOnAdd();

            builder.Property(t => t.LoginName)
                .IsRequired()
                .HasColumnName("LoginName")
                .HasColumnType("nvarchar(40)")
                .HasMaxLength(40);

            builder.Property(t => t.PasswordHash)
                .IsRequired()
                .HasColumnName("PasswordHash")
                .HasColumnType("nvarchar(128)")
                .HasMaxLength(128);

            builder.Property(t => t.PersonId)
                .HasColumnName("PersonId")
                .HasColumnType("int");

            builder.Property(t => t.ChangePwdOnNextLogin)
                .HasColumnName("ChangePwdOnNextLogin")
                .HasColumnType("bit")
                .HasDefaultValueSql("((1))");

            builder.Property(t => t.Disabled)
                .IsRequired()
                .HasColumnName("Disabled")
                .HasColumnType("bit");

            builder.Property(t => t.PreferredLanguageId)
                .HasColumnName("PreferredLanguageId")
                .HasColumnType("int");

            builder.Property(t => t.DateCreated)
                .IsRequired()
                .HasColumnName("DateCreated")
                .HasColumnType("datetime")
                .HasDefaultValueSql("(getdate())");

            builder.Property(t => t.CreatedBy)
                .HasColumnName("CreatedBy")
                .HasColumnType("int");

            // relationships
            builder.HasOne(t => t.PreferredLanguage)
                .WithMany(t => t.PreferredUsers)
                .HasForeignKey(d => d.PreferredLanguageId)
                .HasConstraintName("FK_User_Language");

            builder.HasOne(t => t.Person)
                .WithMany(t => t.Users)
                .HasForeignKey(d => d.PersonId)
                .HasConstraintName("FK_User_Person");

            #endregion
        }

        #region Generated Constants
        public const string TableSchema = "aaap";
        public const string TableName = "User";

        public const string ColumnId = "Id";
        public const string ColumnLoginName = "LoginName";
        public const string ColumnPasswordHash = "PasswordHash";
        public const string ColumnPersonId = "PersonId";
        public const string ColumnChangePwdOnNextLogin = "ChangePwdOnNextLogin";
        public const string ColumnDisabled = "Disabled";
        public const string ColumnPreferredLanguageId = "PreferredLanguageId";
        public const string ColumnDateCreated = "DateCreated";
        public const string ColumnCreatedBy = "CreatedBy";
        #endregion
    }
}
