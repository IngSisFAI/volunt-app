import { Component, OnInit } from '@angular/core';
import { Donner } from '../shared/sdk/models';
import { AccountService } from '../account-service/account.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signupDonner.component.html',
  styleUrls: ['./signupDonner.component.css']
})
export class SignupDonnerComponent implements OnInit {
  private accountDonner: Donner = new Donner();

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  private signupUser(): void {
    this.accountService.signupUser(this.accountDonner);
  }


}
