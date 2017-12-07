
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Componentes Propios
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DonnersComponent } from './donners/donners.component';
import { ActiveDonationsComponent } from './active-donations/active-donations.component';
import { TestComponent } from './test/test.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes =  [
{
	path:'',
	component: TestComponent
},
	{ path: 'signup', component: SignupComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'products', component: ProductsComponent },
	{ path: 'activeDonations', component: ActiveDonationsComponent },
	{ path: 'donners', component: DonnersComponent },
];


export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
