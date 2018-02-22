import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrganizationReviewApi } from '../shared/sdk';
import { OrganizationReviewMainComponent } from './organization-review-main/organization-review-main.component';
import { OrganizationReviewAddComponent } from './organization-review-add/organization-review-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [OrganizationReviewMainComponent,OrganizationReviewAddComponent],
  exports: [OrganizationReviewMainComponent],
  providers: [OrganizationReviewApi]
})
export class OrganizationReviewModule { }
