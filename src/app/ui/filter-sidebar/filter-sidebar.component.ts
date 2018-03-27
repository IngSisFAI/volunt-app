import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Interfaces
import { DonationRequestInterface } from '../../shared/sdk/models/DonationRequest';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.css']
})
export class FilterSidebarComponent implements OnInit {

  @Input() oneTimeRequests: DonationRequestInterface[];
  @Output() city = new EventEmitter();
  @Output() donationType = new EventEmitter();
  donationTypeAux: String = null;

  constructor() { }

  ngOnInit() {
    //this.city.next("Neuquén");
  }

  public donate() {
    //this.donationOk.next(true);
    console.log('hey');
    //this.router.navigate(['/wantToDonate/' + this.selectedDonationRequest.id]);
  }

  donationTypeChanged(type: String) {

    if (this.donationTypeAux === type) {
      this.donationTypeAux = null;
    } else {
      this.donationTypeAux = type;
    }
    this.donationType.next(this.donationTypeAux);

  }

}
