import { Component } from "@angular/core";
import { Router } from "@angular/router";

//import { MatDialog } from '@angular/material';
//import { ConfirmDialogService } from 'src/app/global/component/confirmDialog.service';

//import { ProductNavigationService } from "./productNavigation.service";
import { UserRepository } from "src/app/repository/aap/user.repository";
import { User } from "src/app/model/aap/user.model";
import { BaseListComponent } from '../baseList.component';
import { AuthenticationService } from "../../../service/aap/authentication.service";

@Component({
  selector: "aap-user-list",
  templateUrl: "userList.component.html"
})
export class UserListComponent extends BaseListComponent<UserRepository, User> {

  constructor(
    //private naviService: ProductNavigationService,
    //public dialog: MatDialog,
    public repo: UserRepository,
    public router: Router,
    public authService: AuthenticationService) {
    super(repo, router, authService)
    repo.loadEntities();
  }

}
