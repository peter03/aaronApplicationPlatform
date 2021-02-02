import { Component, Injector } from "@angular/core";
import { Router } from "@angular/router";

import { MenuRepository } from "src/app/repository/aaap/menu.repository";
import { BaseListComponent } from 'src/app/module/aaap/baseList.component';
import { AuthenticationService } from "src/app/service/aaap/authentication.service";
import { Menu } from "src/app/model/aaap/menu.model";
import { MenuMetadata } from './menu.metadata';


@Component({
  selector: "aaap-menu-list",
  templateUrl: "menuList.component.html"
})
export class MenuListComponent extends BaseListComponent<MenuRepository, Menu> {

  constructor(
    repo: MenuRepository,
    router: Router,
    authService: AuthenticationService,
    injector: Injector) {
    super(repo, router, authService, injector, MenuMetadata)
  }

}
