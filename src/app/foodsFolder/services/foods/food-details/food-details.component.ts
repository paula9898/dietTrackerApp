import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FoodDetails } from 'src/app/foodsFolder/models/food-details.model';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.scss',
})
export class FoodDetailsComponent {
  foodDetails: FoodDetails;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.foodDetails = data.foodDetails;
  }
}
