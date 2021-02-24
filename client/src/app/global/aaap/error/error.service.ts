import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  getClientErrorMessage(error: Error): string {    
    return error.message ? 
           error.message : 
           error.toString();
  }

  getServerErrorMessage(err: HttpErrorResponse): string {

    let errDetail = `Server error ${err.status}:`
    if (err.error) {
      errDetail += err.error.message || '';
      //errDetail += `\nStack: ${err.error.stackTrace}:`;
    }
    else {
      errDetail += err.message || '';
    }

    return navigator.onLine ?    
           errDetail :
           'No Internet Connection';
  }    
}