import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

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
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
