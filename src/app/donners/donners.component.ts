import { Component } from '@angular/core';

import { DonnerApi } from '../shared/sdk/services/custom/Donner';
import { DonnerInterface } from '../shared/sdk/models/Donner';

@Component({
  selector: 'app-donners',
  templateUrl: './donners.component.html',
  styleUrls: ['./donners.component.css']
})
export class DonnersComponent {

  public donners = [];

  constructor(private donnerApi: DonnerApi) {

    this.donnerApi.find({
      include: ['organizationReviews', { donationResponses: 'donationRequest' }]
    })
      .subscribe((donners: DonnerInterface[]) => {

        this.donners = donners;
      },
        (err) => {
          // TODO: Handle error
          console.error(err);
        })

  }

  onClickDonner(donner) {
    //this.router.navigate([`/donner`])
  }


}
