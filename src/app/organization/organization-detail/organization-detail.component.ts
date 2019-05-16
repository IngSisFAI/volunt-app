import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Organization } from '../../shared/sdk/models/Organization';
@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css']
})
export class OrganizationDetailComponent {

  @Input() organization: Organization;
  @Input() showMoreRequestsButton: boolean;

  constructor(
    private router: Router
  ) { }

  public goToOrg() {
    this.router.navigate(['/catalog'], { queryParams: { orgId: this.organization.id } });
  }

}
