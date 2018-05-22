import { Component, OnInit } from '@angular/core';

//import { AuthService } from '../../core/auth.service';
import { LoopBackAuth } from '../../shared/sdk/services';
import { AccountService } from '../../account-service/account.service';

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
    private accService: AccountService
  ) { }

  ngOnInit() {
    this.user = this.auth.getCurrentUserData();
    console.log(this.auth.getCurrentUserId());

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
}
