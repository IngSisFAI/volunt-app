import { Injectable } from '@angular/core';
import { LoopBackConfig }        from '../shared/sdk';
import { Organization, Donner, AccessToken }  from '../shared/sdk/models';
import { OrganizationApi, DonnerApi }            from '../shared/sdk/services';

@Injectable()
export class AccountService {

  constructor(
      private organizationApi: OrganizationApi,
      private donnerApi: DonnerApi
  ) { }


  // Start making API calls right away
  public signupUser(user: Donner): void {
    this.donnerApi.create(user).subscribe((account: Donner) => this.signinUser(account));
  }
  // Start making API calls right away
  public signupOrganization(organization: Organization): void {
    this.organizationApi.create(organization).subscribe((account: Organization) => this.signinOrganization(account));
  }

  // Built-in LoopBack Authentication and Typings like Account and TokenInterface
  public signinUser(user: Donner): void {
  console.log('asd');
  console.log(user);
    this.donnerApi.login(user).subscribe((token: AccessToken) => alert('Fake Redirect'));
  }
  public signinOrganization(organization: Organization): void {
    this.organizationApi.login(organization).subscribe((token: AccessToken) => alert('Fake Redirect'));
  }

}
