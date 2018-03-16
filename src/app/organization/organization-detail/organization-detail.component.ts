import { Component, OnInit, Input } from '@angular/core';
import { Organization, OrganizationInterface } from '../../shared/sdk/models/Organization';
import { OrganizationApi } from '../../shared/sdk/services/custom/Organization';

@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css']
})
export class OrganizationDetailComponent implements OnInit {

  @Input() organization: Organization;
  //organization: Object;

  constructor(
    //private organizationService: OrganizationApi
  ) { }

  ngOnInit() {
    //  this.getOrganization();

  }
  /*
    getOrganization() {
      this.organizationService.findById(this.organizationId)
        .subscribe(
          org => {
            console.log('organization: ', org);
            this.organization = org;
            //organization.emit(organization);
          }
        )
    }
  */

}
