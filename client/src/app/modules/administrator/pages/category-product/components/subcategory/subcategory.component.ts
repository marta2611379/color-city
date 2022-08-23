import { Component, Input, OnInit } from '@angular/core';
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
import {
  ISubcategory,
  ISubcategoryCreate,
} from 'src/app/shared/interfaces/subcategory.interface';
import { CategoryService } from 'src/app/shared/services/category.service';
import { SubcategoryService } from 'src/app/shared/services/subcategory.service ';
import { TableConfigService } from 'src/app/shared/services/table-config.service';
import { EditSubcategoryComponent } from '../edit-subcategory/edit-subcategory.component';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss'],
})
export class SubcategoryComponent extends OnDestroyMixin implements OnInit {
  subcategoryForm: FormGroup = new FormGroup({});
  subcategories: Array<ISubcategory> = [];
  gridSubcategories: Array<any> = [];
  @Input() categories: Array<ICategory> = [];
  isLoading: boolean = false;

  dialogConfig: MatDialogConfig = new MatDialogConfig();
  dialogRef!: MatDialogRef<any>;
  constructor(
    public fb: FormBuilder,
    public subcategoryService: SubcategoryService,
    public categoryService: CategoryService,
    public tableConfigService: TableConfigService,
    public dialog: MatDialog,
    public translate: TranslateService
  ) {
    super();
  }

  ngOnInit(): void {
    this.reactiveForm();
    this.getAllSubcategories();
  }
  onActionHandler(member: {
    method: Exclude<keyof SubcategoryComponent, ''>;
    obj: any;
  }) {
    if (typeof member.method == 'string') {
      (this[member.method] as CallableFunction)(member.obj);
    }
  }

  selectCategory(id: string) {
    this.isLoading = true;
    this.subcategoryService
      .getSubcategoriesBySearch({ category_id: id })
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {
        this.isLoading = false;
        this.subcategories = v;
        this.gridSubcategories = this.tableConfigService.gridSubcategories(v);
      });
  }

  getAllSubcategories() {
    this.isLoading = true;
    this.subcategoryService
      .getSubcategories()
      .pipe(untilComponentDestroyed(this))
      .subscribe((b: Array<ISubcategory>) => {
        this.subcategories = b;
        this.gridSubcategories = this.tableConfigService.gridSubcategories(b);
        this.isLoading = false;
      });
  }

  createSubcategory() {
    if (this.subcategoryForm.invalid) {
      this.subcategoryForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.subcategoryService
      .createSubcategory(this.subcategoryForm.value)
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {
        this.subcategoryForm?.get('title')?.reset();
        this.isLoading = false;
        this.selectCategory(this.subcategoryForm?.get('category_id')?.value);
      });
  }

  openDeleteModal(obj: any) {
    this.dialogConfig.width = '50%';
    this.dialogRef = this.dialog.open(ModalTextComponent, this.dialogConfig);
    this.translate
      .get('message')
      .pipe(untilComponentDestroyed(this))
      .subscribe((e) => {
        this.dialogRef.componentInstance.text = `${e.delete_subcategory} ${obj.title}?`;
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
    this.subcategoryService
      .deleteSubcategory(id)
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {
        this.getAllSubcategories();
        this.dialogRef.close();
        this.dialogRef.componentInstance.isLoading = false;
      });
  }

  openUpdateModal(obj: any) {
    const tempId = obj.obj._id;
    this.dialogConfig.width = '55%';
    this.dialogRef = this.dialog.open(
      EditSubcategoryComponent,
      this.dialogConfig
    );
    this.dialogRef.componentInstance.subcategoryObj = obj.obj;
    this.dialogRef.componentInstance.categories = this.categories;
    this.closeModal(this.dialogRef);
    this.dialogRef.componentInstance.action
      .pipe(untilComponentDestroyed(this))
      .subscribe((subcategoryObj: ISubcategoryCreate) => {
        this.dialogRef.componentInstance.isLoading = true;
        this.updateSubcategory(tempId, subcategoryObj);
      });
  }

  updateSubcategory(id: string, subcategoryObj: ISubcategoryCreate) {
    this.subcategoryService
      .updateSubcategory(id, subcategoryObj)
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {
        this.getAllSubcategories();
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
    this.subcategoryForm = this.fb.group({
      title: ['', Validators.required],
      category_id: ['', Validators.required],
    });
  }
}
