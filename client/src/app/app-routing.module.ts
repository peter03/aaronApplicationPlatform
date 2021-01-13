import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "src/app/module/aap/login/login.component";
import { MainMenuComponent } from "src/app/module/aap/mainmenu/mainMenu.component";
import { moduleRoutes, moduleRoutingComponents } from "src/app/module/aap/module.routing";


export const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "menu", component: MainMenuComponent },
  ...moduleRoutes
];
export const appRouting = RouterModule.forRoot(routes);

export const routingComponents = [
  LoginComponent,
  MainMenuComponent,
  ...moduleRoutingComponents
]
