import { Injectable } from "@angular/core";
import { Observable, of, forkJoin, } from "rxjs";
import { map } from "rxjs/operators";

import { UserRepository } from "../../repository/aap/user.repository";

@Injectable()
export class EntityLoaderService {
    
    constructor(public userRepo: UserRepository) {
    }

    init(): Observable<any> {

        console.log('Pre-Fetching data...');
        
        const promises = [
            this.userRepo.loadEntities()
        ]

        return forkJoin(...promises).pipe(map(res => {
                console.log('All data are loaded...');
                return true;
            })
        );

    };

}
