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
  public requestSelected: DonationRequestInterface = null;
  public donation: any = {
    amount: 0
  };

  constructor(
    private donationRequestApi: DonationRequestApi
  ) {


  }

  ngOnInit() {
    this.findPermanentRequests();
    // this.findOneTimeRequests();
  }

  public onPermanentRequest(permanentRequest){
    this.requestSelected = permanentRequest;
    console.log('PermanentRequest selected:', this.requestSelected);
  }

  private findPermanentRequests(){

    // TODO: include 'organization' too

    this.donationRequestApi.find({ include: ['product'], where: { status : true, isPermanent : true }}).subscribe((permanentRequests: DonationRequestInterface[])=>{
      console.log(permanentRequests);
      this.notUse(permanentRequests); // NOT USE this method!
      this.permanentRequests = permanentRequests;
    },
    (err)=>{
      console.log('An error has ocurred');
      console.log(err);
    })
  }

  /*
    Este metodo esta para parsear los datos para las pruebas. En un futuro, limpiar la BD
  */
  private notUse(requests){
    requests.forEach(r => {
      if(!r.amount){ r.amount = 0};
      if(!r.covered){ r.covered = 0};
      if(!r.promised){ r.promised = 0};
    });
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
