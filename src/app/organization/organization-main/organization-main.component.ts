import { Component, OnInit } from '@angular/core';
import { OrganizationApi } from '../../shared/sdk/services/custom/Organization';
import { Organization, OrganizationInterface } from '../../shared/sdk/models/Organization';

@Component({
  selector: 'app-organization-main',
  templateUrl: './organization-main.component.html',
  styleUrls: ['./organization-main.component.css']
})
export class OrganizationMainComponent implements OnInit {

  public organizations: OrganizationInterface[] = [];
  public organizationSelected: OrganizationInterface = null;

  constructor(
    private organizationApi: OrganizationApi
  ) { }

  ngOnInit() {
    this.find();
  }


  find() {
    this.organizationApi.find()
      .subscribe(organizations => {
        this.organizations = <any>organizations.slice();
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
