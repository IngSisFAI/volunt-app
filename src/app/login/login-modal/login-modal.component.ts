import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login-modal',
  templateUrl: 'login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  cancel(): void {
    this.dialogRef.close(false);
  }

  login(): void {
    this.dialogRef.close(this.data.account);
  }
}
export class LoginModal {
  private width = '500px';
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
  }

  public open() {
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(LoginDialogComponent, {
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
    });
  }

}

