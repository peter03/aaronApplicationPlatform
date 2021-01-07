import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";

import { UserRepository } from "src/app/repository/aap/user.repository";
import { User } from "src/app/model/aap/user.model";
//import { LookupRepository } from "src/app/repository/lookup.repository";
//import { LookupDto } from 'src/app/model/lookup.model';
import { BaseDetailComponent } from 'src/app/module/aap/base.detailComponent';
//import { AddressRepository } from "src/app/repository/address.repository";
//import { Address } from "src/app/model/address.model";

@Component({
  selector: "aap-user-detail",
  templateUrl: "userDetail.component.html"
})
export class UserDetailComponent extends BaseDetailComponent<UserRepository, User>  {

  constructor(
    repo: UserRepository,
    router: Router,
    activeRoute: ActivatedRoute,
    location: Location) {
    super(repo, router, activeRoute, location)
  }

  //get roleList(): LookupDto[] {
  //    return this.lookupRepo.getRoleList();
  //}

  //get addressList(): Address[] {
  //    return this.addressRepo.getList();
  //}

}
