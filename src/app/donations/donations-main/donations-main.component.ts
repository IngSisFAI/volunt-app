import { Component, OnInit } from '@angular/core';

// Services
import { DonationRequestApi } from '../../shared/sdk/services/custom/DonationRequest';

@Component({
  selector: 'app-donations-main',
  templateUrl: './donations-main.component.html',
  styleUrls: ['./donations-main.component.css']
})
export class DonationsMainComponent implements OnInit {

  constructor(
    private donationRequestApi: DonationRequestApi
  ) {}

  ngOnInit() {}
}
