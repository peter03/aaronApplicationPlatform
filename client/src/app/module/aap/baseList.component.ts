import { Component } from "@angular/core";
import { Router } from "@angular/router";
//import { MatDialog } from '@angular/material';

//import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/global/component/confirmDialog.component';

import { IId } from "../../interface/aap/IId";
import { IRepository } from "../../interface/aap/irepository";
import { AuthenticationService } from "../../service/aap/authentication.service";
import { BaseComponent } from "./base.component";

export abstract class BaseListComponent<R extends IRepository<T>, T extends IId> extends BaseComponent {

    constructor(
        //public dialog: MatDialog,
        protected repo: R,
        protected router: Router,
        protected authService: AuthenticationService) { 
            super(authService);
        }

    get entities(): T[] {

        var entities = this.repo.getList();
        if (entities != null && entities.length > 0) {
            //let pageIndex = (this.naviService.currentPage - 1) * this.naviService.entityPerPage;
            //return filteredEntities.slice(pageIndex, pageIndex + this.naviService.entityPerPage);
        }
        return entities;
    }

    delete(id: number){

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
