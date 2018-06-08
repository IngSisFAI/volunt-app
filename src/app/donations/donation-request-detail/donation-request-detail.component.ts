import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DonationRequest, DonationRequestApi, DonationResponseApi, DonationResponse } from '../../shared/sdk';
import { MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomModalService } from '../../shared/utils/custom-modal/custom-modal.service';

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
        private donationResponseApi: DonationResponseApi,
        public customModal: CustomModalService
    ) {
        this.getParams()
            .subscribe(params => {
                const requestId = params['idRequest'];
                this.donationResponseApi.find({
                    include: [ {donationRequest: ['product']}, 'donner', 'donnerReview'],
                    where: {
                        donationRequestId: requestId
                    }
                }).subscribe(responses => {
                    console.log({ responses });
                    this.dataSource.data = <DonationResponse[]>responses;
                });
            });
    }

    private getParams() {
        return this.route.queryParams;
    }

    public confirmDelivery(response) {
        let data = {
            title: 'Confirmar entrega',
            description: `¿Confirma que le ha llegado ${response.amount} 
            unidades de ${response.donationRequest.description}?`,
        }
        this.customModal.openDialog(data);
        // this.donationResponseApi.donationArrival(response.id);
    }

    ngOnInit() {

    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

}