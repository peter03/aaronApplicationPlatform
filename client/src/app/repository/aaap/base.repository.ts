import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IId } from "../../interface/aaap/IId";
import { environment } from 'src/environments/environment';
import { IRepository } from "../../interface/aaap/irepository";

import { AuthenticationService } from 'src/app/service/aaap/authentication.service';
import { User } from 'src/app/model/aaap/user.model';
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

export abstract class BaseRepository<T extends IId> implements IRepository<T> {

  _url: string;
  _cachedEntities: T[];    // todo: save them (encrypted) in web storage
  _selectedEntityId?: number = null;
  _user: User;
    
  constructor(
    protected http: HttpClient,
    protected route: string,
    private entityType: new () => T,
    public authService: AuthenticationService) {

    this.reset();
    this._url = environment.serverUrl + route;
    // this.loadEntities();    --> will be called in entityLoader.service after successfull login

  }

  loadEntities(): Promise<any> {  // returns a promise instead of an observable list!

    this.reset();
    
    return this.getListAsObservable()
      .toPromise()
      .then(res => {
        return Promise.resolve();
      })
      .catch(err => {
        return Promise.reject(err.message)
      })

  }

  reset() {
    this._cachedEntities = null;
    this._selectedEntityId = null;
  }

  upsertEntity(entity: T) {

    this.http.post<T>(`${this._url}/upsert`, entity).subscribe(res => {
      this.updateRepository(res);
    });
  }

  updateRepository(entity: T) {

    var ix = this._cachedEntities.findIndex(e => e.id === entity.id);
    if (ix === -1) {
      this._cachedEntities.push(entity);
    }
    else {
      this._cachedEntities[ix] = entity;
    };
  }

  deleteEntity(id: number) {

    this.http.delete(`${this._url}/${id}`).subscribe(res => {

      // update repository
      var ix = this._cachedEntities.findIndex(e => e.id === id);
      if (ix > -1) {
        this._cachedEntities.splice(ix, 1);
      }
    });
  }

  getList() {

    return this._cachedEntities;
  }

  getListAsObservable_org() : Observable<T[]> {

    if (this._cachedEntities) {
      return of(this.getList());
    }
    else {
      let url = `${this._url}/list`;
      return this.http.get<T[]>(url).pipe(
        map(res => this._cachedEntities = res)
      );
    }
  }


  getListAsObservable(callbackFn?): Observable<T[]> {

    if (this._cachedEntities) {
      return of(this.getList());
    }
    else {
      let url = `${this._url}/list`;
      return this.http.get<T[]>(url).pipe(
        map(res => {
          this._cachedEntities = res;
          if (callbackFn) {
            callbackFn()
          }
          return this._cachedEntities;
        })
      );
    }
  }

  getEntityById(id: number) {

    if (this._cachedEntities === null) {
      return null;
    }
    else {
      return this._cachedEntities.find(e => e.id === id);
    }
  }

  get selectedEntityId(): number {
    return this._selectedEntityId;
  }

  set selectedEntityId(val: number) {
    this._selectedEntityId = val;
  }

  get selectedEntity(): T {
    return this.getEntityById(this.selectedEntityId);
  }

  //getNewEntity<T>(t: new () => T): T {
  //  return new t();
  //}

  getNewEntity(): T {
    return new this.entityType();
  }

  validateEntity(entity: T) {
    return true;
  }

}
