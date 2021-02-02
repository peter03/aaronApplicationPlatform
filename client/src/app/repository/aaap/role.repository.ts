import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Role } from "src/app/model/aaap/role.model";
import { BaseRepository } from 'src/app/repository/aaap/base.repository';
import { AuthenticationService } from 'src/app/service/aaap/authentication.service';

const API_URL = "/api/role";

@Injectable()
export class RoleRepository extends BaseRepository<Role> {

  constructor(
    http: HttpClient,
    authService: AuthenticationService) {
    super(http, API_URL, Role, authService);
  }

}
