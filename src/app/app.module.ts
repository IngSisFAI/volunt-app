import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { routing } from './app.routing';

//Loopback
import { SDKBrowserModule } from './shared/sdk/index';

//Componentes Propios
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ActiveDonationsComponent } from './active-donations/active-donations.component';
import { TestComponent } from './test/test.component';
import { DonnersComponent } from './donners/donners.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DonnerComponent } from './donner/donner.component'
import { DonnerHistory } from './donner/donner-history/donner-history.component'

//Services Propios
import { AccountService } from './account-service/account.service';

import { UiModule } from './ui/shared/ui.module';
import { AppRoutringModule } from './app-routring.module';
import { DonateModule } from './donate/donate.module';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ActiveDonationsComponent,
    TestComponent,
    DonnersComponent,
    SignupComponent,
    LoginComponent,
    DonnerComponent,
    DonnerHistory
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SDKBrowserModule.forRoot(),
    AppRoutringModule,
    UiModule,
    AppRoutringModule,
    DonateModule
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
