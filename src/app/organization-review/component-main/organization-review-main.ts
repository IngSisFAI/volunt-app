import { Component, OnInit } from '@angular/core';
import { Organization-reviewInterface } from '../../_shared/models/organization-review';
import { Organization-reviewService } from '../../_shared/services/organization-review.service';

@Component({
  selector: 'app-organization-review-main',
  templateUrl: './organization-review-main.component.html',
  styleUrls: ['./organization-review-main.component.css']
})
export class Organization-reviewMainComponent implements OnInit {

  public organization-reviews: Organization-reviewInterface[] = [];
  public organization-reviewSelected: Organization-reviewInterface = null;

  constructor(
    private organization-reviewService: Organization-reviewService
  ) { }

  ngOnInit() {
    this.find();
  }
  

  find() {
    this.organization-reviewService.find()
      .subscribe(organization-reviews => {
        this.organization-reviews = organization-reviews.slice();
      },
      (error) => {
        console.log('An error occured at Organization-review-main component');
        console.log(error);
      }
    );
  }

  select(organization-review) {
    this.organization-reviewSelected = Object.assign({}, organization-review);
  }

  onCreated(organization-review: Organization-reviewInterface) {
    this.organization-reviews.push(organization-review);
  }

  OnEdit(organization-reviewUpdated: Organization-reviewInterface) {
    const indice = this.organization-reviews.findIndex((tipo) => tipo.id === organization-reviewUpdated.id);

    if (indice !== -1) {
      this.organization-reviews[indice] = organization-reviewUpdated;
    } else { }
  }

}
