import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodResponse } from '../models/food-response.model';
import { FoodPayload } from '../models/food-payload.model';
import { API_URL } from 'src/app/apiUrl-const';

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

  addFood(food: FoodPayload): Observable<FoodPayload> {
    return this.httpClient.post(
      `${API_URL}foods`,
      food
    ) as Observable<FoodPayload>;
  }

  deleteFood(id: number): Observable<FoodPayload> {
    return this.httpClient.delete(
      `${API_URL}foods/${id}`
    ) as Observable<FoodPayload>;
  }

  updateFood(id: number, food: FoodPayload): Observable<any> {
    return this.httpClient.put(`${API_URL}foods/${id}`, food);
  }
}
