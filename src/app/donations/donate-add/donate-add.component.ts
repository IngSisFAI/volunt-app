import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { LoopBackAuth } from '../../shared/sdk/services';
import { DonationResponseApi } from '../../shared/sdk/services/custom/DonationResponse';
import { AccountService } from '../../account-service/account.service';

// Interfaces
import { DonationRequestInterface } from '../../shared/sdk/models/DonationRequest';
import { DonationResponseInterface } from '../../shared/sdk/models/DonationResponse';

// Classes
import { DonationResponse } from '../../shared/sdk/models/DonationResponse';
import { LoginModalService } from '../../login/login-modal.service';

@Component({
  selector: 'app-donate-add',
  templateUrl: './donate-add.component.html',
  styleUrls: ['./donate-add.component.css']
})
export class DonateAddComponent implements OnInit {
  @Input() request: DonationRequestInterface;
  @Output() donated = new EventEmitter();

  public donation: DonationResponseInterface;

  constructor(
    private router: Router,
    private auth: LoopBackAuth,
    private donationResponseApi: DonationResponseApi,
    private accService: AccountService,
    private loginModalService: LoginModalService
  ) { }

  ngOnInit() {
    this.donation = new DonationResponse();
    this.donation.amount = 0;
    this.donation.donationRequestId = this.request.id;
  }

  public donate() {

    const userId = this.auth.getCurrentUserId();

    if (userId) {
      this.donation.donnerId = userId;
      console.log('Are you sure??');
      console.log(this.donation);

      this.donationResponseApi.create(this.donation).subscribe(
        response => {
          console.log('Response ', response);
          this.donated.next(response);
          alert('La donacion se ha generado con exito!!')
        }
      );
    } else {
      // Here, we have to ask to log in
      // this.router.navigate([`/login`]);
      this.openLoginDialog();
    }
  }

  openLoginDialog() {
    // TODO: Do the navigate.([])
    this.loginModalService.openDialog().then((a) => {
      
    }).catch((err) => {
      
    });
  }

  loggedIn() {
    return this.accService.loggedIn();
  }

}
