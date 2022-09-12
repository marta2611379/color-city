import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  OnDestroyMixin,
  untilComponentDestroyed,
} from '@w11k/ngx-componentdestroyed';
import { IColData, ISvgData } from '../interfaces/shared-table.interface';

@Injectable({
  providedIn: 'root',
})
export class TableConfigService extends OnDestroyMixin {
  colBrands: IColData[] = [];
  colCategories: IColData[] = [];
  colSubcategories: IColData[] = [];

  svgAdmin: Array<ISvgData> = [
    {
      svgDisplay: true,
      svgIcon: 'edit',
      tooltip: '',
      class: 'btn-svg btn-success-my mx-2',
      method: 'openUpdateModal',
    },
    {
      svgDisplay: true,
      svgIcon: 'trash',
      tooltip: '',
      class: 'btn-svg btn-danger-my mx-2',
      method: 'openDeleteModal',
    },
    {
      svgDisplay: true,
      svgIcon: 'archive',
      tooltip: '',
      class: 'btn-svg btn-warning-my mx-2',
      method: 'openArchiveModal',
    },
  ];

  constructor(public translate: TranslateService) {
    super();
    this.tooltipSvg();
    this.colDataFromTranslate();
  }

  colDataFromTranslate() {
    this.translate
      .get(['admin', 'general'])
      .pipe(untilComponentDestroyed(this))
      .subscribe((t) => {
        this.colBrands = [
          { field: 'title', header: t.admin.brand.title },
          { field: 'status', header: t.general.status },
          { field: 'createdAt', header: t.general.created_at },
        ];

        this.colCategories = [
          { field: 'title', header: t.admin.category.title },
          { field: 'status', header: t.general.status },
          { field: 'createdAt', header: t.general.created_at },
        ];

        this.colSubcategories = [
          { field: 'title', header: t.admin.subcategory.title },
          { field: 'status', header: t.general.status },
          { field: 'createdAt', header: t.general.created_at },
          { field: 'category', header: t.admin.category.title },
        ];
      });
  }

  tooltipSvg() {
    this.translate
      .get(['general'])
      .pipe(untilComponentDestroyed(this))
      .subscribe((e) => {
        this.svgAdmin[0].tooltip = e.general.edit;
        this.svgAdmin[1].tooltip = e.general.delete;
        this.svgAdmin[2].tooltip = e.general.archive;
      });
  }

  gridBrands(arr: any) {
    let gridArr: any = [];
    arr.forEach((obj: any) => {
      gridArr.push({
        title: obj.title,
        createdAt: new DatePipe('en-US').transform(
          obj.createdAt,
          'dd-MM-yyyy, HH:mm'
        ),
        status: obj.status,
        obj: obj,
      });
    });
    return gridArr;
  }

  gridCategories(arr: any) {
    let gridArr: any = [];
    arr.forEach((obj: any) => {
      gridArr.push({
        title: obj.title,
        createdAt: new DatePipe('en-US').transform(
          obj.createdAt,
          'dd-MM-yyyy, HH:mm'
        ),
        status: obj.status,
        obj: obj,
      });
    });
    return gridArr;
  }

  gridSubcategories(arr: any) {
    let gridArr: any = [];
    arr.forEach((obj: any) => {
      gridArr.push({
        title: obj.title,
        createdAt: new DatePipe('en-US').transform(
          obj.createdAt,
          'dd-MM-yyyy, HH:mm'
        ),
        status: obj.status,
        category: obj?.category_id?.title,
        obj: obj,
      });
    });
    return gridArr;
  }
}
