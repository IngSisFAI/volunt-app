import { Component, OnInit } from '@angular/core';
import { ProductApi } from '../../shared/sdk/services/custom/Product';
import { ProductInterface } from '../../shared/sdk/models/Product';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.css']
})
export class ProductMainComponent implements OnInit {

  public products: ProductInterface[] = [];
  public productSelected: ProductInterface = null;

  constructor( private productApi: ProductApi) { }

  ngOnInit() {
    this.find();
  }


  find() {
    this.productApi.find({ include: ['unit'] })
      .subscribe(products => {
        this.products = <any>products.slice();
      },
        (error) => {
          // TODO: Handle error
          console.error(error);
        }
      );
  }

  select(product: ProductInterface) {
    this.productSelected = Object.assign({}, product);
  }

  onCreated(product: ProductInterface) {
    this.products.push(product);
  }

  OnEdit(productUpdated: ProductInterface) {
    const indice = this.products.findIndex((tipo) => tipo.id === productUpdated.id);

    if (indice !== -1) {
      this.products[indice] = productUpdated;
    } else { }
  }

}
