import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// Interfaces
import { DonationResponseInterface } from '../../shared/sdk/models/DonationResponse';

// Services
import { DonationResponseApi } from '../../shared/sdk/services/custom/DonationResponse';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-donner-active-responses',
  templateUrl: './donner-active-responses.component.html',
  styleUrls: ['./donner-active-responses.component.css']
})
export class DonnerActiveResponsesComponent implements OnInit {

  empty = false;
  displayedColumns = ['Categoria', 'Nombre', 'Cantidad', 'Creación', 'Organización', 'Contacto', 'Accion'];
  dataSource = new MatTableDataSource<DonationResponseInterface>([]);

  @Input() set donationResponses(responses: DonationResponseInterface[]) {
    if (responses) {
      this.dataSource.data = responses.filter(res => res.alreadyDelivered === false && res.isCanceled === false);
      if (this.dataSource.data.length === 0) {
        this.empty = true;
      }
    }

  }

  constructor(private router: Router, private donationResponseApi: DonationResponseApi) { }

  ngOnInit() {

  }

  public cancelResponse(response) {

    this.donationResponseApi.cancel(response.id)
      .subscribe((change) => {
        this.dataSource.data = this.dataSource.data.filter((res) => {
          return res.id !== response.id;
        });
      }, (error) => {
        // TODO: Handle error
        console.error(error);
      });
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public goToOrg(id: string) {
    this.router.navigate(['/catalog'], { queryParams: { orgId: id } });
  }

}
