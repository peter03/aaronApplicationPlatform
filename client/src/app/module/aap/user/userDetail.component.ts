import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";

import { BaseDetailComponent } from 'src/app/module/aap/base.detailComponent';
import { UserRepository } from "src/app/repository/aap/user.repository";
import { User } from "src/app/model/aap/user.model";

import { userFormMetadata } from './userFormMetadata';

@Component({
  selector: "aaap-user-detail",
  templateUrl: "userDetail.component.html"
})
export class UserDetailComponent extends BaseDetailComponent<UserRepository, User>  {

  constructor(
    repo: UserRepository,
    router: Router,
    activeRoute: ActivatedRoute,
    location: Location) {
    super(repo, router, activeRoute, location, userFormMetadata)
  }


}
