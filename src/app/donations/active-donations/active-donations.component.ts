import { Component, OnInit, Input } from '@angular/core';

// Interfaces
import { DonationRequestInterface } from '../../shared/sdk/models/DonationRequest';

// Services
import { DonationRequestApi } from '../../shared/sdk/services/custom/DonationRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-donations',
  templateUrl: './active-donations.component.html',
  styleUrls: ['./active-donations.component.css']
})
export class ActiveDonationsComponent implements OnInit {
  @Input() oneTimeRequests: DonationRequestInterface[];
  @Input() permanentRequests: DonationRequestInterface[];

  public requestSelected: DonationRequestInterface = null;

  constructor(
    private donationRequestApi: DonationRequestApi,
    private router: Router
  ) { }

  ngOnInit() {
    this.permanentRequests = this.sortOneTimeRequests(this.permanentRequests);
  }


  private sortOneTimeRequests(requests: DonationRequestInterface[]) {
    requests.sort((r1, r2) => {
      return <any>r1.expirationDate > <any>r2.expirationDate;
    });
    return requests;
  }

  public onPermanentRequest(permanentRequest) {
    this.requestSelected = permanentRequest;
    console.log('PermanentRequest selected:', this.requestSelected);
    this.router.navigate(['/wantToDonate/' + this.requestSelected.id]);

  }

  public onOneTimeRequest(request) {
    this.requestSelected = request;
    console.log('One Time request selected:', this.requestSelected);
    this.router.navigate(['/wantToDonate/' + this.requestSelected.id]);
  }

}
