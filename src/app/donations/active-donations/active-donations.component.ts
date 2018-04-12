import { Component, OnInit, OnChanges, Input } from '@angular/core';

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
export class ActiveDonationsComponent implements OnInit, OnChanges {

  @Input() donationType: String = null;

  _oneTimeRequests: DonationRequestInterface[];
  oneTimeRequestsFiltered: DonationRequestInterface[];

  @Input() set oneTimeRequests(requests: DonationRequestInterface[]) {

    this._oneTimeRequests = this.sortRequestsByDate(requests);

  }

  @Input() permanentRequests: DonationRequestInterface[];
  permanentRequestsFiltered: DonationRequestInterface[];

  /*
    @Input() set donationType(type: String) {

      this._donationType = type;
      console.log(this._donationType);
      if ((this._oneTimeRequests && this.permanentRequests) || (this.oneTimeRequestsAux && this.permanentRequestsAux)) {

        if (!(this.oneTimeRequestsAux && this.permanentRequestsAux)) {
          this.oneTimeRequestsAux = this._oneTimeRequests;
          this.permanentRequestsAux = this.permanentRequests;
        }

        if (type) {

          this._oneTimeRequests = this.oneTimeRequestsAux.filter(req => req.product.Name === type);
          this.permanentRequests = this.permanentRequestsAux.filter(req => req.product.Name === type);

        } else {

          console.log(this._donationType + "heeeee");
          this._oneTimeRequests = this.oneTimeRequestsAux;
          this.permanentRequests = this.permanentRequestsAux;

        }

      }
      //this.sortRequestsByDate(this.oneTimeRequests);
    }
  */


  //public requestSelected: DonationRequestInterface = null;

  constructor(
    private donationRequestApi: DonationRequestApi,
    private router: Router
  ) { }

  ngOnInit() {

  }

  ngOnChanges() {

    console.log(this.donationType);
    if (this.permanentRequests) {
      this.permanentRequestsFiltered = this.filterRequests(this.permanentRequests);
    }
    if (this._oneTimeRequests) {
      this.oneTimeRequestsFiltered = this.filterRequests(this._oneTimeRequests);
    }
  }

  private filterRequests(requests: DonationRequestInterface[]) {

    if (this.donationType) {
      requests = requests.filter(req => req.product.Name === this.donationType);
    }
    return requests;

  }


  private sortRequestsByDate(requests: DonationRequestInterface[]) {

    requests.sort((r1, r2) => {
      let fecha1 = new Date(r1.expirationDate).getTime();
      let fecha2 = new Date(r2.expirationDate).getTime();
      return fecha1 - fecha2;
    });

    return requests;
  }


  /*se usa el boton donar
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
  */
}
