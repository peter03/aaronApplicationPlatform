import { Component, Input, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";

import { AuthenticationService } from "src/app/service/aaap/authentication.service";
import { RolegroupRepository } from "src/app/repository/aaap/rolegroup.repository";
import { Rolegroup } from "src/app/model/aaap/rolegroup.model";
import { BaseDetailComponent } from 'src/app/module/aaap/base.detailComponent';

import { RolegroupMetadata } from './rolegroup.metadata';

@Component({
  selector: "aaap-rolegroup-detail",
  templateUrl: "rolegroupDetail.component.html"
})
export class RolegroupDetailComponent extends BaseDetailComponent<RolegroupRepository, Rolegroup>  {

  constructor(
    repo: RolegroupRepository,
    router: Router,
    activeRoute: ActivatedRoute,
    location: Location,
    authService: AuthenticationService,
    injector: Injector) {
    super(repo, router, activeRoute, location, RolegroupMetadata, authService, injector)
  }

}