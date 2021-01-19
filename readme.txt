Needed Environment:
- Visual Studio 2019
- .NET SDK 3
- Node.js
- Git
- SQL Derver 2017 Developer Edition

Server-Packages:

dotnet tool install --global dotnet-ef
dotnet tool install --global EntityFrameworkCore.Generator (Apache License 2.0 see https://github.com/loresoft/EntityFrameworkCore.Generator/blob/master/LICENSE)
	--> kompatibel mit GNU 3 --> freie Verwendung (Lizenzkopie beilegen)

dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools

dotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson

dotnet add package AutoMapper (MIT License see https://github.com/AutoMapper/AutoMapper/blob/master/LICENSE.txt)
	--> alles ist erlaubt

dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection

Client packages:

ng add @angular/material
npm install bootstrap
npm i @angular/localize
npm install @ngx-translate/core @ngx-translate/http-loader rxjs --save (MIT License https://github.com/ngx-translate/core/blob/master/LICENSE)


Update model from database: (https://efg.loresoft.com)
\server: efg generate
