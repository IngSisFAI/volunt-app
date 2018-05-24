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

// Services Propios
import { AccountService } from './account-service/account.service';

import { UiModule } from './ui/shared/ui.module';
import { AppRoutingModule } from './app-routing';
import { DonationsModule } from './donations/donations.module';

// import { ProductsModule } from './products/products.module';

// Con la convencion
import { ContactModule } from './contact/contact.module';
import { OrganizationModule } from './organization/organization.module';
import { DonnerModule } from './donner/donner.module';
import { OrganizationReviewModule } from './organization-review/organization-review.module';
import { ProductModule } from './product/product.module';
import { UnitModule } from './unit/unit.module';
import { ONGProfileComponent } from './ui/ong-profile/ong-profile.component';
//import { WantToDonateComponent } from './ui/want-to-donate/want-to-donate.component';

// Material
import { MaterialModule } from './shared/modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DonnersComponent,
    SignupComponent,
    ONGProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SDKBrowserModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    UiModule,
    //  DonateModule,
    DonationsModule,
    DonnerModule,
    ContactModule,
    OrganizationModule,
    OrganizationReviewModule,
    ProductModule,
    UnitModule,
    MaterialModule
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
