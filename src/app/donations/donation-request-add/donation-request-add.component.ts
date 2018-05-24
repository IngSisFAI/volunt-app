import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, DateAdapter, NativeDateAdapter } from '@angular/material';

// Interfaces
import { DonationRequestInterface, DonationRequest } from '../../shared/sdk/models/DonationRequest';

// Services
import { DonationRequestApi } from '../../shared/sdk/services/custom/DonationRequest';
import { ProductApi } from '../../shared/sdk/services/custom/Product';
import { ProductInterface, OrganizationApi, OrganizationInterface } from '../../shared/sdk';

@Component({
  selector: 'app-donation-request-add',
  templateUrl: './donation-request-add.component.html',
  styleUrls: ['./donation-request-add.component.css']
})
export class DonationRequestAddComponent implements OnInit {
  public donationRequest = new DonationRequest();

  public products: ProductInterface[] = [];
  public selectedProduct: any = null;
  public organizations: OrganizationInterface[] = [];
  public selectedOrganization = null;

  constructor(
    public dialog: MatDialog,
    private donationRequestApi: DonationRequestApi,
    private productApi: ProductApi,
    private organizationApi: OrganizationApi
  ) { }

  ngOnInit() {
    this.productApi.find()
      .subscribe(products => {
        console.log('Products: ', products);
        this.products = <any>products;

        this.organizationApi.find()
          .subscribe(organizations => {
            console.log(organizations);
            this.organizations = <any>organizations;
            this.donationRequestInit();
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

  private donationRequestInit() {
    this.donationRequest.creationDate = new Date();
    this.donationRequest.isPermanent = true;
    this.donationRequest.amount = 0;
  }

  create() {
    this.donationRequestApi.create(this.donationRequest).subscribe(
      (donationRequestRequest) => {
        console.log(donationRequestRequest);
      },
      error => {
        console.error(error);
      }
    );
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddRequestDialog, {
      width: '500px',
      data: {
        products: this.products,
        organizations: this.organizations,
        request: this.donationRequest,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(this.donationRequest);
      this.create();
    });
  }

}
@Component({
  selector: 'app-add-request-dialog',
  templateUrl: 'add-request-dialog.component.html',
  styleUrls: ['./add-request-dialog.component.css']
})
export class AddRequestDialog {

  constructor(
    public dialogRef: MatDialogRef<AddRequestDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dateAdapter: DateAdapter<NativeDateAdapter>
  ) { 
    this.dateAdapter.setLocale('es-ES');
  }

  onNoClick(): void {
    this.dialogRef.close( );
  }

  save(): void {
    this.dialogRef.close(this.data.request);
  }
}
