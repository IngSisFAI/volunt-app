import { Component, OnInit } from '@angular/core';
//import LoopBackConfig  from './shared/sdk/lb.config';
import {ProductApi} from '../shared/sdk/services/custom/Product';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    private productApi: ProductApi
  ) {

  }

  ngOnInit() {
    console.log(this.productApi.getModelName());
    console.log(this.productApi.getParentProduct(1));
  }

}
