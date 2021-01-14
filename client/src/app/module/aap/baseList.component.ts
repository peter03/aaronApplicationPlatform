import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

//import { MatDialog } from '@angular/material';

//import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/global/component/confirmDialog.component';

import { IId } from "../../interface/aap/IId";
import { IRepository } from "../../interface/aap/irepository";
import { AuthenticationService } from "../../service/aap/authentication.service";
import { BaseComponent } from "./base.component";

export abstract class BaseListComponent<R extends IRepository<T>, T extends IId> extends BaseComponent {

  dataSource: MatTableDataSource<T>;  // sortable datasource wrapper

    constructor(
    //public dialog: MatDialog,
    protected repo: R,
    protected router: Router,
    protected authService: AuthenticationService) {
    super(authService);

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.repo.getList());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  get entities(): T[] {

    var entities = this.repo.getList();
    if (entities != null && entities.length > 0) {
    }
    return entities;
  }

  delete(id: number) {

    //const message = "question.deleterecord";
    //const dialogData = new ConfirmDialogModel("dialog.title.pleaseconfirm", message);
    //dialogData.messageParams = {p0: id};

    //const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    //    maxWidth: "400px",
    //    data: dialogData
    //});

    //dialogRef.afterClosed().subscribe(dialogResult => {
    //    if (dialogResult) {
    //        this.repo.deleteEntity(id);
    //    }
    //});
  }

}
