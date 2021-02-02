import { Injectable } from "@angular/core";
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
    router: Router,
    authService: AuthenticationService) {
    super(http, API_URL, Menu, authService);
    
  }

  buildSubmenu(menuId?: number) {

    this._submenu = [];
    this.getList().forEach(e => {

      // skip unauthorized menu items
      let skip: boolean = e.ruleId !== null && this.authService.hasPermission(e.ruleId) === false;
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

}
