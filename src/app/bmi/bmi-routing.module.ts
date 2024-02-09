import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiPageComponent } from './bmi-page/bmi-page.component';

const routes: Routes = [{ path: '', component: BmiPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmiRoutingModule {}
