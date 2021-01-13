import { Injectable } from "@angular/core";
import { Observable, of, forkJoin, } from "rxjs";
import { map } from "rxjs/operators";

import { UserRepository } from "src/app/repository/aap/user.repository";
import { RolegroupRepository } from "src/app/repository/aap/rolegroup.repository";
import { RoleRepository } from "src/app/repository/aap/role.repository";

@Injectable()
export class EntityLoaderService {

  constructor(private userRepo: UserRepository,
    private rolegroupRepo: RolegroupRepository,
    private roleRepo: RoleRepository) {
  }

  init(): Observable<any> {

    console.log('Pre-Fetching data...');

    const promises = [
      this.userRepo.loadEntities()
      , this.rolegroupRepo.loadEntities()
      , this.roleRepo.loadEntities()
    ]

    return forkJoin(...promises).pipe(map(res => {
      console.log('All data are loaded...');
      return true;
    })
    );

  };

}
