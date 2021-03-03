import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, Validator } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

import { LookupRepository } from "src/app/repository/aaap/lookup.repository";
import { IId } from '../../interface/aaap/IId';
import { UserRepository } from '../../repository/aaap/user.repository';
import { MatTableSetting } from './matTable.setting';

@Component({
  selector: "aaap-list-formbuilder",
  templateUrl: "listFormbuilder.component.html"
})
export class ListFormbuilderComponent implements OnInit, AfterViewInit{

  @Input() entityList: Observable<any[]>;
  @Input() template: any[];
  @Input() setting: MatTableSetting;
  @Input() actionCallback: Function;
  
  displayedColumns: string[]; // = ['loginName', 'passwordMD5', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<IId>;  // sortable datasource wrapper
  myFormTemplate: any[];
  //tableSetting: MatTableSetting
      
  constructor(private lookupRepo: LookupRepository,
              public userRepo: UserRepository) {
  }

  ngOnInit() {

    this.myFormTemplate = this.template.filter(e => e.suppressInList !== true);
    this.displayedColumns = this.myFormTemplate.map(({ ngModel }) => ngModel);
    this.displayedColumns.push("action");
    this.dataSource = new MatTableDataSource<IId>();

    this.entityList.subscribe(list => {
      this.dataSource.data = list;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    //this.myFormTemplate.forEach(ctl => {
    //  if (ctl.control === 'select' && ctl.lookup) {
    //    ctl['options'] = this.lookupRepo.getList(ctl.lookup);
    //  }
    //  ctl['value'] = this.entity[ctl.ngModel];
    //})

  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onActionButtonClicked(action: string, id: number) {
      this.actionCallback(action, id);
  }

  trackByIndex(index, item) {
    return index;
  }

  getValue(obj, path) {
    path = path.replace(/\[(\w+)\]/g, '.$1')
    path = path.replace(/^\./, '')
    var a = path.split('.')
    var o = obj
    while (a.length) {
      var n = a.shift()
      if (!(n in o)) return
      o = o[n]
    }
    return o
  }

}
