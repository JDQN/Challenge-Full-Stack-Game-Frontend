import { TestBed } from '@angular/core/testing';

import { EjemploGuard } from './ejemplo.guard';

describe('EjemploGuard', () => {
  let guard: EjemploGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EjemploGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
