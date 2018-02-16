import { Component, OnInit } from '@angular/core';
import { Donner-reviewInterface } from '../../_shared/models/donner-review';
import { Donner-reviewService } from '../../_shared/services/donner-review.service';

@Component({
  selector: 'app-donner-review-main',
  templateUrl: './donner-review-main.component.html',
  styleUrls: ['./donner-review-main.component.css']
})
export class Donner-reviewMainComponent implements OnInit {

  public donner-reviews: Donner-reviewInterface[] = [];
  public donner-reviewSelected: Donner-reviewInterface = null;

  constructor(
    private donner-reviewService: Donner-reviewService
  ) { }

  ngOnInit() {
    this.find();
  }
  

  find() {
    this.donner-reviewService.find()
      .subscribe(donner-reviews => {
        this.donner-reviews = donner-reviews.slice();
      },
      (error) => {
        console.log('An error occured at Donner-review-main component');
        console.log(error);
      }
    );
  }

  select(donner-review) {
    this.donner-reviewSelected = Object.assign({}, donner-review);
  }

  onCreated(donner-review: Donner-reviewInterface) {
    this.donner-reviews.push(donner-review);
  }

  OnEdit(donner-reviewUpdated: Donner-reviewInterface) {
    const indice = this.donner-reviews.findIndex((tipo) => tipo.id === donner-reviewUpdated.id);

    if (indice !== -1) {
      this.donner-reviews[indice] = donner-reviewUpdated;
    } else { }
  }

}
