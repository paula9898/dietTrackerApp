import { TestBed } from '@angular/core/testing';

import { WeightStateService } from './weight-state.service';

describe('WeightStateService', () => {
  let service: WeightStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeightStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
