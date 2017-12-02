
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Componentes Propios
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ActiveDonationsComponent } from './active-donations/active-donations.component';
import { TestComponent } from './test/test.component';

const appRoutes: Routes =  [
{
	path:'',
	component: TestComponent
},
	{ path: 'products', component: ProductsComponent },
	{ path: 'activeDonations', component: ActiveDonationsComponent },
];


export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
