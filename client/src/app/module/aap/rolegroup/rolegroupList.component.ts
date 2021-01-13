import { Component } from "@angular/core";
import { Router } from "@angular/router";

//import { MatDialog } from '@angular/material';
//import { ConfirmDialogService } from 'src/app/global/component/confirmDialog.service';

//import { ProductNavigationService } from "./productNavigation.service";
import { RolegroupRepository } from "src/app/repository/aap/rolegroup.repository";
import { BaseListComponent } from 'src/app/module/aap/baseList.component';
import { AuthenticationService } from "src/app/service/aap/authentication.service";
import { Rolegroup } from "src/app/model/aap/rolegroup.model";

@Component({
  selector: "aap-rolegroup-list",
  templateUrl: "rolegroupList.component.html"
})
export class RolegroupListComponent extends BaseListComponent<RolegroupRepository, Rolegroup> {

  constructor(
    //private naviService: ProductNavigationService,
    //public dialog: MatDialog,
    public repo: RolegroupRepository,
    public router: Router,
    public authService: AuthenticationService) {
    super(repo, router, authService)
  }

}
