import { Component, OnInit } from '@angular/core';
import { LoopBackConfig }        from '../shared/sdk';
import { Organization, Donner, AccessToken }  from '../shared/sdk/models';
//import { OrganizationApi, UserApi }            from '../shared/sdk/services';
import { AccountService } from '../account-service/account.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private accountDonner: Donner = new Donner();
  private accountOrganization: Organization = new Organization();

  constructor(
//      private organizationApi: OrganizationApi,
//      private userApi: UserApi,
      private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  private signupUser(): void{
    this.accountService.signupUser(this.accountDonner);
  }
  private signupOrganization(): void{
    this.accountService.signupOrganization(this.accountOrganization);
  }


}
