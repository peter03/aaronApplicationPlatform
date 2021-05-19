import { Injector, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Address } from "src/app/model/myaddress.model";
import { BaseRepository } from 'src/app/repository/aaap/base.repository';
import { AuthenticationService } from 'src/app/service/aaap/authentication.service';

const API_URL = "/api/address";

@Injectable()
export class AddressRepository extends BaseRepository<Address> {

  constructor(
    http: HttpClient,
    authService: AuthenticationService,
    injector: Injector) {
    let ent = new Address();
    super(http, API_URL, Address, authService, injector);
  }

}
