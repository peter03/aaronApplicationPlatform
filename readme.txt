Needed Environment:
- Visual Studio 2019
- .NET SDK 5.0.x
- Angular 12.0.3
- Node.js 14.17.0 (including npm 6.14.13)
- Git
- SQL Derver 2019 Developer Edition

Server-Packages (open cmd window inside \server directory!):

dotnet tool install --global dotnet-ef
dotnet tool install --global EntityFrameworkCore.Generator (Apache License 2.0 see https://github.com/loresoft/EntityFrameworkCore.Generator/blob/master/LICENSE)

dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools

dotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson

dotnet add package AutoMapper (MIT License see https://github.com/AutoMapper/AutoMapper/blob/master/LICENSE.txt)
dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection

Client packages (open cmd window inside \client directory!):

ng add @angular/material
npm install bootstrap
npm i @angular/localize
npm install @ngx-translate/core @ngx-translate/http-loader rxjs --save (MIT License https://github.com/ngx-translate/core/blob/master/LICENSE)
npm install material-design-icons-iconfont --save
npm install ngx-mat-select-search (MIT License https://github.com/bithost-gmbh/ngx-mat-select-search/blob/master/LICENSE)

Update model from database: (https://efg.loresoft.com)
\server: efg generate

Debug app with VisualStudio:

1. Run VS2019 as administrator
2. Select "clone repository" and search for main repository (source code is stored in master branch. To get these files, select the master branch at the right bottom of VS2019 screen).
3. Open the SQL Server managment studio and execute the dbscript_aaap.sql command to create the database (recommend instance: localhost and user sa without password)
3. Open the aaronApplicationPlatform.sln 
4. Run the application