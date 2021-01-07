import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";

//import {TranslateService} from '@ngx-translate/core';

import { AuthenticationService } from 'src/app/service/aap/authentication.service';
import { User } from 'src/app/model/aap/user.model';
//import { Role } from '@app/model/role.enum';

export abstract class BaseComponent {

    user: User;

    constructor(private authenticationService: AuthenticationService) {
        this.authenticationService.loginData.subscribe(x => this.user = x.user);
    }

    get isAdmin() {
        return this.user && this.user.isAdmin;
    }

    //get isShopOwner() {
    //    return this.user && this.user.isShopOwner;
    //}

    //get isShopAssistant() {
    //    return this.user && this.user.isShopAssistant;
    //}

    //get isSupplier() {
    //    return this.user && this.user.isSupplier;
    //}

}
