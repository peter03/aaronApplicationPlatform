import { AfterViewInit, Component, ViewChild, Injector, OnInit, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/global/aaap/component/confirmDialog.component';

import { IId } from "../../interface/aaap/IId";
import { IRepository } from "../../interface/aaap/irepository";
import { AuthenticationService } from "src/app/service/aaap/authentication.service";
import { BaseComponent } from "src/app/module/aaap/base.component";
import { MatTableSetting, MatTableActionButton } from "./matTable.setting";

@Injectable()
export abstract class BaseListComponent<R extends IRepository<T>, T extends IId> extends BaseComponent implements OnInit {

  dataSource: MatTableDataSource<T>;  // sortable datasource wrapper
  formMetadata: any[];

  entities: T[];

  dialog: MatDialog;

  constructor(
    protected repo: R,
    protected router: Router,
    protected authService: AuthenticationService,
    injector: Injector,
    private modelMetadata: any) {
    super(authService, injector);

    this.formMetadata = modelMetadata;
    this.dialog = injector.get(MatDialog);
  }

  ngOnInit() {
  }

  getListAsObservable(): Observable<T[]> {
    return this.repo.getListAsObservable();
  }

  delete(id: number) {

    const message = "aaap.question.deleterecord";
    const dialogData = new ConfirmDialogModel("aaap.dialog.title.pleaseconfirm", message);
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
    res.push(new MatTableActionButton("aaap.button.delete", "warn", "delete"));
    res.push(new MatTableActionButton("aaap.button.edit", "primary", "edit"));
    return res;
  }

}
