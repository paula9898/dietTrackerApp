import { Weight } from './weight.model';

interface Bmi extends Weight {
  bmi: number;
}

export type BmiTable = Bmi[];
