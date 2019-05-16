import { Component, Output, EventEmitter } from '@angular/core';
import { OrganizationApi } from '../../shared/sdk/services/custom/Organization';
import { Organization, OrganizationInterface } from '../../shared/sdk/models/Organization';

@Component({
  selector: 'app-organization-add',
  templateUrl: './organization-add.component.html',
  styleUrls: ['./organization-add.component.css']
})
export class OrganizationAddComponent {

  @Output() onCreated = new EventEmitter();

  public organization: OrganizationInterface = new Organization();

  constructor(
    private organizationApi: OrganizationApi
  ) { }

  create() {

    this.organizationApi
      .create(this.organization).subscribe(
        (organization: Organization) => {
          this.onCreated.emit(organization);
        },
        (error) => {
          // TODO: Handle error
          console.error(error);
        }
      );
  }

}
