import { TestBed } from '@angular/core/testing';

import { LoadingFakeDataService } from './loading-data.service';

describe('LoadingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingFakeDataService = TestBed.get(LoadingFakeDataService);
    expect(service).toBeTruthy();
  });
});
