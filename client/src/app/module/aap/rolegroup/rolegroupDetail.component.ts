import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";

import { RolegroupRepository } from "src/app/repository/aap/rolegroup.repository";
import { Rolegroup } from "src/app/model/aap/rolegroup.model";
import { BaseDetailComponent } from 'src/app/module/aap/base.detailComponent';


@Component({
  selector: "aap-rolegroup-detail",
  templateUrl: "rolegroupDetail.component.html"
})
export class RolegroupDetailComponent extends BaseDetailComponent<RolegroupRepository, Rolegroup>  {

  constructor(
    repo: RolegroupRepository,
    router: Router,
    activeRoute: ActivatedRoute,
    location: Location) {
    super(repo, router, activeRoute, location)
  }

}
