import { Injectable } from "@angular/core";

import { Lookup } from 'src/app/model/aaap/lookup.model';
import { RolegroupRepository } from "./rolegroup.repository";
import { RoleRepository } from "./role.repository";
import { RuleRepository } from "./rule.repository";

@Injectable()
export class LookupRepository {

  constructor(
    private rolegroupRep: RolegroupRepository,
    private roleRepo: RoleRepository,
    private ruleRepo: RuleRepository) {
  }

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
