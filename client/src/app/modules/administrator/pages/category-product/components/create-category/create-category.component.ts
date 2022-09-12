import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import {
  OnDestroyMixin,
  untilComponentDestroyed,
} from '@w11k/ngx-componentdestroyed';
import { ModalTextComponent } from 'src/app/shared/components/modal-text/modal-text.component';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { CategoryService } from 'src/app/shared/services/category.service';
import { SubcategoryService } from 'src/app/shared/services/subcategory.service ';
import { TableConfigService } from 'src/app/shared/services/table-config.service';
import { EditCategoryComponent } from '../edit-category/edit-category.component';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent extends OnDestroyMixin implements OnInit {
  categoryForm: FormGroup = new FormGroup({});
  gridCategories: Array<any> = [];
  isLoading: boolean = false;

  dialogConfig: MatDialogConfig = new MatDialogConfig();
  dialogRef!: MatDialogRef<any>;

  @Output() updateCategoryList = new EventEmitter();

  constructor(
    public fb: FormBuilder,
    public categoryService: CategoryService,
    public subcategoryService: SubcategoryService,
    public tableConfigService: TableConfigService,
    public dialog: MatDialog,
    public translate: TranslateService
  ) {
    super();
  }
  ngOnInit(): void {
    this.reactiveForm();
    this.getAllCategories();
  }

  onActionHandler(member: {
    method: Exclude<keyof CreateCategoryComponent, ''>;
    obj: any;
  }) {
    if (typeof member.method == 'string') {
      (this[member.method] as CallableFunction)(member.obj);
    }
  }

  getAllCategories() {
    this.isLoading = true;
    this.categoryService
      .getCategories()
      .pipe(untilComponentDestroyed(this))
      .subscribe((b: Array<ICategory>) => {
        this.gridCategories = this.tableConfigService.gridCategories(b);
        this.isLoading = false;
        this.updateCategoryList.emit(b);
      });
  }

  createCategory() {
    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.categoryService
      .createCategory(this.categoryForm.value)
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {
        this.categoryForm.reset();
        this.isLoading = false;
        this.getAllCategories();
      });
  }

  openDeleteModal(obj: any) {
    this.dialogConfig.width = '50%';
    this.dialogRef = this.dialog.open(ModalTextComponent, this.dialogConfig);
    this.translate
      .get('message')
      .pipe(untilComponentDestroyed(this))
      .subscribe((e) => {
        this.dialogRef.componentInstance.text = `${e.delete_category} ${obj.title}?`;
      });

    this.closeModal(this.dialogRef);
    this.dialogRef.componentInstance.action
      .pipe(untilComponentDestroyed(this))
      .subscribe(() => {
        this.dialogRef.componentInstance.isLoading = true;
        this.deleteCategory(obj.obj._id);
      });
  }

  deleteCategory(id: string) {
    this.categoryService
      .deleteCategory(id)
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {
        this.getAllCategories();
        this.dialogRef.close();
        this.dialogRef.componentInstance.isLoading = false;
      });
  }

  openUpdateModal(obj: any) {
    const tempId = obj.obj._id;
    this.dialogConfig.width = '55%';
    this.dialogRef = this.dialog.open(EditCategoryComponent, this.dialogConfig);
    this.dialogRef.componentInstance.categoryObj = obj.obj;
    this.closeModal(this.dialogRef);
    this.dialogRef.componentInstance.action
      .pipe(untilComponentDestroyed(this))
      .subscribe((categoryObj: ICategory) => {
        this.dialogRef.componentInstance.isLoading = true;
        this.updateCategory(tempId, categoryObj);
      });
  }

  updateCategory(id: string, categoryObj: ICategory) {
    this.categoryService
      .updateCategory(id, categoryObj)
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {
        this.getAllCategories();
        this.dialogRef.close();
        this.dialogRef.componentInstance.isLoading = false;
      });
  }

  closeModal(dialogRef: any) {
    dialogRef.componentInstance.close
      .pipe(untilComponentDestroyed(this))
      .subscribe(() => dialogRef.close());
  }

  reactiveForm() {
    this.categoryForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
    });
  }
}
