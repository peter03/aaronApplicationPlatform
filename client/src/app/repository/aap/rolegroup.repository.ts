import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Rolegroup } from "src/app/model/aap/rolegroup.model";
import { BaseRepository } from 'src/app/repository/aap/base.repository';
import { AuthenticationService } from 'src/app/service/aap/authentication.service';

const API_URL = "/api/rolegroup";

@Injectable()
export class RolegroupRepository extends BaseRepository<Rolegroup> {

  constructor(
    http: HttpClient,
    authService: AuthenticationService) {
    super(http, API_URL, Rolegroup, authService);
  }

}
