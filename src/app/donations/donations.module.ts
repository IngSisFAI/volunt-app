import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveDonationsComponent } from './active-donations/active-donations.component';
import { PermanentDonationsAddComponent } from './permanent-donations-add/permanent-donations-add.component';
import { DonationsMainComponent } from './donations-main/donations-main.component';
import { DonateAddComponent } from './donate-add/donate-add.component';
import { FormsModule } from '@angular/forms';
import { DonationDetailComponent } from './donation-detail/donation-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ActiveDonationsComponent,
    PermanentDonationsAddComponent,
    DonationsMainComponent,
    DonateAddComponent,
    DonationDetailComponent
  ],
  exports: [ActiveDonationsComponent, DonationsMainComponent, DonationDetailComponent]
})
export class DonationsModule { }
