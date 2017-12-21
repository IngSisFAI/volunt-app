import { Component, OnInit } from '@angular/core';

// Interfaces
import { DonationRequestInterface } from '../shared/sdk/models/DonationRequest';
// import { PermanentRequestInterface} from '../shared/sdk/models/PermanentRequest';
// import { OneTimeRequestInterface} from '../shared/sdk/models/OneTimeRequest';

// Services
import { DonationRequestApi } from '../shared/sdk/services/custom/DonationRequest';
// import { PermanentRequestApi } from '../shared/sdk/services/custom/PermanentRequest';
// import { OneTimeRequestApi } from '../shared/sdk/services/custom/OneTimeRequest';

@Component({
  selector: 'app-active-donations',
  templateUrl: './active-donations.component.html',
  styleUrls: ['./active-donations.component.css']
})
export class ActiveDonationsComponent implements OnInit {

  public permanentRequests: DonationRequestInterface[] = [];
  public oneTimeRequests: DonationRequestInterface[] = [];

  constructor(
    private donationRequestApi: DonationRequestApi
  ) {


  }

  ngOnInit() {
    this.findPermanentRequests();
    // this.findOneTimeRequests();
  }

  private findPermanentRequests(){
    this.donationRequestApi.find({include:'product', where: { status : true, isPermanent : true }}).subscribe((permanentRequests: DonationRequestInterface[])=>{
      console.log(permanentRequests);
      this.permanentRequests = permanentRequests;
    },
    (err)=>{
      console.log('An error has ocurred');
      console.log(err);
    })
  }

  private findOneTimeRequests(){

    let now = new Date();
    console.log(now);
    this.donationRequestApi.find({include:'product',
    where:
    {
      // creationDate: {lte: now },
      expirationDate: {gte: now }
    }})
    .subscribe((oneTimeRequests: DonationRequestInterface[])=>{
      console.log(oneTimeRequests);
      this.oneTimeRequests = oneTimeRequests;
    },
    (err)=>{
      console.log('An error has ocurred');
      console.log(err);
    })
  }

}
