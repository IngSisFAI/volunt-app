import { Component, OnInit, OnChanges, Input } from '@angular/core';

// Interfaces
import { DonationRequestInterface } from '../../shared/sdk/models/DonationRequest';

// Services
import { DonationRequestApi } from '../../shared/sdk/services/custom/DonationRequest';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organization-history',
  templateUrl: './organization-history.component.html',
  styleUrls: ['./organization-history.component.css']
})
export class OrganizationHistoryComponent implements OnInit, OnChanges {

  @Input() donationType: String = null;

  _oneTimeRequests: DonationRequestInterface[];
  oneTimeRequestsFiltered: DonationRequestInterface[];

  @Input() set oneTimeRequests(requests: DonationRequestInterface[]) {
  }

  @Input() permanentRequests: DonationRequestInterface[];
  permanentRequestsFiltered: DonationRequestInterface[];

  constructor(
    private donationRequestApi: DonationRequestApi,
    private router: Router,
    route: ActivatedRoute,
  ) {
       // TODO: change to id of LOGGED user
    const organizationId = route.snapshot.params['id'];
    this.donationRequestApi.find({
        include: [],
        where: {
            organizationId: organizationId,
            isOpen: false
        }
    })
    .subscribe(requests => {
        console.log('The requests: ', requests);
    });

  }

  ngOnInit() {

  }

  ngOnChanges() {
  }



}
