import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  BrilianceEnum,
  ColorsBaseEnum,
  ColorsEnum,
  UnitEnum,
} from 'src/app/shared/enums/common.enum';
import { Dictionary } from 'src/app/shared/interfaces/common.interface';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss'],
})
export class GoodsComponent implements OnInit {
  @Output() arrayValue = new EventEmitter();
  @Input() dictionaryColors!: Dictionary<ColorsEnum>;
  @Input() dictionaryColorsBase!: Dictionary<ColorsBaseEnum>;
  @Input() dictionaryDegreeBrilliance!: Dictionary<BrilianceEnum>;
  @Input() dictionaryUnit!: Dictionary<UnitEnum>;

  base: boolean = false;
  myForm: FormGroup = new FormGroup({});
  uploadFile = new FormData();
  arrFormData: any = [];
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm();
    this.arrayValue.emit(this.myForm.controls['goods']);
    this.array.valueChanges.subscribe(() => {
      this.arrayValue.emit(this.myForm.controls['goods']);
    });
  }

  baseCheck(value: boolean) {
    this.base = value;
    this.array.controls.forEach((val) => {
      val.get('colors')?.reset();
    });
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

  getMatSelectValue(e: any, i: number) {
    if (e) (this.array.at(i) as FormGroup)?.setControl(e.controlName, e.form);
  }

  getImg(e: any, i: number) {
    if (e) (this.array.at(i) as FormGroup)?.get('img')?.setValue(e);
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      goods: this.fb.array([this.createFormGroup()]),
    });
  }

  createFormGroup() {
    return this.fb.group({
      img: [''],
      unit: ['кг', Validators.required],
      volume: ['3', Validators.required],
      price: ['300', Validators.required],
      code: ['006789988', Validators.required],
      colors: ['white', Validators.required],
      available_quantity: ['5', Validators.required],
      degree_brilliance: ['matt'],
    });
  }

  get array(): FormArray {
    return (<FormArray>this.myForm?.get('goods')) as FormArray;
  }
}
