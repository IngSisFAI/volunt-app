import { Component, OnInit } from '@angular/core';
import { OrganizationInterface } from '../../_shared/models/organization';
import { OrganizationService } from '../../_shared/services/organization.service';

@Component({
  selector: 'app-organization-main',
  templateUrl: './organization-main.component.html',
  styleUrls: ['./organization-main.component.css']
})
export class OrganizationMainComponent implements OnInit {

  public organizations: OrganizationInterface[] = [];
  public organizationSelected: OrganizationInterface = null;

  constructor(
    private organizationService: OrganizationService
  ) { }

  ngOnInit() {
    this.find();
  }
  

  find() {
    this.organizationService.find()
      .subscribe(organizations => {
        this.organizations = organizations.slice();
      },
      (error) => {
        console.log('An error occured at Organization-main component');
        console.log(error);
      }
    );
  }

  select(organization) {
    this.organizationSelected = Object.assign({}, organization);
  }

  onCreated(organization: OrganizationInterface) {
    this.organizations.push(organization);
  }

  OnEdit(organizationUpdated: OrganizationInterface) {
    const indice = this.organizations.findIndex((tipo) => tipo.id === organizationUpdated.id);

    if (indice !== -1) {
      this.organizations[indice] = organizationUpdated;
    } else { }
  }

}
