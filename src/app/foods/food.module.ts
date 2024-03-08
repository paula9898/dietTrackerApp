import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodRoutingModule } from './services/foods/food-routing.module';
import { DictsStateService } from '../shared/dicts/services/dicts-state.service';
import { NutriScoreComponent } from './services/foods/nutri-score/nutri-score/nutri-score.component';

@NgModule({
  imports: [CommonModule, FoodRoutingModule],
  providers: [DictsStateService],
  declarations: [],
})
export class FoodModule {}
