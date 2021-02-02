import { Component, Injector } from "@angular/core";
import { Router } from "@angular/router";

import { RolegroupRepository } from "src/app/repository/aaap/rolegroup.repository";
import { BaseListComponent } from 'src/app/module/aaap/baseList.component';
import { AuthenticationService } from "src/app/service/aaap/authentication.service";
import { Rolegroup } from "src/app/model/aaap/rolegroup.model";
import { RolegroupMetadata } from './rolegroup.metadata';

@Component({
  selector: "aaap-rolegroup-list",
  templateUrl: "rolegroupList.component.html"
})
export class RolegroupListComponent extends BaseListComponent<RolegroupRepository, Rolegroup> {

  constructor(
    public repo: RolegroupRepository,
    public router: Router,
    public authService: AuthenticationService,
    injector: Injector) {
    super(repo, router, authService, injector, RolegroupMetadata)
  }


}
