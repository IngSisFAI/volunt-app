import { Component, OnInit } from '@angular/core';
import { DonationRequestApi, DonationResponseApi, DonationResponse, DonationRequestInterface } from '../../shared/sdk';
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
    public request: DonationRequestInterface;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private donationRequestApi: DonationRequestApi,
        private donationResponseApi: DonationResponseApi,
        public customModal: CustomModalService
    ) {
        this.getParams()
            .subscribe(params => {
                const requestId = params['idRequest'];
                this.donationRequestApi.findById(requestId)
                    .subscribe(request => {
                        this.request = <DonationRequestInterface>request;
                        this.donationResponseApi.find({
                            include: ['donner', 'donnerReview'],
                            where: {
                                donationRequestId: requestId
                            }
                        }).subscribe(responses => {
                            this.dataSource.data = <DonationResponse[]>responses;
                        });
                    });

            });
    }

    private getParams() {
        return this.route.queryParams;
    }

    public confirmDelivery(response) {
        const data = {
            title: 'Confirmar entrega',
            description: `¿Confirma que le ha llegado ${response.amount}
            unidades de ${this.request.description}?`,
        };
        this.customModal.openDialog(data)
            .then(accepted => {
                if (accepted) {
                    this.donationResponseApi.donationArrival(response.id)
                        .subscribe(a => {
                            // TODO: Check it
                        }, err => {
                            // TODO: Handle error
                            console.error(err);
                        });
                } else {
                    // ...
                }
            }).catch(err => { console.error(err); });
    }

    ngOnInit() { }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

}
