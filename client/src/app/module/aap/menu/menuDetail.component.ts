import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";

import { LookupRepository } from "src/app/repository/aap/lookup.repository";
import { Lookup } from "src/app/model/aap/lookup.model";

import { MenuRepository } from "src/app/repository/aap/menu.repository";
import { Menu } from "src/app/model/aap/menu.model";
import { BaseDetailComponent } from 'src/app/module/aap/base.detailComponent';

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
    private lookupRepo: LookupRepository) {
      super(repo, router, activeRoute, location, MenuMetadata)
      this.listOfParents = this.repo.getListOfParents();
  }

}
