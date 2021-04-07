import { Injector, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { Menu } from "src/app/model/aaap/menu.model";
import { BaseRepository } from './base.repository';
import { Lookup } from "src/app/model/aaap/lookup.model";
import { User } from "src/app/model/aaap/user.model";
import { AuthenticationService } from 'src/app/service/aaap/authentication.service';

const API_URL = "/api/menu";

@Injectable()
export class MenuRepository extends BaseRepository<Menu> {

    _submenu: Menu[] = [];

  constructor(
    http: HttpClient,
    private router: Router,
    authService: AuthenticationService,
    injector: Injector) {
    super(http, API_URL, Menu, authService, injector);
    
  }

  onEntitiesLoaded() {
    this.buildSubmenu(null);
  }

  buildSubmenu(menuId?: number) {

    this._submenu = [];
    this.selectedEntityId = menuId;

    this.getList().forEach(e => {

      // skip unauthorized menu items
      //let skip: boolean = e.ruleId !== null && this.authService.hasPermission(e.ruleId) === false;
      let skip: boolean = false;  // todo: reactivate

      if (!skip) {
        if ((menuId === null && isNaN(e.parentId)) || menuId === e.parentId) {
          this._submenu.push(e);
        }
      }
    })

  }

  // returns a menu list without leafs
  getListOfParents() : Lookup[] {

    let res = [new Lookup(null, "")]; // empty item for root menu
    this.getList().filter(el => (el.route === null || el.route === '')).forEach(el => {
      res.push(new Lookup(el.id, el.name));
    })
    return res;  
  }

  navigateTo(menuId: number) {

    let entity = this.getEntityById(menuId);
    if (entity) {

      if (entity.route === null || entity.route === '') { // node
        this.buildSubmenu(entity.id);
        this.navigateToMainmenu();
      }
      else {  // leaf
        this.selectedEntityId = entity.id;
        this.router.navigate([entity.route]);
      }
    }
    else {  // root
      this.buildSubmenu(null);
      this.navigateToMainmenu();
    }
  }

  private navigateToMainmenu() {
    this.router.navigate(["mainmenu"]);
  }

  buildBreadcrumbList(menuId?: number) : any[] {

    let res: any[] = [];

    let entity = this.getEntityById(menuId);
    if (entity) {
      res.push({ id: entity.id, name: entity.name })
      while (entity && entity.parentId) {
        entity = this.getEntityById(entity.parentId);
        res.push({ id: entity.id, name: entity.name })
      }
    }

    res.push({ id: null, name: 'aaap.module.mainmenu.title'});
    return res.reverse(); // reverse entries
    
  }

}
