using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aaronApplicationPlatform.Data.Mapping
{
    public partial class FilespecMap
        : IEntityTypeConfiguration<aaronApplicationPlatform.Data.Entity.Filespec>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<aaronApplicationPlatform.Data.Entity.Filespec> builder)
        {
            #region Generated Configure
            // table
            builder.ToTable("Filespec", "aaap");

            // key
            builder.HasKey(t => t.Id);

            // properties
            builder.Property(t => t.Id)
                .IsRequired()
                .HasColumnName("Id")
                .HasColumnType("int")
                .ValueGeneratedOnAdd();

            builder.Property(t => t.Filename)
                .IsRequired()
                .HasColumnName("Filename")
                .HasColumnType("nvarchar(1024)")
                .HasMaxLength(1024);

            builder.Property(t => t.Filecontent)
                .HasColumnName("Filecontent")
                .HasColumnType("varbinary(max)");

            builder.Property(t => t.FiletypeId)
                .IsRequired()
                .HasColumnName("FiletypeId")
                .HasColumnType("int");

            builder.Property(t => t.Description)
                .HasColumnName("Description")
                .HasColumnType("nvarchar(1024)")
                .HasMaxLength(1024);

            builder.Property(t => t.Filesize)
                .HasColumnName("Filesize")
                .HasColumnType("int");

            builder.Property(t => t.Imagewidth)
                .HasColumnName("Imagewidth")
                .HasColumnType("int");

            builder.Property(t => t.Imageheight)
                .HasColumnName("Imageheight")
                .HasColumnType("int");

            builder.Property(t => t.UserId)
                .IsRequired()
                .HasColumnName("UserId")
                .HasColumnType("int");

            // relationships
            builder.HasOne(t => t.Filetype)
                .WithMany(t => t.Filespecs)
                .HasForeignKey(d => d.FiletypeId)
                .HasConstraintName("FK_Filespec_Filetype");

            builder.HasOne(t => t.User)
                .WithMany(t => t.Filespecs)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_Filespec_User");

            #endregion
        }

        #region Generated Constants
        public const string TableSchema = "aaap";
        public const string TableName = "Filespec";

        public const string ColumnId = "Id";
        public const string ColumnFilename = "Filename";
        public const string ColumnFilecontent = "Filecontent";
        public const string ColumnFiletypeId = "FiletypeId";
        public const string ColumnDescription = "Description";
        public const string ColumnFilesize = "Filesize";
        public const string ColumnImagewidth = "Imagewidth";
        public const string ColumnImageheight = "Imageheight";
        public const string ColumnUserId = "UserId";
        #endregion
    }
}
