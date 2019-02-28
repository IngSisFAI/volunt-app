import { Component, OnInit } from '@angular/core';
import { LoopBackConfig }        from '../shared/sdk';
import { Organization, Donner, AccessToken }  from '../shared/sdk/models';
//import { OrganizationApi, UserApi }            from '../shared/sdk/services';
import { AccountService } from '../account-service/account.service';
@Component({
  selector: 'app-signupOng',
  templateUrl: './signupOng.component.html',
  styleUrls: ['./signupOng.component.css']
})
export class SignupOngComponent implements OnInit {
  private accountOrganization: Organization = new Organization();

  constructor(
      private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  private signupOrganization(): void{
    this.accountService.signupOrganization(this.accountOrganization);
  }


}
