import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, Injector } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, Validator, NgForm } from '@angular/forms';
import { Observable } from "rxjs";

import { Lookup } from 'src/app/model/aaap/lookup.model';
import { LookupRepository } from "src/app/repository/aaap/lookup.repository";
import { IId } from 'src/app/interface/aaap/IId';
import { IRepository } from 'src/app/interface/aaap/IRepository';

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

  // https://stackblitz.com/edit/ngtemplateoutletcontext?file=src%2Fapp%2Fmy-selector%2Fmy-selector.component.ts

  constructor(
    private lookupRepo: LookupRepository,
    private injector: Injector) {
  }

  ngOnInit() {

    // extend form template by entity data
    //this.myFormTemplate = this.template.filter(e => e.suppressInDetail !== true);
    this.myFormTemplate = Object.assign([], this.template); // clone object!
    this.myFormTemplate.forEach(ctl => {

      if ((ctl.control === 'select' || ctl.control === 'selectx') && ctl.lookup) {
        ctl['options'] = this.lookupRepo.getListAsObservable(ctl.lookup); // todo: wait until data available
      }

      // get object value by path (e.g. "Person.Surname")
      let val = this.getValue(this.entity, ctl.ngModel);
      ctl['value'] = val; //  this.entity[ctl.ngModel];

    })

    setTimeout(() => {
      console.log(this.myForm.controls);
    })

  }

  modelChangedEvent(model, newVal) {

    let oldVal = this.entity[model];

    this.setValue(this.entity, model, newVal);
    //this.entity[model] = newVal;

    let myCtl = this.myForm.form.controls[model]; 
    if (myCtl) {  // todo: components will not be found (e.g. addressselect)?
      myCtl["ngModel"] = model;
      //this.onModelChanged.emit({ model: model, oldVal: oldVal, newVal: newVal });
      this.onModelChanged.emit(myCtl);
    }

  }

  actionButtonClickEvent(action: string) {
    this.actionCallback(action);
  }

  createControlEvent(ctlMetadata: any) {
    this.onCreateControl.emit(ctlMetadata);
    return ctlMetadata;
  }

  setValue(obj, path, value) {
    var a = path.split('.')
    var o = obj
    while (a.length - 1) {
      var n = a.shift()
      if (!(n in o)) o[n] = {}
      o = o[n]
    }
    o[a[0]] = value
  }

  getValue(obj, path) {
    path = path.replace(/\[(\w+)\]/g, '.$1')
    path = path.replace(/^\./, '')
    var a = path.split('.')
    var o = obj
    while (a.length) {
      var n = a.shift()
      if (!(n in o)) return
      o = o[n]
    } 
    return o
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
