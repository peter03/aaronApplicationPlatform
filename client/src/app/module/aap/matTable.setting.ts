export class MatTableSetting {

  actionList: MatTableAction[]

  constructor() {

    this.actionList = [];
  }

}

export class MatTableAction {

  label: string;
  action: string;

}
