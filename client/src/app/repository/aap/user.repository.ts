import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "src/app/model/aap/user.model";
import { BaseRepository } from './base.repository';
import { IRepository } from "../../interface/aap/irepository";

const API_URL = "/api/user";

@Injectable()
export class UserRepository extends BaseRepository<User> implements IRepository {

  //public user: Observable<User>;

  constructor(public http: HttpClient) {
    super(http, API_URL);
  }

  getList() {

    // extend entity by person
    //this._cachedEntities.forEach(ent => {
    //    if (ent.personId && (!ent.person || ent.personId !== ent.person.id))
    //    {
    //        ent.person = this.personRepo.getList().find(e => e.id === ent.personId);
    //    }
    //});
    return this._cachedEntities;
  }

  getNewEntity() {
    return new User();
  }

  validateEntity(entity: User) {
    //return this.personRepo.validateEntity(entity.person);
    return true;
  }
}
