import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserProfileComponent } from '../user-profile/user-profile.component';
import { WantToDonateComponent } from '../want-to-donate/want-to-donate.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { PageNotFoundComponent } from '../page-not-found/not-found.component';
import { FilterSidebarComponent } from '../filter-sidebar/filter-sidebar.component';
import { MenuComponent } from '../menu/menu.component';

import { OrganizationModule } from '../../organization/organization.module';
import { DonationsModule } from '../../donations/donations.module';
import { MainCatalogComponent } from '../main-catalog/main-catalog.component';

import { MaterialModule } from '../../shared/modules/material.module';
@NgModule({
  imports: [
    OrganizationModule,
    DonationsModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    UserProfileComponent,
    TopNavComponent,
    WantToDonateComponent,
    PageNotFoundComponent,
    MainCatalogComponent,
    FilterSidebarComponent,
    MenuComponent
  ],
  exports: [
    TopNavComponent,
    UserProfileComponent,
    WantToDonateComponent,
    PageNotFoundComponent,
    MenuComponent,
  ],
})
export class UiModule { }
