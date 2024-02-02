import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodsComponent } from './foodsFolder/services/foods/foods.component';
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
import { FoodDetailsComponent } from './foodsFolder/services/foods/food-details/food-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NutriScoreComponent } from './foodsFolder/services/foods/nutri-score/nutri-score.component';
import { TagsPipePipe } from './tags-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    SpinnerComponent,
    FoodDetailsComponent,
    NutriScoreComponent,
    TagsPipePipe,
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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
