import { Component } from '@angular/core';

@Component({
  selector: 'app-table-diary',
  templateUrl: './table-diary.component.html',
  styleUrl: './table-diary.component.scss',
})
export class TableDiaryComponent {
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
}
