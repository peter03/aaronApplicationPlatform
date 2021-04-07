import { Injector, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Person } from "src/app/model/aaap/person.model";
import { BaseRepository } from 'src/app/repository/aaap/base.repository';
import { AuthenticationService } from 'src/app/service/aaap/authentication.service';

const API_URL = "/api/person";

@Injectable()
export class PersonRepository extends BaseRepository<Person> {

  constructor(
    http: HttpClient,
    authService: AuthenticationService,
    injector: Injector) {
    super(http, API_URL, Person, authService, injector);
  }

}
