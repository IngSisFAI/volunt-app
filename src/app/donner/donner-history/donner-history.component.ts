import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// Interfaces
import { DonationResponseInterface } from '../../shared/sdk/models/DonationResponse';

// Services
import { DonationResponseApi } from '../../shared/sdk/services/custom/DonationResponse';
import { MatTableDataSource } from '@angular/material';
import { LoopBackAuth } from '../../shared/sdk';

@Component({
  selector: 'donner-history',
  templateUrl: './donner-history.component.html',
  styleUrls: ['./donner-history.component.css']
})
export class DonnerHistoryComponent implements OnInit {

  empty: boolean = false;
  userId: String;
  displayedColumns = ['Categoria', 'Nombre', 'Cantidad', 'Creación', 'Organización', 'Contacto', 'Estado'];
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

        or: [
          { alreadyDelivered: true },
          { isCanceled: true }
        ]
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

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public goToOrg(id: string) {
    this.router.navigate(['/catalog'], { queryParams: { orgId: id } });
  }

}
