import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";

import { RoleRepository } from "src/app/repository/aap/role.repository";
import { Role } from "src/app/model/aap/role.model";
import { BaseDetailComponent } from 'src/app/module/aap/base.detailComponent';

import { RoleMetadata } from './role.metadata';

@Component({
  selector: "aaap-role-detail",
  templateUrl: "roleDetail.component.html"
})
export class RoleDetailComponent extends BaseDetailComponent<RoleRepository, Role>  {

  constructor(
    repo: RoleRepository,
    router: Router,
    activeRoute: ActivatedRoute,
    location: Location) {
      super(repo, router, activeRoute, location, RoleMetadata)
  }

}
