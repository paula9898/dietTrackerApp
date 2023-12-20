import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodResponse } from '../models/food-response.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private httpClient: HttpClient) {}

  getFoods(): Observable<FoodResponse> {
    return this.httpClient.get<FoodResponse>(
      'http://localhost:8080/api/foods/'
    );
  }
}
