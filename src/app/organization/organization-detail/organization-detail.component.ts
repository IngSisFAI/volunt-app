import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Organization, OrganizationInterface } from '../../shared/sdk/models/Organization';
import { OrganizationApi } from '../../shared/sdk/services/custom/Organization';

@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css']
})
export class OrganizationDetailComponent implements OnInit {

  @Input() organization: Organization;
  @Input() showMoreRequestsButton: boolean;
  //organization: Object;

  constructor(
    private router: Router,
    //private organizationService: OrganizationApi
  ) { }

  ngOnInit() {
    //  this.getOrganization();

  }

  public goToOrg() {
    this.router.navigate(['/catalog'], { queryParams: { orgId: this.organization.id } });
  }

}
