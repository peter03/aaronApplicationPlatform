/*
	create/update application database
*/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- create database
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = N'aap_demo')
    BEGIN
        CREATE DATABASE [aap_demo]
    END;
go

USE [aap_demo]
go

IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = N'aap' )
    EXEC('CREATE SCHEMA [aap]');
go

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aap].[Language]'))
	begin
		CREATE TABLE [aap].[Language](
			[Id] [int] IDENTITY(1,1) NOT NULL,
			[Shortcut] [nvarchar](4) NOT NULL,
			[Description] nvarchar(80) null,
			[Sort] [int] NULL,
			CONSTRAINT [PK_Language] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		INSERT INTO [aap].[Language] ([Shortcut],[Description]) VALUES  ('en', 'English');
	end

IF  NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aap].[User]'))
	begin
		CREATE TABLE [aap].[User]
		(
			[Id] [int] IDENTITY(1,1) NOT NULL,
			[LoginName] nvarchar(40) not null,
			[PasswordMD5] nvarchar(128) not null,
			[ChangePwdOnNextLogin] [bit] NOT NULL default(1),
			[Disabled] [bit] not null default(0),
			[PreferredLanguageId] [int] NULL,
			[DateCreated] [datetime] NOT NULL default(getdate()),
			[CreatedBy] [int] null,
			CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		CREATE UNIQUE INDEX IX_LoginName ON [aap].[User] (LoginName);   

		ALTER TABLE [aap].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Language] FOREIGN KEY([PreferredLanguageId]) REFERENCES [aap].[Language] ([Id])
		ALTER TABLE [aap].[User] CHECK CONSTRAINT [FK_User_Language]
		
		-- DON'T FORGET: CHANGE PASSWORD FOR ADMIN!!!
		INSERT INTO [aap].[User] ([LoginName], [PasswordMD5]) VALUES ('admin', 'ba1f2511fc30423bdbb183fe33f3dd0f');	-- 123

	end

go