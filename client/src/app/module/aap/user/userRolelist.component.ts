import { Component, Injector } from "@angular/core";
import { Router } from "@angular/router";

import { RoleRepository } from "src/app/repository/aap/role.repository";
import { Role } from "src/app/model/aap/role.model";
import { BaseListComponent } from '../baseList.component';
import { AuthenticationService } from "../../../service/aap/authentication.service";
import { RoleMetadata } from "../role/role.metadata";

@Component({
  selector: "aaap-user-rolelist",
  templateUrl: "userRolelist.component.html"
})
export class UserRolelistComponent extends BaseListComponent<RoleRepository, Role> {

  constructor(
    public repo: RoleRepository,
    public router: Router,
    public authService: AuthenticationService,
    injector: Injector) {
    super(repo, router, authService, injector, RoleMetadata)
  }

}
