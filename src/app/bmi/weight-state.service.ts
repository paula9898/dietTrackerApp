import { Injectable } from '@angular/core';
import { WeightService } from './weight.service';
import { BehaviorSubject } from 'rxjs';
import { WeightResponse } from './models/weight.model';

@Injectable({
  providedIn: 'root',
})
export class WeightStateService {
  weightResponse$ = new BehaviorSubject<WeightResponse>({
    data: [],
    length: 0,
  });
  error$ = new BehaviorSubject<any>(null);

  constructor(private weightService: WeightService) {}

  getweights(): void {
    this.weightService.getweights().subscribe({
      next: (value) => {
        this.weightResponse$.next(value);
      },
      error: (error) => {
        this.error$.next(error);
      },
    });
  }
}
