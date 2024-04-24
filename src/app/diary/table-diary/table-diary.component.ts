import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FoodStateService } from 'src/app/foods/services/food-state.service';

@Component({
  selector: 'app-table-diary',
  templateUrl: './table-diary.component.html',
  styleUrl: './table-diary.component.scss',
})
export class TableDiaryComponent implements OnInit {
  readonly foodsResponse$ = this.foodStateService.foodsResponse$;

  displayedColumns: any[] = [
    'Id',
    'Meal',
    'Date',
    'Food',
    'Weight',
    'Calories',
  ];

  data = [
    {
      id: 1,
      meal: 'breakfast',
      date: '',
      food: 'apple',
      weight: '120',
      calories: '',
    },
  ];
  foodsArray: any[] = [];
  selectedValue: string;

  constructor(private foodStateService: FoodStateService) {}

  // Today = '2022/02/28';
  date = new FormControl(new Date());

  ngOnInit(): void {
    this.foodStateService.getFoods();
    this.foodStateService.foodsResponse$.subscribe((response) => {
      this.foodsArray = response.data.map((food) => food.name);

      console.log(this.foodsArray);
    });
  }
}
