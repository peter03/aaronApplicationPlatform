import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, forkJoin, } from "rxjs";

import { Lookup } from 'src/app/model/aaap/lookup.model';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";

@Injectable()
export abstract class BaseLookupRepository {

  _url: string;

  constructor(protected http: HttpClient,
              protected injector: Injector) {
    this._url = environment.serverUrl + "/api/lookup";
  }

  loadLookupData(api: string): Promise<any> {

    let url = `${this._url}/${api}`;
    return this.http.get<Lookup[]>(url)
      .toPromise()
      .then(res => {
        return Promise.resolve(res);
      })
      .catch(err => {
        return Promise.reject(err.message)
      })
  }
    
}
