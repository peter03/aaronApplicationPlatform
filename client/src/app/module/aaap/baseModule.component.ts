import { Component, Injectable, Injector } from '@angular/core';

import { AuthenticationService } from 'src/app/service/aaap/authentication.service';
import { BaseComponent } from "src/app/module/aaap/base.component";
import { MenuRepository } from "src/app/repository/aaap/menu.repository";

@Injectable()
export abstract class BaseModuleComponent extends BaseComponent {

  menuRepo: MenuRepository;

  constructor(
    authService: AuthenticationService,
    injector: Injector) {
    super(authService, injector);
    this.menuRepo = injector.get(MenuRepository);
  }


  get moduleSetting() : object {
    return this.menuRepo.selectedMenuSetting;
  }

}
