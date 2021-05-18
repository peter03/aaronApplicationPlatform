import { Injector, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Filespec } from "src/app/model/aaap/filespec.model";
import { BaseRepository } from './base.repository';
import { AuthenticationService } from 'src/app/service/aaap/authentication.service';

const API_URL = "/api/file";

@Injectable(
  {
    providedIn: 'root'  // global singleton
  })
export class FilespecRepository extends BaseRepository<Filespec> {
    
  constructor(public http: HttpClient,
    authService: AuthenticationService,
    injector: Injector) {
    super(http, API_URL, new Filespec(), authService, injector);
  }

    getNewEntity() {
        return new Filespec();
    }

    validateEntity(entity: Filespec) {
        return true;
    }

    uploadFile(data: FormData)  //: Observable <string> {  
    {
        let url = `${this._url}/upload`;
        let headers = new HttpHeaders();  
        headers.append('Content-Type', 'application/json');  
        const httpOptions = {  
            headers: headers  
        };  
        //return this.http.post <string> (url, data, httpOptions);  
        this.http.post<Filespec>(url, data, httpOptions).subscribe(res => {
            this.updateRepository(res);
            //console.log("done");
        });

    }

    getFileUrl(id: number)
    {
        return `${this._url}/download?id=${id}`;
    }  

}
