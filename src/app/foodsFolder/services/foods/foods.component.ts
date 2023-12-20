import { Component, OnInit } from '@angular/core';
import { FoodStateService } from '../food-state.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.scss',
})
export class FoodsComponent implements OnInit {
  foodsResponse$ = this.foodStateService.foodsResponse$; //to sa moje dane ktore sa uaktiualniane z kazdm request getfood
  foodsArray: any[] = [];

  constructor(private foodStateService: FoodStateService) {}

  ngOnInit(): void {
    this.foodStateService.getFoods();
    this.foodStateService.foodsResponse$.subscribe((response) => {
      // Extract the 'data' array from the response
      this.foodsArray = response.data;
    });
  }
}
