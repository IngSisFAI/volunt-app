import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { AuthGuard } from './account-service/auth.guard';

// Componentes Propios
import { AppComponent } from './app.component';

import { DonnersComponent } from './donners/donners.component';
import { ActiveDonationsComponent } from './donations/active-donations/active-donations.component';
import { TestComponent } from './test/test.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DonnerComponent } from './donner/donner.component';
import { DonationsMainComponent } from './donations/donations-main/donations-main.component';

// import { ProductsMainComponent } from './products/products-main/products-main.component';

const routes: Routes =  [
	{ path: '', component: TestComponent},
	{ path: 'signup', component: SignupComponent },
	{ path: 'login', component: LoginComponent },
	// { path: 'products', component: ProductsMainComponent,  canActivate: [AuthGuard] },
	{ path: 'activeDonations', component: ActiveDonationsComponent,  canActivate: [AuthGuard] },
	{ path: 'donners', component: DonnersComponent,  canActivate: [AuthGuard] },
	{ path: 'donner/:id', component: DonnerComponent,  canActivate: [AuthGuard] },
	{ path: 'donations', component: DonationsMainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
