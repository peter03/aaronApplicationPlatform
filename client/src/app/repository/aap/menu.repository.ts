import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { Menu } from "src/app/model/aap/menu.model";
import { BaseRepository } from './base.repository';
import { IRepository } from "../../interface/aap/irepository";

const API_URL = "/api/menu";

@Injectable()
export class MenuRepository extends BaseRepository<Menu> {

  //public user: Observable<User>;

  _submenu: Menu[] = [];

  constructor(protected http: HttpClient,
    protected router: Router) {
    super(http, API_URL, null);
    
  }

  getList() {

    // extend entity by person
    //this._cachedEntities.forEach(ent => {
    //    if (ent.personId && (!ent.person || ent.personId !== ent.person.id))
    //    {
    //        ent.person = this.personRepo.getList().find(e => e.id === ent.personId);
    //    }
    //});

    this._cachedEntities = [];
    this._cachedEntities.push(new Menu(1, "System", null, null));
    this._cachedEntities.push(new Menu(2, "User Admin", "/user", 1));
    this._cachedEntities.push(new Menu(3, "Rolegroups Admin", "/rolegroup", 1));
    this._cachedEntities.push(new Menu(4, "Role Admin", "/role", 1));

    this._cachedEntities.push(new Menu(10, "Data", null, null));
    this._cachedEntities.push(new Menu(11, "Address", "/address", 10));
    this._cachedEntities.push(new Menu(12, "Products", "/products", 10));

    return this._cachedEntities;
  }

  getNewEntity() : any {
    return new Menu(null, null, null, null);
  }

  validateEntity(entity: Menu) {
    return true;
  }

  buildSubmenu(menuId?: number) {

    this._submenu = [];
    this.getList().forEach(el => {

      if ((menuId === null && el.parentId === null) || menuId === el.parentId) {
        this._submenu.push(el);
      }
    })

  }

  navigateTo(menuId: number) {

    let entity = this.getCachedEntityById(menuId);
    if (entity) {

      if (entity.route === null) {
        this.buildSubmenu(entity.id);
      }
      else {
        this.router.navigate([entity.route]);
      }

    }
  }

}
