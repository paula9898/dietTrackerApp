import { TestBed } from '@angular/core/testing';

import { LoaderService } from './spinner.service';

describe('SpinnerService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
