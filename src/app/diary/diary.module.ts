import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryPageComponent } from './diary-page/diary-page.component';
import { DiaryRoutingModule } from './diary-page/diary-routing.module';
import { FormDiaryComponent } from './form-diary/form-diary.component';
import { TableDiaryComponent } from './table-diary/table-diary.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [DiaryPageComponent, FormDiaryComponent, TableDiaryComponent, AddItemComponent],
  imports: [CommonModule, DiaryRoutingModule],
})
export class DiaryModule {}
