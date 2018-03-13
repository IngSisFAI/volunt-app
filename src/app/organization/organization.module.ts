import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrganizationApi } from '../shared/sdk';
import { OrganizationMainComponent } from './organization-main/organization-main.component';
import { OrganizationAddComponent } from './organization-add/organization-add.component';
import { OrganizationEditComponent } from './organization-edit/organization-edit.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [OrganizationMainComponent, OrganizationAddComponent, OrganizationAddComponent, OrganizationDetailComponent],
  exports: [OrganizationMainComponent, OrganizationDetailComponent],
  providers: [OrganizationApi]
})
export class OrganizationModule { }
