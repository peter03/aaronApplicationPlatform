import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirmDialog.component.html'
  //styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  title: string;
  message: string;
  yes: string;
  no: string;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel,
    public translate: TranslateService) {
    // Update view with given values
    //this.title = data.title;
    this.title = this.translate.instant(data.title);
    this.message = this.translate.instant(data.message, data.messageParams);
    this.yes = this.translate.instant("aaap.common.yes");
    this.no = this.translate.instant("aaap.common.no");

  }

  ngOnInit() {
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
export class ConfirmDialogModel {

  messageParams: any;

  constructor(public title: string, public message: string) {
  }
}
