import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './account-service/auth.guard';

// Componentes Propios
import { AppComponent } from './app.component';

import { DonnersComponent } from './donners/donners.component';
import { TestComponent } from './test/test.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DonnerDetailComponent } from './donner/donner-detail/donner-detail.component';
import { DonationsMainComponent } from './donations/donations-main/donations-main.component';
import { ProductMainComponent } from './product/product-main/product-main.component';
import { WantToDonateComponent } from './ui/want-to-donate/want-to-donate.component';
import { PageNotFoundComponent } from './ui/page-not-found/not-found.component';
import { MainCatalogComponent } from './ui/main-catalog/main-catalog.component';
import { ONGProfileComponent } from './ui/ong-profile/ong-profile.component';
import { UserProfileComponent } from './ui/user-profile/user-profile.component';
import { OrganizationHistoryComponent } from './organization/organization-history/organization-history.component';
import { OrganizationActiveRequestsComponent } from './organization/organization-active-requests/organization-active-requests.component';


const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'donations', component: DonationsMainComponent },
  {
    path: 'wantToDonate/:idRequest', component: WantToDonateComponent
  },
  {
    path: 'catalog', component: MainCatalogComponent
  },
  {
    path: 'ong/:idOrg', component: ONGProfileComponent
  },
  // TODO: change the path to ong/...
  {
    path: 'history/:idOrg.', component: OrganizationHistoryComponent
  },
  // TODO: change the path to ong/...
  {
    path: 'activeRequests/:idOrg.', component: OrganizationActiveRequestsComponent
  },
  {
    path: '', canActivate: [
      AuthGuard
    ], children: [
      {
        path: 'userProfile', component: UserProfileComponent
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
        path: '', redirectTo: '/test', pathMatch: 'full'
      }
    ]
  },
  { path: '', redirectTo: '/test', pathMatch: 'full' },
  // wildcard
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
