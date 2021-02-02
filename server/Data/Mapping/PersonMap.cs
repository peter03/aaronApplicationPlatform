using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aaronApplicationPlatform.Data.Mapping
{
    public partial class PersonMap
        : IEntityTypeConfiguration<aaronApplicationPlatform.Data.Entity.Person>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<aaronApplicationPlatform.Data.Entity.Person> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("Person", "aaap");

            // key
            builder.HasKey(t => t.Id);

            // properties
            builder.Property(t => t.Id)
                .IsRequired()
                .HasColumnName("Id")
                .HasColumnType("int")
                .ValueGeneratedOnAdd();

            builder.Property(t => t.Version)
                .IsRequired()
                .HasColumnName("Version")
                .HasColumnType("int");

            builder.Property(t => t.FirstName)
                .IsRequired()
                .HasColumnName("FirstName")
                .HasColumnType("nvarchar(50)")
                .HasMaxLength(50);

            builder.Property(t => t.LastName)
                .IsRequired()
                .HasColumnName("LastName")
                .HasColumnType("nvarchar(50)")
                .HasMaxLength(50);

            builder.Property(t => t.AddressId)
                .IsRequired()
                .HasColumnName("AddressId")
                .HasColumnType("int");

            builder.Property(t => t.Email)
                .HasColumnName("Email")
                .HasColumnType("nvarchar(128)")
                .HasMaxLength(128);

            builder.Property(t => t.Gender)
                .HasColumnName("Gender")
                .HasColumnType("nvarchar(1)")
                .HasMaxLength(1);

            // relationships
            builder.HasOne(t => t.Address)
                .WithMany(t => t.People)
                .HasForeignKey(d => d.AddressId)
                .HasConstraintName("FK_Person_Address");

            #endregion
        }

        #region Generated Constants
        public const string TableSchema = "aaap";
        public const string TableName = "Person";

        public const string ColumnId = "Id";
        public const string ColumnVersion = "Version";
        public const string ColumnFirstName = "FirstName";
        public const string ColumnLastName = "LastName";
        public const string ColumnAddressId = "AddressId";
        public const string ColumnEmail = "Email";
        public const string ColumnGender = "Gender";
        #endregion
    }
}
