using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aaronApplicationPlatform.Data.Mapping
{
    public partial class AddressMap
        : IEntityTypeConfiguration<aaronApplicationPlatform.Data.Entity.Address>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<aaronApplicationPlatform.Data.Entity.Address> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("Address", "aaap");

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

            builder.Property(t => t.Disabled)
                .IsRequired()
                .HasColumnName("Disabled")
                .HasColumnType("bit");

            builder.Property(t => t.Name1)
                .IsRequired()
                .HasColumnName("Name1")
                .HasColumnType("nvarchar(40)")
                .HasMaxLength(40);

            builder.Property(t => t.Name2)
                .HasColumnName("Name2")
                .HasColumnType("nvarchar(40)")
                .HasMaxLength(40);

            builder.Property(t => t.Street)
                .HasColumnName("Street")
                .HasColumnType("nvarchar(50)")
                .HasMaxLength(50);

            builder.Property(t => t.Zip)
                .HasColumnName("Zip")
                .HasColumnType("nvarchar(20)")
                .HasMaxLength(20);

            builder.Property(t => t.City)
                .HasColumnName("City")
                .HasColumnType("nvarchar(50)")
                .HasMaxLength(50);

            builder.Property(t => t.CountryId)
                .IsRequired()
                .HasColumnName("CountryId")
                .HasColumnType("int");

            // relationships
            builder.HasOne(t => t.Country)
                .WithMany(t => t.Addresses)
                .HasForeignKey(d => d.CountryId)
                .HasConstraintName("FK_Address_Country");

            #endregion
        }

        #region Generated Constants
        public const string TableSchema = "aaap";
        public const string TableName = "Address";

        public const string ColumnId = "Id";
        public const string ColumnVersion = "Version";
        public const string ColumnDisabled = "Disabled";
        public const string ColumnName1 = "Name1";
        public const string ColumnName2 = "Name2";
        public const string ColumnStreet = "Street";
        public const string ColumnZip = "Zip";
        public const string ColumnCity = "City";
        public const string ColumnCountryId = "CountryId";
        #endregion
    }
}
