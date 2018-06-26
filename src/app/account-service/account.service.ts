import { Injectable } from '@angular/core';
import { LoopBackConfig } from '../shared/sdk';
import { Organization, Donner, SDKToken } from '../shared/sdk/models';
import { OrganizationApi, DonnerApi } from '../shared/sdk/services';
import { LoopBackAuth } from '../shared/sdk/services';
import { Router } from '@angular/router';

@Injectable()
export class AccountService {

  constructor(
    private organizationApi: OrganizationApi,
    private donnerApi: DonnerApi,
    private auth: LoopBackAuth,
    private router: Router,
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
    this.donnerApi.login(user).subscribe((token: SDKToken) => {
      this.router.navigate(['/catalog']);
      //   this.auth.setToken(token); ya lo hace el metodo login
      this.auth.setRememberMe(true); // Creo que tampoco hace falta
      this.auth.save(); // Creo que tampoco hace falta
    }, (err) => {
      console.error(err);
      alert("Credenciales incorrectos!");
    });
  }

  public sigin(user) {
    return this.donnerApi.login(user).subscribe((token: SDKToken) => {
      // this.router.navigate(['/catalog']);
      //   this.auth.setToken(token); ya lo hace el metodo login
      this.auth.setRememberMe(true); // Creo que tampoco hace falta
      this.auth.save(); // Creo que tampoco hace falta
    }, (err) => {
      return this.organizationApi.login(user).subscribe((token: SDKToken) => {
        this.router.navigate(['/catalog']);
        // We must do something to know that is an organization ... 
      }, (err) => {
        console.error(err);
        alert("Credenciales incorrectos!");
      });
    })
  }

  public logoutUser(): void {
    this.donnerApi.logout().subscribe(() => {
      //this.auth.clear();
      this.router.navigate(['/']);
    });
  }
  public signinOrganization(organization: Organization): void {
    this.organizationApi.login(organization).subscribe((token: SDKToken) => {
      this.router.navigate(['/catalog']);
      // We must do something to know that is an organization ... 
    }, (err) => {
      console.error(err);
      alert("Credenciales incorrectos!");
    });
  }

  loggedIn() {
    let loggedIn: boolean = false;
    const userId = this.auth.getCurrentUserId();
    if (userId) {
      loggedIn = true;
    }
    return loggedIn;
  }

}
