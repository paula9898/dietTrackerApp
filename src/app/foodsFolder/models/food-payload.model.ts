import { NutriScore } from './food.model';

export interface FoodPayload {
  name: string;
  caloriesPer100g?: number;
  weight: number;
  nutriScore?: NutriScore;
  tags?: string;
  photo: string;
}
