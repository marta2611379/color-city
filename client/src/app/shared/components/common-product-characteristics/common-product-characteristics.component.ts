import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  OnDestroyMixin,
  untilComponentDestroyed,
} from '@w11k/ngx-componentdestroyed';
import { IBrand } from '../../interfaces/brand.interface';
import { ICategory } from '../../interfaces/category.interface';
import { ISubcategory } from '../../interfaces/subcategory.interface';
import { BrandService } from '../../services/brand.service';
import { CategoryService } from '../../services/category.service';
import { DictionaryService } from '../../services/dictionaries/dictionary.service';
import { ProductService } from '../../services/product.service';
import { SubcategoryService } from '../../services/subcategory.service ';

@Component({
  selector: 'app-common-product-characteristics',
  templateUrl: './common-product-characteristics.component.html',
  styleUrls: ['./common-product-characteristics.component.scss'],
})
export class CommonProductCharacteristicsComponent
  extends OnDestroyMixin
  implements OnInit
{
  @Input() item: any;
  @Input() editCommonInfo: boolean = false;
  @Output() updateItemValue = new EventEmitter();
  brands: Array<IBrand> = [];
  categories: Array<ICategory> = [];
  subcategories: Array<ISubcategory> = [];

  isLoading: boolean = false;

  constructor(
    public dictionaries: DictionaryService,
    public brandService: BrandService,
    public subcategoryService: SubcategoryService,
    public categoryService: CategoryService,
    private productService: ProductService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getBrands();
  }

  edit(item: any) {
    if (this.editCommonInfo) {
      this.isLoading = true;
      let obj = Object.assign({}, item);
      delete obj['category'];
      delete obj['subcategory'];
      delete obj['manufacturer'];
      delete obj['id'];
      delete obj['updatedAt'];
      delete obj['createdAt'];
      delete obj['__v'];
      delete obj['_id'];
      delete obj['imgs'];
      delete obj['goods'];

      this.productService
        .updateProduct(item._id, obj)
        .pipe(untilComponentDestroyed(this))
        .subscribe((v) => {
          this.editCommonInfo = false;
        });

      setTimeout(() => {
        this.productService
          .getProductById(item._id)
          .pipe(untilComponentDestroyed(this))
          .subscribe((v) => {
            this.item = v;
            this.updateItemValue.emit(v);
            this.isLoading = false;
          });
      }, 1000);
    } else this.editCommonInfo = !this.editCommonInfo;
  }

  getBrands() {
    this.brandService
      .getBrands()
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {
        this.brands = v;
      });
  }
}
