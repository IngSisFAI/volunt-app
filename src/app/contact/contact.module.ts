import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactApi } from '../shared/sdk';
import { ContactMainComponent } from './contact-main/contact-main.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ContactMainComponent, ContactAddComponent, ContactAddComponent],
  exports: [ContactMainComponent],
  providers: [ContactApi]
})
export class ContactModule { }
