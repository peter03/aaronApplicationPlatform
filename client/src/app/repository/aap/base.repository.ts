import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IId } from "../../interface/aap/IId";
import { environment } from 'src/environments/environment';
import { IRepository } from "../../interface/aap/irepository";

import { AuthenticationService } from 'src/app/service/aap/authentication.service';
import { User } from 'src/app/model/aap/user.model';

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

    // this.authService.loginData.subscribe(x => this._user = x.user);
    this._url = environment.serverUrl + route;
    // this.loadEntities();    --> will be called in entityLoader.service after successfull login

  }
    

  loadEntities(): Promise<any> {

    this.reset();
    let url = `${this._url}/list`;

    // we wan't a promise instead of an observable list as result
    return this.http.get<T[]>(url)
      .toPromise()
      .then(res => {
        this._cachedEntities = res;
        this._selectedEntityId = null;
        return Promise.resolve();
      })
      .catch(err => {
        return Promise.reject(err.message)
      })

  }

  reset() {
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

  getCachedEntityById(id: number) {
    return this.getEntityById(id);
  }

  getEntityById(id: number) {

    if (this._cachedEntities === null) {
      return null;
    }
    else {
      return this.getList().find(e => e.id === id);
    }
  }

  get selectedEntityId(): number {
    return this._selectedEntityId;
  }

  set selectedEntityId(val: number) {
    this._selectedEntityId = val;
  }

  get selectedEntity(): T {
    return this.getCachedEntityById(this.selectedEntityId);
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
