import { Component, Injector } from "@angular/core";
import { Router } from "@angular/router";

import { TranslateService } from "@ngx-translate/core";

import { MenuRepository } from "src/app/repository/aaap/menu.repository";
import { Menu } from "src/app/model/aaap/menu.model";

import { AuthenticationService } from "../../../service/aaap/authentication.service";
//import { BaseListComponent } from "src/app/module/aap/baseList.component";
import { BaseComponent } from "src/app/module/aaap/base.component";

@Component({
  selector: "aaap-main-menu",
  templateUrl: "mainMenu.component.html",
  styleUrls: ["./mainMenu.component.scss"]

})
export class MainMenuComponent extends BaseComponent {  // extends BaseListComponent<MenuRepository, Menu> {

  constructor(

    public repo: MenuRepository,
    public router: Router,
    public authService: AuthenticationService,
    injector: Injector) {
      super(authService);
      repo.buildSubmenu(null);
  }

  get submenu(): Menu[] {
    return this.repo._submenu;
  }

  navigateTo(menuId: number) {

    let entity = this.repo.getCachedEntityById(menuId);
    if (entity) {

      if (entity.route === null || entity.route === '') {
        this.repo.buildSubmenu(entity.id);
      }
      else {
        this.router.navigate([entity.route]);
      }

    }
  }


}
