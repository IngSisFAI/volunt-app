import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrganizationApi } from '../shared/sdk';
import { OrganizationMainComponent } from './component-main/organization-main';
import { OrganizationAddComponent } from './component-add/organization-add';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [OrganizationMainComponent],
  exports: [OrganizationMainComponent],
  providers: [OrganizationApi]
})
export class OrganizationModule { }
