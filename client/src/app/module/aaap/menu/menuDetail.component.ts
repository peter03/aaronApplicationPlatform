import { Component, Input, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";

import { LookupRepository } from "src/app/repository/aaap/lookup.repository";
import { Lookup } from "src/app/model/aaap/lookup.model";

import { MenuRepository } from "src/app/repository/aaap/menu.repository";
import { Menu } from "src/app/model/aaap/menu.model";
import { BaseDetailComponent } from 'src/app/module/aaap/base.detailComponent';

import { MenuMetadata } from './menu.metadata';

@Component({
  selector: "aaap-menu-detail",
  templateUrl: "menuDetail.component.html"
})
export class MenuDetailComponent extends BaseDetailComponent<MenuRepository, Menu>  {

  listOfParents: Lookup[];

  constructor(
    repo: MenuRepository,
    router: Router,
    activeRoute: ActivatedRoute,
    location: Location,
    injector: Injector,
    private lookupRepo: LookupRepository) {
    super(repo, router, activeRoute, location, MenuMetadata, injector)
      this.listOfParents = this.repo.getListOfParents();
  }

}
