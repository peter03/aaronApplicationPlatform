import { AfterViewInit, Component, EventEmitter, Input, OnInit, OnDestroy, Output, ViewChild } from '@angular/core';
import { Observable } from "rxjs";

import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';

import { AddressRepository } from "src/app/repository/aaap/address.repository";
import { Address } from "src/app/model/myaddress.model";

@Component({
  selector: "aaap-address-select",
  templateUrl: "addressSelect.component.html"
})
export class AddressSelectComponent implements OnInit, AfterViewInit, OnDestroy {

  protected entities: Address[];

  @Input() addressId?: number;
  @Output() onModelChanged = new EventEmitter();

  /* control for the selected entity */
  public selectCtrl: FormControl = new FormControl();

  /* control for the MatSelect filter keyword */
  public selectFilterCtrl: FormControl = new FormControl();

  /* list of entities filtered by search keyword */
  public filteredEntities: ReplaySubject<Address[]> = new ReplaySubject<Address[]>(1);

  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

  /* Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  constructor(
    private repo: AddressRepository) {
  }

  ngOnInit() {

    // set initial selection
    this.selectCtrl.setValue(this.repo.getEntityById(this.addressId));

    // load the initial entity list
    this.repo.getListAsObservable().subscribe(res => {
      this.entities = res;
      this.filteredEntities.next(this.entities.slice());
    });
    
    //this.bankCtrl.valueChanges()

    // listen for search field value changes
    this.selectFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterEntities();
      });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /*
   * Sets the initial value after the filteredEntities are loaded initially
   */
  protected setInitialValue() {
    this.filteredEntities
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        this.singleSelect.compareWith = (a: Address, b: Address) => a && b && a.id === b.id;
      });
  }

  selectionChangedEvent(ctl) {
    // fire event and pass selected id
    this.onModelChanged.emit({ value: ctl.value.id });
  }

  protected filterEntities() {
    if (!this.entities) {
      return;
    }
    // get the search keyword
    let search = this.selectFilterCtrl.value;
    if (!search) {
      this.filteredEntities.next(this.entities.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the entities
    this.filteredEntities.next(
      this.entities.filter(e => e.name1.toLowerCase().indexOf(search) > -1)
    );
  }

}
