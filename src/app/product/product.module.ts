import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductApi } from '../shared/sdk';
import { ProductMainComponent } from './component-main/product-main';
import { ProductAddComponent } from './component-add/product-add';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ProductMainComponent],
  exports: [ProductMainComponent],
  providers: [ProductApi]
})
export class ProductModule { }
