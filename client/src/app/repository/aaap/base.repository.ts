import { Injector, Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IId } from 'src/app/interface/aaap/IId';
import { environment } from 'src/environments/environment';
import { IRepository } from "src/app/interface/aaap/irepository";

import { AuthenticationService } from 'src/app/service/aaap/authentication.service';
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

export abstract class BaseRepository<T extends IId> implements IRepository<T> {

  _url: string;
  _cachedEntities: T[];    // todo: save them (encrypted) in web storage
  _selectedEntityId?: number = null;

  //UpsertSuccessEvent = new EventEmitter<T>();
    
  constructor(
    protected http: HttpClient,
    protected route: string,
    private entityType: T, // new () => T,
    public authService: AuthenticationService,
    protected injector: Injector) {

    this.reset();
    this._url = environment.serverUrl + route;
    // this.loadEntities();    --> will be called in entityLoader.service after successfull login

  }

  loadEntities(): Promise<any> {  // returns a promise instead of an observable list!

    this.reset();
    
    return this.getListAsObservable()
      .toPromise()
      .then(res => {
        this.onEntitiesLoaded();
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

  onEntitiesLoaded() {
  }

  //upsertEntity(entity: T) {

  //  this.http.post<T>(`${this._url}/upsert`, entity).subscribe(res => {
  //    this.updateRepository(res);
  //    this.UpsertSuccessEvent.emit(res);
  //  });
  //}

  upsertEntity(entity: T) : Observable<any> {

    return this.http.post<T>(`${this._url}/upsert`, entity).pipe(map(res => {
      this.updateRepository(res);
    }));
  }

  onUpsertSuccess(entity: T) {
  }

  updateRepository(entity: T) {

    if (!this._cachedEntities) {
      this._cachedEntities = [];
    }

    var ix = this._cachedEntities.findIndex(e => e.id === entity.id);
    if (ix === -1) {
      this._cachedEntities.push(this.mapEntity(entity));
    }
    else {
      this._cachedEntities[ix] = this.mapEntity(entity);
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

  //getListAsObservable(callbackFn?): Observable<T[]> {

  //  if (this._cachedEntities) {
  //    return of(this.getList());
  //  }
  //  else {
  //    //let url = `${this._url}/list`;
  //    let url = this._url + "/list";
  //    return this.http.get<T[]>(url).pipe(
  //      map(res => {
  //        this._cachedEntities = res || [];
  //        if (callbackFn) {
  //          callbackFn()
  //        }
  //        return this._cachedEntities;
  //      })
  //    );
  //  };
  //}

  getListAsObservable(callbackFn?): Observable<T[]> {

    if (this._cachedEntities) {
      return of(this.getList());
    }
    else {
      //let url = `${this._url}/list`;
      let url = this._url + "/list";
      return this.http.get<T[]>(url).pipe(
        map(res => {
          this._cachedEntities = [];
          if (res) {
            // populate cache
            res.forEach(itm => {
              this._cachedEntities.push(this.mapEntity(itm));
            })
          }
          if (callbackFn) {
            callbackFn()
          }
          return this._cachedEntities;
        })
      );
    };
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
    //return new this.entityType();
    return Object.assign({}, this.entityType);
  }

  validateEntity(entity: T) {
    return true;
  }

  private mapEntity(entity: any): T {
    const newEntity = this.getNewEntity();
    Object.assign(newEntity, entity); // keeps getter & setter!
    return newEntity;
  }

}
