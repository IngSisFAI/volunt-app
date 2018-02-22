import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UnitApi } from '../shared/sdk';
import { UnitMainComponent } from './unit-main/unit-main.component';
import { UnitAddComponent } from './unit-add/unit-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [UnitMainComponent,UnitAddComponent],
  exports: [UnitMainComponent],
  providers: [UnitApi]
})
export class UnitModule { }
