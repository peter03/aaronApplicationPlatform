import { Component, Injectable, Injector, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";

import { IRepository } from 'src/app/interface/aaap/irepository';
import { IId } from 'src/app/interface/aaap/IId';
import { AuthenticationService } from "src/app/service/aaap/authentication.service";
import { ErrorService } from 'src/app/global/aaap/error/error.service';
import { BaseComponent } from "src/app/module/aaap/base.component";

@Injectable()
export abstract class BaseDetailComponent<R extends IRepository<T>, T extends IId> extends BaseComponent  {

  public _entity: T;
  formMetadata: any[];

  errorService: ErrorService;

  constructor(
    protected repo: R,
    protected router: Router,
    protected activeRoute: ActivatedRoute,
    protected location: Location,
    private modelMetadata: any,
    protected authService: AuthenticationService,
    injector: Injector) {

    super(authService, injector);

    this.formMetadata = modelMetadata;
    this.errorService = injector.get(ErrorService);

    let id = Number.parseInt(activeRoute.snapshot.params["id"]);
    if (isNaN(id)) {    // id param is missing
      router.navigateByUrl("/");
    } else {
      if (id === 0) {
        this._entity = this.repo.getNewEntity();
      }
      else {
        this._entity = Object.assign({}, this.repo.getEntityById(id));    // clone object!
      }
    }

    this.errorService.onError.subscribe(err => this.onError(err));

  }

  onSubmit() {

    if (this.repo.validateEntity(this._entity)) {
      this.repo.upsertEntity(this._entity).subscribe(
        res => { this.router.navigate(['.'], { relativeTo: this.activeRoute.parent }); }
        )
      }
  }

  onError(err: Error) {
    //console.log("an error occured ...");
  }

  cancel() {
    this.location.back();
    return false;
  }

  get entity(): T {
    return this._entity;
  }

  get isValid(): boolean {
    return this.repo.validateEntity(this._entity);
  }

  public onActionButtonClicked(action: string) {

    switch (action) {
      case "submit":
        this.onSubmit();
        break;
      case "cancel":
        this.cancel();
        break;
      default:
        console.warn(`Action ${action} is not supported!`);
    }

  }

}
