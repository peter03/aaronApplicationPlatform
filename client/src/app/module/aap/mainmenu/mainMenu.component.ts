import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationService } from "../../../service/aap/authentication.service";
import { BaseComponent } from "../base.component";
//import {TranslateService} from '@ngx-translate/core';


@Component({
    selector: "aap-main-menu",
    templateUrl: "mainMenu.component.html",
    styleUrls: ["./mainMenu.component.scss"]
    
})
export class MainMenuComponent extends BaseComponent {

    constructor(
        private router: Router,
        //public translate: TranslateService,
        authenticationService: AuthenticationService) { 
            super(authenticationService);
        }

        btnClick= function (navto: string) {
            this.router.navigateByUrl(navto);
        };       

}
