import { Component, OnInit } from '@angular/core';
import { Organization } from '../shared/sdk/models';
import { AccountService } from '../account-service/account.service';
@Component({
  selector: 'app-signup-ong',
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

  private signupOrganization(): void {
    this.accountService.signupOrganization(this.accountOrganization);
  }


}
