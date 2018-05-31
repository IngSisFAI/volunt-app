import { Component, OnInit, OnChanges, Input } from '@angular/core';

// Interfaces
import { DonationRequestInterface } from '../../shared/sdk/models/DonationRequest';

// Services
import { DonationRequestApi } from '../../shared/sdk/services/custom/DonationRequest';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { LoopBackAuth } from '../../shared/sdk';

@Component({
  selector: 'app-organization-history',
  templateUrl: './organization-history.component.html',
  styleUrls: ['./organization-history.component.css']
})
export class OrganizationHistoryComponent implements OnInit, OnChanges {

  displayedColumns = ['Producto', 'Cantidad', 'Cubiertos', 'Prometidos', 'Permanente', 'Creacion', 'Expiracion', 'Accion'];
  dataSource = new MatTableDataSource<DonationRequestInterface>([]);

  @Input() permanentRequests: DonationRequestInterface[];
  permanentRequestsFiltered: DonationRequestInterface[];

  constructor(
    private donationRequestApi: DonationRequestApi,
    private auth: LoopBackAuth,
    private router: Router,
    route: ActivatedRoute,
  ) {
    console.log('HELLO');
    const organizationId =  this.auth.getCurrentUserId();
    this.donationRequestApi.find({
        include: ['product'],
        where: {
            organizationId: organizationId,
            isOpen: false
        }
    })
    .subscribe(requests => {
        console.log('The requests: ', requests);
        this.dataSource.data = <DonationRequestInterface[]>requests;
    });

  }

  ngOnInit() {

  }

  ngOnChanges() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
