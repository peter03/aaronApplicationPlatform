import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";

import { LookupRepository } from "src/app/repository/aap/lookup.repository";
import { Lookup } from "src/app/model/aap/lookup.model";

import { RoleRepository } from "src/app/repository/aap/role.repository";
import { Role } from "src/app/model/aap/role.model";
import { BaseDetailComponent } from 'src/app/module/aap/base.detailComponent';

@Component({
  selector: "aap-role-detail",
  templateUrl: "roleDetail.component.html"
})
export class RoleDetailComponent extends BaseDetailComponent<RoleRepository, Role>  {

  rolegroupList: Lookup[];

  constructor(
    repo: RoleRepository,
    router: Router,
    activeRoute: ActivatedRoute,
    location: Location,
    private lookupRepo: LookupRepository) {
      super(repo, router, activeRoute, location)
      this.rolegroupList = this.lookupRepo.getRolegroupList();
  }

}
