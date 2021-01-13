import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";

import { BaseDetailComponent } from 'src/app/module/aap/base.detailComponent';
import { UserRepository } from "src/app/repository/aap/user.repository";
import { User } from "src/app/model/aap/user.model";
import { LookupRepository } from "src/app/repository/aap/lookup.repository";
import { Lookup } from "src/app/model/aap/lookup.model";


@Component({
  selector: "aap-user-detail",
  templateUrl: "userDetail.component.html"
})
export class UserDetailComponent extends BaseDetailComponent<UserRepository, User>  {

  roleList: Lookup[];

  constructor(
    repo: UserRepository,
    router: Router,
    activeRoute: ActivatedRoute,
    location: Location,
    private lookupRepo: LookupRepository) {
      super(repo, router, activeRoute, location)
      this.roleList = this.lookupRepo.getRoleList();
  }
    
}
