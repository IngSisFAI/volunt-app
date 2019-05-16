import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginModal } from './login-modal/login-modal.component';
import { Organization, Donner } from '../shared/sdk/models';
import { AccountService } from '../account-service/account.service';


@Injectable()
export class LoginModalService {

  private accountDonner: Donner = new Donner();
  private accountOrganization: Organization = new Organization();

  constructor(
    private accountService: AccountService,
    public dialog: MatDialog) { }

  private loginUser(): void {
    this.accountService.signinUser(this.accountDonner);
  }
  private loginOrganization(): void {
    this.accountService.signinOrganization(this.accountOrganization);
  }

  private login(credentials): void {
    this.accountService.sigin(credentials);
  }

  openDialog() {
    let dialog = new LoginModal(this.dialog);
    return dialog.open()
      .then((credentials) => {
        if (credentials) {
          return this.login(credentials);
        }
      })
      .catch(err => {
        // TODO: Handle error
        console.error(err);
        throw err;
      });
  }

}
