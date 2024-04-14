import { Component, OnInit } from '@angular/core';
import { FoodStateService } from 'src/app/foods/services/food-state.service';

@Component({
  selector: 'app-diary-page',
  templateUrl: './diary-page.component.html',
  styleUrl: './diary-page.component.scss',
})
export class DiaryPageComponent implements OnInit {
  constructor(private foodStateService: FoodStateService) {}

  ngOnInit(): void {}
}
