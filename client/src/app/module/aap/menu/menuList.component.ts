import { AfterViewInit, Component, ViewChild, Injector } from "@angular/core";
import { Router } from "@angular/router";

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { LookupRepository } from "src/app/repository/aap/lookup.repository";
import { MenuRepository } from "src/app/repository/aap/menu.repository";
import { BaseListComponent } from 'src/app/module/aap/baseList.component';
import { AuthenticationService } from "src/app/service/aap/authentication.service";
import { Menu } from "src/app/model/aap/menu.model";

@Component({
  selector: "aap-menu-list",
  templateUrl: "menuList.component.html"
})
export class MenuListComponent extends BaseListComponent<MenuRepository, Menu> implements AfterViewInit {

  displayedColumns: string[] = ['id', 'parentId', 'name', 'description', 'route', 'sort', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // https://stackblitz.com/edit/angular-9-reactive-form-validation?file=app%2Fapp.component.html

  constructor(
    repo: MenuRepository,
    router: Router,
    authService: AuthenticationService,
    private lookupRepo: LookupRepository,
    injector: Injector) {
    super(repo, router, authService, injector, null)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
