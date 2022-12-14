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
  selector: 'app-create-good',
  templateUrl: './create-good.component.html',
  styleUrls: ['./create-good.component.scss'],
})
export class CreateGoodComponent extends OnDestroyMixin implements OnInit {
  productForm: FormGroup = new FormGroup({});
  imgForm: FormGroup = new FormGroup({});
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
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const clonedForm = _.cloneDeep(this.productForm);
    let uploadFile = new FormData();
    clonedForm.value.imgs.forEach((element: any, i: number) => {
      uploadFile.append('files', element.img[0]);
      (clonedForm.get('imgs') as FormArray)
        .at(i)
        .get('img')
        ?.setValue(element.img[1]);
    });
    uploadFile.append('body', JSON.stringify(clonedForm.value));
    this.productService
      .createProduct(uploadFile)
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {});
  }

  getMatSelectValue(e: any) {
    if (e) this.productForm.setControl(e.controlName, e.form);
  }

  getVolumeValue(e: any) {
    if (e) this.productForm.setControl('goods', e);
  }

  getImg(e: any, i: number) {
    if (e) (this.array.at(i) as FormGroup)?.get('img')?.setValue(e);
  }

  displayDelBtn(item: FormArray): boolean {
    if (item.controls.length == 1) return false;
    else return true;
  }

  deletedItem(item: FormArray, i: number) {
    item.removeAt(i);
  }

  addItem(item: FormArray) {
    item.push(this.createFormGroup());
  }

  reactiveForm() {
    this.productForm = this.fb.group({
      imgs: this.fb.array([this.createFormGroup()]),
      title: [
        '???????????????????? ?????????????????????? HAERING KH-FASCHENPUTZ K10 "????????????????" ???????? - ???????? 1 ',
        Validators.required,
      ],
      manufacturer_id: ['', Validators.required],
      category_id: ['', Validators.required],
      subcategory_id: ['', Validators.required],
      manufacturer_country: ['??????????????', Validators.required],
      article_number: ['I??-01', Validators.required],
      goods: this.fb.array([]),
      drying_time: ['1 ??????', Validators.required],
      product_base: ['acril', Validators.required],
      expense: ['1 ??', Validators.required],
      application_tool: [''],
      use_types: [''],
      used_for_materials: [''],
      odorless: [false, Validators.required],
      textured: [false],
      washing: [false],
      description: [''],
    });
  }

  createFormGroup() {
    return this.fb.group({
      img: ['', Validators.required],
    });
  }

  get array(): FormArray {
    return (<FormArray>this.productForm?.get('imgs')) as FormArray;
  }
}
