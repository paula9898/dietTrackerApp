import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FoodDetailsComponent } from './foods/food-details/food-details.component';
import { Food } from '../models/food.model';
import { FoodDetails } from '../models/food-details.model';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openFoodDetailsDialog(foodDetails: FoodDetails): void {
    this.dialog.open(FoodDetailsComponent, {
      width: '400px',
      data: { foodDetails },
    });
  }
}
