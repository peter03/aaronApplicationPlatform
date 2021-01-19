import { Component, Input, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormArray, FormBuilder, Validator } from '@angular/forms';

import { LookupRepository } from "src/app/repository/aap/lookup.repository";
import { IId } from '../../interface/aap/IId';

@Component({
  selector: "aaap-detail-formbuilder",
  templateUrl: "detailFormbuilder.component.html"
})
export class DetailFormbuilderComponent implements OnInit{

  @Input() entity: IId;
  @Input() template: any[];
  //@Input() formGroup: FormGroup;

  myFormTemplate: any[];
  //myFormGroup: FormGroup;
    
  constructor(private lookupRepo: LookupRepository) {
  }

  ngOnInit() {

    // extend form template by entity data
    this.myFormTemplate = this.template;
    this.myFormTemplate.forEach(ctl => {

      if (ctl.control === 'select' && ctl.lookup) {
        ctl['options'] = this.lookupRepo.getList(ctl.lookup);
      }

      ctl['value'] = this.entity[ctl.ngModel];

    })
  }

  modelChanged(model, newObj) {
    this.entity[model] = newObj;
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
