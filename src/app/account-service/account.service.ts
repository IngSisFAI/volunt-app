import { Injectable } from '@angular/core';
import { LoopBackConfig }        from '../shared/sdk';
import { Organization, User, AccessToken }  from '../shared/sdk/models';
import { OrganizationApi, UserApi }            from '../shared/sdk/services';

@Injectable()
export class AccountService {

  constructor(
      private organizationApi: OrganizationApi,
      private userApi: UserApi
  ) { }


  // Start making API calls right away
  public signupUser(user: User): void {
    this.userApi.create(user).subscribe((account: User) => this.signinUser(account));
  }
  // Start making API calls right away
  public signupOrganization(organization: Organization): void {
    this.userApi.create(organization).subscribe((account: Organization) => this.signinOrganization(account));
  }

  // Built-in LoopBack Authentication and Typings like Account and TokenInterface
  public signinUser(user: User): void {
  console.log('asd');
    this.userApi.login(user).subscribe((token: AccessToken) => alert('Fake Redirect'));
  }
  public signinOrganization(organization: Organization): void {
    this.userApi.login(organization).subscribe((token: AccessToken) => alert('Fake Redirect'));
  }

}
