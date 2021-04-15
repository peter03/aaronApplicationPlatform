import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

  _mysnackbar: any;

  constructor(
    public snackBar: MatSnackBar,
    private zone: NgZone) { }

  showSuccess(message: string): void {
    this.snackBar.open(message);
  }

  //showError(message: string): void {

  //  this.zone.run(() => { // workaround - otherwise router will not longer work after showing snackbar?
  //    const snackBar = this.snackBar.open(message, 'Ok', {
  //      verticalPosition: 'bottom',
  //      horizontalPosition: 'center',
  //      panelClass: ['error']
  //    });
  //    snackBar.onAction().subscribe(() => {
  //      snackBar.dismiss();
  //    })
  //  });

  showError(message: string): void {

    this.zone.run(() => { // workaround - otherwise router will not longer work after showing snackbar?
      this._mysnackbar = this.snackBar.open(message, 'X', {
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['error']
      });
      this._mysnackbar.onAction().subscribe(() => {
        this._mysnackbar.dismiss();
      })
    });
  }

  dismissSnackBar() {
    if (this._mysnackbar) {
      this._mysnackbar.dismiss();
    }
    this._mysnackbar = null;
  }
}
