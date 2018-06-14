import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DonationRequest, DonationRequestApi, DonationResponseApi, OrganizationInterface } from '../../shared/sdk';

import { Router } from '@angular/router';

@Component({
    selector: 'app-donation-detail',
    templateUrl: './donation-detail.component.html',
    styleUrls: ['./donation-detail.component.css']
})
export class DonationDetailComponent implements OnInit {
    @Input() selectedDonationRequest: DonationRequest;
    @Input() organization: OrganizationInterface;
    @Output() donationOk = new EventEmitter();
    public remainingProducts = 0;
    constructor(
        private donationRequestApi: DonationRequestApi,
        private donationResponseApi: DonationResponseApi,
            private router: Router
    ) { }

    ngOnInit() {
        const remaining = this.selectedDonationRequest.amount - this.selectedDonationRequest.covered;
        if (remaining < 0) {
            this.remainingProducts  = 0;
        } else {
            this.remainingProducts = remaining;
        }
    }

    public isPermanent() {
        return this.selectedDonationRequest.isPermanent;
    }

    public donate() {
        this.donationOk.next(true);
        //console.log('PermanentRequest selected:', this.selectedDonationRequest);
        this.router.navigate(['/wantToDonate/' + this.selectedDonationRequest.id]);
    }

    public cancel() {
        this.donationOk.next(false);
    }

}
