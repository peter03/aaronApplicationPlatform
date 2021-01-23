import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Rule } from "src/app/model/aap/rule.model";
import { BaseRepository } from 'src/app/repository/aap/base.repository';
import { AuthenticationService } from 'src/app/service/aap/authentication.service';

const API_URL = "/api/rule";

@Injectable()
export class RuleRepository extends BaseRepository<Rule> {

  constructor(
    http: HttpClient,
    authService: AuthenticationService) {
    super(http, API_URL, Rule, authService);
  }

}
