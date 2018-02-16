import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { routing } from './app.routing';

// Loopback
import { SDKBrowserModule } from './shared/sdk/index';

// Componentes Propios
import { AppComponent } from './app.component';

import { TestComponent } from './test/test.component';
import { DonnersComponent } from './donners/donners.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DonnerComponent } from './donner/donner.component'
import { DonnerHistory } from './donner/donner-history/donner-history.component'

// Services Propios
import { AccountService } from './account-service/account.service';

import { UiModule } from './ui/shared/ui.module';
import { AppRoutingModule } from './app-routing';
import { DonateModule } from './donate/donate.module';
import { DonationsModule } from './donations/donations.module';


// Con la convencion
import { ContactModule } from './contact/contact.module';
import { OrganizationModule } from './organization/organization.module';
import { OrganizationReviewModule } from './organization-review/organization-review.module';
import { ProductModule } from './product/product.module';
import { UnitModule } from './unit/unit.module';



@NgModule({
  declarations: [
    AppComponent,
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
    AppRoutingModule,
    UiModule,
    DonateModule,
    DonationsModule,
    ContactModule,
    OrganizationModule,
    OrganizationReviewModule,
    ProductModule,
    UnitModule
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
