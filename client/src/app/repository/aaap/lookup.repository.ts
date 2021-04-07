import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, forkJoin, } from "rxjs";

import { Lookup } from 'src/app/model/aaap/lookup.model';
import { RolegroupRepository } from "./rolegroup.repository";
import { RoleRepository } from "./role.repository";
import { RuleRepository } from "./rule.repository";
import { AddressRepository } from "./address.repository";
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";
import { MyLookupRepository } from "../mylookup.repository";

@Injectable()
export class LookupRepository extends MyLookupRepository {

  _url: string;
  _cachedFiletype: Lookup[] = null;
  _cachedCountry: Lookup[] = null;

  constructor(
    public http: HttpClient,
    public injector: Injector,
    public rolegroupRep: RolegroupRepository,
    public roleRepo: RoleRepository,
    public ruleRepo: RuleRepository,
    public addressRepo: AddressRepository) {
      super(http, injector)
  }

  loadEntities(): Observable<any> {

    const promises = [
      this.loadFiletypeList(),
      this.loadCountryList()
    ]
    promises.concat(super.promises);
   
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

  loadCountryList(): Promise<any> {

    return this.loadLookupData('country').then(data => {
      this._cachedCountry = data;
    })
  }

  getCountryList() {
    return this._cachedCountry;
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

  getAddressLookupAsObservable(): Observable<Lookup[]> {

    var res: Lookup[];

    this.addressRepo.getListAsObservable().subscribe(list => {
      res = [];
      this.addressRepo.getList().forEach(ent => {
        res.push(new Lookup(ent.id, ent.name1));
      })
      return res;
    })

    return of(res);
  }

  getListAsObservable(lookupName): Observable<Lookup[]> {

    switch (lookupName) {
      case "rolegrouplist":
        return of (this.getRolegroupList());
      case "rolelist":
        return of (this.getRoleList());
      case "rulelist":
        return of (this.getRuleList());
      case "countrylist":
        return of(this.getCountryList());
      case "addresslist":
        return this.getAddressLookupAsObservable();
      default:
        return super.getListAsObservable(lookupName);
    }
  }
  
}
