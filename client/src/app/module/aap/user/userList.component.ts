import { Component, Injector } from "@angular/core";
import { Router } from "@angular/router";

import { UserRepository } from "src/app/repository/aap/user.repository";
import { User } from "src/app/model/aap/user.model";
import { BaseListComponent } from '../baseList.component';
import { AuthenticationService } from "../../../service/aap/authentication.service";
import { userFormMetadata } from './userFormMetadata';
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
    super(repo, router, authService, injector, userFormMetadata)

    this.myMatTableSetting = this.defaultMatTableSetting;
    this.myMatTableSetting.actionButtonList.push(new MatTableActionButton("aap.button.roles", "primary", "role"));
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
