import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'weight',
    loadChildren: () => import('./bmi/bmi.module').then((m) => m.BmiModule),
  },
  {
    path: 'food',
    loadChildren: () => import('./foods/food.module').then((m) => m.FoodModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
