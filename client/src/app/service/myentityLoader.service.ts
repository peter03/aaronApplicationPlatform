// add your repos which should be filled after successfull login to the promises getter

import { inject, Injectable, Injector } from "@angular/core";

// import { MyRepository } from "src/app/repository/myapp/myrepo.repository";

@Injectable()
export class MyEntityLoaderService {


  constructor(
    public injector: Injector) {
  }

  public get promises() {
    return [
      // this.injector.get(MyRepository).loadEntities(),
    ];
  }

}
