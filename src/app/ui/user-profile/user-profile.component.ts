import { Component,OnInit } from '@angular/core';

//import { AuthService } from '../../core/auth.service';
import { LoopBackAuth } from '../../shared/sdk/services';
import { AccountService } from '../../account-service/account.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
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
}
