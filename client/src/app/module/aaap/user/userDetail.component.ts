import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";

import { BaseDetailComponent } from 'src/app/module/aaap/base.detailComponent';
import { UserRepository } from "src/app/repository/aaap/user.repository";
import { User } from "src/app/model/aaap/user.model";

import { UserMetadata } from './user.metadata';
import { ExtFormControl } from "src/app/design/aaap/extFormControl.model";

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
    super(repo, router, activeRoute, location, UserMetadata)
  }

  onCreateControl(ctlMetadata: any) {

    // Passwort can only be set for new users!
    //if (ctlMetadata.ngModel === "password" || ctlMetadata.ngModel === "confirmPassword") {
    //  ctlMetadata.suppressInDetail = this.entity.id || this.entity.id === 0;
    //}
     
  }

  onModelChanged(ctl: ExtFormControl) {

    //if (ctl.ngModel === "password" || ctl.ngModel === "confirmPassword") {
    //  if (this.entity.password !== this.entity.confirmPassword) {
    //    ctl.setErrors({ 'Passwords must match!': true });
    //  }
    //  else {
    //    ctl.setErrors(null);
    //  }
    //}

  }

}
