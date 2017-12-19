import { Component, OnInit } from '@angular/core';
import { LoopBackConfig }        from '../shared/sdk';
import { Organization, Donner, AccessToken }  from '../shared/sdk/models';
//import { OrganizationApi, UserApi }            from '../shared/sdk/services';
import { AccountService } from '../account-service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private accountDonner: Donner = new Donner();
  private accountOrganization: Organization = new Organization();

  constructor(
//      private organizationApi: OrganizationApi,
//      private userApi: UserApi,
      private accountService: AccountService
  ) { }

  ngOnInit() {
    console.log(this.accountDonner);
    //this.accountDonner.username = '';
  }

  private loginUser(): void{
    console.log('loginUser');
    console.log(this.accountDonner);
    this.accountService.signinUser(this.accountDonner);
  }
  private loginOrganization(): void{
    this.accountService.signinOrganization(this.accountOrganization);
  }

}
