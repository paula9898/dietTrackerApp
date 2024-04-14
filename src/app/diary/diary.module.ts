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
  ],
})
export class DiaryModule {}
