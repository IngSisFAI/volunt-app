import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './account-service/auth.guard';

import { DonnersComponent } from './donners/donners.component';
import { SignupDonnerComponent } from './signupDonner/signupDonner.component';
import { SignupOngComponent } from './signupOng/signupOng.component';
import { LoginComponent } from './login/login.component';
import { DonnerDetailComponent } from './donner/donner-detail/donner-detail.component';
import { DonationsMainComponent } from './donations/donations-main/donations-main.component';
import { ProductMainComponent } from './product/product-main/product-main.component';
import { WantToDonateComponent } from './ui/want-to-donate/want-to-donate.component';
import { PageNotFoundComponent } from './ui/page-not-found/not-found.component';
import { MainCatalogComponent } from './ui/main-catalog/main-catalog.component';
import { ONGProfileComponent } from './ui/ong-profile/ong-profile.component';
import { UserProfileComponent } from './ui/user-profile/user-profile.component';
import { UserResponsesComponent } from './ui/user-responses/user-responses.component';
import { OrganizationHistoryComponent } from './organization/organization-history/organization-history.component';
import { OrganizationActiveRequestsComponent } from './organization/organization-active-requests/organization-active-requests.component';
import { DonationRequestDetailComponent } from './donations/donation-request-detail/donation-request-detail.component';
import { ONGRequestsComponent } from 'app/ui/ong-profile/ong-requests/ong-requests.component';
import { MainComponent } from 'app/ui/main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'signupDonner', component: SignupDonnerComponent },
  { path: 'signupOng', component: SignupOngComponent },
  { path: 'login', component: LoginComponent },
  { path: 'donations', component: DonationsMainComponent },
  {
    path: 'wantToDonate/:idRequest', component: WantToDonateComponent
  },
  {
    path: 'catalog', component: MainCatalogComponent
  },
  {
    path: '', canActivate: [
      AuthGuard
    ], children: [
      {
        path: 'userProfile', component: UserProfileComponent
      },
      {
        path: 'userResponses', component: UserResponsesComponent
      },
      {
        path: 'ong', component: ONGProfileComponent
      },
      {
        path: 'requests', component: ONGRequestsComponent
      },
      {
        path: 'history', component: OrganizationHistoryComponent
      },
      {
        path: 'activeRequests', component: OrganizationActiveRequestsComponent
      },
      {
        path: 'request/:idRequest', component: DonationRequestDetailComponent
      },
      {
        path: 'products', component: ProductMainComponent
      },
      {
        path: 'donners', component: DonnersComponent
      },
      {
        path: 'donner', component: DonnerDetailComponent
      },
      {
        path: '', redirectTo: '/', pathMatch: 'full'
      }
    ]
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // wildcard
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
