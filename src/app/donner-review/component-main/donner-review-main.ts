import { Component, OnInit } from '@angular/core';
import { DonnerReviewApi } from '../../shared/sdk/services/custom/DonnerReview';
import { DonnerReviewInterface } from '../../shared/sdk/models/DonnerReview';

@Component({
  selector: 'app-donnerReview-main',
  templateUrl: './donnerReview-main.component.html',
  styleUrls: ['./donnerReview-main.component.css']
})
export class DonnerReviewMainComponent implements OnInit {

  public donnerReviews: DonnerReviewInterface[] = [];
  public donnerReviewSelected: DonnerReviewInterface = null;

  constructor(
    private donnerReviewApi: DonnerReviewApi
  ) { }

  ngOnInit() {
    this.find();
  }


  find() {
    this.donnerReviewApi.find()
      .subscribe(donnerReviews => {
        this.donnerReviews = <any>donnerReviews.slice();
      },
        (error) => {
          // TODO: Handle error
          console.error(error);
        }
      );
  }

  select(donnerReview) {
    this.donnerReviewSelected = Object.assign({}, donnerReview);
  }

  onCreated(donnerReview: DonnerReviewInterface) {
    this.donnerReviews.push(donnerReview);
  }

  OnEdit(donnerReviewUpdated: DonnerReviewInterface) {
    const indice = this.donnerReviews.findIndex((tipo) => tipo.id === donnerReviewUpdated.id);

    if (indice !== -1) {
      this.donnerReviews[indice] = donnerReviewUpdated;
    } else { }
  }

}
