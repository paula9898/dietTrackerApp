import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weight } from './models/weight.model';
import { WeightPayLoad } from './models/weight-payload';
import { WeightResponse } from './models/weight-response';

@Injectable({
  providedIn: 'root',
})
export class WeightService {
  constructor(private httpClient: HttpClient) {}

  getWeights(): Observable<WeightResponse> {
    return this.httpClient.get<WeightResponse>(
      'http://localhost:8080/api/weights/'
    );
  }

  addWeight(weight: WeightPayLoad): Observable<WeightPayLoad> {
    return this.httpClient.post(
      'http://localhost:8080/api/weights/',
      weight
    ) as Observable<WeightPayLoad>;
  }

  deleteWeight(id: number): Observable<any> {
    return this.httpClient.delete(`'http://localhost:8080/api/weights/'${id}`);
  }

  updateWeight(id: number, weight: WeightPayLoad): Observable<any> {
    return this.httpClient.put(
      `'http://localhost:8080/api/weights/'${id}`,
      weight
    );
  }
}
