import { Component, OnInit } from '@angular/core';
// Interfaces
import { DonationResponseInterface } from '../../shared/sdk/models/DonationResponse';

// Services
import { DonationResponseApi } from '../../shared/sdk/services/custom/DonationResponse';
import { LoopBackAuth } from '../../shared/sdk';

@Component({
  selector: 'app-user-responses',
  templateUrl: './user-responses.component.html',
  styleUrls: ['./user-responses.component.css']
})

export class UserResponsesComponent implements OnInit {

  userId: String;
  donationResponses: DonationResponseInterface[];
  pending: boolean = true;

  constructor(private auth: LoopBackAuth, private donationResponseApi: DonationResponseApi) { }

  ngOnInit() {

    this.getDonationResponses();
  }


  getDonationResponses() {

    this.userId = this.auth.getCurrentUserId();

    this.donationResponseApi.find({
      include: [{ donationRequest: ['product', 'organization'] }],
      where: {
        donnerId: this.userId
      }
    }).subscribe((responses: DonationResponseInterface[]) => {

      console.log(responses);
      this.donationResponses = responses;

    },
      (err) => {
        console.log('An error has ocurred');
        console.log(err);
      })
  }

  switchPending() {

    this.pending = !this.pending;
  }


}
