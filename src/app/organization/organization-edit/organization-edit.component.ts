import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { OrganizationApi } from '../../shared/sdk/services/custom/Organization';
import { Organization } from '../../shared/sdk/models/Organization';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.css']
})
export class OrganizationEditComponent implements OnChanges {

  @Input() organizationOriginal: Organization;
  @Output() organizationEdited = new EventEmitter();

  private organization: Organization;

  constructor(
    private router: Router,
    private organizationService: OrganizationApi
  ) { }

  ngOnChanges(changes): void {
    this.organization = Object.assign({}, this.organizationOriginal);
  }

  public update() {
    this.organizationService.patchAttributes(this.organization.id, this.organization)
      .subscribe(
        organizationEdited => {
          this.organizationEdited.emit(organizationEdited);
        }
      );
  }

  public cancelar() {
    this.organization = Object.assign({}, this.organizationOriginal);
  }

  public goHistory() {
    this.router.navigate([`/history`]);
  }
  public goActiveRequests() {
    this.router.navigate([`/activeRequests`]);
  }

}
