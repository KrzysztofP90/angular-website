import { TestBed } from '@angular/core/testing';

import { PrepareDataHelperService } from './prepare-data-helper.service';

describe('PrepareDataHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrepareDataHelperService = TestBed.get(PrepareDataHelperService);
    expect(service).toBeTruthy();
  });
});
