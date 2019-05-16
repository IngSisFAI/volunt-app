import { Component, Input } from '@angular/core';

// Interfaces
import { DonationRequestInterface } from '../../shared/sdk/models/DonationRequest';

// Services
import { DonationRequestApi } from '../../shared/sdk/services/custom/DonationRequest';
import { MatTableDataSource } from '@angular/material';
import { LoopBackAuth } from '../../shared/sdk';

@Component({
  selector: 'app-organization-history',
  templateUrl: './organization-history.component.html',
  styleUrls: ['./organization-history.component.css']
})
export class OrganizationHistoryComponent {

  displayedColumns = ['Producto', 'Cantidad', 'Cubiertos', 'Prometidos', 'Permanente', 'Creacion', 'Expiracion', 'Accion'];
  dataSource = new MatTableDataSource<DonationRequestInterface>([]);

  @Input() permanentRequests: DonationRequestInterface[];
  permanentRequestsFiltered: DonationRequestInterface[];

  constructor(
    private donationRequestApi: DonationRequestApi,
    private auth: LoopBackAuth,
  ) {
    const organizationId = this.auth.getCurrentUserId();
    this.donationRequestApi.find({
      include: ['product'],
      where: {
        organizationId: organizationId,
        isOpen: false
      }
    })
      .subscribe(requests => {
        this.dataSource.data = <DonationRequestInterface[]>requests;
      });

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
