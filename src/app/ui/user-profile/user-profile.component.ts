import { Component, OnInit } from '@angular/core';

import { LoopBackAuth } from '../../shared/sdk/services';
import { DonnerInterface } from '../../shared/sdk/models/Donner';
import { DonnerApi } from '../../shared/sdk/services/custom/Donner';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userId: String;
  donner: DonnerInterface;

  constructor(private auth: LoopBackAuth, private donnerApi: DonnerApi, ) { }

  ngOnInit() {

    this.userId = this.auth.getCurrentUserId();

    this.donnerApi.findById(this.userId, {
      include: ['organizationReviews', { donationResponses: 'donationRequest' }, { city: 'province' }]
    }).subscribe((donner: DonnerInterface) => {
      this.donner = donner;
    },
      (err) => {
        // TODO: Handle error
        console.error(err);
      });


  }

}
