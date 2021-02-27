import { Injectable } from "@angular/core";
import { Observable, of, forkJoin, } from "rxjs";
import { map } from "rxjs/operators";

import { UserRepository } from "src/app/repository/aaap/user.repository";
import { MenuRepository } from "src/app/repository/aaap/menu.repository";
import { RolegroupRepository } from "src/app/repository/aaap/rolegroup.repository";
import { RoleRepository } from "src/app/repository/aaap/role.repository";
import { RuleRepository } from "src/app/repository/aaap/rule.repository";
import { LookupRepository } from "src/app/repository/aaap/lookup.repository";

@Injectable()
export class EntityLoaderService {

  constructor(private userRepo: UserRepository,
    private menuRepo: MenuRepository,
    private rolegroupRepo: RolegroupRepository,
    private roleRepo: RoleRepository,
    private ruleRepo: RuleRepository,
    private lookupRepo: LookupRepository) {
  }

  init(): Observable<any> {

    console.log('Pre-Fetching data...');

    const promises = [
      this.userRepo.loadEntities()
      , this.menuRepo.loadEntities()
      , this.rolegroupRepo.loadEntities()
      , this.roleRepo.loadEntities()
      , this.ruleRepo.loadEntities()
      , this.lookupRepo.loadEntities()
    ]

    return forkJoin(...promises).pipe(map(res => {
      console.log('All data are loaded...');
      return true;
      })
    );

  };

}
