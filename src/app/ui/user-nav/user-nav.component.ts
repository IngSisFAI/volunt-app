import { Component, OnInit } from '@angular/core';

import { LoopBackAuth } from '../../shared/sdk/services';
import { AccountService } from '../../account-service/account.service';

import { MatDialog } from '@angular/material';

import { DialogOverviewExampleDialogComponent } from './login-pop.component';
import { LoginModalService } from 'app/login/login-modal.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss'],
})
export class UserNavComponent implements OnInit {

  public user;

  constructor(
    private auth: LoopBackAuth,
    private accService: AccountService,
    public dialog: MatDialog,
    private loginModalService: LoginModalService
  ) { }

  ngOnInit() {
    this.user = this.auth.getCurrentUserData();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: { name: 'asdasdasd' }
    });

    dialogRef.afterClosed().subscribe(result => { });
  }

  logout() {
    this.accService.logoutUser();
  }

  loggedIn() {
    const loggedIn: boolean = this.accService.loggedIn();
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

