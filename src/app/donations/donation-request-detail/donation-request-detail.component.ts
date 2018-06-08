// ACA VA LA LOGICA de ver el detalle de una req elegida por la ONG
// Se van a mostrar todos las Responses asociadas

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DonationRequest, DonationRequestApi, DonationResponseApi, DonationResponse } from '../../shared/sdk';
import { MatTableDataSource } from '@angular/material';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-donation-request-detail',
    templateUrl: './donation-request-detail.component.html',
    styleUrls: ['./donation-request-detail.component.css']
})
export class DonationRequestDetailComponent implements OnInit {

    displayedColumns = ['NombreDonante', 'TelefonoDonante', 'ContactoDonante', 'Cantidad', 'Creacion', 'Estado'];
    dataSource = new MatTableDataSource<DonationResponse>([]);

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private donationResponseApi: DonationResponseApi
    ) {
        this.getParams()
            .subscribe(params => {
                const requestId = params['idRequest'];
                this.donationResponseApi.find({
                    include: [ 'donationRequest', 'donner', 'donnerReview' ],
                    where: {
                        donationRequestId: requestId
                    }
                }).subscribe(responses => {
                    console.log({responses});
                    this.dataSource.data = <DonationResponse[]>responses;
                });
            });
    }

    private getParams() {
        return this.route.queryParams;
    }

    public confirmDelivery(requestId) {
        console.log(requestId);
        // this.donationResponseApi.donationArrival(requestId);
    }

    ngOnInit() {

    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
      }

}