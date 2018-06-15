import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminOrganizationsComponent } from './superadmin-organizations/superadmin-organizations.component';
import { SuperadminUsersComponent } from './superadmin-users/superadmin-users.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SuperadminOrganizationsComponent, SuperadminUsersComponent]
})
export class SuperadminModule { }
