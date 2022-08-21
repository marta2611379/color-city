import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBrand } from 'src/app/shared/interfaces/brand.interface';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.scss'],
})
export class EditBrandComponent implements OnInit {
  @Input() brandObj!: IBrand;
  @Input() isLoading: boolean = false;
  @Output() action = new EventEmitter();
  @Output() close = new EventEmitter();

  brandForm: FormGroup = new FormGroup({});

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm();
  }

  editBrand() {
    if (this.brandForm.invalid) {
      this.brandForm.markAllAsTouched();
      return;
    }
    this.action.emit(this.brandForm.value);
  }

  reactiveForm() {
    this.brandForm = this.fb.group({
      title: [this.brandObj.title, Validators.required],
    });
  }
}
