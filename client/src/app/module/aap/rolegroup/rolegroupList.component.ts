import { AfterViewInit, Component, Injector, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { RolegroupRepository } from "src/app/repository/aap/rolegroup.repository";
import { BaseListComponent } from 'src/app/module/aap/baseList.component';
import { AuthenticationService } from "src/app/service/aap/authentication.service";
import { Rolegroup } from "src/app/model/aap/rolegroup.model";

@Component({
  selector: "aaap-rolegroup-list",
  templateUrl: "rolegroupList.component.html"
})
export class RolegroupListComponent extends BaseListComponent<RolegroupRepository, Rolegroup> implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'sort'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public repo: RolegroupRepository,
    public router: Router,
    public authService: AuthenticationService,
    injector: Injector) {
    super(repo, router, authService, injector)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}
