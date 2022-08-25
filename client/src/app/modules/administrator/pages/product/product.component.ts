import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  OnDestroyMixin,
  untilComponentDestroyed,
} from '@w11k/ngx-componentdestroyed';
import * as _ from 'lodash';
import { IBrand } from 'src/app/shared/interfaces/brand.interface';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { ISubcategory } from 'src/app/shared/interfaces/subcategory.interface';
import { BrandService } from 'src/app/shared/services/brand.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { DictionaryService } from 'src/app/shared/services/dictionaries/dictionary.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { SubcategoryService } from 'src/app/shared/services/subcategory.service ';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent extends OnDestroyMixin implements OnInit {
  productForm: FormGroup = new FormGroup({});
  isLoading: boolean = false;

  brands: Array<IBrand> = [];
  categories: Array<ICategory> = [];
  subcategories: Array<ISubcategory> = [];

  constructor(
    public productService: ProductService,
    public brandService: BrandService,
    public subcategoryService: SubcategoryService,
    public categoryService: CategoryService,
    public dictionaries: DictionaryService,
    public fb: FormBuilder,
    public ref: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.reactiveForm();
    this.getBrands();
    this.getCategories();
    this.productService.getProducts().subscribe((v) => {
      console.log(v);
    });
  }

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }

  getBrands() {
    this.brandService
      .getBrands()
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {
        this.brands = v;
      });
  }

  getCategories() {
    this.categoryService
      .getCategories()
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {
        this.categories = v;
      });
  }

  selectCategory(id: string) {
    this.isLoading = true;
    this.subcategoryService
      .getSubcategoriesBySearch({ category_id: id })
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {
        this.isLoading = false;
        this.subcategories = v;
      });
  }

  createProduct() {
    console.log(this.productForm.value);
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const clonedForm = _.cloneDeep(this.productForm);

    let uploadFile = new FormData();
    clonedForm.value.goods.forEach((element: any, i: number) => {
      uploadFile.append('files', element.img[0]);
      (clonedForm.get('goods') as FormArray)
        .at(i)
        .get('img')
        ?.setValue(element.img[1]);
    });
    uploadFile.append('body', JSON.stringify(clonedForm.value));
    this.productService
      .createProduct(uploadFile)
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {
        console.log(v);
      });
  }

  getMatSelectValue(e: any) {
    if (e) this.productForm.setControl(e.controlName, e.form);
  }

  getVolumeValue(e: any) {
    if (e) this.productForm.setControl('goods', e);
    console.log(this.productForm.value);
  }

  reactiveForm() {
    this.productForm = this.fb.group({
      title: [
        'Штукатурка дисперсійна HAERING KH-FASCHENPUTZ K10 "баранець" біла - база 1 ',
        Validators.required,
      ],
      manufacturer_id: ['', Validators.required],
      category_id: ['', Validators.required],
      subcategory_id: ['', Validators.required],
      manufacturer_country: ['Україна', Validators.required],
      article_number: ['IР-01', Validators.required],
      goods: this.fb.array([]),
      drying_time: ['1 год', Validators.required],
      product_base: ['acril', Validators.required],
      expense: ['1 л', Validators.required],
      application_tool: [''],
      use_types: [''],
      used_for_materials: [''],
      odorless: [false, Validators.required],
      textured: [false],
      washing: [false],
    });
  }
}
