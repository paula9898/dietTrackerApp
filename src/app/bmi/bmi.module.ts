import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmiPageComponent } from './bmi-page/bmi-page.component';
import { BmiRoutingModule } from './bmi-routing.module';

@NgModule({
  declarations: [BmiPageComponent],
  imports: [CommonModule, BmiRoutingModule],
})
export class BmiModule {}
