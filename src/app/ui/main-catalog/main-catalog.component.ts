import { Component, OnInit, ViewChild } from '@angular/core';
import { DonationRequestInterface, DonationRequestApi } from '../../shared/sdk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-catalog',
  templateUrl: './main-catalog.component.html',
  styleUrls: ['./main-catalog.component.css']
})
export class MainCatalogComponent implements OnInit {
  public permanentRequests: DonationRequestInterface[] = [];
  public oneTimeRequests: DonationRequestInterface[] = [];
  public requestSelected: DonationRequestInterface = null;
  donationType: String = null;

  constructor(
    private donationRequestApi: DonationRequestApi,
    private router: Router
  ) { }

  ngOnInit() {
    this.findPermanentRequests();
    this.findOneTimeRequests();
  }


  private findPermanentRequests() {

    // TODO: include 'organization' too

    this.donationRequestApi.find(
      {
        include: [{ product: ['unit'] }],
        where: { status: true, isPermanent: true }
      })
      .subscribe((permanentRequests: DonationRequestInterface[]) => {
        console.log(permanentRequests);
        this.notUse(permanentRequests); // NOT USE this method!
        this.permanentRequests = permanentRequests;
      },
        (err) => {
          console.log('An error has ocurred');
          console.log(err);
        });
  }

  /*
    Este metodo esta para parsear los datos para las pruebas. En un futuro, limpiar la BD
  */
  private notUse(requests) {
    requests.forEach(r => {
      if (!r.amount) { r.amount = 0; }
      if (!r.covered) { r.covered = 0; }
      if (!r.promised) { r.promised = 0; }
    });
  }

  private findOneTimeRequests() {

    let now = new Date();
    this.donationRequestApi.find({
      include: [{ product: ['unit'] }],
      where:
        {
          // creationDate: {lte: now },
          status: true,
          isPermanent: false,
          expirationDate: { gte: now }
        }
    })
      .subscribe((oneTimeRequests: DonationRequestInterface[]) => {
        this.oneTimeRequests = oneTimeRequests;
        console.log('ordered: ', oneTimeRequests);
      },
        (err) => {
          console.log('An error has ocurred');
          console.log(err);
        });
  }

  public donationTypeChange(response) {
    console.log('** Response');
    console.log(response);
    this.donationType = response;
  }

}
