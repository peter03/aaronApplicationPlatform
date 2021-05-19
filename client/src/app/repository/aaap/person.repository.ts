import { Injector, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

import { Person } from "src/app/model/aaap/person.model";
import { BaseRepository } from 'src/app/repository/aaap/base.repository';
import { AuthenticationService } from 'src/app/service/aaap/authentication.service';
import { AddressRepository } from 'src/app/repository/aaap/address.repository';

const API_URL = "/api/person";

@Injectable()
export class PersonRepository extends BaseRepository<Person> {

  constructor(
    http: HttpClient,
    authService: AuthenticationService,
    private addressRepo: AddressRepository,
    injector: Injector) {
    super(http, API_URL, Person, authService, injector);
  }

  public getListAsObservable(): Observable<Person[]> {

    return super.getListAsObservable(this.updateAddressRepo.bind(this));
  }

  public updateAddressRepo() {

    if (this._cachedEntities) {
      this._cachedEntities.forEach(ent => {
        if (ent.address) {
          this.addressRepo.updateRepository(ent.address);
          ent.address = this.addressRepo.getEntityById(ent.addressId);
        }
      });
    }
  }

}
