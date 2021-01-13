import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";
import { IRepository } from '../../interface/aap/irepository';
import { IId } from '../../interface/aap/IId';

export abstract class BaseDetailComponent<R extends IRepository<T>, T extends IId> {

    public _entity: T;

    constructor(
        public repo: R,
        router: Router,
        activeRoute: ActivatedRoute,
        public location: Location) {

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
        this.repo.upsertEntity(this._entity);
        this.location.back();
    }

    cancel(){
        this.location.back();
        return false;
    }

    get entity(): T {
        return this._entity;
    }

    get isValid(): boolean {
        return this.repo.validateEntity(this._entity);
    }
}
