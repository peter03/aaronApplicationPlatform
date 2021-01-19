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
			[Id] [int] IDENTITY(1000,1) NOT NULL,
			[Shortcut] [nvarchar](4) NOT NULL,
			[Description] nvarchar(80) null,
			[Sort] [int] NULL,
			CONSTRAINT [PK_Language] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		SET IDENTITY_INSERT [aap].[Language] ON
		INSERT INTO [aap].[Language] ([Id],[Shortcut],[Description]) VALUES  (1, 'de', 'German');
		INSERT INTO [aap].[Language] ([Id],[Shortcut],[Description]) VALUES  (2, 'en', 'English');
		SET IDENTITY_INSERT [aap].[Language] OFF

	end

IF  NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aap].[User]'))
	begin
		CREATE TABLE [aap].[User]
		(
			[Id] [int] IDENTITY(1000,1) NOT NULL,
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
		
		SET IDENTITY_INSERT [aap].[User] ON
		-- DON'T FORGET: CHANGE PASSWORD FOR ADMIN!!!
		INSERT INTO [aap].[User] ([Id], [LoginName], [PasswordMD5]) VALUES (1, 'admin', 'ba1f2511fc30423bdbb183fe33f3dd0f');	-- 123
		SET IDENTITY_INSERT [aap].[User] OFF

	end

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aap].[Rolegroup]'))
	begin
		CREATE TABLE [aap].[Rolegroup](
			[Id] [int] IDENTITY(1000,1) NOT NULL,
			[Name] nvarchar(80) not null,
			[Sort] [int] NULL,
			CONSTRAINT [PK_Rolegroup] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		SET IDENTITY_INSERT [aap].[Rolegroup] ON
		INSERT INTO [aap].[Rolegroup] ([Id], [Name]) VALUES  (1, 'Administrators');
		SET IDENTITY_INSERT [aap].[Rolegroup] OFF

	end

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aap].[Role]'))
	begin

		CREATE TABLE [aap].[Role](
			[Id] [int] IDENTITY(1000,1) NOT NULL,
			[RolegroupId] [int] NOT NULL,
			[Name] [nvarchar](128) NOT NULL,
			[Description] [nvarchar](255) NULL,
			CONSTRAINT [PK_Role] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		ALTER TABLE [aap].[Role]  WITH CHECK ADD  CONSTRAINT [FK_Role_RoleGroup] FOREIGN KEY([RoleGroupId])	REFERENCES [aap].[RoleGroup] ([Id])
		ALTER TABLE [aap].[Role] CHECK CONSTRAINT [FK_Role_RoleGroup]

		SET IDENTITY_INSERT [aap].[Role] ON
		INSERT INTO [aap].[Role] ([Id],[RolegroupId],[Name]) VALUES  (1, 1, 'Administrator');
		SET IDENTITY_INSERT [aap].[Role] OFF

	end

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aap].[Rulegroup]'))
	begin
		CREATE TABLE [aap].[Rulegroup](
			[Id] [int] IDENTITY(1000,1) NOT NULL,
			[Name] nvarchar(80) not null,
			[Sort] [int] NULL,
			CONSTRAINT [PK_Rulegroup] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		SET IDENTITY_INSERT [aap].[Rulegroup] ON
		INSERT INTO [aap].[Rulegroup] ([Id], [Name]) VALUES  (1, 'Menu Items');
		SET IDENTITY_INSERT [aap].[Rulegroup] OFF

	end

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aap].[Rule]'))
	begin

		CREATE TABLE [aap].[Rule](
			[Id] [int] IDENTITY(1000,1) NOT NULL,
			[RulegroupId] [int] NOT NULL,
			[Name] [nvarchar](128) NOT NULL,
			[Description] [nvarchar](255) NULL,
			CONSTRAINT [PK_Rule] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		ALTER TABLE [aap].[Rule]  WITH CHECK ADD  CONSTRAINT [FK_Rule_RuleGroup] FOREIGN KEY([RuleGroupId]) REFERENCES [aap].[RuleGroup] ([Id])
		ALTER TABLE [aap].[Rule] CHECK CONSTRAINT [FK_Rule_RuleGroup]

		SET IDENTITY_INSERT [aap].[Rule] ON
		INSERT INTO [aap].[Rule] ([Id],[RulegroupId],[Name]) VALUES  (1, 1, 'Show menu item System');
		INSERT INTO [aap].[Rule] ([Id],[RulegroupId],[Name]) VALUES  (2, 1, 'Show menu item User');
		INSERT INTO [aap].[Rule] ([Id],[RulegroupId],[Name]) VALUES  (3, 1, 'Show menu item Rolegroup');
		INSERT INTO [aap].[Rule] ([Id],[RulegroupId],[Name]) VALUES  (4, 1, 'Show menu item Role');
		INSERT INTO [aap].[Rule] ([Id],[RulegroupId],[Name]) VALUES  (5, 1, 'Show menu item Rulegroup');
		INSERT INTO [aap].[Rule] ([Id],[RulegroupId],[Name]) VALUES  (6, 1, 'Show menu item Rule');
		SET IDENTITY_INSERT [aap].[Rule] OFF

	end

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aap].[RoleRule]'))
	begin
		CREATE TABLE [aap].[RoleRule](
			[RoleId] [int] NOT NULL,
			[RuleId] [int] NOT NULL,
			CONSTRAINT [PK_RoleRule] PRIMARY KEY CLUSTERED 
			(
				[RoleId] ASC,
				[RuleId] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		ALTER TABLE [aap].[RoleRule]  WITH CHECK ADD  CONSTRAINT [FK_RoleRule_Role] FOREIGN KEY([RoleId]) REFERENCES [aap].[Role] ([Id])
		ALTER TABLE [aap].[RoleRule] CHECK CONSTRAINT [FK_RoleRule_Role]
		ALTER TABLE [aap].[RoleRule]  WITH CHECK ADD  CONSTRAINT [FK_RoleRule_Rule] FOREIGN KEY([RuleId]) REFERENCES [aap].[Rule] ([Id])
		ALTER TABLE [aap].[RoleRule] CHECK CONSTRAINT [FK_RoleRule_Rule]
	end

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aap].[UserRole]'))
	begin
		CREATE TABLE [aap].[UserRole](
			[UserId] [int] NOT NULL,
			[RoleId] [int] NOT NULL,
			CONSTRAINT [PK_UserRole] PRIMARY KEY CLUSTERED 
			(
				[UserId] ASC,
				[RoleId] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		ALTER TABLE [aap].[UserRole]  WITH CHECK ADD  CONSTRAINT [FK_UserRole_Role] FOREIGN KEY([RoleId]) REFERENCES [aap].[Role] ([Id])
		ALTER TABLE [aap].[UserRole] CHECK CONSTRAINT [FK_UserRole_Role]
		ALTER TABLE [aap].[UserRole]  WITH CHECK ADD  CONSTRAINT [FK_UserRole_User] FOREIGN KEY([UserId]) REFERENCES [aap].[User] ([Id]) ON DELETE CASCADE
		ALTER TABLE [aap].[UserRole] CHECK CONSTRAINT [FK_UserRole_User]
	end

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aap].[UserRule]'))
	begin
		CREATE TABLE [aap].[UserRule](
			[UserId] [int] NOT NULL,
			[RuleId] [int] NOT NULL,
			[Deny] [bit] NULL,
			CONSTRAINT [PK_UserRule] PRIMARY KEY CLUSTERED 
			(
				[UserId] ASC,
				[RuleId] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		ALTER TABLE [aap].[UserRule]  WITH CHECK ADD  CONSTRAINT [FK_UserRule_Rule] FOREIGN KEY([RuleId]) REFERENCES [aap].[Rule] ([Id])
		ALTER TABLE [aap].[UserRule] CHECK CONSTRAINT [FK_UserRule_Rule]

		ALTER TABLE [aap].[UserRule]  WITH CHECK ADD  CONSTRAINT [FK_UserRule_User] FOREIGN KEY([UserId]) REFERENCES [aap].[User] ([Id]) ON DELETE CASCADE
		ALTER TABLE [aap].[UserRule] CHECK CONSTRAINT [FK_UserRule_User]
	end

IF EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[aap].[UserRuleView]')) DROP VIEW [aap].[UserRuleView];
go

create VIEW [aap].[UserRuleView]
AS

	-- permission from Roles
	SELECT Ro.[Id] as [RoleId]
		  ,Ro.[RolegroupId]
		  ,Ro.[Name] as [RoleName]
		  ,RoRu.[RuleId]
		  ,Ru.[RulegroupId]
		  ,Ru.[Name] as [RuleName]
		  ,Ru.[Description]
		  ,Us.[Id]
		  ,Us.[LoginName]
		  ,ISNULL(UsRu.[Deny], 0) AS [Denied]
		  ,cast (1 as bit) as [FromRole] 
	  FROM [aap].[Role] Ro
	  inner join [aap].[RoleRule] RoRu on RoRu.[RoleID]=Ro.[Id]
	  inner join [aap].[Rule] Ru on Ru.[Id]=RoRu.[RuleId]
	  inner join [aap].[UserRole] UsRo on UsRo.[RoleId]=Ro.[Id]
	  inner join [aap].[User] Us on Us.[Id]=UsRo.[UserId]
	  left join [aap].[UserRule] UsRu on (UsRu.[UserId]=Us.[Id] and UsRu.[RuleId]= Ru.[Id] and UsRu.[Deny]=1)

	-- additional permissions
	union 
	SELECT null as [RoleId]
		  ,null as [RolegroupId]
		  ,null as [RoleName]
		  ,Ru.[Id] as [RuleId]
		  ,Ru.[RulegroupId]
		  ,Ru.[Name] as [RuleName]
		  ,Ru.[Description]      
		  ,Us.[Id] as [UserId]
		  ,Us.[LoginName]
		  ,isnull(UsRu.[Deny], 0) as [Denied]
		  ,cast( 0 as bit) as [FromRole] 
	  FROM [aap].[Rule] Ru
	  inner join [aap].[UserRule] UsRu on UsRu.[RuleID]=Ru.[Id]
	  inner join [aap].[User] Us on Us.[Id]=UsRu.[UserID]
	  where isnull(UsRu.[Deny],0)=0	/* no denies */

go

-- [aap].[Menu]

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aap].[Menu]'))
	begin

		CREATE TABLE [aap].[Menu](
			[Id] [int] IDENTITY(1000,1) NOT NULL,
			[ParentId] [int] NULL,
			[Name] [nvarchar](128) NOT NULL,
			[Description] [nvarchar](255) NULL,
			[Route] [nvarchar](128),
			[RuleId] [int] NULL,
			[SettingAsJson] [nvarchar](max) NULL,
			[Sort] [int] NULL,
			CONSTRAINT [PK_Menu] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
	
		ALTER TABLE [aap].[Menu]  WITH CHECK ADD  CONSTRAINT [FK_Menu_Menu] FOREIGN KEY([ParentId]) REFERENCES [aap].[Menu] ([Id])
		ALTER TABLE [aap].[Menu] CHECK CONSTRAINT [FK_Menu_Menu]
		ALTER TABLE [aap].[Menu]  WITH CHECK ADD  CONSTRAINT [FK_Menu_Rule] FOREIGN KEY([RuleId]) REFERENCES [aap].[Rule] ([Id])
		ALTER TABLE [aap].[Menu] CHECK CONSTRAINT [FK_Menu_Rule]

		SET IDENTITY_INSERT [aap].[Menu] ON
		insert into [aap].[Menu] ([Id], [ParentId], [Name], [Route]) values (1, null, 'aap.module.mainmenu.systemadmin', ''); 
		insert into [aap].[Menu] ([Id], [ParentId], [Name], [Route]) values (2, 1, 'aap.module.mainmenu.useradmin', '/user'); 
		insert into [aap].[Menu] ([Id], [ParentId], [Name], [Route]) values (3, 1, 'aap.module.mainmenu.rolegroupadmin', '/rolegroup'); 
		insert into [aap].[Menu] ([Id], [ParentId], [Name], [Route]) values (4, 1, 'aap.module.mainmenu.roleadmin', '/role'); 
		insert into [aap].[Menu] ([Id], [ParentId], [Name], [Route]) values (5, 1, 'aap.module.mainmenu.rulegroupadmin', '/rulegroup'); 
		insert into [aap].[Menu] ([Id], [ParentId], [Name], [Route]) values (6, 1, 'aap.module.mainmenu.ruleadmin', '/rule'); 
		insert into [aap].[Menu] ([Id], [ParentId], [Name], [Route]) values (7, 1, 'aap.module.mainmenu.menu', '/menu'); 
		SET IDENTITY_INSERT [aap].[Menu] OFF

	end
--

go	
