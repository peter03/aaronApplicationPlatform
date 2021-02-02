import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { FormGroup, FormControl, Validators, FormArray, FormBuilder, Validator } from '@angular/forms';

import { LookupRepository } from "src/app/repository/aaap/lookup.repository";
import { IId } from '../../interface/aaap/IId';

@Component({
  selector: "aaap-detail-formbuilder",
  templateUrl: "detailFormbuilder.component.html"
})
export class DetailFormbuilderComponent implements OnInit{

  @Input() entity: IId;
  @Input() template: any[];
  @Input() actionCallback: Function;
  @Output() onCreateControl = new EventEmitter();
  @Output() onModelChanged = new EventEmitter();
  
  @ViewChild('myForm') myForm: HTMLFormElement;

  myFormTemplate: any[];
  //myFormGroup: FormGroup;
    
  constructor(private lookupRepo: LookupRepository) {
  }

  ngOnInit() {

    // extend form template by entity data
    //this.myFormTemplate = this.template.filter(e => e.suppressInDetail !== true);
    this.myFormTemplate = Object.assign([], this.template); // clone object!
    this.myFormTemplate.forEach(ctl => {

      if (ctl.control === 'select' && ctl.lookup) {
        ctl['options'] = this.lookupRepo.getList(ctl.lookup);
      }

      ctl['value'] = this.entity[ctl.ngModel];

    })
  }

  modelChangedEvent(model, newVal) {

    let oldVal = this.entity[model];
    this.entity[model] = newVal;

    let myCtl = this.myForm.form.controls[model];
    myCtl["ngModel"] = model;
    //this.onModelChanged.emit({ model: model, oldVal: oldVal, newVal: newVal });
    this.onModelChanged.emit(myCtl);

  }

  actionButtonClickEvent(action: string) {
    this.actionCallback(action);
  }

  createControlEvent(ctlMetadata: any) {
    this.onCreateControl.emit(ctlMetadata);
    return ctlMetadata;
  }

    //this.myFormGroup = this.formGroup;
    //let group = {};
    //this.myFormTemplate.forEach(ctl => {

    //  if (ctl.control === 'select' && ctl.lookup) {
    //    ctl['options'] = this.lookupRepo.getList(ctl.lookup);
    //  }

    //  const validators = [];
    //  if (ctl.required) {
    //    validators.push(Validators.required);
    //  }
    //  if (ctl.maxLength) {
    //    validators.push(Validators.maxLength(ctl.maxLength));
    //  }

    //  let fc = new FormControl(this.entity[ctl.ngModel], validators);
    //  // group[ctl.ngModel] = fc;
    //  this.formGroup.addControl(ctl.ngModel, fc);

    //})

    // this.formGroup = new FormGroup(group);
}
