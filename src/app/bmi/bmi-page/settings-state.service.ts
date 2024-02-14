import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserSettings } from '../models/settings.model';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsStateService {
  settingsResponse$ = new BehaviorSubject<UserSettings>({
    user_id: null,
    height: null,
    age: 0,
    cookieAccepted: false,
    email: null,
  });
  error$ = new BehaviorSubject<any>(null);

  constructor(private settingService: SettingsService) {}

  getSettings(): void {
    this.settingService.getSettings().subscribe({
      next: (value) => {
        this.settingsResponse$.next(value);
      },
      error: (error) => {
        this.error$.next(error);
      },
    });
  }
}
