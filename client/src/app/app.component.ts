import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { BaseComponent } from "src/app/module/aap/base.component";
import { MenuRepository } from "src/app/repository/aap/menu.repository";
import { AuthenticationService } from 'src/app/service/aap/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {

  constructor(
    private repo: MenuRepository,
    private router: Router,
    private authService: AuthenticationService) {
    super(authService);
  }

  navigateToRoot() {
    this.repo.buildSubmenu(null);
    this.router.navigate(["mainmenu"]);
  }

  get userIsLoggedIn() {
    return this.authService.currentUser;
  }

  get loginName() {
    return this.authService.currentUser?.loginName;
  }

  logout() {
    this.authService.logout();
  }
  
}
