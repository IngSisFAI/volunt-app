import { Component, OnInit } from '@angular/core';
import { ProductApi } from '../shared/sdk/services/custom/Product';
import { ProductInterface } from '../shared/sdk/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products = [];

  constructor(private productApi: ProductApi) {

    this.productApi.find().subscribe((products: ProductInterface[])=>{

      this.products = products;
    },
    (err)=>{
      console.log('An error has ocurred');
      console.log(err);
    })

   }

  ngOnInit() {
  }


}
