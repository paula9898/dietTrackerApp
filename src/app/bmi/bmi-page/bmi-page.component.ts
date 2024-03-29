import { Component, OnInit } from '@angular/core';
import { WeightService } from '../weight.service';
import { WeightStateService } from '../weight-state.service';
import { DxDataGridModule } from 'devextreme-angular';
import { SettingsService } from './settings.service';
import { SettingsStateService } from './settings-state.service';
import { UserSettings } from '../models/settings.model';
import { Observable, filter, map, of, switchMap } from 'rxjs';
import { BmiTable } from '../models/bmi.model';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './bmi-page.component.html',
  styleUrl: './bmi-page.component.scss',
})
export class BmiPageComponent implements OnInit {
  weightsResponse$ = this.weightsStateService.weightResponse$;
  bmiTable$ = this.settingsStateService.settingsResponse$.pipe(
    map((v) => v.height),
    switchMap((height) =>
      this.weightsStateService.weightResponse$.pipe(
        map((v) =>
          v.data.map((item) => ({
            ...item,
            bmi: item.weight / Math.pow(height / 100, 2),
          }))
        )
      )
    )
  );
  routerId$ = of(2);
  todo$ = this.routerId$.pipe(
    switchMap((id) => this.httpClient.get('https://dummyjson.com/todos/' + id))
  );
  // bmiTable$ = this.weightsStateService.weightResponse$.pipe(
  //   map((response) =>
  //     response.data.map((v) => ({
  //       ...v,
  //       bmi: 10,
  //     }))
  //   )
  // );
  // dla kazdego obiektu z tablicy zwroc ten obiekt i to sa te trzy kropki
  // d
  height: number;

  // settingsResponse$
  ngOnInit(): void {
    this.weightsStateService.getweights();
    this.settingsStateService.getSettings();
    // this.weightsStateService.weightResponse$.subscribe((response) => {
    //   this.weightsArray = response.data;
    // this.settingsStateService.settingsResponse$.subscribe((response) => {
    //   this.height = response.height;
    //   console.log(this.height);
    //   console.log(this.settingsHeight$);
    //   });

    //   console.log(this.weightsArray);
    // });
  }

  constructor(
    private weightsStateService: WeightStateService,
    private settingsStateService: SettingsStateService,
    private httpClient: HttpClient
  ) {}
}
