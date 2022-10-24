import { Component, OnInit } from '@angular/core';
import {
  OnDestroyMixin,
  untilComponentDestroyed,
} from '@w11k/ngx-componentdestroyed';
import { DictionaryService } from 'src/app/shared/services/dictionaries/dictionary.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss'],
})
export class GoodsComponent extends OnDestroyMixin implements OnInit {
  products: any[] = [];
  isLoading: boolean = false;

  constructor(
    private productService: ProductService,
    public dictionaries: DictionaryService
  ) {
    super();
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.productService
      .getProducts()
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {
        this.products = v;
        this.isLoading = false;
      });
  }
}
