import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, forkJoin, } from "rxjs";

import { Lookup } from 'src/app/model/aaap/lookup.model';
import { RolegroupRepository } from "./rolegroup.repository";
import { RoleRepository } from "./role.repository";
import { RuleRepository } from "./rule.repository";
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";

@Injectable()
export class LookupRepository {

  _url: string;
  _cachedFiletype: Lookup[] = null;

  constructor(
    private http: HttpClient,
    private rolegroupRep: RolegroupRepository,
    private roleRepo: RoleRepository,
    private ruleRepo: RuleRepository) {

    this._url = environment.serverUrl + "/api/lookup";

  }

  loadEntities(): Observable<any> {

    const promises = [
      this.loadFiletypeList(),
    ]

    return forkJoin(...promises).pipe(map(res => {
      console.log('All lookup data are loaded...');
      return true;
    })
    );

  };

  getRolegroupList(): Lookup[] {

    let res: Lookup[] = [];
    this.rolegroupRep.getList().forEach(el => {
      res.push(new Lookup(el.id, el.name));
    });
    return res;
  }

  getRolegroupById(id: number) {
    return this.getRolegroupList().find(e => e.id == id);
  }

  getRoleList(): Lookup[] {

    let res: Lookup[] = [];
    this.roleRepo.getList().forEach(el => {
      res.push(new Lookup(el.id, el.name));
    });
    return res;
  }

  getRuleList(): Lookup[] {

    let res: Lookup[] = [];
    this.ruleRepo.getList().forEach(el => {
      res.push(new Lookup(el.id, el.name));
    });
    return res;
  }

  loadFiletypeList(): Promise<any> {

    return this.loadLookupData('filetype').then(data => {
      this._cachedFiletype = data;
    })
  }

  getFiletypeList() {
    return this._cachedFiletype;
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

  getList(lookupName): Lookup[] {

    switch (lookupName) {
      case "rolegrouplist":
        return this.getRolegroupList();
      case "rolelist":
        return this.getRoleList();
      case "rulelist":
        return this.getRuleList();
      default:
        console.log(`Lookup ${lookupName} does not exists!`);
        break;
    }
  }
    
}
