import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Organization-reviewService } from '../../_shared/services/organization-review.service';
import { Organization-review, Organization-reviewInterface } from '../../_shared/models/organization-review';

@Component({
  selector: 'app-organization-review-add',
  templateUrl: './organization-review-add.component.html',
  styleUrls: ['./organization-review-add.component.css']
})
export class Organization-reviewAddComponent implements OnInit {

  @Output() onCreated = new EventEmitter();

  public organization-review: Organization-reviewInterface = new Organization-review();

  constructor(
    private organization-reviewService: Organization-reviewService
  ) { }

  ngOnInit() {}

  create() {

    this.organization-reviewService
      .create(this.organization-review).subscribe(
      (organization-review: Organization-review) => {
        this.onCreated.emit(organization-review);
      },
      (error) => {
        console.log('An error occured at Organization-review-add component');
        console.log(error);
      }
      );
  }

}
