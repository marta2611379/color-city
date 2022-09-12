import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DictionaryService } from 'src/app/shared/services/dictionaries/dictionary.service';

@Component({
  selector: 'app-good-card',
  templateUrl: './good-card.component.html',
  styleUrls: ['./good-card.component.scss'],
})
export class GoodCardComponent implements OnInit {
  @Input() item: any;
  goodQuantity: FormControl = new FormControl(
    1,
    Validators.pattern(/^-?(0|[1-9]\d*)?$/)
  );
  selectedArrVolume: any[] = [];
  selectedColorObj: any = {};
  selectedArrVolumeIndex: number = 0;
  selectedArrColorIndex: number = 0;

  @ViewChild('volume') volume!: ElementRef;
  @ViewChild('color') color!: ElementRef;
  constructor(
    public dictionaries: DictionaryService,
    private cd: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.volume.nativeElement.firstChild.click();
    this.cd.detectChanges();
  }

  selectVolume(sett: any, index: number) {
    console.log(sett);
    this.selectedArrVolume = sett;
    this.selectedArrVolumeIndex = index;
    setTimeout(() => {
      this.color.nativeElement.firstChild.click();
    }, 200);
  }

  selectColor(col: any, colIndex: number) {
    console.log(col, colIndex);
    this.selectedColorObj = col;
    this.selectedArrColorIndex = colIndex;
    this.goodQuantity.setValue(1);
  }

  increment(item: any) {
    console.log(item);
    item > this.goodQuantity.value
      ? this.goodQuantity.setValue(this.goodQuantity.value + 1)
      : this.toastr.warning(`На складі залишилось ${item} шт.`);
  }

  decrement(item: any) {
    console.log(item);
    this.goodQuantity.value > 1
      ? this.goodQuantity.setValue(this.goodQuantity.value - 1)
      : this.toastr.warning('Мінімальна кількість 1 шт.');
  }
}
