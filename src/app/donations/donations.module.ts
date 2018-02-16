import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveDonationsComponent } from './active-donations/active-donations.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ActiveDonationsComponent
  ],
  exports: [ActiveDonationsComponent]
})
export class DonationsModule { }
