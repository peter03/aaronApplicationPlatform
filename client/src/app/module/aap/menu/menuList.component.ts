import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { LookupRepository } from "src/app/repository/aap/lookup.repository";
import { MenuRepository } from "src/app/repository/aap/menu.repository";
import { BaseListComponent } from 'src/app/module/aap/baseList.component';
import { AuthenticationService } from "src/app/service/aap/authentication.service";
import { Menu } from "src/app/model/aap/menu.model";

@Component({
  selector: "aap-menu-list",
  templateUrl: "menuList.component.html"
})
export class MenuListComponent extends BaseListComponent<MenuRepository, Menu> {

  constructor(
    repo: MenuRepository,
    router: Router,
    authService: AuthenticationService,
    private lookupRepo: LookupRepository) {
      super(repo, router, authService)
  }


}
