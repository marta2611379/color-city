import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDialogModule } from '@angular/material/dialog';
// import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
// import {
//   NgxMatDatetimePickerModule,
//   NgxMatNativeDateModule,
//   NgxMatTimepickerModule,
// } from '@angular-material-components/datetime-picker';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
// import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatStepperModule } from '@angular/material/stepper';

// import { MatSelectInfiniteScrollModule } from 'ng-mat-select-infinite-scroll';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatTreeModule } from '@angular/material/tree';

const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

const MaterialComponents = [
  MatToolbarModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule,
  MatCardModule,
  MatIconModule,
  //   NgxMaterialTimepickerModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule,
  //   MatMomentDateModule,
  MatDialogModule,
  //   NgxMatDatetimePickerModule,
  //   NgxMatTimepickerModule,
  //   NgxMatNativeDateModule,
  MatListModule,
  FormsModule,
  //   NgxMatSelectSearchModule,
  MatStepperModule,
  //   MatSelectInfiniteScrollModule,
  MatExpansionModule,
  MatTreeModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: { useUtc: true } },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class MaterialModule {}
