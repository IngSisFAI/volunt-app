import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductApi } from '../shared/sdk';
import { ProductsMainComponent } from './products-main/products-main.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductsMainComponent],
  exports: [ProductsMainComponent],
  providers: [ProductApi]
})
export class ProductsModule { }
