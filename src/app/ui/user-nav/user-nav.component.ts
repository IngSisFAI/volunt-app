import { Component, OnInit, Inject } from '@angular/core';

//import { AuthService } from '../../core/auth.service';
import { LoopBackAuth } from '../../shared/sdk/services';
import { AccountService } from '../../account-service/account.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DialogOverviewExampleDialog } from './login-pop.component';
import { LoginModalService } from 'app/login/login-modal.service';

@Component({
  selector: 'user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss'],
})
export class UserNavComponent implements OnInit {

  public user;

  constructor(
    //  public auth: AuthService
    private auth: LoopBackAuth,
    private accService: AccountService,
    public dialog: MatDialog,
    private loginModalService: LoginModalService
  ) { }

  ngOnInit() {
    this.user = this.auth.getCurrentUserData();
    console.log(this.auth.getCurrentUserId());

  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: 'asdasdasd' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  logout() {
    this.accService.logoutUser();
  }

  loggedIn() {
    let loggedIn: boolean = this.accService.loggedIn();
    if (loggedIn) {
      if (!this.user) {
        this.user = this.auth.getCurrentUserData();
      }
    } else {
      this.user = null;
    }
    return loggedIn;
  }

  openLoginDialog() {
    this.loginModalService.openDialog();
  }

}

