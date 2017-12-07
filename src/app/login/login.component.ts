import { Component, OnInit } from '@angular/core';
import { LoopBackConfig }        from '../shared/sdk';
import { Organization, User, AccessToken }  from '../shared/sdk/models';
//import { OrganizationApi, UserApi }            from '../shared/sdk/services';
import { AccountService } from '../account-service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private accountUser: User = new User();
  private accountOrganization: Organization = new Organization();

  constructor(
//      private organizationApi: OrganizationApi,
//      private userApi: UserApi,
      private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  private loginUser(): void{
    console.log('loginUser');
    this.accountService.signinUser(this.accountUser);
  }
  private loginOrganization(): void{
    this.accountService.signinUser(this.accountUser);
  }

}
