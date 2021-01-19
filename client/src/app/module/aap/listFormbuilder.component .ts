import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, Validator } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { LookupRepository } from "src/app/repository/aap/lookup.repository";
import { IId } from '../../interface/aap/IId';

@Component({
  selector: "aaap-list-formbuilder",
  templateUrl: "listFormbuilder.component.html"
})
export class ListFormbuilderComponent implements OnInit, AfterViewInit{

  @Input() entityList: any[];
  @Input() template: any[];
  @Input() actionCallback: Function;
  
  displayedColumns: string[]; // = ['loginName', 'passwordMD5', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<IId>;  // sortable datasource wrapper
  myFormTemplate: any[];
      
  constructor(private lookupRepo: LookupRepository) {
  }

  ngOnInit() {

    // extend form template by entity data
    this.myFormTemplate = this.template.filter(e => e.supressInList !== true);
    this.dataSource = new MatTableDataSource(this.entityList);
    this.displayedColumns = this.myFormTemplate.map(({ ngModel }) => ngModel);
    this.displayedColumns.push("action");

    //this.myFormTemplate.forEach(ctl => {
    //  if (ctl.control === 'select' && ctl.lookup) {
    //    ctl['options'] = this.lookupRepo.getList(ctl.lookup);
    //  }
    //  ctl['value'] = this.entity[ctl.ngModel];
    //})

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onActionButtonClicked(action: string, id: number) {
    this.actionCallback(action, id);
  }

}
