import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { ISubcategory } from 'src/app/shared/interfaces/subcategory.interface';

@Component({
  selector: 'app-edit-subcategory',
  templateUrl: './edit-subcategory.component.html',
  styleUrls: ['./edit-subcategory.component.scss'],
})
export class EditSubcategoryComponent implements OnInit {
  @Input() subcategoryObj!: ISubcategory;
  @Input() isLoading: boolean = false;
  @Input() categories: Array<ICategory> = [];
  @Output() action = new EventEmitter();
  @Output() close = new EventEmitter();

  subcategoryForm: FormGroup = new FormGroup({});

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm();
  }

  editSubcategory() {
    if (this.subcategoryForm.invalid) {
      this.subcategoryForm.markAllAsTouched();
      return;
    }
    this.action.emit(this.subcategoryForm.value);
  }

  reactiveForm() {
    this.subcategoryForm = this.fb.group({
      title: [this.subcategoryObj.title, Validators.required],
      category_id: [this.subcategoryObj?.category_id?._id, Validators.required],
    });
  }
}
