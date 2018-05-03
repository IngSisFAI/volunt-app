import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

// Interfaces
import { DonationRequestInterface } from '../../shared/sdk/models/DonationRequest';

// Services
import { DonationRequestApi, OrganizationInterface } from '../../shared/sdk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-donations',
  templateUrl: './active-donations.component.html',
  styleUrls: ['./active-donations.component.css']
})
export class ActiveDonationsComponent implements OnInit, OnChanges {

  @Input() donationType: String = null;
  @Input() orgId: String = null;
  @Input() city: String = null;

  _oneTimeRequests: DonationRequestInterface[];
  oneTimeRequestsFiltered: DonationRequestInterface[];
  oneTimeRequestsByCity: DonationRequestInterface[];
  oneTimeRequestsByOrg: DonationRequestInterface[];

  @Input() set oneTimeRequests(requests: DonationRequestInterface[]) {

    this._oneTimeRequests = this.sortRequestsByDate(requests);

    if (this.city) {
      this.oneTimeRequestsByCity = this._oneTimeRequests.filter(req => req.organization.city === this.city);
      this.oneTimeRequestsFiltered = this.oneTimeRequestsByCity;
    } else if (this.orgId) {
      this.oneTimeRequestsByOrg = this._oneTimeRequests.filter(req => req.organization.id === this.orgId);
      this.oneTimeRequestsFiltered = this.oneTimeRequestsByOrg;
    } else {
      this.oneTimeRequestsFiltered = this._oneTimeRequests;
    }


  }

  _permanentRequests: DonationRequestInterface[];
  permanentRequestsFiltered: DonationRequestInterface[];
  permanentRequestsByCity: DonationRequestInterface[];
  permanentRequestsByOrg: DonationRequestInterface[];

  @Input() set permanentRequests(requests: DonationRequestInterface[]) {

    this._permanentRequests = requests;

    if (this.city) {
      this.permanentRequestsByCity = this._permanentRequests.filter(req => req.organization.city === this.city);
      this.permanentRequestsFiltered = this.permanentRequestsByCity;
    } else if (this.orgId) {
      this.permanentRequestsByOrg = this._permanentRequests.filter(req => req.organization.id === this.orgId);
      this.permanentRequestsFiltered = this.permanentRequestsByOrg;
    } else {
      this.permanentRequestsFiltered = this._permanentRequests;
    }

  }

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

  ngOnChanges(changes: SimpleChanges) {

    for (let propName in changes) {
      let change = changes[propName];
      console.log("cambio", propName, change);
      switch (propName) {
        case "city":
          if (this.city) {
            this.oneTimeRequestsByCity = this._oneTimeRequests.filter(req => req.organization.city === this.city);
            this.permanentRequestsByCity = this._permanentRequests.filter(req => req.organization.city === this.city);

            //this.oneTimeRequestsFiltered = this.oneTimeRequestsByCity;
            if (this.donationType) {
              this.oneTimeRequestsFiltered = this.oneTimeRequestsByCity.filter(req => req.product.name === this.donationType);
              this.permanentRequestsFiltered = this.permanentRequestsByCity.filter(req => req.product.name === this.donationType);
            } else {
              //this.oneTimeRequestsByCity = this._oneTimeRequests.filter(req => req.product.city === this.donationType);
              this.oneTimeRequestsFiltered = this.oneTimeRequestsByCity;
              this.permanentRequestsFiltered = this.permanentRequestsByCity;
            }
          } else {
            //city unselected
            if (!this.orgId) {
              if (this.donationType) {
                this.oneTimeRequestsFiltered = this._oneTimeRequests.filter(req => req.product.name === this.donationType);
                this.permanentRequestsFiltered = this._permanentRequests.filter(req => req.product.name === this.donationType);
              } else {
                //this.oneTimeRequestsByCity = this._oneTimeRequests.filter(req => req.product.city === this.donationType);
                //this.oneTimeRequestsFiltered = this._oneTimeRequests;
                this.restaurar();
              }
            }
          }
          break;
        case "donationType":

          if (this.donationType) {

            if (this.city) {

              this.oneTimeRequestsFiltered = this.oneTimeRequestsByCity.filter(req => req.product.name === this.donationType);
              this.permanentRequestsFiltered = this.permanentRequestsByCity.filter(req => req.product.name === this.donationType);
            } else if (this.orgId) {
              this.oneTimeRequestsFiltered = this.oneTimeRequestsByOrg.filter(req => req.product.name === this.donationType);
              this.permanentRequestsFiltered = this.permanentRequestsByOrg.filter(req => req.product.name === this.donationType);
            } else {
              this.oneTimeRequestsFiltered = this._oneTimeRequests.filter(req => req.product.name === this.donationType);
              this.permanentRequestsFiltered = this._permanentRequests.filter(req => req.product.name === this.donationType);
            }
            //donationType unselected
          } else {
            if (this.city) {
              this.oneTimeRequestsFiltered = this.oneTimeRequestsByCity;
              this.permanentRequestsFiltered = this.permanentRequestsByCity;
            } else if (this.orgId) {
              this.oneTimeRequestsFiltered = this.oneTimeRequestsByOrg;
              this.permanentRequestsFiltered = this.permanentRequestsByOrg;

            } else {
              this.restaurar();
            }
          }
          break;

        case "orgId":
          if (this.orgId) {
            this.oneTimeRequestsByOrg = this._oneTimeRequests.filter(req => req.organization.id === this.orgId);
            this.permanentRequestsByOrg = this._permanentRequests.filter(req => req.organization.id === this.orgId);
            //this.oneTimeRequestsFiltered = this.oneTimeRequestsByCity;
            if (this.donationType) {
              this.oneTimeRequestsFiltered = this.oneTimeRequestsByOrg.filter(req => req.product.name === this.donationType);
              this.permanentRequestsFiltered = this.permanentRequestsByOrg.filter(req => req.product.name === this.donationType);
            } else {
              //this.oneTimeRequestsByCity = this._oneTimeRequests.filter(req => req.product.city === this.donationType);
              this.oneTimeRequestsFiltered = this.oneTimeRequestsByOrg;
              this.permanentRequestsFiltered = this.permanentRequestsByOrg;
            }
          } else {
            //org unselected
            if (!this.city) {
              if (this.donationType) {
                this.oneTimeRequestsFiltered = this._oneTimeRequests.filter(req => req.product.name === this.donationType);
                this.permanentRequestsFiltered = this._permanentRequests.filter(req => req.product.name === this.donationType);
              } else {
                //this.oneTimeRequestsByCity = this._oneTimeRequests.filter(req => req.product.city === this.donationType);
                //this.oneTimeRequestsFiltered = this._oneTimeRequests;
                this.restaurar();
              }
            }
          }
          break;
      }


    }

    /*
        if (this.permanentRequests) {
          if (this.city!) {
            this.permanentRequestsByCity = this._permanentRequests.filter(req => req.organization.city === this.city);
          }
          if (this.donationType) {

            if (this.city) {
              this.permanentRequestsFiltered = this.permanentRequestsByCity.filter(req => req.product.name === this.donationType);
            } else if (this.orgId) {
              this.permanentRequestsFiltered = this.permanentRequestsByOrg.filter(req => req.product.name === this.donationType);
            } else {
              //filter original
              this.permanentRequestsFiltered = this._permanentRequests.filter(req => req.product.name === this.donationType);
            }
            //donationType unselected
          } else {
            if (this.city) {
              this.permanentRequestsFiltered = this.permanentRequestsByCity;
            } else if (this.orgId) {
              this.permanentRequestsFiltered = this.permanentRequestsByOrg;
            } else {
              this.permanentRequestsFiltered = this._permanentRequests;
            }
          }

        }
        if (this._oneTimeRequests) {

        }*/

    /*

        if (this.permanentRequests) {
          this.permanentRequestsFiltered = this.filterRequests(this.permanentRequests);
        }
        if (this._oneTimeRequests) {
          this.oneTimeRequestsFiltered = this.filterRequests(this._oneTimeRequests);
        }

        if (changes.donationType) {
          console.log("donationType changed", changes.donationType);

        } else if (changes.city) {

          console.log("city changed", this.city);
          if (this.permanentRequests) {
            this.permanentRequestsFiltered = this.filterRequests(this.permanentRequests);
          }
          if (this._oneTimeRequests) {
            this.oneTimeRequestsFiltered = this.filterRequests(this._oneTimeRequests);
          }
        }
    */

  }

  private filterRequests(requests: DonationRequestInterface[], filter: String) {

    if (filter) {
      requests = requests.filter(req => req.product.name === this.donationType);
    }
    return requests;

  }

  private filterRequestsByOrg(requests: DonationRequestInterface[], requestsBy: DonationRequestInterface[], org: String) {

    if (org) {
      //filter originals
      requestsBy = requests.filter(req => req.organization.id === org);

      console.log("cambio aca2", this.oneTimeRequestsByOrg);
      //this.oneTimeRequestsFiltered = this.oneTimeRequestsByCity;
      if (this.donationType) {
        this.oneTimeRequestsFiltered = this.oneTimeRequestsByOrg.filter(req => req.product.name === this.donationType);
        this.permanentRequestsFiltered = this.permanentRequestsByOrg.filter(req => req.product.name === this.donationType);
      } else {
        //this.oneTimeRequestsByCity = this._oneTimeRequests.filter(req => req.product.city === this.donationType);
        this.oneTimeRequestsFiltered = this.oneTimeRequestsByOrg;
        this.permanentRequestsFiltered = this.permanentRequestsByOrg;
      }
    } else {
      //org unselected
      if (!this.city) {
        if (this.donationType) {
          this.oneTimeRequestsFiltered = this._oneTimeRequests.filter(req => req.product.name === this.donationType);
          this.permanentRequestsFiltered = this._permanentRequests.filter(req => req.product.name === this.donationType);
        } else {
          //this.oneTimeRequestsByCity = this._oneTimeRequests.filter(req => req.product.city === this.donationType);
          //this.oneTimeRequestsFiltered = this._oneTimeRequests;
          this.restaurar;
        }
      }
    }
  }

  private restaurar() {

    this.oneTimeRequestsFiltered = this._oneTimeRequests;
    this.permanentRequestsFiltered = this._permanentRequests;
  }


  private sortRequestsByDate(requests: DonationRequestInterface[]) {

    requests.sort((r1, r2) => {
      let fecha1 = new Date(r1.expirationDate).getTime();
      let fecha2 = new Date(r2.expirationDate).getTime();
      return fecha1 - fecha2;
    });

    return requests;
  }

  isEmpty(col: DonationRequestInterface[]) {
    return col.length === 0;

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
