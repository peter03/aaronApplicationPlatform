import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from "rxjs";

import { MatInputModule } from '@angular/material/input';

import { AddressRepository } from "src/app/repository/aaap/address.repository";
import { Address } from "src/app/model/myaddress.model";

@Component({
  selector: "aaap-address-select",
  templateUrl: "addressSelect.component.html"
})
export class AddressSelectComponent {

  @Input() addressId?: number;
  @Output() onModelChanged = new EventEmitter();

  constructor(
    private repo: AddressRepository) {
  }

  selectionChangedEvent(ctl) {

    //this.onModelChanged.emit({ model: model, oldVal: oldVal, newVal: newVal });
    this.onModelChanged.emit(ctl);

  }

  get addressList(): Observable<Address[]> {
    return this.repo.getListAsObservable();
  }

}
