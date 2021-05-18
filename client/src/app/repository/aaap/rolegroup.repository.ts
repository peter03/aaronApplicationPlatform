import { Injector, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Rolegroup } from "src/app/model/aaap/rolegroup.model";
import { BaseRepository } from 'src/app/repository/aaap/base.repository';
import { AuthenticationService } from 'src/app/service/aaap/authentication.service';

const API_URL = "/api/rolegroup";

@Injectable()
export class RolegroupRepository extends BaseRepository<Rolegroup> {

  constructor(
    http: HttpClient,
    authService: AuthenticationService,
    injector: Injector) {
    super(http, API_URL, new Rolegroup(), authService, injector);
  }

}
