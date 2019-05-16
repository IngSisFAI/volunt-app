import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrganizationReviewApi } from '../../shared/sdk/services/custom/OrganizationReview';
import { OrganizationReview, OrganizationReviewInterface } from '../../shared/sdk/models/OrganizationReview';

@Component({
  selector: 'app-organization-review-add',
  templateUrl: './organization-review-add.component.html',
  styleUrls: ['./organization-review-add.component.css']
})
export class OrganizationReviewAddComponent implements OnInit {

  @Output() onCreated = new EventEmitter();

  public organizationReview: OrganizationReviewInterface = new OrganizationReview();

  constructor(
    private organizationReviewService: OrganizationReviewApi
  ) { }

  ngOnInit() {}

  create() {

    this.organizationReviewService
      .create(this.organizationReview).subscribe(
      (organizationReview: OrganizationReview) => {
        this.onCreated.emit(organizationReview);
      },
      (error) => {
        // TODO: Handle error
        console.error(error);
      }
      );
  }

}
