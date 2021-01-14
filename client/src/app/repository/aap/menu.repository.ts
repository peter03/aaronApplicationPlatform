import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { Menu } from "src/app/model/aap/menu.model";
import { BaseRepository } from './base.repository';
import { Lookup } from "src/app/model/aap/lookup.model";

const API_URL = "/api/menu";

@Injectable()
export class MenuRepository extends BaseRepository<Menu> {

    _submenu: Menu[] = [];

  constructor(protected http: HttpClient,
    protected router: Router) {
    super(http, API_URL, Menu);
    
  }

  buildSubmenu(menuId?: number) {

    this._submenu = [];
    this.getList().forEach(el => {

      if ((menuId === null && isNaN(el.parentId)) || menuId === el.parentId) {
        this._submenu.push(el);
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
