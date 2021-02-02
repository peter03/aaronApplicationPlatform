import { Component, Injector } from "@angular/core";
import { Router } from "@angular/router";

import { LookupRepository } from "src/app/repository/aaap/lookup.repository";
import { RoleRepository } from "src/app/repository/aaap/role.repository";
import { BaseListComponent } from 'src/app/module/aaap/baseList.component';
import { AuthenticationService } from "src/app/service/aaap/authentication.service";
import { Role } from "src/app/model/aaap/role.model";
import { MatTableActionButton, MatTableSetting } from "../matTable.setting";

import { RoleMetadata } from './role.metadata';

@Component({
  selector: "aaap-role-list",
  templateUrl: "roleList.component.html"
})
export class RoleListComponent extends BaseListComponent<RoleRepository, Role> {

  myMatTableSetting: MatTableSetting;

  constructor(
    public repo: RoleRepository,
    public router: Router,
    public authService: AuthenticationService,
    private lookupRepo: LookupRepository,
    injector: Injector) {
    super(repo, router, authService, injector, RoleMetadata)

    this.myMatTableSetting = this.defaultMatTableSetting;
    this.myMatTableSetting.actionButtonList.push(new MatTableActionButton("aaap.module.rule.list", "primary", "rule"));
  }

  public onActionButtonClicked(action: string, id: number) {

    switch (action) {
      case "rule":
        this.router.navigate([`${this.router.url}/rolerule`, id]);
        break;
      default:
        super.onActionButtonClicked(action, id);
        break;
    }
  }

}
