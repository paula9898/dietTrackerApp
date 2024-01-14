import { Component, OnInit } from '@angular/core';
import { FoodStateService } from '../food-state.service';
import { FoodPayload } from '../../models/food-payload.model';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.scss',
})
export class FoodsComponent implements OnInit {
  foodsResponse$ = this.foodStateService.foodsResponse$; //to sa moje dane ktore sa uaktiualniane z kazdm request getfood
  foodsArray: any[] = [];
  events: Array<string> = [];

  constructor(private foodStateService: FoodStateService) {}

  ngOnInit(): void {
    this.foodStateService.getFoods();
    this.foodStateService.foodsResponse$.subscribe((response) => {
      // Extract the 'data' array from the response
      this.foodsArray = response.data;
    });
    // this.addFood();
  }

  logEvent(eventName) {
    this.events.unshift(eventName);
  }

  clearEvents() {
    this.events = [];
  }

  // addFood(): void {
  //   const foodPayload: FoodPayload = {
  //     name: 'A',
  //     caloriesPer100g: 100,
  //     weight: 100,
  //     nutriScore: 'E',
  //     tags: '1, 2',
  //     photo: 'https://www.google.com/image',
  //   };

  //   this.foodStateService.addFood(foodPayload);
  // }

  onRowInserted(event): void {
    const newFood = event.data;
    this.foodStateService.addFood(newFood);
    this.foodStateService.getFoods();
  }

  onRowRemoved(event): void {
    const deletedFood = event.data.id;
    this.foodStateService.deleteFood(deletedFood);
    this.foodStateService.getFoods();
  }
  onRowUpdated(event): void {
    const updatedFoodId = event.data.id;
    const updatedFood = event.data;
    this.foodStateService.updateFood(updatedFoodId, updatedFood);
    this.foodStateService.getFoods();
  }
}
