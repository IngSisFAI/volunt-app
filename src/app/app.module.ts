import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

//Loopback
import { SDKBrowserModule } from './shared/sdk/index';

//Componentes Propios
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ActiveDonationsComponent } from './active-donations/active-donations.component';
import { TestComponent } from './test/test.component';
import { DonnersComponent } from './donners/donners.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ActiveDonationsComponent,
    TestComponent,
    DonnersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SDKBrowserModule.forRoot(),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
