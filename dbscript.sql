/*
	create/update application database
*/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- create database
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = N'aaap_demo')
    BEGIN
        CREATE DATABASE [aaap_demo]
    END;
go

USE [aaap_demo]
go

IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = N'aaap' )
    EXEC('CREATE SCHEMA [aaap]');
go

-- [aaap].[Country]

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aaap].[Country]'))
	begin

	CREATE TABLE [aaap].[Country] (
		[Id] [int] IDENTITY(1000,1) NOT NULL,
		[Sortname] nvarchar(3) NOT NULL,
		[Name] nvarchar(255) NOT NULL,
		[Phonecode] int NOT NULL,
		[Sort] [int] NULL,
		[Disabled] [bit] not null default(0),
		CONSTRAINT [PK_Country] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

	SET IDENTITY_INSERT [aaap].[Country] ON
	
	INSERT INTO [aaap].[Country] ([Id], [Sortname], [Name], [Phonecode]) VALUES
		(1, 'AF', 'Afghanistan', 93),
		(2, 'AL', 'Albania', 355),
		(3, 'DZ', 'Algeria', 213),
		(4, 'AS', 'American Samoa', 1684),
		(5, 'AD', 'Andorra', 376),
		(6, 'AO', 'Angola', 244),
		(7, 'AI', 'Anguilla', 1264),
		(8, 'AQ', 'Antarctica', 0),
		(9, 'AG', 'Antigua And Barbuda', 1268),
		(10, 'AR', 'Argentina', 54),
		(11, 'AM', 'Armenia', 374),
		(12, 'AW', 'Aruba', 297),
		(13, 'AU', 'Australia', 61),
		(14, 'AT', 'Austria', 43),
		(15, 'AZ', 'Azerbaijan', 994),
		(16, 'BS', 'Bahamas The', 1242),
		(17, 'BH', 'Bahrain', 973),
		(18, 'BD', 'Bangladesh', 880),
		(19, 'BB', 'Barbados', 1246),
		(20, 'BY', 'Belarus', 375),
		(21, 'BE', 'Belgium', 32),
		(22, 'BZ', 'Belize', 501),
		(23, 'BJ', 'Benin', 229),
		(24, 'BM', 'Bermuda', 1441),
		(25, 'BT', 'Bhutan', 975),
		(26, 'BO', 'Bolivia', 591),
		(27, 'BA', 'Bosnia and Herzegovina', 387),
		(28, 'BW', 'Botswana', 267),
		(29, 'BV', 'Bouvet Island', 0),
		(30, 'BR', 'Brazil', 55),
		(31, 'IO', 'British Indian Ocean Territory', 246),
		(32, 'BN', 'Brunei', 673),
		(33, 'BG', 'Bulgaria', 359),
		(34, 'BF', 'Burkina Faso', 226),
		(35, 'BI', 'Burundi', 257),
		(36, 'KH', 'Cambodia', 855),
		(37, 'CM', 'Cameroon', 237),
		(38, 'CA', 'Canada', 1),
		(39, 'CV', 'Cape Verde', 238),
		(40, 'KY', 'Cayman Islands', 1345),
		(41, 'CF', 'Central African Republic', 236),
		(42, 'TD', 'Chad', 235),
		(43, 'CL', 'Chile', 56),
		(44, 'CN', 'China', 86),
		(45, 'CX', 'Christmas Island', 61),
		(46, 'CC', 'Cocos (Keeling) Islands', 672),
		(47, 'CO', 'Colombia', 57),
		(48, 'KM', 'Comoros', 269),
		(49, 'CG', 'Republic Of The Congo', 242),
		(50, 'CD', 'Democratic Republic Of The Congo', 242),
		(51, 'CK', 'Cook Islands', 682),
		(52, 'CR', 'Costa Rica', 506),
		(53, 'CI', 'Cote D''Ivoire (Ivory Coast)', 225),
		(54, 'HR', 'Croatia (Hrvatska)', 385),
		(55, 'CU', 'Cuba', 53),
		(56, 'CY', 'Cyprus', 357),
		(57, 'CZ', 'Czech Republic', 420),
		(58, 'DK', 'Denmark', 45),
		(59, 'DJ', 'Djibouti', 253),
		(60, 'DM', 'Dominica', 1767),
		(61, 'DO', 'Dominican Republic', 1809),
		(62, 'TP', 'East Timor', 670),
		(63, 'EC', 'Ecuador', 593),
		(64, 'EG', 'Egypt', 20),
		(65, 'SV', 'El Salvador', 503),
		(66, 'GQ', 'Equatorial Guinea', 240),
		(67, 'ER', 'Eritrea', 291),
		(68, 'EE', 'Estonia', 372),
		(69, 'ET', 'Ethiopia', 251),
		(70, 'XA', 'External Territories of Australia', 61),
		(71, 'FK', 'Falkland Islands', 500),
		(72, 'FO', 'Faroe Islands', 298),
		(73, 'FJ', 'Fiji Islands', 679),
		(74, 'FI', 'Finland', 358),
		(75, 'FR', 'France', 33),
		(76, 'GF', 'French Guiana', 594),
		(77, 'PF', 'French Polynesia', 689),
		(78, 'TF', 'French Southern Territories', 0),
		(79, 'GA', 'Gabon', 241),
		(80, 'GM', 'Gambia The', 220),
		(81, 'GE', 'Georgia', 995),
		(82, 'DE', 'Germany', 49),
		(83, 'GH', 'Ghana', 233),
		(84, 'GI', 'Gibraltar', 350),
		(85, 'GR', 'Greece', 30),
		(86, 'GL', 'Greenland', 299),
		(87, 'GD', 'Grenada', 1473),
		(88, 'GP', 'Guadeloupe', 590),
		(89, 'GU', 'Guam', 1671),
		(90, 'GT', 'Guatemala', 502),
		(91, 'XU', 'Guernsey and Alderney', 44),
		(92, 'GN', 'Guinea', 224),
		(93, 'GW', 'Guinea-Bissau', 245),
		(94, 'GY', 'Guyana', 592),
		(95, 'HT', 'Haiti', 509),
		(96, 'HM', 'Heard and McDonald Islands', 0),
		(97, 'HN', 'Honduras', 504),
		(98, 'HK', 'Hong Kong S.A.R.', 852),
		(99, 'HU', 'Hungary', 36),
		(100, 'IS', 'Iceland', 354),
		(101, 'IN', 'India', 91),
		(102, 'ID', 'Indonesia', 62),
		(103, 'IR', 'Iran', 98),
		(104, 'IQ', 'Iraq', 964),
		(105, 'IE', 'Ireland', 353),
		(106, 'IL', 'Israel', 972),
		(107, 'IT', 'Italy', 39),
		(108, 'JM', 'Jamaica', 1876),
		(109, 'JP', 'Japan', 81),
		(110, 'XJ', 'Jersey', 44),
		(111, 'JO', 'Jordan', 962),
		(112, 'KZ', 'Kazakhstan', 7),
		(113, 'KE', 'Kenya', 254),
		(114, 'KI', 'Kiribati', 686),
		(115, 'KP', 'Korea North', 850),
		(116, 'KR', 'Korea South', 82),
		(117, 'KW', 'Kuwait', 965),
		(118, 'KG', 'Kyrgyzstan', 996),
		(119, 'LA', 'Laos', 856),
		(120, 'LV', 'Latvia', 371),
		(121, 'LB', 'Lebanon', 961),
		(122, 'LS', 'Lesotho', 266),
		(123, 'LR', 'Liberia', 231),
		(124, 'LY', 'Libya', 218),
		(125, 'LI', 'Liechtenstein', 423),
		(126, 'LT', 'Lithuania', 370),
		(127, 'LU', 'Luxembourg', 352),
		(128, 'MO', 'Macau S.A.R.', 853),
		(129, 'MK', 'Macedonia', 389),
		(130, 'MG', 'Madagascar', 261),
		(131, 'MW', 'Malawi', 265),
		(132, 'MY', 'Malaysia', 60),
		(133, 'MV', 'Maldives', 960),
		(134, 'ML', 'Mali', 223),
		(135, 'MT', 'Malta', 356),
		(136, 'XM', 'Man (Isle of)', 44),
		(137, 'MH', 'Marshall Islands', 692),
		(138, 'MQ', 'Martinique', 596),
		(139, 'MR', 'Mauritania', 222),
		(140, 'MU', 'Mauritius', 230),
		(141, 'YT', 'Mayotte', 269),
		(142, 'MX', 'Mexico', 52),
		(143, 'FM', 'Micronesia', 691),
		(144, 'MD', 'Moldova', 373),
		(145, 'MC', 'Monaco', 377),
		(146, 'MN', 'Mongolia', 976),
		(147, 'MS', 'Montserrat', 1664),
		(148, 'MA', 'Morocco', 212),
		(149, 'MZ', 'Mozambique', 258),
		(150, 'MM', 'Myanmar', 95),
		(151, 'NA', 'Namibia', 264),
		(152, 'NR', 'Nauru', 674),
		(153, 'NP', 'Nepal', 977),
		(154, 'AN', 'Netherlands Antilles', 599),
		(155, 'NL', 'Netherlands The', 31),
		(156, 'NC', 'New Caledonia', 687),
		(157, 'NZ', 'New Zealand', 64),
		(158, 'NI', 'Nicaragua', 505),
		(159, 'NE', 'Niger', 227),
		(160, 'NG', 'Nigeria', 234),
		(161, 'NU', 'Niue', 683),
		(162, 'NF', 'Norfolk Island', 672),
		(163, 'MP', 'Northern Mariana Islands', 1670),
		(164, 'NO', 'Norway', 47),
		(165, 'OM', 'Oman', 968),
		(166, 'PK', 'Pakistan', 92),
		(167, 'PW', 'Palau', 680),
		(168, 'PS', 'Palestinian Territory Occupied', 970),
		(169, 'PA', 'Panama', 507),
		(170, 'PG', 'Papua new Guinea', 675),
		(171, 'PY', 'Paraguay', 595),
		(172, 'PE', 'Peru', 51),
		(173, 'PH', 'Philippines', 63),
		(174, 'PN', 'Pitcairn Island', 0),
		(175, 'PL', 'Poland', 48),
		(176, 'PT', 'Portugal', 351),
		(177, 'PR', 'Puerto Rico', 1787),
		(178, 'QA', 'Qatar', 974),
		(179, 'RE', 'Reunion', 262),
		(180, 'RO', 'Romania', 40),
		(181, 'RU', 'Russia', 70),
		(182, 'RW', 'Rwanda', 250),
		(183, 'SH', 'Saint Helena', 290),
		(184, 'KN', 'Saint Kitts And Nevis', 1869),
		(185, 'LC', 'Saint Lucia', 1758),
		(186, 'PM', 'Saint Pierre and Miquelon', 508),
		(187, 'VC', 'Saint Vincent And The Grenadines', 1784),
		(188, 'WS', 'Samoa', 684),
		(189, 'SM', 'San Marino', 378),
		(190, 'ST', 'Sao Tome and Principe', 239),
		(191, 'SA', 'Saudi Arabia', 966),
		(192, 'SN', 'Senegal', 221),
		(193, 'RS', 'Serbia', 381),
		(194, 'SC', 'Seychelles', 248),
		(195, 'SL', 'Sierra Leone', 232),
		(196, 'SG', 'Singapore', 65),
		(197, 'SK', 'Slovakia', 421),
		(198, 'SI', 'Slovenia', 386),
		(199, 'XG', 'Smaller Territories of the UK', 44),
		(200, 'SB', 'Solomon Islands', 677),
		(201, 'SO', 'Somalia', 252),
		(202, 'ZA', 'South Africa', 27),
		(203, 'GS', 'South Georgia', 0),
		(204, 'SS', 'South Sudan', 211),
		(205, 'ES', 'Spain', 34),
		(206, 'LK', 'Sri Lanka', 94),
		(207, 'SD', 'Sudan', 249),
		(208, 'SR', 'Suriname', 597),
		(209, 'SJ', 'Svalbard And Jan Mayen Islands', 47),
		(210, 'SZ', 'Swaziland', 268),
		(211, 'SE', 'Sweden', 46),
		(212, 'CH', 'Switzerland', 41),
		(213, 'SY', 'Syria', 963),
		(214, 'TW', 'Taiwan', 886),
		(215, 'TJ', 'Tajikistan', 992),
		(216, 'TZ', 'Tanzania', 255),
		(217, 'TH', 'Thailand', 66),
		(218, 'TG', 'Togo', 228),
		(219, 'TK', 'Tokelau', 690),
		(220, 'TO', 'Tonga', 676),
		(221, 'TT', 'Trinidad And Tobago', 1868),
		(222, 'TN', 'Tunisia', 216),
		(223, 'TR', 'Turkey', 90),
		(224, 'TM', 'Turkmenistan', 7370),
		(225, 'TC', 'Turks And Caicos Islands', 1649),
		(226, 'TV', 'Tuvalu', 688),
		(227, 'UG', 'Uganda', 256),
		(228, 'UA', 'Ukraine', 380),
		(229, 'AE', 'United Arab Emirates', 971),
		(230, 'GB', 'United Kingdom', 44),
		(231, 'US', 'United States', 1),
		(232, 'UM', 'United States Minor Outlying Islands', 1),
		(233, 'UY', 'Uruguay', 598),
		(234, 'UZ', 'Uzbekistan', 998),
		(235, 'VU', 'Vanuatu', 678),
		(236, 'VA', 'Vatican City State (Holy See)', 39),
		(237, 'VE', 'Venezuela', 58),
		(238, 'VN', 'Vietnam', 84),
		(239, 'VG', 'Virgin Islands (British)', 1284),
		(240, 'VI', 'Virgin Islands (US)', 1340),
		(241, 'WF', 'Wallis And Futuna Islands', 681),
		(242, 'EH', 'Western Sahara', 212),
		(243, 'YE', 'Yemen', 967),
		(244, 'YU', 'Yugoslavia', 38),
		(245, 'ZM', 'Zambia', 260),
		(246, 'ZW', 'Zimbabwe', 263);

		SET IDENTITY_INSERT [aaap].[Country] OFF

	end

-- [aaap].[Language]

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aaap].[Language]'))
	begin
		CREATE TABLE [aaap].[Language](
			[Id] [int] IDENTITY(1000,1) NOT NULL,
			[Shortcut] [nvarchar](4) NOT NULL,
			[Description] nvarchar(80) null,
			[Sort] [int] NULL,
			CONSTRAINT [PK_Language] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		SET IDENTITY_INSERT [aaap].[Language] ON
		INSERT INTO [aaap].[Language] ([Id],[Shortcut],[Description]) VALUES  (1, 'de', 'German');
		INSERT INTO [aaap].[Language] ([Id],[Shortcut],[Description]) VALUES  (2, 'en', 'English');
		INSERT INTO [aaap].[Language] ([Id],[Shortcut],[Description]) VALUES  (3, 'zh', 'Chinese');
		INSERT INTO [aaap].[Language] ([Id],[Shortcut],[Description]) VALUES  (4, 'fr', 'French');
		INSERT INTO [aaap].[Language] ([Id],[Shortcut],[Description]) VALUES  (5, 'es', 'Spanish');
		SET IDENTITY_INSERT [aaap].[Language] OFF

	end

-- [aaap].[Address]

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aaap].[Address]'))
	begin
		CREATE TABLE [aaap].[Address](
			[Id] [int] IDENTITY(1,1) NOT NULL,
			[Version] [int] default(0) NOT NULL,
			[Disabled] [bit] default(0) NOT NULL,
			[Name1] [nvarchar](40) NOT NULL,
			[Name2] [nvarchar](40) NULL,
			[Street] [nvarchar](50) NULL,
			[Zip] [nvarchar](20) NULL,
			[City] [nvarchar](50) NULL,
			[CountryId] [int] NOT NULL,
			CONSTRAINT [PK_Address] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		ALTER TABLE [aaap].[Address]  WITH CHECK ADD  CONSTRAINT [FK_Address_Country] FOREIGN KEY([CountryId]) REFERENCES [aaap].[Country] ([Id]);
		ALTER TABLE [aaap].[Address] CHECK CONSTRAINT [FK_Address_Country];

	end

-- [aaap].[Person]

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aaap].[Person]'))
	begin
		CREATE TABLE [aaap].[Person](
			[Id] [int] IDENTITY(1,1) NOT NULL,
			[Version] [int] default(0) NOT NULL,
			[FirstName] [nvarchar](50) NOT NULL,
			[LastName] [nvarchar](50) NOT NULL,
			[AddressId] [int] NOT NULL,
			[Email] [nvarchar](128) NULL,
			[Gender] [nvarchar](1) NULL,	-- (M)ale, (F)emale, NULL = unknown
			CONSTRAINT [PK_Person] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		ALTER TABLE [aaap].[Person]  WITH CHECK ADD  CONSTRAINT [FK_Person_Address] FOREIGN KEY([AddressId]) REFERENCES [aaap].[Address] ([Id])
		ALTER TABLE [aaap].[Person] CHECK CONSTRAINT [FK_Person_Address]
	end

-- [aaap].[User]

IF  NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aaap].[User]'))
	begin
		CREATE TABLE [aaap].[User]
		(
			[Id] [int] IDENTITY(1000,1) NOT NULL,
			[LoginName] nvarchar(40) not null,
			[PasswordHash] nvarchar(128) not null,
			[PersonId] [int] null,
			[ChangePwdOnNextLogin] [bit] null default(1),
			[Disabled] [bit] not null default(0),
			[PreferredLanguageId] [int] NULL,
			[DateCreated] [datetime] NOT NULL default(getdate()),
			[CreatedBy] [int] null,
			CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		CREATE UNIQUE INDEX IX_LoginName ON [aaap].[User] (LoginName);   

		ALTER TABLE [aaap].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Language] FOREIGN KEY([PreferredLanguageId]) REFERENCES [aaap].[Language] ([Id])
		ALTER TABLE [aaap].[User] CHECK CONSTRAINT [FK_User_Language]

		ALTER TABLE [aaap].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Person] FOREIGN KEY([PersonId]) REFERENCES [aaap].[Person] ([Id])
		ALTER TABLE [aaap].[User] CHECK CONSTRAINT [FK_User_Person]
		
		SET IDENTITY_INSERT [aaap].[User] ON
		-- DON'T FORGET: CHANGE PASSWORD FOR ADMIN!!!
		INSERT INTO [aaap].[User] ([Id], [LoginName], [PasswordHash]) VALUES (1, 'admin', '202cb962ac59075b964b07152d234b70');	-- 123
		SET IDENTITY_INSERT [aaap].[User] OFF

	end

-- [aaap].[Rolegroup]

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aaap].[Rolegroup]'))
	begin
		CREATE TABLE [aaap].[Rolegroup](
			[Id] [int] IDENTITY(1000,1) NOT NULL,
			[Name] nvarchar(80) not null,
			[Sort] [int] NULL,
			CONSTRAINT [PK_Rolegroup] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		SET IDENTITY_INSERT [aaap].[Rolegroup] ON
		INSERT INTO [aaap].[Rolegroup] ([Id], [Name]) VALUES  (1, 'Administrators');
		SET IDENTITY_INSERT [aaap].[Rolegroup] OFF

	end

-- [aaap].[Role]

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aaap].[Role]'))
	begin

		CREATE TABLE [aaap].[Role](
			[Id] [int] IDENTITY(1000,1) NOT NULL,
			[RolegroupId] [int] NOT NULL,
			[Name] [nvarchar](128) NOT NULL,
			[Description] [nvarchar](255) NULL,
			CONSTRAINT [PK_Role] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		ALTER TABLE [aaap].[Role]  WITH CHECK ADD  CONSTRAINT [FK_Role_RoleGroup] FOREIGN KEY([RoleGroupId])	REFERENCES [aaap].[RoleGroup] ([Id])
		ALTER TABLE [aaap].[Role] CHECK CONSTRAINT [FK_Role_RoleGroup]

		SET IDENTITY_INSERT [aaap].[Role] ON
		INSERT INTO [aaap].[Role] ([Id],[RolegroupId],[Name]) VALUES  (1, 1, 'Administrator');
		SET IDENTITY_INSERT [aaap].[Role] OFF
	end

-- [aaap].[Rulegroup]

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aaap].[Rulegroup]'))
	begin
		CREATE TABLE [aaap].[Rulegroup](
			[Id] [int] IDENTITY(1000,1) NOT NULL,
			[Name] nvarchar(80) not null,
			[Sort] [int] NULL,
			CONSTRAINT [PK_Rulegroup] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		SET IDENTITY_INSERT [aaap].[Rulegroup] ON
		INSERT INTO [aaap].[Rulegroup] ([Id], [Name]) VALUES  (1, 'Menu Items');
		SET IDENTITY_INSERT [aaap].[Rulegroup] OFF

	end

-- [aaap].[Rule]

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aaap].[Rule]'))
	begin

		CREATE TABLE [aaap].[Rule](
			[Id] [int] IDENTITY(1000,1) NOT NULL,
			[RulegroupId] [int] NOT NULL,
			[Name] [nvarchar](128) NOT NULL,
			[Description] [nvarchar](255) NULL,
			CONSTRAINT [PK_Rule] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		ALTER TABLE [aaap].[Rule]  WITH CHECK ADD  CONSTRAINT [FK_Rule_RuleGroup] FOREIGN KEY([RuleGroupId]) REFERENCES [aaap].[RuleGroup] ([Id])
		ALTER TABLE [aaap].[Rule] CHECK CONSTRAINT [FK_Rule_RuleGroup]

		SET IDENTITY_INSERT [aaap].[Rule] ON
		INSERT INTO [aaap].[Rule] ([Id],[RulegroupId],[Name]) VALUES  (1, 1, 'Show menu item System');
		INSERT INTO [aaap].[Rule] ([Id],[RulegroupId],[Name]) VALUES  (2, 1, 'Show menu item User');
		INSERT INTO [aaap].[Rule] ([Id],[RulegroupId],[Name]) VALUES  (3, 1, 'Show menu item Rolegroup');
		INSERT INTO [aaap].[Rule] ([Id],[RulegroupId],[Name]) VALUES  (4, 1, 'Show menu item Role');
		--INSERT INTO [aaap].[Rule] ([Id],[RulegroupId],[Name]) VALUES  (5, 1, 'Show menu item Rulegroup');
		--INSERT INTO [aaap].[Rule] ([Id],[RulegroupId],[Name]) VALUES  (6, 1, 'Show menu item Rule');
		SET IDENTITY_INSERT [aaap].[Rule] OFF

	end

-- [aaap].[RoleRule]

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aaap].[RoleRule]'))
	begin
		CREATE TABLE [aaap].[RoleRule](
			[RoleId] [int] NOT NULL,
			[RuleId] [int] NOT NULL,
			CONSTRAINT [PK_RoleRule] PRIMARY KEY CLUSTERED 
			(
				[RoleId] ASC,
				[RuleId] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		ALTER TABLE [aaap].[RoleRule]  WITH CHECK ADD  CONSTRAINT [FK_RoleRule_Role] FOREIGN KEY([RoleId]) REFERENCES [aaap].[Role] ([Id])
		ALTER TABLE [aaap].[RoleRule] CHECK CONSTRAINT [FK_RoleRule_Role]
		ALTER TABLE [aaap].[RoleRule]  WITH CHECK ADD  CONSTRAINT [FK_RoleRule_Rule] FOREIGN KEY([RuleId]) REFERENCES [aaap].[Rule] ([Id])
		ALTER TABLE [aaap].[RoleRule] CHECK CONSTRAINT [FK_RoleRule_Rule]
	end

-- [aaap].[UserRole]

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aaap].[UserRole]'))
	begin
		CREATE TABLE [aaap].[UserRole](
			[UserId] [int] NOT NULL,
			[RoleId] [int] NOT NULL,
			CONSTRAINT [PK_UserRole] PRIMARY KEY CLUSTERED 
			(
				[UserId] ASC,
				[RoleId] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		ALTER TABLE [aaap].[UserRole]  WITH CHECK ADD  CONSTRAINT [FK_UserRole_Role] FOREIGN KEY([RoleId]) REFERENCES [aaap].[Role] ([Id])
		ALTER TABLE [aaap].[UserRole] CHECK CONSTRAINT [FK_UserRole_Role]
		ALTER TABLE [aaap].[UserRole]  WITH CHECK ADD  CONSTRAINT [FK_UserRole_User] FOREIGN KEY([UserId]) REFERENCES [aaap].[User] ([Id]) ON DELETE CASCADE
		ALTER TABLE [aaap].[UserRole] CHECK CONSTRAINT [FK_UserRole_User]
	end

-- [aaap].[UserRule]

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aaap].[UserRule]'))
	begin
		CREATE TABLE [aaap].[UserRule](
			[UserId] [int] NOT NULL,
			[RuleId] [int] NOT NULL,
			[Deny] [bit] NULL,
			CONSTRAINT [PK_UserRule] PRIMARY KEY CLUSTERED 
			(
				[UserId] ASC,
				[RuleId] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
		) ON [PRIMARY]

		ALTER TABLE [aaap].[UserRule]  WITH CHECK ADD  CONSTRAINT [FK_UserRule_Rule] FOREIGN KEY([RuleId]) REFERENCES [aaap].[Rule] ([Id])
		ALTER TABLE [aaap].[UserRule] CHECK CONSTRAINT [FK_UserRule_Rule]

		ALTER TABLE [aaap].[UserRule]  WITH CHECK ADD  CONSTRAINT [FK_UserRule_User] FOREIGN KEY([UserId]) REFERENCES [aaap].[User] ([Id]) ON DELETE CASCADE
		ALTER TABLE [aaap].[UserRule] CHECK CONSTRAINT [FK_UserRule_User]
	end

-- [aaap].[UserRuleView]
IF EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[aaap].[UserRuleView]')) DROP VIEW [aaap].[UserRuleView];
go

-- [aaap].[UserRuleView]

create VIEW [aaap].[UserRuleView]
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
	  FROM [aaap].[Role] Ro
	  inner join [aaap].[RoleRule] RoRu on RoRu.[RoleID]=Ro.[Id]
	  inner join [aaap].[Rule] Ru on Ru.[Id]=RoRu.[RuleId]
	  inner join [aaap].[UserRole] UsRo on UsRo.[RoleId]=Ro.[Id]
	  inner join [aaap].[User] Us on Us.[Id]=UsRo.[UserId]
	  left join [aaap].[UserRule] UsRu on (UsRu.[UserId]=Us.[Id] and UsRu.[RuleId]= Ru.[Id] and UsRu.[Deny]=1)

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
	  FROM [aaap].[Rule] Ru
	  inner join [aaap].[UserRule] UsRu on UsRu.[RuleID]=Ru.[Id]
	  inner join [aaap].[User] Us on Us.[Id]=UsRu.[UserID]
	  where isnull(UsRu.[Deny],0)=0	/* no denies */

go

-- [aaap].[Menu]

IF NOT EXISTS (SELECT * FROM sys.tables WHERE object_id = OBJECT_ID(N'[aaap].[Menu]'))
	begin

		CREATE TABLE [aaap].[Menu](
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
	
		ALTER TABLE [aaap].[Menu]  WITH CHECK ADD  CONSTRAINT [FK_Menu_Menu] FOREIGN KEY([ParentId]) REFERENCES [aaap].[Menu] ([Id])
		ALTER TABLE [aaap].[Menu] CHECK CONSTRAINT [FK_Menu_Menu]
		ALTER TABLE [aaap].[Menu]  WITH CHECK ADD  CONSTRAINT [FK_Menu_Rule] FOREIGN KEY([RuleId]) REFERENCES [aaap].[Rule] ([Id])
		ALTER TABLE [aaap].[Menu] CHECK CONSTRAINT [FK_Menu_Rule]

		SET IDENTITY_INSERT [aaap].[Menu] ON
		insert into [aaap].[Menu] ([Id], [ParentId], [Name], [Route]) values (1, null, 'aaap.module.mainmenu.systemmodule', ''); 
		insert into [aaap].[Menu] ([Id], [ParentId], [Name], [Route]) values (2, 1, 'aaap.module.mainmenu.useradmin', '/user'); 
		insert into [aaap].[Menu] ([Id], [ParentId], [Name], [Route]) values (3, 1, 'aaap.module.mainmenu.rolegroupadmin', '/rolegroup'); 
		insert into [aaap].[Menu] ([Id], [ParentId], [Name], [Route]) values (4, 1, 'aaap.module.mainmenu.roleadmin', '/role'); 
		--insert into [aaap].[Menu] ([Id], [ParentId], [Name], [Route]) values (5, 1, 'aap.module.mainmenu.rulegroupadmin', '/rulegroup'); 
		--insert into [aaap].[Menu] ([Id], [ParentId], [Name], [Route]) values (6, 1, 'aap.module.mainmenu.ruleadmin', '/rule'); 
		--insert into [aaap].[Menu] ([Id], [ParentId], [Name], [Route]) values (7, 1, 'aap.module.mainmenu.menu', '/menu'); 

		SET IDENTITY_INSERT [aaap].[Menu] OFF

	end
--

go	
