import { TestBed } from '@angular/core/testing';

import { LoadingDataService } from './loading-data.service';

describe('LoadingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingDataService = TestBed.get(LoadingDataService);
    expect(service).toBeTruthy();
  });
});
