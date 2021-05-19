import { Injector, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, subscribeOn } from "rxjs/operators";

import { User } from "src/app/model/aaap/user.model";
import { BaseRepository } from './base.repository';
import { PersonRepository } from 'src/app/repository/aaap/person.repository';
import { AuthenticationService } from 'src/app/service/aaap/authentication.service';

const API_URL = "/api/user";

@Injectable()
export class UserRepository extends BaseRepository<User> {

  constructor(
    http: HttpClient,
    authService: AuthenticationService,
    public personRepo: PersonRepository,
    injector: Injector) {
    super(http, API_URL, User, authService, injector);
  }

  getListAsObservable(): Observable<User[]> {

    return super.getListAsObservable(this.adaptCachedList.bind(this));
  }

  public adaptCachedList() {

    // extend entity by person
    this.personRepo.getListAsObservable().subscribe(list => {
      this._cachedEntities.forEach(ent => {
        if (ent.personId && (!ent.person || ent.personId !== ent.person.id)) {
          ent.person = this.personRepo.getEntityById(ent.personId);
        }
      });
    });

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
