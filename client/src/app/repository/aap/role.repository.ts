import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Role } from "src/app/model/aap/role.model";
import { BaseRepository } from 'src/app/repository/aap/base.repository';
import { IRepository } from "src/app/interface/aap/irepository";

const API_URL = "/api/role";

@Injectable()
export class RoleRepository extends BaseRepository<Role> {

  constructor(protected http: HttpClient) {
    super(http, API_URL, Role);
  }


}
