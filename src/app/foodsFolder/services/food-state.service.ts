import { Injectable } from '@angular/core';
import { FoodService } from './food.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { FoodResponse } from '../models/food-response.model';
import { FoodPayload } from '../models/food-payload.model';

@Injectable({
  providedIn: 'root',
})
export class FoodStateService {
  foodsResponse$ = new BehaviorSubject<FoodResponse>({ data: [], length: 0 }); //() inicjalna dana w nawiasie oklraglym that stores the most recent value emitted
  error$ = new BehaviorSubject<any>(null);

  constructor(private foodService: FoodService) {}

  getFoods(): void {
    this.foodService.getFoods().subscribe({
      next: (value) => {
        this.foodsResponse$.next(value); //next: Called when a new value is emitted. It updates the foodsResponse$ BehaviorSubject with the new value.
      },
      error: (error) => {
        this.error$.next(error);
      },
    });
  }

  addFood(food: FoodPayload): void {
    this.foodService.addFood(food).subscribe({
      next: () => {
        this.getFoods();
      },
      error: (error) => {
        this.error$.next(error);
      },
    });
  }

  deleteFood(id: number): void {
    this.foodService.deleteFood(id).subscribe({
      next: () => {
        this.getFoods();
      },
      error: (error) => {
        this.error$.next(error);
      },
    });
  }

  updateFood(id: number, food: FoodPayload): void {
    this.foodService.updateFood(id, food).subscribe({
      next: () => {
        this.getFoods();
      },
      error: (error) => {
        this.error$.next(error);
      },
    });
  }
}
