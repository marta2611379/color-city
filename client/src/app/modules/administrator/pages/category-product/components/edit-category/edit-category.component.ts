import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/shared/interfaces/category.interface';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {
  @Input() categoryObj!: ICategory;
  @Input() isLoading: boolean = false;
  @Output() action = new EventEmitter();
  @Output() close = new EventEmitter();

  categoryForm: FormGroup = new FormGroup({});

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm();
  }

  editCategory() {
    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      return;
    }
    this.action.emit(this.categoryForm.value);
  }

  reactiveForm() {
    this.categoryForm = this.fb.group({
      title: [this.categoryObj.title, Validators.required],
    });
  }
}
