import { Component, Injector } from "@angular/core";
import { Router } from "@angular/router";

import { AddressRepository } from "src/app/repository/aaap/address.repository";
import { BaseListComponent } from 'src/app/module/aaap/baseList.component';
import { AuthenticationService } from "src/app/service/aaap/authentication.service";
import { Address } from "src/app/model/myaddress.model";
import { AddressMetadata } from './address.metadata';

@Component({
  selector: "aaap-address-list",
  templateUrl: "addressList.component.html"
})
export class AddressListComponent extends BaseListComponent<AddressRepository, Address> {

  constructor(
    public repo: AddressRepository,
    public router: Router,
    public authService: AuthenticationService,
    injector: Injector) {
    super(repo, router, authService, injector, AddressMetadata)
  }

}
