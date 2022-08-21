import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/app/shared/interfaces/brand.interface';
import { BrandService } from 'src/app/shared/services/brand.service';
import { TableConfigService } from 'src/app/shared/services/table-config.service';
import {
  OnDestroyMixin,
  untilComponentDestroyed,
} from '@w11k/ngx-componentdestroyed';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalTextComponent } from 'src/app/shared/components/modal-text/modal-text.component';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { EditBrandComponent } from './components/edit-brand/edit-brand.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent extends OnDestroyMixin implements OnInit {
  brandForm: FormGroup = new FormGroup({});
  brands: Array<IBrand> = [];
  gridBrands: Array<any> = [];
  isLoading: boolean = false;

  dialogConfig: MatDialogConfig = new MatDialogConfig();
  dialogRef!: MatDialogRef<any>;

  constructor(
    public fb: FormBuilder,
    public brandService: BrandService,
    public tableConfigService: TableConfigService,
    public dialog: MatDialog,
    public translate: TranslateService
  ) {
    super();
  }

  ngOnInit(): void {
    this.reactiveForm();
    this.getAllBrands();
    const brand = {
      title: 'Test new',
      status: 'active',
    };
  }

  onActionHandler(member: {
    method: Exclude<keyof BrandComponent, ''>;
    obj: any;
  }) {
    if (typeof member.method == 'string') {
      (this[member.method] as CallableFunction)(member.obj);
    }
  }

  getAllBrands() {
    this.isLoading = true;
    this.brandService
      .getBrands()
      .pipe(untilComponentDestroyed(this))
      .subscribe((b: Array<IBrand>) => {
        this.brands = b;
        this.gridBrands = this.tableConfigService.gridBrands(b);
        this.isLoading = false;
      });
  }

  createBrand() {
    if (this.brandForm.invalid) {
      this.brandForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.brandService
      .createBrand(this.brandForm.value)
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {
        this.brandForm.reset();
        this.isLoading = false;
        this.getAllBrands();
      });
  }

  openDeleteModal(obj: any) {
    this.dialogConfig.width = '50%';
    this.dialogRef = this.dialog.open(ModalTextComponent, this.dialogConfig);
    this.translate
      .get('message')
      .pipe(untilComponentDestroyed(this))
      .subscribe((e) => {
        this.dialogRef.componentInstance.text = `${e.delete_brand} ${obj.title}?`;
      });

    this.closeModal(this.dialogRef);
    this.dialogRef.componentInstance.action
      .pipe(untilComponentDestroyed(this))
      .subscribe(() => {
        this.dialogRef.componentInstance.isLoading = true;
        this.deleteBrand(obj.obj._id);
      });
  }

  deleteBrand(id: string) {
    this.brandService
      .deleteBrand(id)
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {
        this.getAllBrands();
        this.dialogRef.close();
        this.dialogRef.componentInstance.isLoading = false;
      });
  }

  openUpdateModal(obj: any) {
    const tempId = obj.obj._id;
    this.dialogConfig.width = '55%';
    this.dialogRef = this.dialog.open(EditBrandComponent, this.dialogConfig);
    this.dialogRef.componentInstance.brandObj = obj.obj;
    this.closeModal(this.dialogRef);
    this.dialogRef.componentInstance.action
      .pipe(untilComponentDestroyed(this))
      .subscribe((brangObj: IBrand) => {
        this.dialogRef.componentInstance.isLoading = true;
        this.updateBrand(tempId, brangObj);
      });
  }

  updateBrand(id: string, brangObj: IBrand) {
    this.brandService
      .updateBrand(id, brangObj)
      .pipe(untilComponentDestroyed(this))
      .subscribe((v) => {
        this.getAllBrands();
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
    this.brandForm = this.fb.group({ title: ['', Validators.required] });
  }
}
