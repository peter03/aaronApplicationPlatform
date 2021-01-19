import { Component, Injector } from "@angular/core";
import { Router } from "@angular/router";

import { RolegroupRepository } from "src/app/repository/aap/rolegroup.repository";
import { BaseListComponent } from 'src/app/module/aap/baseList.component';
import { AuthenticationService } from "src/app/service/aap/authentication.service";
import { Rolegroup } from "src/app/model/aap/rolegroup.model";
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
