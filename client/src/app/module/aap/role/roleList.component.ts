import { Component, Injector } from "@angular/core";
import { Router } from "@angular/router";

import { LookupRepository } from "src/app/repository/aap/lookup.repository";
import { RoleRepository } from "src/app/repository/aap/role.repository";
import { BaseListComponent } from 'src/app/module/aap/baseList.component';
import { AuthenticationService } from "src/app/service/aap/authentication.service";
import { Role } from "src/app/model/aap/role.model";

import { RoleMetadata } from './role.metadata';

@Component({
  selector: "aap-role-list",
  templateUrl: "roleList.component.html"
})
export class RoleListComponent extends BaseListComponent<RoleRepository, Role> {

  constructor(
    public repo: RoleRepository,
    public router: Router,
    public authService: AuthenticationService,
    private lookupRepo: LookupRepository,
    injector: Injector) {
    super(repo, router, authService, injector, RoleMetadata)
  }

}
