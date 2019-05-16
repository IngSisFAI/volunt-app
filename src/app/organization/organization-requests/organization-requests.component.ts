import { Component, OnInit, OnChanges } from '@angular/core';

// Interfaces
import { DonationRequestInterface } from '../../shared/sdk/models/DonationRequest';

// Services
import { DonationRequestApi } from '../../shared/sdk/services/custom/DonationRequest';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { LoopBackAuth } from '../../shared/sdk';

@Component({
  selector: 'app-organization-requests',
  templateUrl: './organization-requests.component.html',
  styleUrls: ['./organization-requests.component.css']
})
export class OrganizationRequestsComponent implements OnInit, OnChanges {

  displayedColumns = ['Producto', 'Recibidos', 'Prometidos', 'Permanente', 'Creacion', 'Expiracion', 'Accion', 'Detail'];
  dataSource = new MatTableDataSource<DonationRequestInterface>([]);
  showRequests = 0;

  constructor(
    private donationRequestApi: DonationRequestApi,
    private auth: LoopBackAuth,
    private router: Router,
  ) {
    const organizationId = this.auth.getCurrentUserId();
    this.donationRequestApi.find({
      include: ['product'],
      where: {
        organizationId: organizationId
      }
    })
      .subscribe(requests => {
        this.dataSource.data = <DonationRequestInterface[]>requests;
      });

  }

  public closeRequest(request) {
    this.donationRequestApi.closeRequest(request.id, request)
      .subscribe((response) => {
        this.dataSource.data = this.dataSource.data.filter((rq) => {
          return rq.id !== request.id;
        });
      });
  }

  public goToDetail(request) {
    this.router.navigate(['/request/:idRequest'], { queryParams: { idRequest: request.id } });
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
