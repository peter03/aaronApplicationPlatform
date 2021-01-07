import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from "rxjs";
import { Router } from "@angular/router";
import { map, catchError } from 'rxjs/operators';
import { UserRepository } from 'src/app/repository/aap/user.repository';
import { LoginData } from 'src/app/model/aap/login.model';
import { User } from 'src/app/model/aap/user.model';
import { environment } from 'src/environments/environment';

//const API_URL = "/auth";

@Injectable()
export class AuthenticationService {

  public apiEndpoint = environment.serverUrl + "/auth";

  private loginSubject: BehaviorSubject<LoginData>;
  public loginData: Observable<LoginData>;

  constructor(private http: HttpClient,
    private userRepo: UserRepository,
    private router: Router) {

    this.loginSubject = new BehaviorSubject<LoginData>(JSON.parse(localStorage.getItem('loginData')));
    this.loginData = this.loginSubject.asObservable();
  }

  public get loginDataValue(): LoginData {
    return this.loginSubject.value;
  }

  public get currentUser(): User {

    if (this.loginDataValue) {

      if (this.loginSubject.value.user.isAdmin) {
        return this.loginSubject.value.user;
      }
      else {
        return this.userRepo.getEntityById(this.loginSubject.value.user.id);
      }
    }
    else {
      return null;
    }
  }

  authenticated: boolean = false;
  loginName: string = "admin";
  password: string = "123";

  login(loginName: string, password: string) {

    console.log(`${this.apiEndpoint}/login`);
    return this.http.post<any>(`${this.apiEndpoint}/login`, { LoginName: loginName, Password: password })
      .pipe(map(loginResponse => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('loginData', JSON.stringify(loginResponse));
        this.loginSubject.next(loginResponse);
        return loginResponse;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('loginData');
    this.loginSubject.next(null);
    this.router.navigateByUrl("login");
  }
}
