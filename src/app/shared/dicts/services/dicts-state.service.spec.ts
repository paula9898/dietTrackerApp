import { TestBed } from '@angular/core/testing';

import { DictsStateService } from './dicts-state.service';

describe('DictsStateService', () => {
  let service: DictsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
