import { Component, Input } from '@angular/core';

// Interfaces
import { DonationResponseInterface } from '../../shared/sdk/models/DonationResponse';

// Services
import { DonationResponseApi } from '../../shared/sdk/services/custom/DonationResponse';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-donner-responses',
  templateUrl: './donner-responses.component.html',
  styleUrls: ['./donner-responses.component.css']
})

export class DonnerResponsesComponent {

  empty = false;
  displayedColumns = ['Categoria', 'Nombre', 'Cantidad', 'Creación', 'Organización', 'Contacto', 'Estado', 'Accion'];
  dataSource = new MatTableDataSource<DonationResponseInterface>([]);

  // default: show only active responses
  showResponses = 0;

  _donationResponses: DonationResponseInterface[];

  @Input() set donationResponses(res: DonationResponseInterface[]) {
    if (res) {
      this._donationResponses = res;
      this.filterResponses();
    }

  }

  constructor(
    private donationResponseApi: DonationResponseApi,
    private router: Router
  ) {

  }

  filterResponses() {
    switch (this.showResponses) {
      case 0: {
        // active responses only
        this.setDataSource(this._donationResponses.filter(res => res.alreadyDelivered === false && res.isCanceled === false));
        break;
      }

      case 1: {
        // delivered responses only
        this.setDataSource(this._donationResponses.filter(res => res.alreadyDelivered === true && res.isCanceled === false));
        break;
      }

      case 2: {
        // cancelled responses only
        this.setDataSource(this._donationResponses.filter(res => res.alreadyDelivered === false && res.isCanceled === true));
        break;
      }

      case 3: {
        // all responses
        this.setDataSource(this._donationResponses);
        break;
      }

      default: {
        // all responses
        this.setDataSource(this._donationResponses);
        break;
      }
    }

    // check if datasource is empty
    if (this.dataSource.data.length === 0) {
      this.empty = true;
    } else {
      this.empty = false;
    }

  }

  setDataSource(res: DonationResponseInterface[]) {
    this.dataSource.data = res;

  }


  public cancelResponse(response) {

    this.donationResponseApi.cancel(response.id)
      .subscribe((change) => {

        let updatedResponse: DonationResponseInterface;
        updatedResponse = this._donationResponses.find(res => res.id === response.id);
        updatedResponse.isCanceled = true;

        this.filterResponses();

      }, (error) => {
        // TODO: Handle error
        console.error(error);
      });
  }


  public goToOrg(id: string) {
    this.router.navigate(['/catalog'], { queryParams: { orgId: id } });
  }

  getResponseState(response: DonationResponseInterface): string {

    let state: string;

    if (response.alreadyDelivered) {
      state = 'Entregada';
    } else {
      if (response.isCanceled) {
        state = 'Cancelada';
      } else {
        state = 'Activa';
      }
    }

    return state;

  }

  isResponseActive(response: DonationResponseInterface): boolean {
    let active: boolean;
    active = (this.getResponseState(response) === 'Activa');
    return active;
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


}
