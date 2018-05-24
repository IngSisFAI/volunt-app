import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

// Interfaces
import { ProductInterface, CityInterface, OrganizationInterface } from '../../shared/sdk';


import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';


@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.css']
})
export class FilterSidebarComponent implements OnInit {

  @Input() products: ProductInterface[];
  @Input() orgs: OrganizationInterface[];
  @Input() cities: CityInterface[];

  @Output() donationType = new EventEmitter();
  donationTypeAux: String = null;

  cityCtrl: FormControl;
  filteredCitiesByName: Observable<any[]>;

  cityAux: String = null;
  urlCity: boolean;

  orgCtrl: FormControl;
  filteredOrgsByName: Observable<any[]>;

  orgIdAux: String = null;

  constructor(private route: ActivatedRoute, private router: Router) {

    this.cityCtrl = new FormControl();
    this.filteredCitiesByName = this.cityCtrl.valueChanges
      .pipe(
        startWith(''),
        map(name => name ? this.filterCitiesByName(name) : this.cities.slice())
      );

    this.orgCtrl = new FormControl();
    this.filteredOrgsByName = this.orgCtrl.valueChanges
      .pipe(
        startWith(''),
        map(name => name ? this.filterOrgsByName(name) : this.orgs.slice())
      );


    this.getParam();
  }

  ngOnInit() {

  }

  filterCitiesByName(name: string) {
    return this.cities.filter(city =>
      city.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  filterOrgsByName(name: string) {
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

    if (this.urlCity) {
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
          this.urlCity = true;
        } else {
          this.urlCity = false;
        }
      });

  }


}
