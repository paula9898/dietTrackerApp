import { Food } from './food.model';

export interface FoodResponse {
  data: Food[];
  length: number;
}
