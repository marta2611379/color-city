import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  OnDestroyMixin,
  untilComponentDestroyed,
} from '@w11k/ngx-componentdestroyed';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-edit-good',
  animations: [
    trigger('openClose', [
      state(
        'closed',
        style({
          height: '0px',
        })
      ),
      state(
        'open',
        style({
          height: '1200px',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
  templateUrl: './edit-good.component.html',
  styleUrls: ['./edit-good.component.scss'],
})
export class EditGoodComponent extends OnDestroyMixin implements OnInit {
  products: IProduct[] = [];
  isLoading: boolean = false;
  toggleInfo: boolean = false;

  constructor(private productService: ProductService) {
    super();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  toggle(value: boolean) {
    this.toggleInfo = value;
  }

  getProducts() {
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
