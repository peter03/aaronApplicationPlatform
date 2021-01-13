import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Rolegroup } from "src/app/model/aap/rolegroup.model";
import { BaseRepository } from 'src/app/repository/aap/base.repository';
import { IRepository } from "src/app/interface/aap/irepository";

const API_URL = "/api/rolegroup";

@Injectable()
export class RolegroupRepository extends BaseRepository<Rolegroup> {

  constructor(protected http: HttpClient) {
    super(http, API_URL, Rolegroup);
  }


}
