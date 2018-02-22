import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrganizationApi } from '../shared/sdk';
import { OrganizationMainComponent } from './organization-main/organization-main.component';
import { OrganizationAddComponent } from './organization-add/organization-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [OrganizationMainComponent, OrganizationAddComponent],
  exports: [OrganizationMainComponent],
  providers: [OrganizationApi]
})
export class OrganizationModule { }
