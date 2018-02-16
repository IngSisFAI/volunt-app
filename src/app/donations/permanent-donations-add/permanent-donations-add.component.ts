import { Component, OnInit } from '@angular/core';

// Interfaces
import { DonationRequestInterface, DonationRequest } from '../../shared/sdk/models/DonationRequest';

// Services
import { DonationRequestApi } from '../../shared/sdk/services/custom/DonationRequest';

@Component({
  selector: 'app-permanent-donations-add',
  templateUrl: './permanent-donations-add.component.html',
  styleUrls: ['./permanent-donations-add.component.css']
})
export class PermanentDonationsAddComponent implements OnInit {

  public permanentDonation = new DonationRequest();

  constructor(
    private donationRequestApi: DonationRequestApi
  ) { }

  ngOnInit() { }

  create() {
    this.donationRequestApi.create(this.permanentDonation).subscribe(
      (permanentDonationRequest) => {
        console.log(permanentDonationRequest);
      },
      error => {
        console.error(error);
      }
    );
  }
}
