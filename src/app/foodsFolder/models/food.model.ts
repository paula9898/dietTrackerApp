export interface Food extends Entry {
  caloriesPer100g?: number;
  weight: number;
  nutriScore?: NutriScore;
  tags?: string;
  mealType?: MealType;
  photo: string;
}

export interface Entry {
  id?: string;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type NutriScore = 'A' | 'B' | 'C' | 'D' | 'E';

export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'training';
