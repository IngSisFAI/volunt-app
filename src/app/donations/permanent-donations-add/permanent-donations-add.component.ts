import { Component, OnInit } from '@angular/core';

// Interfaces
import { DonationRequestInterface, DonationRequest } from '../../shared/sdk/models/DonationRequest';

// Services
import { DonationRequestApi } from '../../shared/sdk/services/custom/DonationRequest';
import { ProductApi } from '../../shared/sdk/services/custom/Product';
import { ProductInterface, OrganizationApi, OrganizationInterface } from '../../shared/sdk';

@Component({
  selector: 'app-permanent-donations-add',
  templateUrl: './permanent-donations-add.component.html',
  styleUrls: ['./permanent-donations-add.component.css']
})
export class PermanentDonationsAddComponent implements OnInit {

  public permanentDonation = new DonationRequest();

  public products: ProductInterface[] = [];
  public selectedProduct: any = null;
  public organizations: OrganizationInterface[] = [];
  public selectedOrganization = null;

  constructor(
    private donationRequestApi: DonationRequestApi,
    private productApi: ProductApi,
    private organizationApi: OrganizationApi
  ) { }

  ngOnInit() {
    this.productApi.find()
      .subscribe(products => {
        this.products = <any>products;

        this.organizationApi.find()
          .subscribe(organizations => {
            console.log(organizations);
            this.organizations = <any>organizations;

            this.permanentDonation.status = true;
            this.permanentDonation.isPermanent = true;
            // this.permanentDonation.covered = 0;
            // this.permanentDonation.promised = 0;
            this.permanentDonation.creationDate = new Date();
          },
            error => {
              console.error(error);
            }
          );
      },
        error => {
          console.error(error);
        }
      );

  }

  create() {
    // if (!this.permanentDonation.expirationDate) {
    let tempDate = new Date();
    console.log(tempDate);
    tempDate.setMonth(tempDate.getMonth() + 2);
    console.log(tempDate);
    this.permanentDonation.expirationDate = tempDate;


    this.permanentDonation.productId = this.selectedProduct.id;
    this.permanentDonation.organizationId = this.selectedOrganization.id;

    this.donationRequestApi.create(this.permanentDonation).subscribe(
      (permanentDonationRequest) => {
        console.log(permanentDonationRequest);
      },
      error => {
        console.error(error);
      }
    );
  }

}
