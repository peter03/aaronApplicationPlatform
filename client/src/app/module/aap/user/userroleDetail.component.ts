import { Component, Injector } from "@angular/core";
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

import { UserRepository } from "src/app/repository/aap/user.repository";
import { User } from "src/app/model/aap/user.model";
import { RoleRepository } from "src/app/repository/aap/role.repository";
import { Role } from "src/app/model/aap/role.model";
import { BaseDetailComponent } from 'src/app/module/aap/base.detailComponent';
import { AuthenticationService } from "../../../service/aap/authentication.service";

@Component({
  selector: "aaap-userrole-detail",
  templateUrl: "userroleDetail.component.html"
})
export class UserroleDetailComponent extends BaseDetailComponent<UserRepository, User> {

  dataSource: MatTableDataSource<Role>;  // sortable datasource wrapper
  displayedColumns: string[] = ['select', 'id', 'name'];
  selection: SelectionModel<Role>;

  constructor(
    public repo: UserRepository,
    public router: Router,
    activeRoute: ActivatedRoute,
    location: Location,
    roleRepo: RoleRepository) {
    super(repo, router, activeRoute, location, null)

    // initialize selection
    let selectedRoles: Role[] = [];
    let roleList: Role[] = roleRepo.getList();
    roleList.forEach(e => {
      if (this._entity.roleId && this._entity.roleId.indexOf(e.id) !== -1) {
        selectedRoles.push(e);
      }
    })
    this.dataSource = new MatTableDataSource(roleList);
    this.selection = new SelectionModel<Role>(true, selectedRoles);

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Role): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  submit() {

    this.entity.roleId = [];
    this.selection.selected.forEach(e => {
      this.entity.roleId.push(e.id);
    })

    //this.entities.forEach(e => {
    //  e.select = this.selection.isSelected(e);
    //})

    super.onSubmit();

  }

}
