import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DonnerDetailComponent } from './donner-detail/donner-detail.component';
import { DonnerHistoryComponent } from './donner-history/donner-history.component';

import { MaterialModule } from '../shared/modules/material.module';
import { DonnerActiveResponsesComponent } from './donner-active-responses/donner-active-responses.component';
import { DonnerResponsesComponent } from './donner-responses/donner-responses.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    DonnerDetailComponent,
    DonnerHistoryComponent,
    DonnerActiveResponsesComponent,
    DonnerResponsesComponent
  ],
  exports: [DonnerDetailComponent, DonnerHistoryComponent, DonnerActiveResponsesComponent, DonnerResponsesComponent]
})

export class DonnerModule { }
