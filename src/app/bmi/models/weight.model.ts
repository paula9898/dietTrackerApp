export interface Weight {
  id?: string;
  date: string;
  weight: number;
}

export interface WeightResponse {
  data: Weight[];
  length: number;
}
