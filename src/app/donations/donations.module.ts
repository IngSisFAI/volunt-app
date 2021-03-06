import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ActiveDonationsComponent } from './active-donations/active-donations.component';
import { PermanentDonationsAddComponent } from './permanent-donations-add/permanent-donations-add.component';
import { DonationsMainComponent } from './donations-main/donations-main.component';
import { DonateAddComponent } from './donate-add/donate-add.component';
import { DonationRequestAddComponent, AddRequestDialogComponent } from './donation-request-add/donation-request-add.component';
import { DonationDetailComponent } from './donation-detail/donation-detail.component';
import { DonationRequestDetailComponent } from './donation-request-detail/donation-request-detail.component';

import { LoginComponent } from '../login/login.component';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
  ],
  entryComponents: [AddRequestDialogComponent],
  declarations: [
    ActiveDonationsComponent,
    AddRequestDialogComponent,
    LoginComponent,
    PermanentDonationsAddComponent,
    DonationsMainComponent,
    DonateAddComponent,
    DonationRequestAddComponent,
    DonationRequestDetailComponent,
    DonationDetailComponent
  ],
  exports: [ActiveDonationsComponent, DonationsMainComponent,
    DonationDetailComponent, DonationRequestDetailComponent, DonateAddComponent, DonationRequestAddComponent]
})
export class DonationsModule { }
