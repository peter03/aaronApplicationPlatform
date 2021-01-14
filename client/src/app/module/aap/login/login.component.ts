import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";

import { UserRepository } from "src/app/repository/aap/user.repository";
//import { EnvironmentService } from "src/app/global/environment.service";
import { EntityLoaderService } from "src/app/service/aap/entityLoader.service";
import { AuthenticationService } from "src/app/service/aap/authentication.service";

import { Observable, of } from 'rxjs';
import { map, catchError, first } from 'rxjs/operators';

const API_URL = "/api/user";

@Component({
    selector: "aap-login",
    templateUrl: "login.component.html"
})
export class LoginComponent {

    public loginName: string = "admin";
    public password: string = "123";
    loading = false;
    
    constructor(public http: HttpClient,
                public authService: AuthenticationService,
                public router: Router,
                //public envService: EnvironmentService,
                public userRepo: UserRepository,
                public entityLoader: EntityLoaderService) { 
    }

    login() {

        this.loading = true;
        this.authService.login(this.loginName, this.password)
            .pipe(first())
            .subscribe(
                data => {
                    this.entityLoader.init().subscribe(res => {
                        if (res === true) {
                            this.setupEnvironment();
                            this.router.navigate(["mainmenu"]);
                        }
                    })
                },
                // error => {   --> handled by global err handler!
                //     console.log(error);
                //     this.loading = false;
                // }
                );

    }
    

  setupEnvironment() {

    // todo...
    
    }
    
}
