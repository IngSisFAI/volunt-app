import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

// Interfaces
import { DonationRequestInterface } from '../../shared/sdk/models/DonationRequest';

// Services
import { DonationRequestApi } from '../../shared/sdk';
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

  _oneTimeRequests: DonationRequestInterface[] = [];
  oneTimeRequestsFiltered: DonationRequestInterface[] = [];
  oneTimeRequestsByCity: DonationRequestInterface[];
  oneTimeRequestsByOrg: DonationRequestInterface[];
  emptyOneTimeRequests = false;

  @Input() set oneTimeRequests(requests: DonationRequestInterface[]) {
    if (requests) {
      if (requests.length !== 0) {
        this._oneTimeRequests = this.sortRequestsByDate(requests);

        if (this.city) {
          this.oneTimeRequestsByCity = this._oneTimeRequests.filter(req => req.organization.city.name === this.city);
          this.oneTimeRequestsFiltered = this.oneTimeRequestsByCity;
        } else if (this.orgId) {
          this.oneTimeRequestsByOrg = this._oneTimeRequests.filter(req => req.organization.id === this.orgId);
          this.oneTimeRequestsFiltered = this.oneTimeRequestsByOrg;
        } else {
          this.oneTimeRequestsFiltered = this._oneTimeRequests;
        }
        if (this.oneTimeRequestsFiltered.length === 0) {
          this.emptyOneTimeRequests = true;
        }

      } else {
        this.emptyOneTimeRequests = true;

      }
    }
  }

  _permanentRequests: DonationRequestInterface[] = [];
  permanentRequestsFiltered: DonationRequestInterface[] = [];
  permanentRequestsByCity: DonationRequestInterface[];
  permanentRequestsByOrg: DonationRequestInterface[];
  emptyPermanentRequests = false;

  @Input() set permanentRequests(requests: DonationRequestInterface[]) {
    if (requests) {
      if (requests.length !== 0) {
        this._permanentRequests = requests;

        if (this.city) {
          this.permanentRequestsByCity = this._permanentRequests.filter(req => req.organization.city.name === this.city);
          this.permanentRequestsFiltered = this.permanentRequestsByCity;
        } else if (this.orgId) {
          this.permanentRequestsByOrg = this._permanentRequests.filter(req => req.organization.id === this.orgId);
          this.permanentRequestsFiltered = this.permanentRequestsByOrg;
        } else {
          this.permanentRequestsFiltered = this._permanentRequests;
        }
        if (this.permanentRequestsFiltered.length === 0) {
          this.emptyPermanentRequests = true;
        }

      } else {
        this.emptyPermanentRequests = true;

      }

    }
  }

  constructor(
    private donationRequestApi: DonationRequestApi,
    private router: Router
  ) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {

    for (const propName in changes) {
      const change = changes[propName];
      if (this._oneTimeRequests.length !== 0 || this._permanentRequests.length !== 0) {
        switch (propName) {
          case 'city':
            if (this.city) {
              this.oneTimeRequestsByCity = this._oneTimeRequests.filter(req => req.organization.city.name === this.city);
              this.permanentRequestsByCity = this._permanentRequests.filter(req => req.organization.city.name === this.city);

              //this.oneTimeRequestsFiltered = this.oneTimeRequestsByCity;
              if (this.donationType) {
                this.oneTimeRequestsFiltered = this.oneTimeRequestsByCity.filter(req => req.product.name === this.donationType);
                this.permanentRequestsFiltered = this.permanentRequestsByCity.filter(req => req.product.name === this.donationType);
              } else {
                //this.oneTimeRequestsByCity = this._oneTimeRequests.filter(req => req.product.city === this.donationType);
                this.oneTimeRequestsFiltered = this.oneTimeRequestsByCity;
                this.permanentRequestsFiltered = this.permanentRequestsByCity;
              }

              this.isEmpty();
            } else {
              //city unselected
              if (this.city === null) {
                if (!this.orgId) {
                  if (this.donationType) {
                    this.oneTimeRequestsFiltered = this._oneTimeRequests.filter(req => req.product.name === this.donationType);
                    this.permanentRequestsFiltered = this._permanentRequests.filter(req => req.product.name === this.donationType);
                  } else {
                    //this.oneTimeRequestsByCity = this._oneTimeRequests.filter(req => req.product.city === this.donationType);
                    //this.oneTimeRequestsFiltered = this._oneTimeRequests;

                    this.restaurar();
                  }
                  this.isEmpty();
                }

              }
            }
            break;
          case 'donationType':

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

              this.isEmpty();

              //donationType unselected
            } else {
              if (this.donationType === null) {
                if (this.city) {
                  this.oneTimeRequestsFiltered = this.oneTimeRequestsByCity;
                  this.permanentRequestsFiltered = this.permanentRequestsByCity;
                } else if (this.orgId) {
                  this.oneTimeRequestsFiltered = this.oneTimeRequestsByOrg;
                  this.permanentRequestsFiltered = this.permanentRequestsByOrg;

                } else {

                  this.restaurar();
                }
                this.isEmpty();

              }
            }
            break;

          case 'orgId':
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

              this.isEmpty();

            } else {
              //org unselected
              if (this.orgId === null) {
                if (!this.city) {
                  if (this.donationType) {
                    this.oneTimeRequestsFiltered = this._oneTimeRequests.filter(req => req.product.name === this.donationType);
                    this.permanentRequestsFiltered = this._permanentRequests.filter(req => req.product.name === this.donationType);
                  } else {
                    //this.oneTimeRequestsByCity = this._oneTimeRequests.filter(req => req.product.city === this.donationType);
                    //this.oneTimeRequestsFiltered = this._oneTimeRequests;

                    this.restaurar();
                  }
                  this.isEmpty();
                }

              }
            }
            break;
        }
      }
    }
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
      const fecha1 = new Date(r1.expirationDate).getTime();
      const fecha2 = new Date(r2.expirationDate).getTime();
      return fecha1 - fecha2;
    });

    return requests;
  }

  //check if cols empty
  isEmpty() {

    if (this.permanentRequestsFiltered.length === 0) {
      this.emptyPermanentRequests = true;
    } else {
      this.emptyPermanentRequests = false;
    }
    if (this.oneTimeRequestsFiltered.length === 0) {
      this.emptyOneTimeRequests = true;
    } else {
      this.emptyOneTimeRequests = false;

    }
  }
}
