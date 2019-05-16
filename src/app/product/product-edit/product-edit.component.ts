import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ProductApi } from '../../shared/sdk/services/custom/Product';
import { Product } from '../../shared/sdk/models/Product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Input() productOriginal: Product;
  @Output() productEdited = new EventEmitter();

  private product: Product;

  constructor(
    private productService: ProductApi
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    this.product = Object.assign({}, this.productOriginal);
  }

  public update() {
    this.productService.patchAttributes(this.product.id, this.product)
      .subscribe(
        productEdited => {
          this.productEdited.emit(productEdited);
        }
      )
  }

  public cancelar() {
    this.product = Object.assign({}, this.productOriginal);
  }

}
