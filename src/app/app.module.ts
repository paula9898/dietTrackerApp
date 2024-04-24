import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodsComponent } from './foods/services/foods/foods.component';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { SpinnerComponent } from './spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingInterceptor } from './spinner-interceptor';
import { FoodDetailsComponent } from './foods/services/foods/food-details/food-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TagsPipe } from './tags.pipe';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NutriScoreComponent } from './foods/services/foods/nutri-score/nutri-score/nutri-score.component';
import { LoginComponent } from './auth/login/login.component';
import { DiaryPageComponent } from './diary/diary-page/diary-page.component';
import { NavBarComponent } from './shared/menu/nav-bar/nav-bar.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    SpinnerComponent,
    FoodDetailsComponent,
    TagsPipe,
    RegisterComponent,
    NutriScoreComponent,
    LoginComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxButtonModule,
    DxDataGridModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatToolbarModule,
    FormsModule,
  ],
  // providers: [httpInterceptorProviders],
  providers: [CookieService],

  bootstrap: [AppComponent],
})
export class AppModule {}
