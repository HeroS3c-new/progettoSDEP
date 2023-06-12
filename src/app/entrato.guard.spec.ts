import { TestBed } from '@angular/core/testing';

import { EntratoGuard } from './entrato.guard';

describe('EntratoGuard', () => {
  let guard: EntratoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EntratoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
