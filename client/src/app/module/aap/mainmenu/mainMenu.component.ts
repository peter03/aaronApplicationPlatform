import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { MenuRepository } from "src/app/repository/aap/menu.repository";
import { Menu } from "src/app/model/aap/menu.model";

import { AuthenticationService } from "../../../service/aap/authentication.service";
import { BaseListComponent } from "src/app/module/aap/baseList.component";

//import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: "aap-main-menu",
  templateUrl: "mainMenu.component.html",
  styleUrls: ["./mainMenu.component.scss"]

})
export class MainMenuComponent extends BaseListComponent<MenuRepository, Menu> {
    

  constructor(

    public repo: MenuRepository,
    public router: Router,
    public authService: AuthenticationService) {
      super(repo, router, authService) 
      repo.buildSubmenu(null);
  }

  get submenu(): Menu[] {
    return this.repo._submenu;
  }

  navigateTo(menuId: number) {

    let entity = this.repo.getCachedEntityById(menuId);
    if (entity) {

      if (entity.route === null) {
        this.repo.buildSubmenu(entity.id);
      }
      else {
        this.router.navigate([entity.route]);
      }

    }
  }


}
