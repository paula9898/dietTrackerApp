import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TagResponse } from '../models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class DictService {
  constructor(private httpClient: HttpClient) {}

  getTagsDicts(): Observable<TagResponse> {
    return this.httpClient.get<TagResponse>(
      'http://localhost:8080/api/dicts/tags'
    );
  }
}
