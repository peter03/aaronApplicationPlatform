import { Component, Injector } from "@angular/core";
import { Router } from "@angular/router";

import { UserRepository } from "src/app/repository/aap/user.repository";
import { User } from "src/app/model/aap/user.model";
import { BaseListComponent } from '../baseList.component';
import { AuthenticationService } from "../../../service/aap/authentication.service";
import { userFormMetadata } from './userFormMetadata';

@Component({
  selector: "aaap-user-list",
  templateUrl: "userList.component.html"
})
export class UserListComponent extends BaseListComponent<UserRepository, User> {

  formMetadata: any[] = userFormMetadata;

  constructor(
    public repo: UserRepository,
    public router: Router,
    public authService: AuthenticationService,
    injector: Injector) {
      super(repo, router, authService, injector)
  }

}
