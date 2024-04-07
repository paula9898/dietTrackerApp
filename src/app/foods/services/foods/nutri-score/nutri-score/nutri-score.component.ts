import { Component, Input } from '@angular/core';
import { NutriScore } from './models/nutri-score.model';

@Component({
  selector: 'app-nutri-score',
  templateUrl: './nutri-score.component.html',
  styleUrl: './nutri-score.component.scss',
})
export class NutriScoreComponent {
  @Input({ required: true }) nutriScore: NutriScore;

  constructor() {}
}
