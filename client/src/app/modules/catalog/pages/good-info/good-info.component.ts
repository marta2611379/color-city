import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  OnDestroyMixin,
  untilComponentDestroyed,
} from '@w11k/ngx-componentdestroyed';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { DictionaryService } from 'src/app/shared/services/dictionaries/dictionary.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-good-info',
  templateUrl: './good-info.component.html',
  styleUrls: ['./good-info.component.scss'],
})
export class GoodInfoComponent extends OnDestroyMixin implements OnInit {
  isLoading: boolean = false;
  item!: IProduct;
  goodQuantity: FormControl = new FormControl(
    1,
    Validators.pattern(/^-?(0|[1-9]\d*)?$/)
  );
  selectedArrVolume: any[] = [];
  selectedColorObj: any = {};
  selectedImgObj: any = {};
  selectedArrVolumeIndex: number = 0;
  selectedArrColorIndex: number = 0;
  selectedImgIndex: number = 0;

  @ViewChild('volume') volume!: ElementRef;
  @ViewChild('color') color!: ElementRef;

  constructor(
    public dictionaries: DictionaryService,
    private cd: ChangeDetectorRef,
    private toastr: ToastrService,
    private _route: ActivatedRoute,
    private productService: ProductService
  ) {
    super();
    this._route.params
      .pipe(untilComponentDestroyed(this))
      .subscribe((params) => {
        this.getSelectedProduct(params['productId']);
      });
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.volume.nativeElement.firstChild.click();
      this.cd.detectChanges();
      this.isLoading = false;
    }, 1000);
  }

  getSelectedProduct(id: string) {
    this.isLoading = true;
    this.productService
      .getProductById(id)
      .pipe(untilComponentDestroyed(this))
      .subscribe((v: IProduct) => {
        this.item = v;
        v.imgs.push(v.imgs[0]);
        v.imgs.push(v.imgs[1]);
        v.imgs.push(v.imgs[0]);
        v.imgs.push(v.imgs[1]);
        this.selectedImgObj = v.imgs[0];
        this.selectedImgIndex = 0;
        this.isLoading = false;
      });
  }

  selectVolume(sett: any, index: number) {
    this.selectedArrVolume = sett;
    this.selectedArrVolumeIndex = index;
    setTimeout(() => {
      this.color.nativeElement.firstChild.click();
    }, 200);
  }

  selectColor(col: any, colIndex: number) {
    this.selectedColorObj = col;
    this.selectedArrColorIndex = colIndex;
    this.goodQuantity.setValue(1);
  }

  selectImg(photo: any, i: number) {
    this.selectedImgObj = photo;
    this.selectedImgIndex = i;
  }

  increment(item: any) {
    item > this.goodQuantity.value
      ? this.goodQuantity.setValue(this.goodQuantity.value + 1)
      : this.toastr.warning(`На складі залишилось ${item} шт.`);
  }

  decrement(item: any) {
    this.goodQuantity.value > 1
      ? this.goodQuantity.setValue(this.goodQuantity.value - 1)
      : this.toastr.warning('Мінімальна кількість 1 шт.');
  }
}
