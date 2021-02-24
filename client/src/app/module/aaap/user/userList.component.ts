import { Component, Injector } from "@angular/core";
import { Router } from "@angular/router";

import { UserRepository } from "src/app/repository/aaap/user.repository";
import { User } from "src/app/model/aaap/user.model";
import { BaseListComponent } from '../baseList.component';
import { AuthenticationService } from "../../../service/aaap/authentication.service";
import { UserMetadata } from './user.metadata';
import { MatTableActionButton, MatTableSetting } from "../matTable.setting";

@Component({
  selector: "aaap-user-list",
  templateUrl: "userList.component.html"
})
export class UserListComponent extends BaseListComponent<UserRepository, User> {

  myMatTableSetting: MatTableSetting;

  constructor(
    public repo: UserRepository,
    public router: Router,
    public authService: AuthenticationService,
    injector: Injector) {

    super(repo, router, authService, injector, UserMetadata);

    this.myMatTableSetting = this.defaultMatTableSetting;
    this.myMatTableSetting.actionButtonList.push(new MatTableActionButton("aaap.module.role.list", "primary", "role"));
  }

  public onActionButtonClicked(action: string, id: number) {

    switch (action) {
      case "role":
        this.router.navigate([`${this.router.url}/userrole`, id]);
        break;
      default:
        super.onActionButtonClicked(action, id);
        break;
    }
  }


}
