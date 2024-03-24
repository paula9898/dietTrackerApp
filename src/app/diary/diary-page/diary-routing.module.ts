import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryPageComponent } from './diary-page.component';

const routes: Routes = [{ path: '', component: DiaryPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryRoutingModule {}
