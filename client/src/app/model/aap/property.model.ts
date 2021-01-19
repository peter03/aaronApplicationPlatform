export class Property {

  label: string;
  controlType: string;
  ngModel: string;
  value: any;
  lookup: string;

  constructor(label, controlType, ngModel) {
    this.label = label;
    this.controlType = controlType;
    this.ngModel = ngModel;
  }

}
