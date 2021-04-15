import { Component, Injector } from '@angular/core';
import { Router } from "@angular/router";

import { BaseComponent } from "src/app/module/aaap/base.component";
import { MenuRepository } from "src/app/repository/aaap/menu.repository";
import { AuthenticationService } from 'src/app/service/aaap/authentication.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {

  constructor(
    private repo: MenuRepository,
    private router: Router,
    private authService: AuthenticationService,
    injector: Injector) {
    super(authService, injector);
  }

  navigateToRoot() {
    this.repo.navigateTo(null);
  }

  navigateTo(menuId: number) {
    this.repo.navigateTo(menuId);
  }

  get breadcrumbList(): any[] {
    let res = this.repo.buildBreadcrumbList(this.repo.selectedEntityId);
    return res;
  }

  get appName() {
    return environment.appName;
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
