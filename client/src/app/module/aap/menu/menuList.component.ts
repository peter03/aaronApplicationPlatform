import { Component, Injector } from "@angular/core";
import { Router } from "@angular/router";

import { MenuRepository } from "src/app/repository/aap/menu.repository";
import { BaseListComponent } from 'src/app/module/aap/baseList.component';
import { AuthenticationService } from "src/app/service/aap/authentication.service";
import { Menu } from "src/app/model/aap/menu.model";
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
