import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductApi } from '../../shared/sdk/services/custom/Product';
import { Product, ProductInterface } from '../../shared/sdk/models/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  @Output() onCreated = new EventEmitter();

  public product: ProductInterface = new Product();

  constructor(
    private ProductApi: ProductApi
  ) { }

  ngOnInit() {}

  create() {

    this.ProductApi
      .create(this.product).subscribe(
      (product: Product) => {
        this.onCreated.emit(product);
      },
      (error) => {
        console.log('An error occured at Product-add component');
        console.log(error);
      }
      );
  }

}
