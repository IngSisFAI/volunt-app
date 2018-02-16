import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrganizationService } from '../../_shared/services/organization.service';
import { Organization, OrganizationInterface } from '../../_shared/models/organization';

@Component({
  selector: 'app-organization-add',
  templateUrl: './organization-add.component.html',
  styleUrls: ['./organization-add.component.css']
})
export class OrganizationAddComponent implements OnInit {

  @Output() onCreated = new EventEmitter();

  public organization: OrganizationInterface = new Organization();

  constructor(
    private organizationService: OrganizationService
  ) { }

  ngOnInit() {}

  create() {

    this.organizationService
      .create(this.organization).subscribe(
      (organization: Organization) => {
        this.onCreated.emit(organization);
      },
      (error) => {
        console.log('An error occured at Organization-add component');
        console.log(error);
      }
      );
  }

}
