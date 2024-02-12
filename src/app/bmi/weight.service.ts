import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeightResponse } from './models/weight.model';

@Injectable({
  providedIn: 'root',
})
export class WeightService {
  constructor(private httpClient: HttpClient) {}

  getweights(): Observable<WeightResponse> {
    return this.httpClient.get<WeightResponse>(
      'http://localhost:8080/api/weights/'
    );
  }
}
