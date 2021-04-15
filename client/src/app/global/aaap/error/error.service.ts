import { Injectable, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  onError: EventEmitter<any> = new EventEmitter();

  getClientErrorMessage(error: Error): string {    
    return error.message ? 
           error.message : 
           error.toString();
  }

  getServerErrorMessage(err: HttpErrorResponse): string {

    let errDetail = `Server error ${err.status} while accessing ${err.url}:\n`
    if (err.error) {
      errDetail += err.error.title || err.error.Message || '';

      if (err.error.errors) { // handle multiple errs
      }
      //errDetail += `\nStack: ${err.error.StackTrace}:`;
      errDetail += `\nSee debug console for further details.`;
    }

    return navigator.onLine ?    
           errDetail :
           'No Internet Connection';
  }

  fireOnError(err: any) {
    this.onError.emit(err);
  }

}
