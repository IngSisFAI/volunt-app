import { Component, OnInit } from '@angular/core';
import { OrganizationReviewApi } from '../../shared/sdk/services/custom/OrganizationReview';
import { OrganizationReview, OrganizationReviewInterface } from '../../shared/sdk/models/OrganizationReview';

@Component({
  selector: 'app-organization-review-main',
  templateUrl: './organization-review-main.component.html',
  styleUrls: ['./organization-review-main.component.css']
})
export class OrganizationReviewMainComponent implements OnInit {

  public organizationReviews: OrganizationReviewInterface[] = [];
  public organizationReviewSelected: OrganizationReviewInterface = null;

  constructor(
    private organizationReviewApi: OrganizationReviewApi
  ) { }

  ngOnInit() {
    this.find();
  }


  find() {
    this.organizationReviewApi.find()
      .subscribe(organizationReviews => {
        this.organizationReviews = <any>organizationReviews.slice();
      },
      (error) => {
        console.log('An error occured at OrganizationReview-main component');
        console.log(error);
      }
    );
  }

  select(organizationReview) {
    this.organizationReviewSelected = Object.assign({}, organizationReview);
  }

  onCreated(organizationReview: OrganizationReviewInterface) {
    this.organizationReviews.push(organizationReview);
  }

  OnEdit(organizationReviewUpdated: OrganizationReviewInterface) {
    const indice = this.organizationReviews.findIndex((tipo) => tipo.id === organizationReviewUpdated.id);

    if (indice !== -1) {
      this.organizationReviews[indice] = organizationReviewUpdated;
    } else { }
  }

}
