import { Component, OnInit } from '@angular/core';
import { WeightService } from '../weight.service';
import { WeightStateService } from '../weight-state.service';

@Component({
  templateUrl: './bmi-page.component.html',
  styleUrl: './bmi-page.component.scss',
})
export class BmiPageComponent implements OnInit {
  weightsResponse$ = this.weightsStateService.weightResponse$;
  weightsArray: any[] = [];
  ngOnInit(): void {
    this.weightsStateService.getweights();
    this.weightsStateService.weightResponse$.subscribe((response) => {
      this.weightsArray = response.data;

      console.log(this.weightsArray);
    });
  }

  constructor(private weightsStateService: WeightStateService) {}
}
