// In aaap, lookups are used as data list for drop down controls (e.g. countrylist). Here you can add your own lookups.

import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, forkJoin, } from "rxjs";

import { Lookup } from 'src/app/model/aaap/lookup.model';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";
import { BaseLookupRepository } from "src/app/repository/aaap/baselookup.repository";

import Util from "src/app/global/aaap/util";

// import { MyRepository } from "src/app/repository/myapp/myrepo.repository";

@Injectable()
export abstract class MyLookupRepository extends BaseLookupRepository {

  //myRepo: MyRepository;
  _mycachedLookup: Lookup[] = null;

  constructor(
    http: HttpClient,
    injector: Injector) {
    super(http, injector);
    //this.myRepo = injector.get(MyRepository)
  }

  // Please add here your lookups ...

  public get promises() {
    //return [this.loadMyLookup()];
    return [];
  }

  //loadMyLookup(): Promise<any> {

  //  return this.loadLookupData('mylookup').then(data => {
  //    this._mycachedLookup = data;
  //  })
  //}

  getMyLookupList() {
    return this._mycachedLookup;
  }

  toLookup(list: any[], nameProp: string): Lookup[] {

    var res: Lookup[] = [];
    list.forEach(itm => {
      res.push(new Lookup(itm["id"], Util.getValue(itm, nameProp)));
    })
    return res;

  }

  getListAsObservable(lookupName): Observable<Lookup[]> {

    switch (lookupName) {
      case "mylookupList":
        return of(this.getMyLookupList());
      default:
        console.log(`Lookup ${lookupName} does not exists!`);
        break;
    }
  }

}
