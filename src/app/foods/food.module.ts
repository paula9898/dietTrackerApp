import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodRoutingModule } from './services/foods/food-routing.module';
import { DictsStateService } from '../shared/dicts/services/dicts-state.service';

@NgModule({
  imports: [CommonModule, FoodRoutingModule],
  providers: [DictsStateService],
})
export class FoodModule {}
