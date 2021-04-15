import { Component, Input, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";

import { AuthenticationService } from "src/app/service/aaap/authentication.service";
import { AddressRepository } from "src/app/repository/aaap/address.repository";
import { Address } from "src/app/model/myaddress.model";
import { BaseDetailComponent } from 'src/app/module/aaap/base.detailComponent';
import { AddressMetadata } from './address.metadata';

@Component({
  selector: "aaap-address-detail",
  templateUrl: "addressDetail.component.html"
})
export class AddressDetailComponent extends BaseDetailComponent<AddressRepository, Address>  {

  constructor(
    repo: AddressRepository,
    router: Router,
    activeRoute: ActivatedRoute,
    location: Location,
    authService: AuthenticationService,
    injector: Injector,
  ) {
    super(repo, router, activeRoute, location, AddressMetadata, authService, injector)
  }

}
