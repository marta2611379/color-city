import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  OnDestroyMixin,
  untilComponentDestroyed,
} from '@w11k/ngx-componentdestroyed';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { DictionaryService } from 'src/app/shared/services/dictionaries/dictionary.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss'],
})
export class EditCardComponent extends OnDestroyMixin implements OnInit {
  @Input() item!: IProduct;
  @Output() toggle = new EventEmitter();

  selectedArrVolume: any[] = [];
  selectedColorObj: any = {};
  selectedArrVolumeIndex: number = 0;
  selectedArrColorIndex: number = 0;

  @ViewChild('volume') volume!: ElementRef;
  @ViewChild('color') color!: ElementRef;

  toggleInfo: boolean = false;
  editCommonInfo: boolean = false;
  constructor(
    public dictionaries: DictionaryService,
    private cd: ChangeDetectorRef,
    private productService: ProductService
  ) {
    super();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.volume.nativeElement.firstChild.click();
    this.cd.detectChanges();
  }

  getItemValue(value: IProduct) {
    this.item = value;
  }

  moreInfo() {
    this.toggleInfo = !this.toggleInfo;
    this.toggle.emit(this.toggleInfo);
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
  }

  edit(item: any) {
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
        });
    }, 1000);
  }
}
