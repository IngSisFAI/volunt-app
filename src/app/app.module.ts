import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { routing } from './app.routing';

// Loopback
import { SDKBrowserModule } from './shared/sdk/index';

// Componentes Propios
import { AppComponent } from './app.component';
import { DonnersComponent } from './donners/donners.component';
import { SignupDonnerComponent } from './signupDonner/signupDonner.component';
import { SignupOngComponent } from './signupOng/signupOng.component';

// Services Propios
import { AccountService } from './account-service/account.service';

import { UiModule } from './ui/shared/ui.module';
import { AppRoutingModule } from './app-routing';
import { DonationsModule } from './donations/donations.module';

// Con la convencion
import { ContactModule } from './contact/contact.module';
import { OrganizationModule } from './organization/organization.module';
import { DonnerModule } from './donner/donner.module';
import { OrganizationReviewModule } from './organization-review/organization-review.module';
import { ProductModule } from './product/product.module';
import { UnitModule } from './unit/unit.module';
import { ONGProfileComponent } from './ui/ong-profile/ong-profile.component';

// Material
import { MaterialModule } from './shared/modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from 'app/shared/utils/custom-modal/custom-modal';
import { CustomModalService } from './shared/utils/custom-modal/custom-modal.service';
import { LoginDialogComponent } from 'app/login/login-modal/login-modal.component';
import { LoginModalService } from 'app/login/login-modal.service';



@NgModule({
  entryComponents: [DialogComponent, LoginDialogComponent],
  declarations: [
    AppComponent,
    DonnersComponent,
    SignupDonnerComponent,
    SignupOngComponent,
    ONGProfileComponent,
    DialogComponent,
    LoginDialogComponent
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
    AccountService,
    CustomModalService,
    LoginModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
