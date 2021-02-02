import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "src/app/module/aaap/login/login.component";
import { MainMenuComponent } from "src/app/module/aaap/mainmenu/mainMenu.component";
import { moduleRoutes, moduleRoutingComponents } from "src/app/module/aaap/module.routing";


export const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "mainmenu", component: MainMenuComponent },
  ...moduleRoutes
];
export const appRouting = RouterModule.forRoot(routes);

export const routingComponents = [
  LoginComponent,
  MainMenuComponent,
  ...moduleRoutingComponents
]
