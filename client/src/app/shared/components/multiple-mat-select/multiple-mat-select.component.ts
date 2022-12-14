import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-multiple-mat-select',
  templateUrl: './multiple-mat-select.component.html',
  styleUrls: ['./multiple-mat-select.component.scss'],
})
export class MultipleMatSelectComponent implements OnInit {
  @Output() arrayValue = new EventEmitter();
  @Input() dictionary: any = [];
  @Input() lable: string = '';
  @Input() controlName: string = '';
  @Input() required: boolean = false;

  myForm: FormGroup = new FormGroup({});
  @ViewChild('select') select!: MatSelect;
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm();

    this.arrayValue.emit({
      form: this.myForm.controls['value'],
      controlName: this.controlName,
    });

    this.myForm.valueChanges.subscribe(() => {
      this.arrayValue.emit({
        form: this.myForm.controls['value'],
        controlName: this.controlName,
      });
    });
  }

  ngAfterViewInit() {
    this.required
      ? (this.select.required = true)
      : (this.select.required = false);
  }

  toggleAllSelection(checked: boolean) {
    checked
      ? this.select.options.forEach((item: MatOption) => {
          item.select();
        })
      : this.select.options.forEach((item: MatOption) => item.deselect());
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      value: [''],
    });
  }
}
