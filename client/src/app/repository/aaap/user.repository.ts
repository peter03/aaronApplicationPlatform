import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "src/app/model/aaap/user.model";
import { BaseRepository } from './base.repository';
import { AuthenticationService } from 'src/app/service/aaap/authentication.service';

const API_URL = "/api/user";

@Injectable()
export class UserRepository extends BaseRepository<User> {

  constructor(
    http: HttpClient,
    authService: AuthenticationService) {
    super(http, API_URL, User, authService);
  }

  getList() {

    // extend entity by person
    //this._cachedEntities.forEach(ent => {
    //    if (ent.personId && (!ent.person || ent.personId !== ent.person.id))
    //    {
    //        ent.person = this.personRepo.getList().find(e => e.id === ent.personId);
    //    }
    //});
    // return this._cachedEntities;

    //let url = `${API_URL}/list`;

    //if (!this._cachedEntities) {
    //  this.http.get<User[]>(url).subscribe(res => {
    //    this._cachedEntities = res;
    //  })
    //}

    return this._cachedEntities;

  }

  validateEntity(entity: User) {

    if (!!entity.password) {
      if (entity.password !== entity.confirmPassword) {
        return false;
      }
    }

    return true;
  }

  
}
