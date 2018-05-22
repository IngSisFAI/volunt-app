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

  user: DonnerInterface;
  donner: DonnerInterface;

  constructor(private auth: LoopBackAuth, private donnerApi: DonnerApi, ) { }

  ngOnInit() {

    this.user = this.auth.getCurrentUserData();

    this.donnerApi.findById(this.user.id, {
      include: ['organizationReviews', { donationResponses: 'donationRequest' }, { city: 'province' }]
    }).subscribe((donner: DonnerInterface) => {

      console.log(donner);
      this.donner = donner;
    },
      (err) => {
        console.log('An error has ocurred');
        console.log(err);
      })


  }

}
