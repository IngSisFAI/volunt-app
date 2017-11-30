import { Component, OnInit } from '@angular/core';

// Interfaces
import { PermanentRequestInterface} from '../shared/sdk/models/PermanentRequest';
import { OneTimeRequestInterface} from '../shared/sdk/models/OneTimeRequest';

// Services
import { PermanentRequestApi } from '../shared/sdk/services/custom/PermanentRequest';
import { OneTimeRequestApi } from '../shared/sdk/services/custom/OneTimeRequest';

@Component({
  selector: 'app-active-donations',
  templateUrl: './active-donations.component.html',
  styleUrls: ['./active-donations.component.css']
})
export class ActiveDonationsComponent implements OnInit {

  public permanentRequests: PermanentRequestInterface[] = [];
  public oneTimeRequests: OneTimeRequestInterface[] = [];

  constructor(
    private permanentRequestApi: PermanentRequestApi,
    private oneTimeRequestApi: OneTimeRequestApi,
  ) {


  }

  ngOnInit() {
    this.findPermanentRequests();
    this.findOneTimeRequests();
  }

  private findPermanentRequests(){
    this.permanentRequestApi.find({include:'product', where: { status : true}}).subscribe((permanentRequests: PermanentRequestInterface[])=>{
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
    this.oneTimeRequestApi.find({include:'product',
    where:
    {
      // creationDate: {lte: now },
      expirationDate: {gte: now }
    }})
    .subscribe((oneTimeRequests: OneTimeRequestInterface[])=>{
      console.log(oneTimeRequests);
      this.oneTimeRequests = oneTimeRequests;
    },
    (err)=>{
      console.log('An error has ocurred');
      console.log(err);
    })
  }

}
