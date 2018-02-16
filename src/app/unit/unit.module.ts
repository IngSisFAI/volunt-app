import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UnitApi } from '../shared/sdk';
import { UnitMainComponent } from './component-main/unit-main';
import { UnitAddComponent } from './component-add/unit-add';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [UnitMainComponent],
  exports: [UnitMainComponent],
  providers: [UnitApi]
})
export class UnitModule { }
