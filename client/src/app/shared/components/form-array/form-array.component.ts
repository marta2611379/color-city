import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
  @Output() arrayValue = new EventEmitter();
  @Input() dictionary: any = [];
  @Input() arrayRend: any = [];
  @Input() lable: string = '';
  @Input() controlName: string = '';
  @Input() required: boolean = false;

  myForm: FormGroup = new FormGroup({});

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm();

    this.arrayValue.emit({
      form: this.myForm.controls['array'],
      controlName: this.controlName,
    });

    this.array.valueChanges.subscribe(() => {
      this.arrayValue.emit({
        form: this.myForm.controls['array'],
        controlName: this.controlName,
      });
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
    if (!this.required) item.push(this.createFormGroup());
    else item.push(this.createRequiredFormGroup());
  }

  reactiveForm() {
    if (!this.required)
      this.myForm = this.fb.group({
        array: this.fb.array([this.createFormGroup()]),
      });
    else {
      this.myForm = this.fb.group({
        array: this.fb.array([this.createRequiredFormGroup()]),
      });
    }
  }

  createFormGroup() {
    return this.fb.group({
      value: [''],
    });
  }
  createRequiredFormGroup() {
    return this.fb.group({
      value: ['', Validators.required],
    });
  }

  get array(): FormArray {
    return (<FormArray>this.myForm?.get('array')) as FormArray;
  }
}
