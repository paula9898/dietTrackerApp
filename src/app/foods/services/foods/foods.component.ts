import { Component, OnInit } from '@angular/core';
import { FoodStateService } from '../food-state.service';
import { FoodPayload } from '../../models/food-payload.model';
import { DialogService } from '../dialog.service';
import { Food } from '../../models/food.model';
import { TagsPipePipe } from 'src/app/tags-pipe.pipe';
import { DictsStateService } from 'src/app/shared/dicts/services/dicts-state.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.scss',
  providers: [TagsPipePipe],
})
export class FoodsComponent implements OnInit {
  foodsResponse$ = this.foodStateService.foodsResponse$; //to sa moje dane ktore sa uaktiualniane z kazdm request getfood
  foodsArray: any[] = [];
  tagsArray: any[] = [];
  events: Array<string> = [];
  tags$ = this.dictsStateService.tags$;

  constructor(
    private foodStateService: FoodStateService,
    private dialogService: DialogService,
    private dictsStateService: DictsStateService
  ) {}

  ngOnInit(): void {
    this.dictsStateService.getTags();
    this.foodStateService.getFoods();
    this.foodStateService.foodsResponse$.subscribe((response) => {
      // Extract the 'data' array from the response
      this.foodsArray = response.data;

      // this.tagsArray.forEach((food) => {
      //   console.log('Tags for', food.name, ':', food.tags);
      //   console.log('Tags type for', food.name, ':', typeof food.tags);
      // });

      console.log(this.foodsArray);
    });
    this.dictsStateService.tags$.subscribe((response) => {
      this.tagsArray = response;
      // console.log(this.tagsArray);
    });
  }
  // customCellTemplate(tags$) {
  //   console.log('Custom Cell Template Data:', tags$);
  //   return tags$.value;
  // }

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
  onRowClick(event): void {
    const details = event.data;
    console.log('Clicked Row Details:', details);
    this.dialogService.openFoodDetailsDialog(details);
  }
}
