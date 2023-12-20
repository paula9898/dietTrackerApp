import { Injectable } from '@angular/core';
import { FoodService } from './food.service';
import { BehaviorSubject } from 'rxjs';
import { FoodResponse } from '../models/food-response.model';

@Injectable({
  providedIn: 'root',
})
export class FoodStateService {
  foodsResponse$ = new BehaviorSubject<FoodResponse>({ data: [], length: 0 }); //() inicjalna dana w nawiasie oklraglym
  error$ = new BehaviorSubject<any>(null);

  constructor(private foodService: FoodService) {}

  getFoods(): void {
    this.foodService.getFoods().subscribe({
      next: (value) => {
        this.foodsResponse$.next(value);
      },
      error: (error) => {
        this.error$.next(error);
      },
    });
  }
}
