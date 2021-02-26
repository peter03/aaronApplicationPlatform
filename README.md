# aaronApplicationPlatform (triple A P)
Serves an complete environment to develop large business applications using .NET Core (5.0.0) + Angular (11.0.5) + MS SQL Server (17).

**This early realease of the Aaron Application Platform is not designed for commercial use!** 
We publish this code to initiate an new open-source project. Suggestions, ideas and comments are welcome.

Include:

- Authorization (Login, Logout, Forgot pwd, etc.)
- User Administration (Persons, Roles + Rules)
- Server infrastructure (token authorization, data access, re-useable base classes, global exception handling, etc.)
- Client infrastructure (modularized, authorization + error interceptor, routing, re-useable base components, global dialogs, etc.)
- User defined cascaded menu (depending on user rights)
- Multi language support (translation stored in json files)
- Form Generator (creates list and detail forms at runtime based on model data)
- File Upload module
- Reporting (planned)
- Customizeable (your modifications will be kept after updates)

Installation:

- see readme.txt for requisites
- download files (keep file structure!)
- execute dbscript_aaap.sql in SQL Server MMS to create database
