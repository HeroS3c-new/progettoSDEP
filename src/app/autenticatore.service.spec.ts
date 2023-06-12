import { TestBed } from '@angular/core/testing';
import { AutenticatoreService } from './autenticatore.service';

describe('AutenticatoreService', () => {
  let service: AutenticatoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticatoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
