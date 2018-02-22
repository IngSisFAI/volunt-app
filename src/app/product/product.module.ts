import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductApi } from '../shared/sdk';
import { ProductMainComponent } from './product-main/product-main.component';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ProductMainComponent,ProductAddComponent],
  exports: [ProductMainComponent],
  providers: [ProductApi]
})
export class ProductModule { }
