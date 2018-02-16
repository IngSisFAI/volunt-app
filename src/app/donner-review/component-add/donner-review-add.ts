import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Donner-reviewService } from '../../_shared/services/donner-review.service';
import { Donner-review, Donner-reviewInterface } from '../../_shared/models/donner-review';

@Component({
  selector: 'app-donner-review-add',
  templateUrl: './donner-review-add.component.html',
  styleUrls: ['./donner-review-add.component.css']
})
export class Donner-reviewAddComponent implements OnInit {

  @Output() onCreated = new EventEmitter();

  public donner-review: Donner-reviewInterface = new Donner-review();

  constructor(
    private donner-reviewService: Donner-reviewService
  ) { }

  ngOnInit() {}

  create() {

    this.donner-reviewService
      .create(this.donner-review).subscribe(
      (donner-review: Donner-review) => {
        this.onCreated.emit(donner-review);
      },
      (error) => {
        console.log('An error occured at Donner-review-add component');
        console.log(error);
      }
      );
  }

}
