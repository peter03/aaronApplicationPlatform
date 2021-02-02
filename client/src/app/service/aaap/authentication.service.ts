import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from "rxjs";
import { Router } from "@angular/router";
import { map, catchError } from 'rxjs/operators';
import { LoginData } from 'src/app/model/aaap/login.model';
import { User } from 'src/app/model/aaap/user.model';
import { environment } from 'src/environments/environment';

//const API_URL = "/auth";

@Injectable()
export class AuthenticationService {

  public apiEndpoint = environment.serverUrl + "/auth";

  private loginSubject: BehaviorSubject<LoginData>;
  public loginData: Observable<LoginData>;

  constructor(
    private http: HttpClient,
    private router: Router) {

    this.loginSubject = new BehaviorSubject<LoginData>(JSON.parse(localStorage.getItem('loginData')));
    this.loginData = this.loginSubject.asObservable();
  }

  public get loginDataValue(): LoginData {
    return this.loginSubject.value;
  }

  public get currentUser(): User {
    return this.loginDataValue ? this.loginSubject.value.user : null;
  }

  login(loginName: string, password: string) {

    //console.log(`${this.apiEndpoint}/login`);
    return this.http.post<any>(`${this.apiEndpoint}/login`, { LoginName: loginName, Password: password })
      .pipe(map(loginResponse => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('loginData', JSON.stringify(loginResponse));
        this.loginSubject.next(loginResponse);
        return loginResponse;
      }));
  }

  logout() {

    if (this.currentUser) {
      this.http.post(`${this.apiEndpoint}/logout`, this.currentUser).subscribe((val => {
        //console.log(val);
      }))
    }

    // remove user from local storage to log user out
    localStorage.removeItem('loginData');
    this.loginSubject.next(null);
    this.router.navigate([""]);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.loginName.toLocaleLowerCase() === "admin";;
  }

  hasPermission(ruleId: number): boolean {
    return this.currentUser && (this.isAdmin || (this.currentUser.ruleId && this.currentUser.ruleId.indexOf(ruleId) !== -1));
  }

}
