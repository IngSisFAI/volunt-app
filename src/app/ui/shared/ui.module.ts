import { NgModule } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    RouterModule,
    BrowserAnimationsModule
  ],
  declarations: [
    UserProfileComponent,
    TopNavComponent
  ],
  exports: [
    TopNavComponent,
    UserProfileComponent
  ],
})
export class UiModule { }
