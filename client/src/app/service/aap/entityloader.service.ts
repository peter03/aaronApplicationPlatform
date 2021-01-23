import { Injectable } from "@angular/core";
import { Observable, of, forkJoin, } from "rxjs";
import { map } from "rxjs/operators";

import { UserRepository } from "src/app/repository/aap/user.repository";
import { MenuRepository } from "src/app/repository/aap/menu.repository";
import { RolegroupRepository } from "src/app/repository/aap/rolegroup.repository";
import { RoleRepository } from "src/app/repository/aap/role.repository";
import { RuleRepository } from "src/app/repository/aap/rule.repository";

@Injectable()
export class EntityLoaderService {

  constructor(private userRepo: UserRepository,
    private menuRepo: MenuRepository,
    private rolegroupRepo: RolegroupRepository,
    private roleRepo: RoleRepository,
    private ruleRepo: RuleRepository) {
  }

  init(): Observable<any> {

    console.log('Pre-Fetching data...');

    const promises = [
      this.userRepo.loadEntities()
      , this.menuRepo.loadEntities()
      , this.rolegroupRepo.loadEntities()
      , this.roleRepo.loadEntities()
      , this.ruleRepo.loadEntities()
    ]

    return forkJoin(...promises).pipe(map(res => {
      console.log('All data are loaded...');
      return true;
      })
    );

  };

}
