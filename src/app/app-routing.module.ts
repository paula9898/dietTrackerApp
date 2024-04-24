import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DxoMediaResizingComponent } from 'devextreme-angular/ui/nested';
import { DiaryPageComponent } from './diary/diary-page/diary-page.component';
import { MatNativeDateModule } from '@angular/material/core';

const routes: Routes = [
  {
    path: 'weight',
    loadChildren: () => import('./bmi/bmi.module').then((m) => m.BmiModule),
  },
  {
    path: 'food',
    loadChildren: () => import('./foods/food.module').then((m) => m.FoodModule),
  },
  {
    path: 'diary',
    component: DiaryPageComponent,
    loadChildren: () =>
      import('./diary/diary.module').then((m) => m.DiaryModule),
  },
  {
    path: 'signup',
    component: RegisterComponent,
  },
  {
    path: 'signin',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatNativeDateModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
