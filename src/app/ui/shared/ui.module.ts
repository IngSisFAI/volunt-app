import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserNavComponent } from '../user-nav/user-nav.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { WantToDonateComponent } from '../want-to-donate/want-to-donate.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { BottomNavComponent } from '../bottom-nav/bot-nav.component';
import { PageNotFoundComponent } from '../page-not-found/not-found.component';
import { FilterSidebarComponent } from '../filter-sidebar/filter-sidebar.component';
import { MenuComponent } from '../menu/menu.component';

import { OrganizationModule } from '../../organization/organization.module';
import { DonnerModule } from '../../donner/donner.module';
import { DonationsModule } from '../../donations/donations.module';
import { MainCatalogComponent } from '../main-catalog/main-catalog.component';
import { UserResponsesComponent } from '../user-responses/user-responses.component';

import { MaterialModule } from '../../shared/modules/material.module';

@NgModule({
  imports: [
    OrganizationModule,
    DonnerModule,
    DonationsModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    UserNavComponent,
    UserProfileComponent,
    TopNavComponent,
    BottomNavComponent,
    WantToDonateComponent,
    PageNotFoundComponent,
    MainCatalogComponent,
    FilterSidebarComponent,
    MenuComponent,
    UserResponsesComponent
  ],
  exports: [
    TopNavComponent,
    BottomNavComponent,
    UserNavComponent,
    WantToDonateComponent,
    PageNotFoundComponent,
    MenuComponent,
    UserProfileComponent
  ],
})
export class UiModule { }
