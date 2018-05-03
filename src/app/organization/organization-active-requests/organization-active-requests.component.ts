import { Component, OnInit, OnChanges, Input } from '@angular/core';

// Interfaces
import { DonationRequestInterface } from '../../shared/sdk/models/DonationRequest';

// Services
import { DonationRequestApi } from '../../shared/sdk/services/custom/DonationRequest';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-organization-active-requests',
  templateUrl: './organization-active-requests.component.html',
  styleUrls: ['./organization-active-requests.component.css']
})
export class OrganizationActiveRequestsComponent implements OnInit, OnChanges {

  @Input() donationType: String = null;

  oneTimeRequests: DonationRequestInterface[];
  permanentRequests: DonationRequestInterface[];
  displayedColumns = ['Producto', 'Cantidad', 'Cubiertos', 'Prometidos', 'Permanente', 'Creacion', 'Expiracion', 'Accion'];
  dataSource = new MatTableDataSource<DonationRequestInterface>([]);

  constructor(
    private donationRequestApi: DonationRequestApi,
    private router: Router,
    route: ActivatedRoute,
  ) {
    // TODO: change to id of LOGGED user
    const organizationId = route.snapshot.params['id'];
    this.donationRequestApi.find({
      include: ['product'],
      where: {
        organizationId: organizationId,
        isOpen: true
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
