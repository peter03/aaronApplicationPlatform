import { Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/service/aaap/authentication.service';

export abstract class BaseService {

  constructor(
    private authService: AuthenticationService,
    injector: Injector) {
    }

}
