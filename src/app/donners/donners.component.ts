import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

import { DonnerApi } from '../shared/sdk/services/custom/Donner';
import { DonnerInterface } from '../shared/sdk/models/Donner';
import { LoopBackAuth } from '../shared/sdk/services';

@Component({
  selector: 'app-donners',
  templateUrl: './donners.component.html',
  styleUrls: ['./donners.component.css']
})
export class DonnersComponent implements OnInit {

  public donners = [];

  constructor(
    private router: Router,
    private donnerApi: DonnerApi,
  private auth: LoopBackAuth) {

    this.donnerApi.find().subscribe((donners: DonnerInterface[])=>{

      this.donners = donners;
      console.log(donners);
    },
    (err)=>{
      console.log('An error has ocurred');
      console.log(err);
    })

   }

  ngOnInit() {
    console.log(this.auth.getCurrentUserData());
    console.log(this.auth.getCurrentUserId());
  }

  onClickDonner(donner){
    this.router.navigate([`/donner/${donner.id}`])
  }


  }
