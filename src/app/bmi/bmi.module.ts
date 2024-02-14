import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmiPageComponent } from './bmi-page/bmi-page.component';
import { BmiRoutingModule } from './bmi-routing.module';
import { DxDataGridModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';

@NgModule({
  declarations: [BmiPageComponent],
  imports: [CommonModule, BmiRoutingModule, DxDataGridModule, DxButtonModule],
})
export class BmiModule {}
