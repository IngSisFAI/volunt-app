import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrganizationReviewApi } from '../shared/sdk';
import { OrganizationReviewMainComponent } from './component-main/organization-review-main';
import { OrganizationReviewAddComponent } from './component-add/organization-review-add';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [OrganizationReviewMainComponent],
  exports: [OrganizationReviewMainComponent],
  providers: [OrganizationReviewApi]
})
export class OrganizationReviewModule { }
