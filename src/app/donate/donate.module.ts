import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateMainComponent } from './donate-main/donate-main.component';
import { FormsModule } from '@angular/forms';
import { DonationRequestApi } from '../shared/sdk';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DonateMainComponent],
  exports: [DonateMainComponent],
  providers: [DonationRequestApi]
})
export class DonateModule { }
