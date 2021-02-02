export class MatTableSetting {

  actionButtonList: MatTableActionButton[]

  constructor() {
  }

}

export class MatTableActionButton {
  
  constructor(
    public label: string,
    public color: string,
    public action: string) { }
 
}

