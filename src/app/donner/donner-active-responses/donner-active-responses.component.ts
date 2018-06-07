import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Interfaces
import { DonationResponseInterface } from '../../shared/sdk/models/DonationResponse';

// Services
import { DonationResponseApi } from '../../shared/sdk/services/custom/DonationResponse';
import { MatTableDataSource } from '@angular/material';
import { LoopBackAuth } from '../../shared/sdk';

@Component({
  selector: 'app-donner-active-responses',
  templateUrl: './donner-active-responses.component.html',
  styleUrls: ['./donner-active-responses.component.css']
})
export class DonnerActiveResponsesComponent implements OnInit {

  empty: boolean = false;
  userId: String;
  displayedColumns = ['Categoria', 'Nombre', 'Cantidad', 'Creación', 'Organización', 'Contacto', 'Accion'];
  dataSource = new MatTableDataSource<DonationResponseInterface>([]);

  constructor(private router: Router, private auth: LoopBackAuth, private donationResponseApi: DonationResponseApi, ) { }

  ngOnInit() {

    this.getDonationResponses();
  }


  getDonationResponses() {

    this.userId = this.auth.getCurrentUserId();

    this.donationResponseApi.find({
      include: [{ donationRequest: ['product', 'organization'] }],
      where: {
        donnerId: this.userId,
        alreadyDelivered: false,
        isCanceled: false,
      }
    }).subscribe((responses: DonationResponseInterface[]) => {

      console.log(responses);
      this.dataSource.data = responses;
      if (this.dataSource.data.length === 0) {
        this.empty = true;
      }
    },
      (err) => {
        console.log('An error has ocurred');
        console.log(err);
      })
  }

  public cancelResponse(response) {
    //TODO agregar metodo en back end
    this.donationResponseApi.updateAttributes(response.id, { isCanceled: false })
      .subscribe((change) => {
        this.dataSource.data = this.dataSource.data.filter((res) => {
          return res.id !== response.id;
        });
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
