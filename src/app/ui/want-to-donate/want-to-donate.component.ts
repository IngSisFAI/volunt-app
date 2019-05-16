import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonationRequestApi, DonationRequestInterface } from '../../shared/sdk';

@Component({
  selector: 'app-want-to-donate',
  templateUrl: './want-to-donate.component.html',
  styleUrls: ['./want-to-donate.component.css']
})
export class WantToDonateComponent {

  public request: DonationRequestInterface;
  public wantToDonate: Boolean = false;
  constructor(
    private route: ActivatedRoute,
    private requestApi: DonationRequestApi
  ) {
    const id = this.route.snapshot.paramMap.get('idRequest');
    this.requestApi.findById(
      id, { include: [{ organization: [{ city: 'province' }] }, 'product'] })
      .subscribe(request => {
        this.request = <any>request;
      });
  }

  public donationClicked(wantToDonate: Boolean) {
    this.wantToDonate = wantToDonate;
  }


}
