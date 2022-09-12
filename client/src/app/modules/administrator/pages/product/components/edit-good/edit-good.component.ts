import { Component, OnInit } from '@angular/core';
import {
  OnDestroyMixin,
  untilComponentDestroyed,
} from '@w11k/ngx-componentdestroyed';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-edit-good',
  templateUrl: './edit-good.component.html',
  styleUrls: ['./edit-good.component.scss'],
})
export class EditGoodComponent extends OnDestroyMixin implements OnInit {
  products: IProduct[] = [];
  isLoading: boolean = false;

  constructor(private productService: ProductService) {
    super();
  }

  ngOnInit(): void {
    console.log(this.products);
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this.productService
      .getProducts()
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {
        this.products = v;
        this.isLoading = false;
        console.log(v);
      });
  }
}
