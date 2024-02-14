import { Component, OnInit } from '@angular/core';
import { WeightService } from '../weight.service';
import { WeightStateService } from '../weight-state.service';
import { DxDataGridModule } from 'devextreme-angular';
import { SettingsService } from './settings.service';
import { SettingsStateService } from './settings-state.service';
import { UserSettings } from '../models/settings.model';

@Component({
  templateUrl: './bmi-page.component.html',
  styleUrl: './bmi-page.component.scss',
})
export class BmiPageComponent implements OnInit {
  weightsResponse$ = this.weightsStateService.weightResponse$;
  settingsResponse$ =
    this.settingsStateService.settingsResponse$.getValue().height;
  weightsArray: any[] = [];
  height: number;

  // settingsResponse$
  ngOnInit(): void {
    this.weightsStateService.getweights();
    this.settingsStateService.getSettings();
    this.weightsStateService.weightResponse$.subscribe((response) => {
      this.weightsArray = response.data;
      this.settingsStateService.settingsResponse$.subscribe((response) => {
        this.height = response.height;
        console.log(this.height);
      });

      console.log(this.weightsArray);

      console.log(this.settingsResponse$);
    });
  }

  constructor(
    private weightsStateService: WeightStateService,
    private settingsStateService: SettingsStateService
  ) {}
}
