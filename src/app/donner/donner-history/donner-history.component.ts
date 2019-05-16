import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

// Interfaces
import { DonationResponseInterface } from '../../shared/sdk/models/DonationResponse';

// Services
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-donner-history',
  templateUrl: './donner-history.component.html',
  styleUrls: ['./donner-history.component.css']
})
export class DonnerHistoryComponent {

  empty = false;
  displayedColumns = ['Categoria', 'Nombre', 'Cantidad', 'Creación', 'Organización', 'Contacto', 'Estado'];
  dataSource = new MatTableDataSource<DonationResponseInterface>([]);

  @Input() set donationResponses(responses: DonationResponseInterface[]) {
    if (responses) {
      this.dataSource.data = responses.filter(res => res.alreadyDelivered === true || res.isCanceled === true);
      if (this.dataSource.data.length === 0) {
        this.empty = true;
      }
    }

  }

  constructor(private router: Router) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public goToOrg(id: string) {
    this.router.navigate(['/catalog'], { queryParams: { orgId: id } });
  }

}
