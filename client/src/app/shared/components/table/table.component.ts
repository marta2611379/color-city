import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  IButtonData,
  IColData,
  IRadioButton,
  ISvgData,
} from '../../interfaces/shared-table.interface';
import { Sort } from '@angular/material/sort';
import { SortByPipe } from '../../pipes/sortBy.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Output('click') button = new EventEmitter();

  @Input() GridData: Array<any> = [];
  @Input() ColData: Array<IColData> = [];
  @Input() ButtonData: Array<IButtonData> = [];
  @Input() SvgData: Array<ISvgData> = [];
  @Input() ShortData: boolean = false;
  @Input() Counter: boolean = false;
  @Input() TableClass: string = 'table-style';
  @Input() Array: Array<string> = [];
  @Input() RadioButton: IRadioButton = { radioDisplay: false };
  @Input() showFullInfo: boolean = false;
  @Input() isLoading: boolean = false;

  constructor() {}
  ngOnInit() {}

  isString(val: any): boolean {
    return typeof val === 'string';
  }

  isArray(val: any): boolean {
    return Array.isArray(val);
  }

  radioButtonStatus(status: string): boolean {
    if (status == 'INVALID') return true;
    else return false;
  }

  sortData(sort: Sort) {
    const data = this.GridData.slice();
    if (!sort.active || sort.direction === '') {
      this.GridData = data;
      return;
    }
    this.GridData = new SortByPipe().transform(
      this.GridData,
      sort.direction,
      sort.active
    );
  }
}
