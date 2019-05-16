import { Component, OnInit, OnChanges, EventEmitter, Input, Output } from '@angular/core';
import { OrganizationReviewApi } from '../../shared/sdk/services/custom/OrganizationReview';
import { OrganizationReview } from '../../shared/sdk/models/OrganizationReview';

@Component({
  selector: 'app-organization-review-edit',
  templateUrl: './organization-review-edit.component.html',
  styleUrls: ['./organization-review-edit.component.css']
})
export class OrganizationReviewEditComponent implements OnInit, OnChanges {

  @Input() organizationReviewOriginal: OrganizationReview;
  @Output() organizationReviewEdited = new EventEmitter();

  private organizationReview: OrganizationReview;

  constructor(
    private organizationReviewService: OrganizationReviewApi
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    this.organizationReview = Object.assign({}, this.organizationReviewOriginal);
  }

  public update() {
    this.organizationReviewService.patchAttributes(this.organizationReview.id, this.organizationReview)
      .subscribe(
        organizationReviewEdited => {
          this.organizationReviewEdited.emit(organizationReviewEdited);
        }
      );
  }

  public cancelar() {
    this.organizationReview = Object.assign({}, this.organizationReviewOriginal);
  }

}
