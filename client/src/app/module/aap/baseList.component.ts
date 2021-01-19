import { AfterViewInit, Component, ViewChild, Injector, OnInit, Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/global/component/aap/confirmDialog.component';

import { IId } from "../../interface/aap/IId";
import { IRepository } from "../../interface/aap/irepository";
import { AuthenticationService } from "../../service/aap/authentication.service";
import { BaseComponent } from "./base.component";
import { MatTableSetting, MatTableActionButton } from "./matTable.setting";

@Injectable()
export abstract class BaseListComponent<R extends IRepository<T>, T extends IId> extends BaseComponent implements OnInit {

  dataSource: MatTableDataSource<T>;  // sortable datasource wrapper
  formMetadata: any[];

  dialog: MatDialog;

  constructor(
    protected repo: R,
    protected router: Router,
    protected authService: AuthenticationService,
    protected injector: Injector,
    private modelMetadata: any) {
    super(authService);

    this.formMetadata = modelMetadata;
    this.dialog = injector.get(MatDialog);
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.repo.getList());
  }

  ngOnInit() {
    //this.onActionButtonClicked = this.onActionButtonClicked.bind(this);

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

    const message = "aap.question.deleterecord";
    const dialogData = new ConfirmDialogModel("aap.dialog.title.pleaseconfirm", message);
    dialogData.messageParams = { p0: id };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.repo.deleteEntity(id);
      }
    });
  }

  public onActionButtonClicked(action: string, id: number) {

    switch (action) {
      case "edit":
        this.router.navigate([`${this.router.url}/detail`, id]);
        break;

      case "delete":
        this.delete(id);
        break;
      default:
        console.warn(`Action ${action} is not supported!`);
    }

  }

  get defaultMatTableSetting(): MatTableSetting {

    let res: MatTableSetting = new MatTableSetting();
    res.actionButtonList = this.defaultActionButtonList;
    return res;
  }

  get defaultActionButtonList(): MatTableActionButton[] {

    let res: MatTableActionButton[] = [];
    res.push(new MatTableActionButton("aap.button.delete", "warn", "delete"));
    res.push(new MatTableActionButton("aap.button.edit", "primary", "edit"));
    return res;
  }

}
