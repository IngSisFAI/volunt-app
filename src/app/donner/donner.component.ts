import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { DonnerApi } from '../shared/sdk/services/custom/Donner';
import { DonnerInterface } from '../shared/sdk/models/Donner';

@Component({
  selector: 'app-donner',
  templateUrl: './donner.component.html',
  styleUrls: ['./donner.component.css']
})
export class DonnerComponent implements OnInit {

  // @Input() _idDonner: String;
  public donnerId: String;
  public donner: DonnerInterface;

  constructor(
    private donnerApi: DonnerApi,
    private router: Router,
    route: ActivatedRoute,

  ) {

    this.donnerId = route.snapshot.params['id'];

    this.donnerApi.findById(this.donnerId,{
      include:['organizationReviews', { donationResponses: 'donationRequest' }]
    }).subscribe((donner: DonnerInterface)=>{

      console.log(donner);
      this.donner = donner;
    },
    (err)=>{
      console.log('An error has ocurred');
      console.log(err);
    })
  }

  ngOnInit() {
  }

  public getHistory(){

  }

}
