import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSettings } from '../models/settings.model';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private httpClient: HttpClient) {}

  getSettings(): Observable<UserSettings> {
    return this.httpClient.get<UserSettings>(
      'http://localhost:8080/api/settings/'
    );
  }
}
