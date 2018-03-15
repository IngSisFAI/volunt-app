import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
        private location: Location,
        private requestApi: DonationRequestApi
    ) {
        const id = this.route.snapshot.paramMap.get('idRequest');
        this.requestApi.findById(
            id, { include: [{product: ['unit']}, 'organization'] })
            .subscribe(request => {
                console.log('Request:');
                console.log(request);
                this.request = <any>request;
            });
    }

    ngOnInit() { }

    public donated(response) {
        console.log('** Response');
        console.log(response);
    }

    public donationClicked(wantToDonate: Boolean) {
        this.wantToDonate = wantToDonate;
    }
}
