import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export class LoginModal {
  private width = '500px'
  private accept: String;
  private cancel: String;
  private dialog: MatDialog;
  private account;


  constructor(dialog: MatDialog) {
    this.dialog = dialog;
    this.accept = 'Login';
    this.cancel = 'Cancelar';
    this.account = {
      username: '',
      password: ''
    };
    console.log(this.account);
  }

  public open() {
    return new Promise((resolve, reject) => {
      let dialogRef = this.dialog.open(LoginDialog, {
        width: this.width,
        data: {
          account: this.account,
          accept: this.accept,
          cancel: this.cancel,
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        resolve(result);
      });
    })
  }

}
@Component({
  selector: 'app-login-modal',
  templateUrl: 'login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginDialog {

  constructor(
    public dialogRef: MatDialogRef<LoginDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  cancel(): void {
    this.dialogRef.close(false);
  }

  login(): void {
    this.dialogRef.close(this.data.account);
  }
}