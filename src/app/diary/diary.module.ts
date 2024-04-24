import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryPageComponent } from './diary-page/diary-page.component';
import { DiaryRoutingModule } from './diary-page/diary-routing.module';
import { FormDiaryComponent } from './form-diary/form-diary.component';
import { TableDiaryComponent } from './table-diary/table-diary.component';
import { AddItemComponent } from './add-item/add-item.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
// import { MatDateFnsModule } from '@angular/material-date-fns-adapter';
// import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
// import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms'; // if using reactive forms

@NgModule({
  declarations: [
    DiaryPageComponent,
    FormDiaryComponent,
    TableDiaryComponent,
    AddItemComponent,
  ],
  imports: [
    CommonModule,
    DiaryRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    // MatDateFnsModule,
    // MatLuxonDateModule,
    // MatMomentDateModule,
    ReactiveFormsModule,
  ],
})
export class DiaryModule {}
