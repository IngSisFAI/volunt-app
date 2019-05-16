import { Component } from '@angular/core';
import { Organization, Donner } from '../shared/sdk/models';
import { AccountService } from '../account-service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private accountDonner: Donner = new Donner();
  private accountOrganization: Organization = new Organization();

  constructor(
    private accountService: AccountService
  ) { }

  private loginUser(): void {
    this.accountService.signinUser(this.accountDonner);
  }
  private loginOrganization(): void {
    this.accountService.signinOrganization(this.accountOrganization);
  }

}
