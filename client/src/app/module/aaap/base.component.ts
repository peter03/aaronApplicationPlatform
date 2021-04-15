import { Component, Injectable, Injector, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";

import { AuthenticationService } from 'src/app/service/aaap/authentication.service';
import { User } from 'src/app/model/aaap/user.model';
import { NotificationService } from 'src/app/global/aaap/error/notification.service';
//import { Role } from '@app/model/role.enum';

@Injectable()
export abstract class BaseComponent implements OnDestroy {

  user: User;
  notificationService: NotificationService

  constructor(
    private auth: AuthenticationService,
    injector: Injector) {

    this.notificationService = injector.get(NotificationService);

    // this.authenticationService.loginData.subscribe(x => this.user = x.user);
    //setTimeout(() => {
    //  let snackEl = document.getElementsByClassName('mat-snack-bar-container').item(0);
    //  //ren.listen(snackEl, 'click', () => this.dismiss())

    //  //https://stackoverflow.com/questions/53659123/how-to-dismiss-close-an-angular-snackbar-element-from-inside-element

    //})

  }

  ngOnDestroy() {
    this.notificationService.dismissSnackBar();
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
