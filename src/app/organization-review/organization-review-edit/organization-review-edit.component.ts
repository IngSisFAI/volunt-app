import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { OrganizationReviewApi } from '../../shared/sdk/services/custom/OrganizationReview';
import { OrganizationReview, OrganizationReviewInterface } from '../../shared/sdk/models/OrganizationReview';

@Component({
  selector: 'app-organization-review-edit',
  templateUrl: './organization-review-edit.component.html',
  styleUrls: ['./organization-review-edit.component.css']
})
export class OrganizationReviewEditComponent implements OnInit {

  @Input() organizationReviewOriginal: OrganizationReview;
  @Output() organizationReviewEdited = new EventEmitter();

  private organizationReview: OrganizationReview;

  constructor(
    private organizationReviewService: OrganizationReviewApi
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    console.log(this.organizationReviewOriginal)
    this.organizationReview = Object.assign({}, this.organizationReviewOriginal);
  }

  public update() {
    this.organizationReviewService.patchAttributes(this.organizationReview.id, this.organizationReview)
    .subscribe(
      organizationReviewEdited => {
        console.log('organizationReview edited: ', organizationReviewEdited);
        this.organizationReviewEdited.emit(organizationReviewEdited);
      }
    )
  }

  public cancelar() {
    this.organizationReview = Object.assign({}, this.organizationReviewOriginal);
  }

}
