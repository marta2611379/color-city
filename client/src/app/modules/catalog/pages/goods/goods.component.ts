import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DictionaryService } from 'src/app/shared/services/dictionaries/dictionary.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss'],
})
export class GoodsComponent implements OnInit {
  products: any[] = [];
  isLoading: boolean = false;

  constructor(
    private productService: ProductService,
    public dictionaries: DictionaryService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.productService.getProducts().subscribe((v) => {
      this.products = v;
      this.isLoading = false;
    });
  }
}
