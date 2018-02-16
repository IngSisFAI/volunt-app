import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactApi } from '../shared/sdk';
import { ContactMainComponent } from './component-main/contact-main';
import { ContactAddComponent } from './component-add/contact-add';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ContactMainComponent],
  exports: [ContactMainComponent],
  providers: [ContactApi]
})
export class ContactModule { }
