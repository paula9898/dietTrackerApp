import { NutriScore } from './food.model';

export interface FoodDetails {
  name: string;
  caloriesPer100g?: number;
  weight: number;
  nutriScore?: NutriScore;
  tags?: string;
  photo: string;
  tag: number;
}
