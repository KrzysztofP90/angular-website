import { TestBed } from '@angular/core/testing';

import { FirebaseDaoService } from './firebase-dao.service';

describe('FirebaseDaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseDaoService = TestBed.get(FirebaseDaoService);
    expect(service).toBeTruthy();
  });
});
