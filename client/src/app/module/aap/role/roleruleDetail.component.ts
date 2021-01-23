import { Component, Injector } from "@angular/core";
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

import { RoleRepository } from "src/app/repository/aap/role.repository";
import { Role } from "src/app/model/aap/role.model";
import { RuleRepository } from "src/app/repository/aap/rule.repository";
import { Rule } from "src/app/model/aap/rule.model";

import { BaseDetailComponent } from 'src/app/module/aap/base.detailComponent';
import { AuthenticationService } from "../../../service/aap/authentication.service";

@Component({
  selector: "aaap-rolerule-detail",
  templateUrl: "roleruleDetail.component.html"
})
export class RoleruleDetailComponent extends BaseDetailComponent<RoleRepository, Role> {

  dataSource: MatTableDataSource<Rule>;  // sortable datasource wrapper
  displayedColumns: string[] = ['select', 'id', 'name'];
  selection: SelectionModel<Rule>;

  constructor(
    public repo: RoleRepository,
    public router: Router,
    activeRoute: ActivatedRoute,
    location: Location,
    ruleRepo: RuleRepository) {
    super(repo, router, activeRoute, location, null)

    // initialize selection
    let selectedRules: Rule[] = [];
    let ruleList: Rule[] = ruleRepo.getList();
    ruleList.forEach(e => {
      if (this._entity.ruleId && this._entity.ruleId.indexOf(e.id) !== -1) {
        selectedRules.push(e);
      }
    })
    this.dataSource = new MatTableDataSource(ruleList);
    this.selection = new SelectionModel<Rule>(true, selectedRules);

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
  checkboxLabel(row?: Rule): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  submit() {

    this.entity.ruleId = [];
    this.selection.selected.forEach(e => {
      this.entity.ruleId.push(e.id);
    })

    //this.entities.forEach(e => {
    //  e.select = this.selection.isSelected(e);
    //})

    super.onSubmit();

  }

}
