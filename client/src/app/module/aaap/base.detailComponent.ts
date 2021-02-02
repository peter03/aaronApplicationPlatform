import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";
import { IRepository } from '../../interface/aaap/irepository';
import { IId } from '../../interface/aaap/IId';

export abstract class BaseDetailComponent<R extends IRepository<T>, T extends IId> {

  public _entity: T;
  formMetadata: any[];

  constructor(
    protected repo: R,
    protected router: Router,
    protected activeRoute: ActivatedRoute,
    protected location: Location,
    private modelMetadata: any) {

    this.formMetadata = modelMetadata;

    let id = Number.parseInt(activeRoute.snapshot.params["id"]);
    if (isNaN(id)) {    // id param is missing
      router.navigateByUrl("/");
    } else {
      if (id === 0) {
        this._entity = this.repo.getNewEntity();
      }
      else {
        this._entity = Object.assign({}, this.repo.getCachedEntityById(id));    // clone object!
      }
    }
  }

  onSubmit() {

    if (this.repo.validateEntity(this._entity)) {
      this.repo.upsertEntity(this._entity);
      this.location.back();
    }

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
