import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationRequestApi, DonationRequestInterface } from '../../shared/sdk';

@Component({
  selector: 'app-want-to-donate',
  templateUrl: './want-to-donate.component.html',
  styleUrls: ['./want-to-donate.component.css']
})
export class WantToDonateComponent implements OnInit {

  public request: DonationRequestInterface;
  public wantToDonate: Boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private requestApi: DonationRequestApi
  ) {
    const id = this.route.snapshot.paramMap.get('idRequest');
    this.requestApi.findById(
      id, { include: [{ organization: [{ city: 'province' }] }, 'product'] })
      .subscribe(request => {
        console.log('Request:');
        console.log(request);
        this.request = <any>request;
      });
  }

  ngOnInit() { }


  public donationClicked(wantToDonate: Boolean) {
    this.wantToDonate = wantToDonate;
  }


}
