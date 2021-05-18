import { Injector, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Rule } from "src/app/model/aaap/rule.model";
import { BaseRepository } from 'src/app/repository/aaap/base.repository';
import { AuthenticationService } from 'src/app/service/aaap/authentication.service';

const API_URL = "/api/rule";

@Injectable()
export class RuleRepository extends BaseRepository<Rule> {

  constructor(
    http: HttpClient,
    authService: AuthenticationService,
    injector: Injector) {
    super(http, API_URL, new Rule(), authService, injector);
  }

}
