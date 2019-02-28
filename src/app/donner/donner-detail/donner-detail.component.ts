import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { DonnerApi } from '../../shared/sdk/services/custom/Donner';
import { DonnerInterface } from '../../shared/sdk/models/Donner';
import { LoopBackAuth } from '../../shared/sdk/services';


@Component({
  selector: 'app-donner-detail',
  templateUrl: './donner-detail.component.html',
  styleUrls: ['./donner-detail.component.css']
})
export class DonnerDetailComponent implements OnInit {

  @Input() donner: DonnerInterface;
  //public donnerId: String;
  //public donner: DonnerInterface;

  constructor(
    private donnerApi: DonnerApi,
    private router: Router,
    route: ActivatedRoute,
    private auth: LoopBackAuth

  ) {
    /*
        this.donnerId = route.snapshot.params['id'];

        this.donnerApi.findById(this.donnerId, {
          include: ['organizationReviews', { donationResponses: 'donationRequest' }]
        }).subscribe((donner: DonnerInterface) => {

          console.log(donner);
          this.donner = donner;
        },
          (err) => {
            console.log('An error has ocurred');
            console.log(err);
          })
          */
  }

  ngOnInit() {
    //this.donner = this.auth.getCurrentUserData();
  }


}
