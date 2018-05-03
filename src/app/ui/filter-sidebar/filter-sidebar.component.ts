import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
// Interfaces
import { DonationRequestInterface } from '../../shared/sdk/models/DonationRequest';
import { OrganizationInterface } from '../../shared/sdk';


import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { Subject } from 'rxjs/Subject';


// Observable class extensions
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.css']
})
export class FilterSidebarComponent implements OnInit {

  @Input() oneTimeRequests: DonationRequestInterface[];

  @Output() donationType = new EventEmitter();
  donationTypeAux: String = null;

  @Input() orgs: OrganizationInterface[];

  cityCtrl: FormControl;
  filteredOrgsByCity: Observable<any[]>;

  cityAux: String = null;
  locationCity: boolean;

  orgCtrl: FormControl;
  filteredOrgsByName: Observable<any[]>;

  orgIdAux: String = null;

  constructor(private route: ActivatedRoute, private router: Router) {

    this.cityCtrl = new FormControl();
    this.filteredOrgsByCity = this.cityCtrl.valueChanges
      .pipe(
        startWith(''),
        map(city => city ? this.filterCollectionsByCity(city) : this.orgs.slice())
      );

    this.orgCtrl = new FormControl();
    this.filteredOrgsByName = this.orgCtrl.valueChanges
      .pipe(
        startWith(''),
        map(name => name ? this.filterCollectionsByName(name) : this.orgs.slice())
      );

    this.getParam();
  }

  ngOnInit() {

  }

  filterCollectionsByCity(city: string) {
    return this.orgs.filter(org =>
      org.city.toLowerCase().indexOf(city.toLowerCase()) === 0);
  }

  filterCollectionsByName(name: string) {
    return this.orgs.filter(org =>
      org.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }


  donationTypeChanged(type: String) {

    if (this.donationTypeAux === type) {
      this.donationTypeAux = null;
    } else {
      this.donationTypeAux = type;
    }
    this.donationType.next(this.donationTypeAux);

  }

  cityChanged(event: any, cityChosen: String) {
    if (event.isUserInput) {
      if (cityChosen) {
        this.cityAux = cityChosen;
        this.router.navigate(['/catalog'], { queryParams: { city: cityChosen } });
      }
    }
  }

  goTaggedCity() {

    this.router.navigate(['/catalog'], { queryParams: { city: this.cityAux } });
  }

  resetCity(): void {
    console.log(this.locationCity);
    if (this.locationCity) {
      this.router.navigate(['/catalog']);
    }
    //delete tag
    this.cityAux = null;

  }

  orgChanged(event: any, orgChosen: OrganizationInterface) {
    if (event.isUserInput) {
      if (orgChosen) {
        this.router.navigate(['/catalog'], { queryParams: { orgId: orgChosen.id } });
      }
    }
  }

  getParam() {
    this.route
      .queryParams
      .subscribe(params => {
        let city = params['city'];
        if (city) {
          this.locationCity = true;
        } else {
          this.locationCity = false;
        }
      });

  }


}
