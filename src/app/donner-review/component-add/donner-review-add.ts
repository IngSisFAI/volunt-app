import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DonnerReviewApi } from '../../shared/sdk/services/custom/DonnerReview';
import { DonnerReview, DonnerReviewInterface } from '../../shared/sdk/models/DonnerReview';

@Component({
  selector: 'app-donnerReview-add',
  templateUrl: './donnerReview-add.component.html',
  styleUrls: ['./donnerReview-add.component.css']
})
export class DonnerReviewAddComponent implements OnInit {

  @Output() onCreated = new EventEmitter();

  public donnerReview: DonnerReviewInterface = new DonnerReview();

  constructor(
    private donnerReviewApi: DonnerReviewApi
  ) { }

  ngOnInit() {}

  create() {

    this.donnerReviewApi
      .create(this.donnerReview).subscribe(
      (donnerReview: DonnerReview) => {
        this.onCreated.emit(donnerReview);
      },
      (error) => {
        console.log('An error occured at DonnerReview-add component');
        console.log(error);
      }
      );
  }

}