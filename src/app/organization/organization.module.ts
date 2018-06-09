import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrganizationApi } from '../shared/sdk';
import { OrganizationMainComponent } from './organization-main/organization-main.component';
import { OrganizationAddComponent } from './organization-add/organization-add.component';
import { OrganizationEditComponent } from './organization-edit/organization-edit.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';
import { OrganizationHistoryComponent } from './organization-history/organization-history.component';
import { OrganizationActiveRequestsComponent } from './organization-active-requests/organization-active-requests.component';
import { MaterialModule } from '../shared/modules/material.module';
import { DonationsModule } from '../donations/donations.module';
import { OrganizationRequestsComponent } from 'app/organization/organization-requests/organization-requests.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    DonationsModule
  ],
  declarations: [OrganizationMainComponent, OrganizationAddComponent, OrganizationEditComponent,
    OrganizationActiveRequestsComponent,
    OrganizationDetailComponent, OrganizationHistoryComponent, OrganizationRequestsComponent],
  exports: [OrganizationMainComponent, OrganizationDetailComponent, OrganizationEditComponent, 
    OrganizationHistoryComponent, OrganizationActiveRequestsComponent, OrganizationRequestsComponent],
  providers: [OrganizationApi]
})
export class OrganizationModule { }
