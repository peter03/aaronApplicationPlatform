import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "src/app/module/aaap/login/login.component";
import { MainMenuComponent } from "src/app/module/aaap/mainmenu/mainMenu.component";
import { moduleRoutes, moduleRoutingComponents } from "src/app/module/aaap/module.routing";
import { mymoduleRoutes, mymoduleRoutingComponents } from "src/app/module/mymodule.list";


export const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "mainmenu", component: MainMenuComponent },
  ...moduleRoutes,
  ...mymoduleRoutes
];
export const appRouting = RouterModule.forRoot(routes);

export const routingComponents = [
  LoginComponent,
  MainMenuComponent,
  ...moduleRoutingComponents,
  ...mymoduleRoutingComponents
]
